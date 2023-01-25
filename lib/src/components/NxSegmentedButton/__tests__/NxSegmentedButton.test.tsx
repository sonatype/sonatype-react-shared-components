/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { within, fireEvent, createEvent, screen } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import NxSegmentedButton, { Props } from '../NxSegmentedButton';

describe('NxSegmentedButton', function() {
  const minimalProps: Props = {
        variant: 'primary',
        children: <div/>,
        buttonContent: 'Click Me',
        isOpen: false,
        onToggleOpen: () => {},
        onClick: () => {}
      },
      quickRender = rtlRender(NxSegmentedButton, minimalProps),
      renderEl = rtlRenderElement(NxSegmentedButton, minimalProps);

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
          customBtn = quickRender({ type: 'button' }).getByRole('button', { name: 'Click Me' }),
          customSubmitBtn = quickRender({ type: 'submit' }).getByRole('button', { name: 'Click Me' });

      expect(defaultBtn).not.toHaveAttribute('type', 'button');
      expect(customBtn).toHaveAttribute('type', 'button');
      expect(customSubmitBtn).toHaveAttribute('type', 'submit');
    });

    it('sets the onClick handler on the main button', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          component = quickRender({onClick}),
          mainBtn = component.getByRole('button', { name: 'Click Me' }),
          dropdownToggleBtn = component.getByRole('button', { name: 'more options' });

      expect(onClick).not.toHaveBeenCalled();

      // confirm onClick handler is not on dropdown button
      await user.click(dropdownToggleBtn);
      expect(onClick).not.toHaveBeenCalled();

      await user.click(mainBtn);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('dropdown button', function() {
    it('sets an accessible name of "more options" on the dropdown button', function() {
      expect(quickRender().getAllByRole('button')[1]).toHaveAccessibleName('more options');
    });

    it('sets type="button" on the dropdown button', function() {
      expect(quickRender().getByRole('button', { name: 'more options' })).toHaveAttribute('type', 'button');
      expect(quickRender({ type: 'submit'}).getByRole('button', { name: 'more options' }))
          .toHaveAttribute('type', 'button');
    });
  });

  it('disables the buttons when the disabled prop is supplied', async function() {
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

  it('renders a dropdown iff isOpen is true', function() {
    // Currently, the dropdown menu does not have the proper aria role set.
    // This will be addressed in this ticket:
    // https://issues.sonatype.org/browse/RSC-989
    const { container, rerender } = quickRender({ isOpen: true }),
        dropdown = container.querySelector('.nx-dropdown-menu');

    expect(dropdown).toBeInTheDocument();

    rerender(<NxSegmentedButton {...minimalProps} isOpen={false}/>);
    expect(dropdown).not.toBeInTheDocument();
  });

  it('renders the children within the dropdown menu in the specified order', async function() {
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

  it('calls onToggleOpen once when clicking to open the dropdown', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn(),
        dropdownBtn = quickRender({ onToggleOpen }).getByRole('button', { name: 'more options' });

    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(dropdownBtn);
    expect(onToggleOpen).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleOpen once when clicking to close the dropdown', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn(),
        dropdownBtn = quickRender({ onToggleOpen, isOpen: true }).getByRole('button', { name: 'more options' });

    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(dropdownBtn);
    expect(onToggleOpen).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleOpen if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn();

    quickRender({ onToggleOpen, isOpen: true });
    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleOpen).toHaveBeenCalledTimes(1);
  });

  it('does not call onToggleOpen if a click happens anywhere aside from the '
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn();

    quickRender({ onToggleOpen });
    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('does not call onToggleOpen if a click happens anywhere when the element is disabled', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn();

    quickRender({ onToggleOpen, isOpen: true, disabled: true });
    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('calls onToggleOpen if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn(),
        component = renderEl({ onToggleOpen, isOpen: true })!,
        dropdownBtn = within(component).getByRole('button', { name: 'more options' });

    dropdownBtn.focus();
    await user.keyboard('{Escape}');
    expect(onToggleOpen).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const component = renderEl({ onToggleOpen: jest.fn(), isOpen: true })!,
        escapeEvent = createEvent.keyDown(component, { key: 'Escape' }),
        otherEvent = createEvent.keyDown(component, { key: 'Q' });

    fireEvent(component, otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    fireEvent(component, escapeEvent);
    expect(escapeEvent.defaultPrevented).toBe(true);
  });

  it('does not call onToggleOpen if ESC is pressed within the component when the dropdown is closed',
      async function() {
        const user = userEvent.setup(),
            onToggleOpen = jest.fn(),
            component = renderEl({ onToggleOpen })!,
            dropdownToggleBtn = within(component).getByRole('button', { name: 'more options' });

        expect(onToggleOpen).not.toHaveBeenCalled();

        dropdownToggleBtn.focus();
        await user.keyboard('{Escape}');
        expect(onToggleOpen).not.toHaveBeenCalled();
      });

  it('does not call onToggleOpen if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup(),
            onToggleOpen = jest.fn(),
            component = renderEl({ onToggleOpen, isOpen: true, disabled: true })!,
            dropdownToggleBtn = within(component).getByRole('button', { name: 'more options' });

        expect(onToggleOpen).not.toHaveBeenCalled();

        dropdownToggleBtn.focus();
        await user.keyboard('{Escape}');
        expect(onToggleOpen).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleOpen if ESC is pressed within the component and onCloseKeyDown preventsDefault',
      async function() {
        const user = userEvent.setup(),
            onToggleOpen = jest.fn(),
            component = renderEl({
              onToggleOpen,
              isOpen: true,
              onCloseKeyDown: e => e.preventDefault()
            })!,
            dropdownToggleBtn = within(component).getByRole('button', { name: 'more options' });

        dropdownToggleBtn.focus();
        await user.keyboard('{Escape}');
        expect(onToggleOpen).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleOpen if a click happens when onCloseClick preventsDefault', async function() {
    const user = userEvent.setup(),
        onToggleOpen = jest.fn(),
        props: Partial<Props> = {
          children: <button className="nx-dropdown-button" data-testid="dropdown-button">Foo</button>,
          onToggleOpen,
          isOpen: true,
          onCloseClick: e => e.preventDefault()
        },
        component = quickRender(props),
        dropdownToggleBtn = component.getByRole('button', { name: 'more options' }),
        dropdownMenuItem = component.getByTestId('dropdown-button');

    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(dropdownToggleBtn);
    expect(onToggleOpen).not.toHaveBeenCalled();

    await user.click(dropdownMenuItem);
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('provides onCloseClick with an event object where the typical properties work correctly', async function() {
    let evt: MouseEvent | undefined,
        // currentTarget is only set on the event object during the event handler, so to keep it around for assertions
        // we need to store it in a separate variable
        currentTarget: EventTarget | undefined;

    const user = userEvent.setup(),
        onCloseClick = (event: MouseEvent) => {
          evt = event;
          currentTarget = evt.currentTarget || undefined;
        },
        component = renderEl({ isOpen: true, onCloseClick })!;

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

    const { rerender } = quickRender(props),
        dropdownMenuItem = screen.getByTestId('dropdown-button'),
        dropdownToggleBtn = screen.getByRole('button', { name: 'more options' });

    dropdownMenuItem.focus();

    expect(document.activeElement).toBe(dropdownMenuItem);

    rerender(<NxSegmentedButton {...minimalProps} {...props} isOpen={false} />);

    expect(document.activeElement).toBe(dropdownToggleBtn);
  });
});
