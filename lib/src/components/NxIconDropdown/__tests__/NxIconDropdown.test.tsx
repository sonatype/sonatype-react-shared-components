/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement, userEvent, runTimers } from '../../../__testutils__/rtlUtils';
import { act, createEvent, fireEvent, within } from '@testing-library/react';

import NxIconDropdown, { Props } from '../NxIconDropdown';

describe('NxIconDropdown', () => {
  const minimalProps: Props = {
        title: 'Test tooltip',
        isOpen: false,
        onToggleCollapse: () => {}
      },
      quickRender = rtlRender(NxIconDropdown, minimalProps),
      renderEl = rtlRenderElement(NxIconDropdown, minimalProps);

  it('renders a button with type=button', function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveAttribute('type', 'button');
  });

  it('correctly renders the menu based on isOpen prop', function() {
    const { rerender, container } = quickRender({ isOpen: true })!,
        // Currently, the dropdown menu does not have the proper aria role set.
        // This will be addressed in this ticket:
        // https://issues.sonatype.org/browse/RSC-989
        menu = container.querySelector('.nx-dropdown-menu');

    expect(menu).toBeInTheDocument();

    rerender(<NxIconDropdown { ...minimalProps } isOpen={false} />);

    expect(menu).not.toBeInTheDocument();
  });

  it('adds specified classNames to the element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes extra attrs', function() {
    const el = renderEl({ id: 'some-id', lang: 'en' });

    expect(el).toHaveAttribute('id', 'some-id');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('disables the button (and the toggle fn) when the disabled prop is supplied', async function() {
    const user = userEvent.setup(),
        toggleFn = jest.fn(),
        component = quickRender({ onToggleCollapse: toggleFn, disabled: true }),
        toggleBtn = component.getByRole('button');

    expect(toggleBtn).toHaveClass('disabled');
    expect(toggleBtn).toHaveAttribute('aria-disabled', 'true');

    await user.click(toggleBtn);

    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('renders a button with an accessible name when title prop is supplied', async function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();

    await runTimers();

    expect(toggleBtn).toHaveAccessibleName('Test tooltip');
  });

  it('renders the children within the dropdown menu in the specified order', function() {
    const children = [
      <a data-testid="menu-child" key="1">Link1</a>,
      <a data-testid="menu-child" key="2">Link2</a>,
      <button data-testid="menu-child" key="3">Link3</button>,
      <button data-testid="menu-child" key="4">Link4</button>
    ];

    const el = renderEl({ children, isOpen: true })!,
        menu = el.querySelector('.nx-dropdown-menu'),
        menuChildren = within(el).getAllByTestId('menu-child');

    expect(menu).toBeInTheDocument();
    expect(menuChildren[0]).toHaveTextContent('Link1');
    expect(menuChildren[1]).toHaveTextContent('Link2');
    expect(menuChildren[2]).toHaveTextContent('Link3');
    expect(menuChildren[3]).toHaveTextContent('Link4');
  });

  it('calls onToggleCollapse if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn();

    quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);

    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if a click happens anywhere aside from the '
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn();

    quickRender({ onToggleCollapse });

    await user.click(document.body);

    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if a click happens anywhere when the dropdown is disabled', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn();

    quickRender({ onToggleCollapse, isOpen: true, disabled: true });

    await user.click(document.body);

    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('calls onToggleCollapse once when clicking to open the dropdown', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        toggleBtn = quickRender({ onToggleCollapse }).getByRole('button');

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(toggleBtn);

    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse once when clicking to close the dropdown', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        toggleBtn = quickRender({ onToggleCollapse, isOpen: true }).getByRole('button');

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(toggleBtn);

    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse when a child is clicked - after calling the child\'s click handler', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        childClickSpy = jest.fn(),
        { getByTestId } = quickRender({
          onToggleCollapse,
          children: <a data-testid="child" onClick={childClickSpy}>Hello</a>,
          isOpen: true
        }),
        children = getByTestId('child');

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(children);

    expect(childClickSpy).toHaveBeenCalled();
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls onToggleCollapse if ESC is pressed within the component while the dropdown is open', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        toggleBtn = quickRender({ onToggleCollapse, isOpen: true }).getByRole('button');

    expect(onToggleCollapse).not.toHaveBeenCalled();

    toggleBtn.focus();
    await user.keyboard('[Escape]');

    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const el = renderEl({ onToggleCollapse: jest.fn(), isOpen: true })!,
        esckeyEvent = createEvent.keyDown(el, { key: 'Escape' }),
        otherKeyEvent = createEvent.keyDown(el, { key: 'Q' });

    fireEvent(el, esckeyEvent);
    expect(esckeyEvent.defaultPrevented).toBe(true);

    fireEvent(el, otherKeyEvent);
    expect(otherKeyEvent.defaultPrevented).toBe(false);
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the dropdown is closed',
      async function() {
        const user = userEvent.setup(),
            onToggleCollapse = jest.fn(),
            toggleBtn = quickRender({ onToggleCollapse }).getByRole('button');

        expect(onToggleCollapse).not.toHaveBeenCalled();

        await act(() => { toggleBtn.focus(); });
        await user.keyboard('[Escape]');

        expect(onToggleCollapse).not.toHaveBeenCalled();
      });

  it('does not call onToggleCollapse if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup(),
            onToggleCollapse = jest.fn(),
            toggleBtn = quickRender({ onToggleCollapse, disabled: true }).getByRole('button');

        expect(onToggleCollapse).not.toHaveBeenCalled();

        await act(() => { toggleBtn.focus(); });
        await user.keyboard('[Escape]');

        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if ESC is pressed within the component and onCloseKeyDown preventsDefault',
      async function() {
        const user = userEvent.setup(),
            onToggleCollapse = jest.fn(),
            toggleBtn = quickRender({
              onToggleCollapse,
              isOpen: true,
              onCloseKeyDown: e => e.preventDefault()
            }).getByRole('button');

        await act(() => { toggleBtn.focus(); });
        await user.keyboard('[Escape]');

        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if a click happens when onCloseClick preventsDefault', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        { getByRole, getByTestId } = quickRender({
          children: <a data-testid="child">Foo</a>,
          onToggleCollapse,
          isOpen: true,
          onCloseClick: e => e.preventDefault()
        }),
        children = getByTestId('child'),
        toggleBtn = getByRole('button');

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);
    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(children);
    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(toggleBtn);
    expect(onToggleCollapse).not.toHaveBeenCalled();
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

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed',
      async function() {
        const user = userEvent.setup(),
            props: Partial<Props> = {
              children: <button>Foo</button>,
              isOpen: true
            },
            { getByRole, findByRole, rerender} = quickRender(props),
            menuBtn = getByRole('button', { name: 'Foo' }),
            toggleBtn = await findByRole('button', { name: 'Test tooltip' });

        await user.click(menuBtn);

        expect(document.activeElement).toBe(menuBtn);

        rerender(<NxIconDropdown { ...minimalProps } {...props} isOpen={false} />);

        expect(document.activeElement).toBe(toggleBtn);
      }
  );
});
