/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { within, screen, createEvent, fireEvent } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import NxStatefulSegmentedButton, { Props } from '../NxStatefulSegmentedButton';
import { act } from 'react-dom/test-utils';

describe('NxSegmentedButton', function() {
  const minimalProps: Props = {
        variant: 'primary',
        children: <div/>,
        buttonContent: 'Click Me',
        onClick: () => {}
      },
      quickRender = rtlRender(NxStatefulSegmentedButton, minimalProps),
      renderEl = rtlRenderElement(NxStatefulSegmentedButton, minimalProps);

  it('passes the specified classes and attributes to the top level element', function() {
    const el = renderEl({ className: 'foo', id: 'bar', lang: 'en' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');
    expect(el).toHaveAttribute('id', 'bar');
    expect(el).toHaveAttribute('lang', 'en');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('fowards a ref to the top level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref } as Partial<Props>);

    expect(ref.current).toBe(el);
  });

  it('renders two elements with the role "button" as children', function() {
    const el = renderEl()!,
        buttons = within(el).getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  describe('main button', function() {
    it('renders the buttonContent within the main button and sets its accessible name', function() {
      const btns = quickRender().getAllByRole('button');

      expect(btns[0]).toHaveTextContent('Click Me');
      expect(btns[0]).toHaveAccessibleName('Click Me');
      expect(btns[1]).not.toHaveTextContent('Click Me');
    });

    it('passes the type to the main btn if specified', function() {
      const defaultBtn = quickRender().getByRole('button', { name: 'Click Me' }),
          customBtn = quickRender({ type: 'button'}).getByRole('button', { name: 'Click Me' }),
          customSubmitBtn = quickRender({ type: 'submit' }).getByRole('button', { name: 'Click Me' });

      expect(defaultBtn).not.toHaveAttribute('type', 'button');
      expect(customBtn).toHaveAttribute('type', 'button');
      expect(customSubmitBtn).toHaveAttribute('type', 'submit');
    });

    it('sets the onClick handler on the main button', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          component = quickRender({ onClick }),
          mainBtn = component.getByRole('button', { name: 'Click Me' }),
          dropdownToggleBtn = component.getByRole('button', { name: 'more options' });

      expect(onClick).not.toHaveBeenCalled();

      // confirm onClick handler is not on dropdown button
      await act(async () => { await user.click(dropdownToggleBtn); });
      expect(onClick).not.toHaveBeenCalled();

      await act(async () => { await user.click(mainBtn); });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('dropdown button', function() {
    it('sets an accessible name of "more options" on the dropdown button', function() {
      expect(quickRender().getAllByRole('button')[1]).toHaveAccessibleName('more options');
    });

    it('sets type="button" on the dropdown button', function() {
      expect(quickRender().getByRole('button', { name: 'more options' })).toHaveAttribute('type', 'button');
      expect(quickRender({ type: 'submit' }).getByRole('button', { name: 'more options' }))
          .toHaveAttribute('type', 'button');
    });
  });

  it('disables the buttons based on the disabled prop', function() {
    const defaultBtns = quickRender().getAllByRole('button'),
        enabledBtns = quickRender({ disabled: false }).getAllByRole('button'),
        disabledBtns = quickRender({ disabled: true }).getAllByRole('button');

    expect(defaultBtns[0]).not.toBeDisabled();
    expect(defaultBtns[1]).not.toBeDisabled();
    expect(enabledBtns[0]).not.toBeDisabled();
    expect(enabledBtns[1]).not.toBeDisabled();
    expect(disabledBtns[0]).toBeDisabled();
    expect(disabledBtns[1]).toBeDisabled();
  });

  it('opens and closes the dropdown menu when the dropdown button is clicked', async function() {
    const user = userEvent.setup(),
        { container } = quickRender(),
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(dropdownToggleBtn);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await act(async () => { await user.click(dropdownToggleBtn); });
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('renders the children within the dropdown menu in the specified order', async function() {
    const children = [
      <a data-testid="menu-child" key="1">Link1</a>,
      <a data-testid="menu-child" key="2">Link2</a>,
      <button data-testid="menu-child" key="3">Link3</button>,
      <button data-testid="menu-child" key="4">Link4</button>
    ];

    const user = userEvent.setup(),
        component = quickRender({ children }),
        dropdownToggleBtn = component.getByRole('button', { name: 'more options' });

    await user.click(dropdownToggleBtn);
    const menuChildren = component.getAllByTestId('menu-child');

    expect(menuChildren[0]).toHaveTextContent('Link1');
    expect(menuChildren[1]).toHaveTextContent('Link2');
    expect(menuChildren[2]).toHaveTextContent('Link3');
    expect(menuChildren[3]).toHaveTextContent('Link4');
  });

  it('closes if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup(),
        component = renderEl()!,
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

    await user.click(dropdownToggleBtn);
    const menu = component.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await act(async () => { await user.click(document.body); });
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when a child is clicked - after calling the child\'s click handler', async function() {
    const user = userEvent.setup(),
        childClickSpy = jest.fn(),
        { container } = quickRender({
          children: <a data-testid="child" onClick={childClickSpy}>Hello</a>
        }),
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

    await user.click(dropdownToggleBtn);
    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await act(async () => { await user.click(screen.getByTestId('child')); });
    expect(childClickSpy).toHaveBeenCalled();
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(dropdownToggleBtn);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();
  });

  it('does not open when a click happens anywhere aside from the dropdown toggle button '
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        component = renderEl()!,
        menu = component.querySelector('.nx-dropdown-menu');

    expect(menu).not.toBeInTheDocument();

    await user.click(document.body);
    expect(menu).not.toBeInTheDocument();
  });

  it('does not open if a click happens anywhere when the element is disabled', async function() {
    const user = userEvent.setup(),
        component = renderEl({ disabled: true })!,
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' }),
        menu = component.querySelector('.nx-dropdown-menu');

    expect(menu).not.toBeInTheDocument();

    await user.click(dropdownToggleBtn);
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when ESC is pressed on this component when dropdown is open', async function() {
    const user = userEvent.setup(),
        { container } = quickRender(),
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });
    let menu = container.querySelector('.nx-dropdown-menu');

    await user.click(dropdownToggleBtn);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await fireEvent.keyDown(menu as HTMLElement, { key: 'Escape' });
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('calls preventDefault on Escape keydown when open', async function() {
    const user = userEvent.setup(),
        component = renderEl()!,
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

    await user.click(dropdownToggleBtn);

    const escapeEvent = createEvent.keyDown(component, { key: 'Escape' }),
        otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('calls preventDefault on Escape keydown when closed', async function() {
    const component = renderEl()!,
        escapeEvent = createEvent.keyDown(component, { key: 'Escape' }),
        otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(false);
  });

  it('does not open when ESC is pressed and the dropdown is closed', async function() {
    const user = userEvent.setup(),
        { container } = quickRender(),
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' }),
        menu = container.querySelector('.nx-dropdown-menu');

    expect(menu).not.toBeInTheDocument();

    dropdownToggleBtn.focus();
    await user.keyboard('{Escape}');
    expect(menu).not.toBeInTheDocument();
  });

  it('does not close if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup(),
            { container, rerender } = quickRender(),
            dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

        await user.click(dropdownToggleBtn);

        const menu = container.querySelector('.nx-dropdown-menu');
        expect(menu).toBeInTheDocument();

        rerender(<NxStatefulSegmentedButton {...minimalProps} disabled={true} />);

        dropdownToggleBtn.focus();
        await user.keyboard('{Escape}');
        expect(menu).toBeInTheDocument();
      }
  );

  it('moves focus to the dropdown toggle button if a menu item is focused '
  + 'when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        props: Partial<Props> = {
          children: <button data-testid="dropdown-button">Foo</button>
        },
        component = quickRender(props),
        dropdownToggleBtn = component.getByRole('button', { name: 'more options' });

    await user.click(dropdownToggleBtn);
    const menuBtn = component.getByTestId('dropdown-button');

    menuBtn.focus();
    expect(document.activeElement).toBe(menuBtn);

    await act(async () => { await user.keyboard('{Enter}'); });
    expect(document.activeElement).toBe(dropdownToggleBtn);
  });
});
