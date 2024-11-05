/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { createEvent, fireEvent } from '@testing-library/react';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import NxStatefulFilterDropdown, { Props } from '../NxStatefulFilterDropdown';

type RenderProps = Props<number> & RefAttributes<HTMLDivElement>;

describe('NxStatefulDropdown', function() {
  const minimalProps: Props<number> = {
        options: [],
        selectedIds: new Set(),
        onChange: () => {}
      },
      // some options used in various tests but not in the minimalProps
      options = [
        { id: 1, displayName: 'One' },
        { id: 2, displayName: 'Two' },
        { id: 3, displayName: 'Three' }
      ],
      quickRender = rtlRender<RenderProps>(NxStatefulFilterDropdown, minimalProps),
      renderEl = rtlRenderElement<RenderProps>(NxStatefulFilterDropdown, minimalProps);

  async function renderAndOpenDropdown(props?: Partial<Props<number>>, user?: UserEvent) {
    const _user = user ?? userEvent.setup(),
        view = quickRender(props);

    await _user.click(view.getByRole('button'));
    return view;
  }

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
    const quickRender = rtlRender<RenderProps>(NxStatefulFilterDropdown, { ...minimalProps, options });

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

  it('is closed initially', function() {
    expect(renderEl()!.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('renders a checkbox in the dropdown menu for each option', async function() {
    const view = await renderAndOpenDropdown({ options }),
        menuChildren = view.getAllByRole('checkbox');

    expect(menuChildren[0]).toHaveAccessibleName('One');
    expect(menuChildren[1]).toHaveAccessibleName('Two');
    expect(menuChildren[2]).toHaveAccessibleName('Three');
  });

  describe('reset button', function() {
    it('is only visible when the dropdown is open', async function() {
      const closedView = quickRender(),
          openView = await renderAndOpenDropdown();

      expect(closedView.queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
      expect(openView.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
    });

    describe('visibility', function() {
      /*
       * The tests in this group are split apart to prevent React act() warnings due to the fact that clicking
       * to open a successive dropdown will close other dropdowns already on the page. That involves native
       * event handlers and so trips up act()
       */

      it('is visible if showReset is null', async function() {
        expect((await renderAndOpenDropdown({ showReset: null })).getByRole('button', { name: 'Reset' }))
            .toBeInTheDocument();
      });

      it('is visible if showReset is undefined', async function() {
        expect((await renderAndOpenDropdown({ showReset: undefined })).getByRole('button', { name: 'Reset' }))
            .toBeInTheDocument();
      });

      it('is visible if showReset is true', async function() {
        expect((await renderAndOpenDropdown({ showReset: true })).getByRole('button', { name: 'Reset' }))
            .toBeInTheDocument();
      });

      it('is not visible if showReset is false', async function() {
        expect((await renderAndOpenDropdown({ showReset: false })).queryByRole('button', { name: 'Reset' }))
            .not.toBeInTheDocument();
      });
    });

    it('is enabled if options are selected', async function() {
      const user = userEvent.setup(),
          view = await renderAndOpenDropdown({ options, selectedIds: new Set([3]) }, user);

      expect(view.getByRole('button', { name: 'Reset' })).toBeEnabled();
    });

    it('is disabled if options are not selected', async function() {
      const user = userEvent.setup(),
          view = await renderAndOpenDropdown(undefined, user);

      expect(view.getByRole('button', { name: 'Reset' })).toBeDisabled();
    });

    it('fires onChange with an empty set and no second parameter when clicked', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = await renderAndOpenDropdown({ options, selectedIds: new Set([3]), onChange }, user);

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

  describe('when a checkbox is clicked', function() {
    it('does not close the dropdown', async function() {
      const user = userEvent.setup(),
          view = await renderAndOpenDropdown({ options }),
          checkbox = view.getAllByRole('checkbox')[0];

      await user.click(checkbox);
      expect(checkbox).toBeVisible();
    });

    it('fires onChange with the new set of selectedIds and the id of the clicked checkbox', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = await renderAndOpenDropdown({ onChange, options }, user),
          checkboxes = view.getAllByRole('checkbox');

      // initially no boxes are checked; check the first one
      await user.click(checkboxes[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(new Set([1]), 1);

      view.rerender(<NxStatefulFilterDropdown { ...minimalProps }
                                              { ...{ onChange, options } }
                                              selectedIds={new Set([1])} />);

      // now the first box is checked; also check the second one
      await user.click(checkboxes[1]);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith(new Set([1, 2]), 2);

      view.rerender(<NxStatefulFilterDropdown { ...minimalProps }
                                              { ...{ onChange, options } }
                                              selectedIds={new Set([1, 2])} />);

      // now the first two boxes are checked; uncheck the first one
      await user.click(checkboxes[0]);
      expect(onChange).toHaveBeenCalledTimes(3);
      expect(onChange).toHaveBeenCalledWith(new Set([2]), 1);
    });
  });

  it('does not open the dropdown if a click happens anywhere aside from the'
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        el = renderEl()!;

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
    await user.click(document.body);
    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('opens the dropdown when it is closed and the toggle is clicked', async function() {
    const user = userEvent.setup();

    const view = quickRender(),
        el = view.container.firstElementChild!;

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
    await user.click(view.getByRole('button'));
    expect(el.querySelector('.nx-dropdown-menu')).toBeVisible();
  });

  it('closes the dropdown when it is open and the toggle is clicked', async function() {
    const user = userEvent.setup();
    const view = await renderAndOpenDropdown(undefined, user),
        el = view.container.firstElementChild!;

    expect(el.querySelector('.nx-dropdown-menu')).toBeVisible();
    await user.click(view.getByRole('button', { name: 'Filter' }));
    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup(),
        view = await renderAndOpenDropdown()!,
        el = view.container.firstElementChild!,
        toggle = view.getByRole('button', { name: 'Filter' });

    toggle.focus();
    await user.keyboard('{Escape}');

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('calls preventDefault on Escape keydown when open', async function() {
    const component = (await renderAndOpenDropdown()).container.firstElementChild!;

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('does not call preventDefault on Escape keydown when closed', async function() {
    const component = renderEl()!;

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(false);
  });

  it('does open the dropdown if ESC is pressed within the component'
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        view = quickRender()!,
        el = view.container.firstElementChild!,
        toggle = view.getByRole('button', { name: 'Filter' });

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();

    toggle.focus();
    await user.keyboard('{Escape}');

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed',
      async function() {
        const user = userEvent.setup(),
            props: Partial<Props<number>> = {
              options: [{ id: 1, displayName: 'One' }]
            },
            view = await renderAndOpenDropdown(props, user),
            checkbox = view.getByRole('checkbox'),
            toggleBtn = view.getByRole('button', { name: 'Filter' });

        checkbox.focus();
        expect(document.activeElement).toBe(checkbox);

        await user.keyboard('{Escape}');
        expect(document.activeElement).toBe(toggleBtn);
      }
  );
});
