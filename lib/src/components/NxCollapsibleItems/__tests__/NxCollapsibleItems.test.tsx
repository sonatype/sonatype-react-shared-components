/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { screen } from '@testing-library/react';

import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';
import NxCollapsibleItems, { Props } from '../NxCollapsibleItems';
import { NxTreeView, NxTreeViewChild } from '../../../index';

import NxIconDropdown from '../../NxIconDropdown/NxIconDropdown';

describe('NxCollapsibleItems', function() {
  const minimalProps = {
        isOpen: false,
        triggerContent: <span data-testid="trigger-content">Trigger</span>
      },
      quickRender = rtlRender(NxCollapsibleItems, minimalProps),
      renderEl = rtlRenderElement(NxCollapsibleItems, minimalProps);

  it('is aliased as NxTreeView', function() {
    expect(NxCollapsibleItems).toBe(NxTreeView);
  });

  it('aliased its Child subcomponent as NxTreeViewChild', function() {
    expect(NxCollapsibleItems.Child).toBe(NxTreeViewChild);
  });

  it('renders a top-level element with a group role', function() {
    const view = quickRender();

    expect(view.getByRole('group')).toBe(view.container.firstChild);
  });

  it('sets the specified id', function() {
    expect(renderEl({ id: 'foo' })).toHaveAttribute('id', 'foo');
  });

  it('sets the specified classnames', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  describe('trigger', function() {
    const renderAndGetTrigger = (props?: Partial<Props>) => quickRender(props).getByRole('button');

    it('is a button', function() {
      expect(renderAndGetTrigger()).toBeInTheDocument();
    });

    it('has type="button"', function() {
      expect(renderAndGetTrigger()).toHaveAttribute('type', 'button');
    });

    it('references the treeview children items using aria-controls', async function() {
      const view = quickRender({ children: <span data-testid="child" /> }),
          trigger = view.getByRole('button'),
          childrenElId = trigger.getAttribute('aria-controls')!;

      expect(childrenElId).toBeDefined();

      const childrenEl = document.getElementById(childrenElId)!;
      expect(view.container).toContainElement(childrenEl);
    });

    it('sets aria-expanded iff both the isOpen prop is true and there are children', function() {
      expect(renderAndGetTrigger()).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ isOpen: true })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ children: <span>child</span> })).toHaveAttribute('aria-expanded', 'false');

      expect(renderAndGetTrigger({
        children: <span>child</span>,
        isOpen: true
      })).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets disabled if the disabled prop is set to true or there are no children', function() {
      expect(renderAndGetTrigger()).toBeDisabled();
      expect(renderAndGetTrigger({ disabled: true })).toBeDisabled();
      expect(renderAndGetTrigger({ disabled: false })).toBeDisabled();
      expect(renderAndGetTrigger({ disabled: null })).toBeDisabled();
      expect(renderAndGetTrigger({ disabled: undefined })).toBeDisabled();

      expect(renderAndGetTrigger({ children: <span>child</span>, disabled: true })).toBeDisabled();

      expect(renderAndGetTrigger({ children: <span>child</span> })).toBeEnabled();
      expect(renderAndGetTrigger({
        children: <span>child</span>,
        disabled: false
      })).toBeEnabled();
    });

    it('fires the component\'s onToggleCollapse when clicked if there are children', async function() {
      const user = userEvent.setup(),
          onToggleCollapseNoChildren = jest.fn(),
          onToggleCollapseChildren = jest.fn(),
          noChildrenTrigger = renderAndGetTrigger({
            onToggleCollapse: onToggleCollapseNoChildren
          }),
          childrenTrigger = renderAndGetTrigger({
            onToggleCollapse: onToggleCollapseChildren,
            children: <span />
          });

      expect(onToggleCollapseNoChildren).not.toHaveBeenCalled();
      expect(onToggleCollapseChildren).not.toHaveBeenCalled();

      await user.click(noChildrenTrigger);
      expect(onToggleCollapseNoChildren).not.toHaveBeenCalled();

      await user.click(childrenTrigger);
      expect(onToggleCollapseChildren).toHaveBeenCalled();
    });

    it('renders the triggerContent', function() {
      const trigger = renderAndGetTrigger(),
          triggerContent = screen.getByTestId('trigger-content');

      expect(trigger).toContainElement(triggerContent);
    });

    it('sets a tooltip on the trigger as specified by the triggerTooltip object when children exist', async function() {
      const user = userEvent.setup(),
          trigger = renderAndGetTrigger({
            triggerTooltip: { title: 'tip', className: 'foo' },
            children: <span />
          });

      await runTimers();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      await user.hover(trigger);
      await runTimers();

      const tooltip = screen.getByRole('tooltip');

      expect(tooltip).toHaveTextContent('tip');
      expect(tooltip.querySelector('.foo')).toBeInTheDocument();
    });

    it('sets a tooltip on the trigger as specified by the triggerTooltip string when children exist', async function() {
      const user = userEvent.setup(),
          trigger = renderAndGetTrigger({
            triggerTooltip: 'tip',
            children: <span />
          });

      await runTimers();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      await user.hover(trigger);
      await runTimers();

      const tooltip = screen.getByRole('tooltip');

      expect(tooltip).toHaveTextContent('tip');
    });
  });

  it('renders the children in an element with role=list', function() {
    const view = quickRender({ children: <span data-testid="child">foo</span>, isOpen: true }),
        childrenEl = view.getByRole('list'),
        childEl = view.getByTestId('child');

    expect(childrenEl).toBeInTheDocument();
    expect(childrenEl).toContainElement(childEl);
  });

  it('sets specified role on the element containing the children', function() {
    const view = quickRender({ role: 'menu', children: <span data-testid="child">foo</span>, isOpen: true }),
        childrenEl = view.getByRole('menu'),
        childEl = view.getByTestId('child');

    expect(childrenEl).toBeInTheDocument();
    expect(view.queryByRole('list')).not.toBeInTheDocument();
    expect(childrenEl).toContainElement(childEl);
  });

  describe('actionContent', function() {
    it('renders specified actionContent and does not trigger onToggleCollapse when actionContent is clicked',
        async () => {
          const user = userEvent.setup(),
              onToggleCollapse = jest.fn(),
              view = quickRender({
                actionContent: <NxIconDropdown title="action" isOpen={false} />,
                onToggleCollapse
              });

          // wait for title to initialize
          await runTimers();
          const actionToggle = view.getByRole('button', { name: 'action' });

          expect(actionToggle).toBeInTheDocument();
          expect(onToggleCollapse).not.toHaveBeenCalled();

          await user.click(actionToggle);
          expect(onToggleCollapse).not.toHaveBeenCalled();
        }
    );
  });

  describe('NxCollapsibleItems.Child', function() {
    describe('when children is a string', function() {
      const minimalProps = { children: 'foo' },
          quickRender = rtlRender(NxCollapsibleItems.Child, minimalProps),
          renderEl = rtlRenderElement(NxCollapsibleItems.Child, minimalProps);

      it('renders a top-level element with the listitem role', function() {
        const view = quickRender();

        expect(view.getByRole('listitem')).toBe(view.container.firstChild);
      });

      it('renders a top-level element with the specified role', function() {
        const view = quickRender({ role: 'menuitem' });

        expect(view.queryByRole('listitem')).not.toBeInTheDocument();
        expect(view.getByRole('menuitem')).toBe(view.container.firstChild);
      });

      it('sets the specified classnames', function() {
        const el = renderEl({ className: 'foo' }),
            defaultEl = renderEl()!;

        expect(el).toHaveClass('foo');

        for (const cls of Array.from(defaultEl.classList)) {
          expect(el).toHaveClass(cls);
        }
      });

      it('passes through additional props', function() {
        const el = renderEl({ id: 'test-id', lang: 'en' });

        expect(el).toHaveAttribute('id', 'test-id');
        expect(el).toHaveAttribute('lang', 'en');
      });

      it('renders the child text within the element', function() {
        expect(renderEl()).toHaveTextContent('foo');
      });

      it('forwards a ref to the element', function() {
        const ref = React.createRef<HTMLDivElement>(),
            el = renderEl({ ref });

        expect(ref.current).toBe(el);
      });
    });

    describe('when children is an element', function() {
      const minimalProps = {
            children: <div id="test-id" className="bar" lang="en">foo</div>
          },
          quickRender = rtlRender(NxCollapsibleItems.Child, minimalProps),
          renderEl = rtlRenderElement(NxCollapsibleItems.Child, minimalProps);

      it('renders an element like the children', function() {
        const el = renderEl()!;

        expect(el.tagName).toBe('DIV');
        expect(el).toHaveClass('bar');
        expect(el).toHaveTextContent('foo');
      });

      it('keeps additional props', function() {
        const el = renderEl();

        expect(el).toHaveAttribute('id', 'test-id');
        expect(el).toHaveAttribute('lang', 'en');
      });

      it('adds the listitem role', function() {
        const el = renderEl();
        expect(el).toHaveAttribute('role', 'listitem');
      });

      it('adds the specified role if there is one', function() {
        const view = quickRender({ role: 'menuitem' });

        expect(view.queryByRole('listitem')).not.toBeInTheDocument();
        expect(view.getByRole('menuitem')).toBe(view.container.firstChild);
      });

      it('allows the child element to keep its explicit role if specified', function() {
        const view = quickRender({ children: <input role="menuitemcheckbox" type="checkbox" /> });

        expect(view.queryByRole('listitem')).not.toBeInTheDocument();
        expect(view.getByRole('menuitemcheckbox')).toBe(view.container.firstChild);
      });

      it('allows the child element to keep its default role if it is set to the empty string', function() {
        const view = quickRender({ children: <input role="" type="checkbox" /> });

        expect(view.queryByRole('listitem')).not.toBeInTheDocument();
        expect(view.getByRole('checkbox')).toBe(view.container.firstChild);
      });

      it('forwards a ref to the element', function() {
        const ref = React.createRef<HTMLDivElement>(),
            el = renderEl({ ref });

        expect(ref.current).toBe(el);
      });
    });
  });
});
