/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { createEvent, fireEvent } from '@testing-library/react';

import NxFilterDropdown, { Props } from '../NxFilterDropdown';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

type RenderProps = Props<number> & RefAttributes<HTMLDivElement>;

describe('NxFilterDropdown', function() {
  const minimalProps: Props<number> = {
        options: [],
        isOpen: false,
        onToggleCollapse: () => {},
        selectedIds: new Set(),
        onChange: () => {}
      },
      // some options used in various tests but not in the minimalProps
      options = [
        { id: 1, displayName: 'One' },
        { id: 2, displayName: 'Two' },
        { id: 3, displayName: 'Three' }
      ],
      quickRender = rtlRender<RenderProps>(NxFilterDropdown, minimalProps),
      renderEl = rtlRenderElement<RenderProps>(NxFilterDropdown, minimalProps);

  it('correctly renders the menu based on isOpen prop', function() {
    const { container, rerender } = quickRender({ isOpen: true });
    // Currently, the dropdown menu does not have the proper aria role set.
    // This will be addressed in this ticket:
    // https://issues.sonatype.org/browse/RSC-989
    const menu = container.querySelector('.nx-dropdown-menu');

    expect(menu).toBeInTheDocument();
    rerender(<NxFilterDropdown {...minimalProps} isOpen={false} />);
    expect(menu).not.toBeInTheDocument();
  });

  it('sets the provided className', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('renders provided attributes', function() {
    const component = renderEl({ id: 'some-id', title: 'title-prop' });
    expect(component).toHaveAttribute('id', 'some-id');
    expect(component).toHaveAttribute('title', 'title-prop');
  });

  describe('toggle label', function() {
    const quickRender = rtlRender<RenderProps>(NxFilterDropdown, { ...minimalProps, options });

    describe('when no options are selected', function() {
      it('says "Filter" by default', function() {
        const view = quickRender(),
            toggle = view.getByRole('button');

        expect(toggle).toHaveTextContent('Filter');
        expect(toggle).toHaveAccessibleName('Filter');
      });

      it('contains the value of the placeholder prop if specified', function() {
        const view = quickRender({ placeholder: 'foo' }),
            toggle = view.getByRole('button');

        expect(toggle).toHaveTextContent('foo');
        expect(toggle).toHaveAccessibleName('foo');
        expect(toggle).not.toHaveTextContent('Filter');
      });
    });

    describe('when options are selected', function() {
      it('displays "x of y" where x is the number of selected options and y is the total', function() {
        const view = quickRender({ placeholder: 'foo', selectedIds: new Set([1, 3]) }),
            toggle = view.getByRole('button');

        expect(toggle).toHaveTextContent('2 of 3');
        expect(toggle).toHaveAccessibleName('2 of 3');
        expect(toggle).not.toHaveTextContent('foo');
        expect(toggle).not.toHaveTextContent('Filter');
      });
    });
  });

  it('renders a checkbox in the dropdown menu for each option', async function() {
    const view = quickRender({ options, isOpen: true }),
        menuChildren = view.getAllByRole('checkbox');

    expect(menuChildren[0]).toHaveAccessibleName('One');
    expect(menuChildren[1]).toHaveAccessibleName('Two');
    expect(menuChildren[2]).toHaveAccessibleName('Three');
  });

  describe('reset button', function() {
    const quickRender = rtlRender<RenderProps>(NxFilterDropdown, { ...minimalProps, options, isOpen: true });

    it('is only visible when the dropdown is open', function() {
      const closedView = quickRender({ isOpen: false }),
          openView = quickRender();

      expect(closedView.queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
      expect(openView.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
    });

    it('is not visible iff showReset is false', function() {
      expect(quickRender({ showReset: null }).getByRole('button', { name: 'Reset' })).toBeInTheDocument();
      expect(quickRender({ showReset: true }).getByRole('button', { name: 'Reset' })).toBeInTheDocument();
      expect(quickRender({ showReset: undefined }).getByRole('button', { name: 'Reset' })).toBeInTheDocument();
      expect(quickRender({ showReset: false }).queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
    });

    it('is enabled iff options are selected', function() {
      expect(quickRender().getByRole('button', { name: 'Reset' })).toBeDisabled();
      expect(quickRender({ selectedIds: new Set([3]) }).getByRole('button', { name: 'Reset' })).toBeEnabled();
    });

    it('fires onChange with an empty set and no second parameter when clicked', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ selectedIds: new Set([3]), onChange });

      expect(onChange).not.toHaveBeenCalled();

      await user.click(view.getByRole('button', { name: 'Reset' }));

      expect(onChange).toHaveBeenCalledWith(new Set());
    });
  });

  describe('exceptions', function() {
    beforeEach(function() {
      // prevent RTL logging thrown exceptions
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('throws an error if the selectedIds includes ids not present in the options', function() {
      expect(() => quickRender({ selectedIds: new Set() })).not.toThrow();
      expect(() => quickRender({ selectedIds: new Set([1]) })).toThrow(Error);
      expect(() => quickRender({ options, selectedIds: new Set([1]) })).not.toThrow();
      expect(() => quickRender({ options, selectedIds: new Set([1, 4]) })).toThrow(Error);
      expect(() => quickRender({ options, selectedIds: new Set([4]) })).toThrow(Error);
    });
  });

  it('calls onToggleCollapse if a click happens anywhere other than a descendant checkbox when the dropdown ' +
    'is already open', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);

    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  describe('when a checkbox is clicked', function() {
    it('does not fire onToggleCollapse', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          view = quickRender({ onToggleCollapse, isOpen: true, options }),
          checkbox = view.getAllByRole('checkbox')[0];

      await user.click(checkbox);
      expect(onToggleCollapse).not.toHaveBeenCalled();
    });

    it('fires onChange with the new set of selectedIds and the id of the clicked checkbox', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ onChange, isOpen: true, options }),
          checkboxes = view.getAllByRole('checkbox');

      // initially no boxes are checked; check the first one
      await user.click(checkboxes[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(new Set([1]), 1);

      view.rerender(<NxFilterDropdown { ...minimalProps }
                                      { ...{ onChange, options } }
                                      isOpen={true}
                                      selectedIds={new Set([1])} />);

      // now the first box is checked; also check the second one
      await user.click(checkboxes[1]);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith(new Set([1, 2]), 2);

      view.rerender(<NxFilterDropdown { ...minimalProps }
                                      { ...{ onChange, options } }
                                      isOpen={true}
                                      selectedIds={new Set([1, 2])} />);

      // now the first two boxes are checked; uncheck the first one
      await user.click(checkboxes[0]);
      expect(onChange).toHaveBeenCalledTimes(3);
      expect(onChange).toHaveBeenCalledWith(new Set([2]), 1);
    });
  });

  it('does not call onToggleCollapse if a click happens anywhere aside from the'
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    quickRender({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(document.body);
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('calls onToggleCollapse once when clicking to open the dropdown', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();

    const view = quickRender({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(view.getByRole('button'));
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse once when clicking to close the dropdown', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    const view = quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(view.getByRole('button', { name: 'Filter' }));
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    const view = quickRender({ onToggleCollapse, isOpen: true })!;
    const toggle = view.getByRole('button', { name: 'Filter' });
    toggle.focus();
    await user.keyboard('{Escape}');
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown when open', function() {
    const component = renderEl({ onToggleCollapse: jest.fn(), isOpen: true })!;

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('does not call preventDefault on Escape keydown when closed', function() {
    const component = renderEl({ onToggleCollapse: jest.fn() })!;

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(false);
  });

  it('does not call onToggleCollapse if ESC is pressed within the component'
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    const view = quickRender({ onToggleCollapse })!;
    const toggle = view.getByRole('button', { name: 'Filter' });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    toggle.focus();
    await user.keyboard('{Escape}');
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed', function() {
    const props: Partial<Props<number>> = {
      options: [{ id: 1, displayName: 'One' }],
      isOpen: true
    };

    const view = quickRender(props);

    const checkbox = view.getByRole('checkbox');
    const toggleBtn = view.getByRole('button', { name: 'Filter' });

    checkbox.focus();

    expect(document.activeElement).toBe(checkbox);

    view.rerender(<NxFilterDropdown {...minimalProps} {...props} isOpen={false} />);

    expect(document.activeElement).toBe(toggleBtn);
  });
});
