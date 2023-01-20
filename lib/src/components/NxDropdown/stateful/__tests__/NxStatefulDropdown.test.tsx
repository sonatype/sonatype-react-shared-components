/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, screen, fireEvent, within, createEvent } from '@testing-library/react';
import { rtlRenderElement, rtlRender, userEvent } from '../../../../__testutils__/rtlUtils';

import NxStatefulDropdown, { Props } from '../NxStatefulDropdown';

describe('NxStatefulDropdown', () => {
  const minimalProps = {
    label: 'dropdown-toggle',
    children: <a>Hello</a>
  };

  const renderEl = rtlRenderElement<Props>(NxStatefulDropdown, minimalProps);
  const quickRender = rtlRender<Props>(NxStatefulDropdown, minimalProps);

  it('renders an NxStatefulDropdown toggle element correctly with the given props', function() {
    const { container } = quickRender({
      variant: 'tertiary',
      className: 'extra-class',
      disabled: true
    });

    const dropdown = container.querySelector('.nx-dropdown');
    const toggleButton = screen.getByRole('button', { name: 'dropdown-toggle'});

    expect(dropdown).toHaveClass('extra-class');
    expect(toggleButton).toHaveClass('nx-btn--tertiary');
    expect(toggleButton).toHaveClass('disabled');
    expect(toggleButton).toHaveAttribute('aria-disabled');
  });

  it('toggles the menu open and closed when toggle is clicked', async function() {
    const user = userEvent.setup();

    const { container } = quickRender();
    const toggleButton = screen.getByRole('button', { name: 'dropdown-toggle'});

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(toggleButton);

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await user.click(toggleButton);

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when the Escape key is pressed on this component', async function() {
    const user = userEvent.setup();
    const { container } = quickRender();

    const toggleButton = screen.getByRole('button', { name: 'dropdown-toggle'});
    let menu = container.querySelector('.nx-dropdown-menu');

    await user.click(toggleButton);

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await fireEvent.keyDown(menu as HTMLElement, { key: 'Escape' });

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when an outside click happens', async function() {
    const user = userEvent.setup();

    const { container } = render(
      <div>
        <NxStatefulDropdown label="label" />
        <button data-testid="test-btn">click</button>
      </div>
    );

    const toggleButton = screen.getByRole('button', { name: 'label' });

    await user.click(toggleButton);

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await user.click(screen.getByTestId('test-btn'));

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(toggleButton);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();
  });

  it('closes the dropdown when a child is clicked - after calling the child\'s click handler', async function() {
    const user = userEvent.setup();

    const childClickSpy = jest.fn();

    const { container } = quickRender({
      children: <a data-testid="child" onClick={childClickSpy}>Hello</a>
    });

    const toggleButton = screen.getByRole('button', { name: 'dropdown-toggle'});

    await user.click(toggleButton);

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await user.click(screen.getByTestId('child'));

    expect(childClickSpy).toHaveBeenCalled();
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(toggleButton);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();
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

    const component = renderEl({ disabled: true })!;

    const button = screen.getByRole('button');
    expect(button).toHaveClass('disabled');

    await user.click(button);

    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
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

  it('renders the children within the NxStatefulDropdownMenu in the specified order', async function() {
    const user = userEvent.setup();

    const children = [
      <a data-testid="menu-child" key="1">Link1</a>,
      <a data-testid="menu-child" key="2">Link2</a>,
      <button data-testid="menu-child" key="3">Link3</button>,
      <button data-testid="menu-child" key="4">Link4</button>
    ];

    const { getAllByTestId } = quickRender({ children });
    const toggle = screen.getByRole('button', { name: 'dropdown-toggle'});

    await user.click(toggle);

    const menuChildren = getAllByTestId('menu-child');

    expect(menuChildren[0]).toHaveTextContent('Link1');
    expect(menuChildren[1]).toHaveTextContent('Link2');
    expect(menuChildren[2]).toHaveTextContent('Link3');
    expect(menuChildren[3]).toHaveTextContent('Link4');
  });

  it('closes if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup();

    const component = renderEl()!;
    const toggle = screen.getByRole('button', { name: 'dropdown-toggle'});

    await user.click(toggle);

    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();
    await user.click(document.body);
    expect(menu).not.toBeInTheDocument();
  });

  it('does not open if a click happens anywhere aside from the'
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup();

    const component = renderEl()!;

    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
    await user.click(document.body);
    expect(menu).not.toBeInTheDocument();
  });

  it('closes if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup();

    const component = renderEl()!;
    const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

    await user.click(toggle);

    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    toggle.focus();
    await user.keyboard('{Escape}');

    expect(menu).not.toBeInTheDocument();
  });

  it('calls preventDefault on Escape keydown', async function() {
    const user = userEvent.setup();

    const component = renderEl()!;
    const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

    await user.click(toggle);

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' });
    const otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);

    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('does not open if ESC is pressed within the component'
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup();

    const component = renderEl()!;
    const toggle = within(component).getByRole('button', { name: 'dropdown-toggle' });

    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    toggle.focus();
    await user.keyboard('{Escape}');

    expect(menu).not.toBeInTheDocument();
  });

  it('does not call close if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup();

        const { container, rerender } = quickRender();

        const toggle = screen.getByRole('button', { name: 'dropdown-toggle' });

        await user.click(toggle);

        const menu = container.querySelector('.nx-dropdown-menu');
        expect(menu).toBeInTheDocument();

        rerender(<NxStatefulDropdown {...minimalProps} disabled={true} />);
        // const menu = container.querySelector('.nx-dropdown-menu');

        toggle.focus();
        await user.keyboard('{Escape}');
        expect(menu).toBeInTheDocument();
      }
  );

  it('moves focus to the dropdown toggle button if a menu item is focused '
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup();
    const props: Partial<Props> = {
      children: <button data-testid="dropdown-button">Foo</button>
    };

    quickRender(props);

    const toggleBtn = screen.getByRole('button', { name: 'dropdown-toggle' });
    await user.click(toggleBtn);

    const menuBtn = screen.getByTestId('dropdown-button');
    menuBtn.focus();

    expect(document.activeElement).toBe(menuBtn);
    await user.click(toggleBtn);
    expect(document.activeElement).toBe(toggleBtn);
  });
});
