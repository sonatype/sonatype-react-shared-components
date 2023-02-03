
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import { within } from '@testing-library/react';

import NxTree from '../NxTree';
import { ItemProps as Props, TreeKeyNavContextType } from '../types';
import TreeKeyNavContext from '../TreeKeyNavContext';

const keyNavContext: TreeKeyNavContextType = {
  focusedChild: null,
  focusParent: () => {},
  focusPrev: () => {},
  focusNext: () => {},
  focusFirst: () => {},
  focusLast: () => {},
  navigationDirection: 'down',
  setNavigationDirection: () => {},
  getTreeRoot: () => null
};

function getTreeItem(extraProps?: Props) {
  return (
    <TreeKeyNavContext.Provider value={keyNavContext}>
      <NxTree.Item { ...extraProps } />
    </TreeKeyNavContext.Provider>
  );
}

describe('NxTreeItem', function() {
  const minimalProps = {
        children: (
          <NxTree.ItemLabel>
            <span>foo</span>
          </NxTree.ItemLabel>
        )
      },
      quickRender = rtlRender<Props>(getTreeItem, minimalProps),
      renderEl = rtlRenderElement<Props>(getTreeItem, minimalProps);

  it('renders an <li> with role=treeitem as the top level element', function() {
    const view = quickRender();

    expect(view.getByRole('treeitem')).toBe(view.container.firstElementChild);
    expect(view.container.firstElementChild!.tagName).toBe('LI');
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the top-level element', function() {
    const el = renderEl({ id: 'foo', lang: 'en-US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('renders children correctly', function() {
    expect(quickRender({ children: <div data-testid="foo" /> }).getByTestId('foo')).toBeInTheDocument();
  });

  it('adds the id of the child itemlabel to the aria-labelledby prop', function() {
    const el = renderEl()!,
        elWithLabelledBy = renderEl({ 'aria-labelledby': 'foo' })!,
        // the svg tree lines are the first direct children of NxTree.Item
        labelId = el.lastElementChild!.getAttribute('id'),
        labelId2 = elWithLabelledBy.lastElementChild!.getAttribute('id');

    expect(el).toHaveAttribute('aria-labelledby', labelId);
    expect(elWithLabelledBy).toHaveAttribute('aria-labelledby', `foo ${labelId2}`);
  });

  describe('when not collapsible', function() {
    it('sets aria-expanded to true', function() {
      expect(renderEl({ collapsible: false })).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('when collapsible', function() {
    const complexChildren = (
      <>
        <NxTree.ItemLabel>
          <span>foo</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <span>bar</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </>
    );

    const collapsibleProps = {
      collapsible: true,
      isOpen: false,
      onToggleCollapse: () => {},
      children: complexChildren
    };

    const getCollapsibleEl = (extraProps?: Partial<Props>) => renderEl({ ...collapsibleProps, ...extraProps })!;

    it('sets aria-expanded to false when isOpen is false', function() {
      expect(getCollapsibleEl()).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to true when isOpen is true', function() {
      expect(getCollapsibleEl({ isOpen: true })).toHaveAttribute('aria-expanded', 'true');
    });

    it('renders an icon as a child', function() {
      const el = getCollapsibleEl()!;
      expect(within(el).getByRole('img', { hidden: true })).toBeInTheDocument();
    });

    it('calls toggleCollapse when the icon is clicked', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          el = getCollapsibleEl({ onToggleCollapse })!,
          // can't select the img, since onToggleCollapse is assigned to the <rect> element
          icon = el.querySelector('.nx-tree__collapse-click');

      expect(onToggleCollapse).not.toHaveBeenCalled();
      await user.click(icon!);

      expect(onToggleCollapse).toHaveBeenCalled();
    });

    it('calls toggleCollapse when closed and right arrow is pressed', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          el = getCollapsibleEl({ onToggleCollapse });

      // make sure NxTree.Item is closed before user interaction
      expect(el).toHaveAttribute('aria-expanded', 'false');
      expect(onToggleCollapse).not.toHaveBeenCalled();

      el.focus();
      await user.keyboard('[ArrowRight]');
      expect(onToggleCollapse).toHaveBeenCalled();
    });

    it('calls toggleCollapse when open and left arrow is pressed', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          el = getCollapsibleEl({ onToggleCollapse, isOpen: true });

      // make sure NxTree.Item is open before user interaction
      expect(el).toHaveAttribute('aria-expanded', 'true');
      expect(onToggleCollapse).not.toHaveBeenCalled();

      el.focus();
      await user.keyboard('[ArrowLeft]');
      expect(onToggleCollapse).toHaveBeenCalled();
    });
  });

  it('calls onActivate when Enter is pressed while the element is focused', async function() {
    const interactiveChildren = (
      <NxTree.ItemLabel>
        <a href="#" data-testid= "link">Click</a>
      </NxTree.ItemLabel>
    );

    const user = userEvent.setup(),
        onActivate = jest.fn(),
        el = renderEl({ onActivate, children: interactiveChildren })!;

    expect(onActivate).not.toHaveBeenCalled();
    el.focus();
    await user.keyboard('[Enter]');

    expect(onActivate).toHaveBeenCalled();
  });
});

