/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import { act, within } from '@testing-library/react';

import NxTree from '../../NxTree';
import { StatefulItemProps as Props, TreeKeyNavContextType } from '../../types';
import TreeKeyNavContext from '../../TreeKeyNavContext';

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

function getStatefulTreeItem(extraProps?: Props) {
  return (
    <TreeKeyNavContext.Provider value={keyNavContext}>
      <NxTree.StatefulItem { ...extraProps } />
    </TreeKeyNavContext.Provider>
  );
}

describe('NxTreeStatefulItem', function() {
  const minimalProps: Props = {
        children: (
          <NxTree.ItemLabel>
            <span>foo</span>
          </NxTree.ItemLabel>
        )
      },
      quickRender = rtlRender(getStatefulTreeItem, minimalProps),
      renderEl = rtlRenderElement(getStatefulTreeItem, minimalProps);

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
        // the svg tree lines are the first direct children of NxTree.StatefulItem
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
          <NxTree.StatefulItem>
            <NxTree.ItemLabel>
              <span>bar</span>
            </NxTree.ItemLabel>
          </NxTree.StatefulItem>
        </NxTree>
      </>
    );

    const collapsibleProps = {
      collapsible: true,
      children: complexChildren
    };

    const getCollapsibleEl = (extraProps?: Partial<Props>) => renderEl({ ...collapsibleProps, ...extraProps })!;

    it('sets aria-expanded to true when defaultOpen is true or unspecified', function() {
      expect(getCollapsibleEl()).toHaveAttribute('aria-expanded', 'true');
      expect(getCollapsibleEl({ defaultOpen: null })).toHaveAttribute('aria-expanded', 'true');
      expect(getCollapsibleEl({ defaultOpen: true })).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets aria-expanded to false when defaultOpen is false', function() {
      expect(getCollapsibleEl({ defaultOpen: false })).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders an icon as a child', function() {
      const el = getCollapsibleEl()!;
      expect(within(el).getByRole('img', { hidden: true })).toBeInTheDocument();
    });

    it('toggles the subtree when the icon is clicked', async function() {
      const user = userEvent.setup(),
          el = getCollapsibleEl({ defaultOpen: false })!,
          // can't select the img, since onToggleCollapse is assigned to the <rect> element
          icon = el.querySelector('.nx-tree__collapse-click')!;

      expect(el).toHaveAttribute('aria-expanded', 'false');

      await user.click(icon);
      expect(el).toHaveAttribute('aria-expanded', 'true');

      await user.click(icon);
      expect(el).toHaveAttribute('aria-expanded', 'false');

    });

    it('opens the closed subtree and right arrow is pressed', async function() {
      const user = userEvent.setup(),
          el = getCollapsibleEl({ defaultOpen: false });

      // make sure NxTree.StatefulItem is closed before user interaction
      expect(el).toHaveAttribute('aria-expanded', 'false');

      await act(() => { el.focus(); });
      await user.keyboard('[ArrowRight]');
      expect(el).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes an open subtree and left arrow is pressed', async function() {
      const user = userEvent.setup(),
          el = getCollapsibleEl();

      // make sure NxTree.StatefulItem is open before user interaction
      expect(el).toHaveAttribute('aria-expanded', 'true');

      await act(() => { el.focus(); });
      await user.keyboard('[ArrowLeft]');
      expect(el).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

