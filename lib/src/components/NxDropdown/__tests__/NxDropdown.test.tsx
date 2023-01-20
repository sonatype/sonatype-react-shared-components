/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, screen, fireEvent, createEvent, within } from '@testing-library/react';
import { rtlRenderElement, rtlRender, userEvent } from '../../../__testutils__/rtlUtils';

import NxDropdown, { Props } from '../NxDropdown';

describe('NxDropdown', () => {
  const minimalProps = {
    label: 'dropdown-toggle',
    isOpen: false,
    onToggleCollapse: () => {}
  };

  const quickRender = rtlRender(NxDropdown, minimalProps);
  const renderEl = rtlRenderElement(NxDropdown, minimalProps);

  it('correctly renders the menu based on isOpen prop', function() {
    const { container, rerender } = quickRender({ isOpen: true });
    // Currently, the dropdown menu does not have the proper aria role set.
    // This will be addressed in this ticket:
    // https://issues.sonatype.org/browse/RSC-989
    const menu = container.querySelector('.nx-dropdown-menu');

    expect(menu).toBeInTheDocument();
    rerender(<NxDropdown {...minimalProps} isOpen={false} />);
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

  it('disables the button (and the toggle fn) when the disabled prop is supplied', async function() {
    const user = userEvent.setup();
    const toggleFn = jest.fn();
    renderEl({ onToggleCollapse: toggleFn, disabled: true });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('disabled');
    expect(button).toHaveAttribute('aria-disabled');

    await user.click(button);

    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('renders string label when supplied', function() {
    const view = quickRender();
    expect(view.getByRole('button')).toHaveTextContent('dropdown-toggle');
  });

  it('renders react element as label if supplied', function() {
    const view = quickRender({ label: <span data-testid="foo" /> });
    const toggle = view.getByRole('button');
    expect(within(toggle).getByTestId('foo')).toBeInTheDocument();
  });

  it('renders provided attributes', function() {
    const component = renderEl({ id: 'some-id', title: 'title-prop' });
    expect(component).toHaveAttribute('id', 'some-id');
    expect(component).toHaveAttribute('title', 'title-prop');
  });

  it('renders the children within the NxDropdownMenu in the specified order', async function() {
    const children = [
      <a data-testid="menu-child" key="1">Link1</a>,
      <a data-testid="menu-child" key="2">Link2</a>,
      <button data-testid="menu-child" key="3">Link3</button>,
      <button data-testid="menu-child" key="4">Link4</button>
    ];

    const { getAllByTestId } = quickRender({ children, isOpen: true });
    const menuChildren = getAllByTestId('menu-child');

    expect(menuChildren[0]).toHaveTextContent('Link1');
    expect(menuChildren[1]).toHaveTextContent('Link2');
    expect(menuChildren[2]).toHaveTextContent('Link3');
    expect(menuChildren[3]).toHaveTextContent('Link4');
  });

  it('calls onToggleCollapse if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);

    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
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

  it('does not call onToggleCollapse if a click happens anywhere when the dropdown is disabled', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    quickRender({ onToggleCollapse, isOpen: true, disabled: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(document.body);
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('calls onToggleCollapse once when clicking to open the dropdown', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();

    quickRender({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button'));
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse once when clicking to close the dropdown', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button'));
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    const component = renderEl({ onToggleCollapse, isOpen: true })!;
    const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });
    toggle.focus();
    await user.keyboard('{Escape}');
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const component = renderEl({ onToggleCollapse: jest.fn(), isOpen: true })!;

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('does not call onToggleCollapse if ESC is pressed within the component'
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();
    const component = renderEl({ onToggleCollapse })!;
    const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

    expect(onToggleCollapse).not.toHaveBeenCalled();
    toggle.focus();
    await user.keyboard('{Escape}');
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup();
        const onToggleCollapse = jest.fn();
        const component = renderEl({ onToggleCollapse, isOpen: true, disabled: true })!;
        const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

        expect(onToggleCollapse).not.toHaveBeenCalled();
        toggle.focus();
        await user.keyboard('{Escape}');
        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if ESC is pressed within the component and onCloseKeyDown preventsDefault',
      async function() {
        const user = userEvent.setup();
        const onToggleCollapse = jest.fn();
        const component = renderEl({
          onToggleCollapse,
          isOpen: true,
          onCloseKeyDown: e => e.preventDefault()
        })!;
        const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

        toggle.focus();
        await user.keyboard('{Escape}');
        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if a click happens when onCloseClick preventsDefault', async function() {
    const user = userEvent.setup();
    const onToggleCollapse = jest.fn();

    const props: Partial<Props> = {
      children: <button className="nx-dropdown-button" data-testid="dropdown-button">Foo</button>,
      onToggleCollapse,
      isOpen: true,
      onCloseClick: e => e.preventDefault()
    };

    quickRender(props);

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleCollapse).not.toHaveBeenCalled();

    const dropdownButton = screen.getByTestId('dropdown-button');
    const toggleButton = screen.getByRole('button', { name: 'dropdown-toggle'});

    await user.click(dropdownButton);
    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(toggleButton);
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('provides onCloseClick with an event object where the typical properties work correctly', async function() {
    const user = userEvent.setup();
    let evt: MouseEvent | undefined,
        // currentTarget is only set on the event object during the event handler, so to keep it around for assertions
        // we need to store it in a separate variable
        currentTarget: EventTarget | undefined;

    const onCloseClick = (event: MouseEvent) => {
      evt = event;
      currentTarget = evt.currentTarget || undefined;
    };

    const component = renderEl({ isOpen: true, onCloseClick })!;

    expect(evt).toBeUndefined();

    await user.click(component);

    expect(evt).toBeDefined();

    expect(evt).toBeInstanceOf(MouseEvent);

    expect(evt!.target).toBe(component);
    expect(currentTarget).toBe(document);
    expect(evt!.clientX).toBeDefined();
    expect(evt!.button).toBeDefined();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed', function() {
    const props: Partial<Props> = {
      children: <button className="nx-dropdown-button" data-testid="dropdown-button">Foo</button>,
      isOpen: true
    };

    const { rerender } = quickRender(props);

    const menuBtn = screen.getByTestId('dropdown-button');
    const toggleBtn = screen.getByRole('button', { name: 'dropdown-toggle' });

    menuBtn.focus();

    expect(document.activeElement).toBe(menuBtn);

    rerender(<NxDropdown {...minimalProps} {...props} isOpen={false} />);

    expect(document.activeElement).toBe(toggleBtn);
  });

  describe('Divider', function() {
    it('renders an element', function() {
      render(<NxDropdown.Divider />);
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });
  });
});
