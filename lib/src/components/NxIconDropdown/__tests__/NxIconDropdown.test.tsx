/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import { createEvent, fireEvent, waitFor, within } from '@testing-library/react';

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
        // dropdown menu does't have a role
        menu = container.querySelector('div.nx-dropdown-menu');

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

  it('disables the button (and the toggle fn) when the disabled prop is supplied', async function() {
    const user = userEvent.setup(),
        toggleFn = jest.fn(),
        component = quickRender({ onToggleCollapse: toggleFn, disabled: true }),
        toggleBtn = component.getByRole('button');

    expect(toggleBtn).toHaveAttribute('aria-disabled', 'true');

    await user.click(toggleBtn);

    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('passes extra attrs', function() {
    const el = renderEl({ id: 'some-id', lang: 'en' });

    expect(el).toHaveAttribute('id', 'some-id');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('renders the children within the dropdown menu', function() {
    const el = renderEl({ children: <a id="boo" className="nx-dropdown-link" href='#'>boo</a>, isOpen: true })!,
        menu = el.querySelector('div.nx-dropdown-menu'),
        link = within(el).getByRole('link');

    expect(menu).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(menu).toContainElement(link);
    expect(link).toHaveTextContent('boo');
  });

  it('renders a button with an accessible name when title prop is supplied', async function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
    await waitFor(() => expect(toggleBtn).toHaveAccessibleName('Test tooltip'));
  });

  it('calls onToggleCollapse if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn();

    quickRender({ onToggleCollapse, isOpen: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(document.body);

    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if a click happens anywhere when the dropdown is closed', async function() {
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
    const toggleBtn = quickRender({ onToggleCollapse: jest.fn(), isOpen: true }).getByRole('button'),
        esckeyEvent = createEvent.keyDown(toggleBtn, { key: 'Escape' }),
        otherKeyEvent = createEvent.keyDown(toggleBtn, { key: 'Q' });

    fireEvent(toggleBtn, esckeyEvent);
    expect(esckeyEvent.defaultPrevented).toBe(true);

    fireEvent(toggleBtn, otherKeyEvent);
    expect(otherKeyEvent.defaultPrevented).toBe(false);
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the dropdown is closed',
      async function() {
        const user = userEvent.setup(),
            onToggleCollapse = jest.fn(),
            toggleBtn = quickRender({ onToggleCollapse }).getByRole('button');

        toggleBtn.focus();
        await user.keyboard('[Escape]');

        expect(onToggleCollapse).not.toHaveBeenCalled();
      });

  it('does not call onToggleCollapse if ESC is pressed within the component when the component is disabled',
      async function() {
        const user = userEvent.setup(),
            onToggleCollapse = jest.fn(),
            toggleBtn = quickRender({ onToggleCollapse, disabled: true }).getByRole('button');

        toggleBtn.focus();
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
              onCloseKeyDown: jest.fn().mockImplementation((e) => { e.preventDefault(); }) })
                .getByRole('button');

        toggleBtn.focus();
        await user.keyboard('[Escape]');

        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if a click happens when onCloseClick preventsDefault', async function() {
    const user = userEvent.setup(),
        onToggleCollapse = jest.fn(),
        { getByRole, findByRole } = quickRender({
          children: <button className="nx-dropdown-button">Foo</button>,
          onToggleCollapse,
          isOpen: true,
          onCloseClick: jest.fn().mockImplementation((e) => { e.preventDefault(); }) }),
        menuBtn = getByRole('button', { name: 'Foo' }),
        toggleBtn = await findByRole('button', { name: 'Test tooltip' });

    await user.click(document.body);
    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(menuBtn);
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
        onCloseClick = jest.fn().mockImplementation((event: MouseEvent) => {
          evt = event;
          currentTarget = evt.currentTarget || undefined;
        });

    quickRender({ isOpen: true, onCloseClick });

    expect(evt).toBeUndefined();

    await user.click(document.body);

    expect(evt).toBeDefined();
    expect(evt).toBeInstanceOf(MouseEvent);
    expect(evt!.target).toBe(document.body);
    expect(currentTarget).toBe(document);
    expect(evt!.clientX).toBeDefined();
    expect(evt!.button).toBeDefined();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed',
      async function() {
        const { getByRole, findByRole, rerender} = quickRender({
              children: <button className="nx-dropdown-button">Foo</button>,
              isOpen: true
            }),
            menuBtn = getByRole('button', { name: 'Foo' }),
            toggleBtn = await findByRole('button', { name: 'Test tooltip' });

        menuBtn.focus();

        expect(menuBtn).toHaveFocus();

        rerender(
          <NxIconDropdown { ...minimalProps } isOpen={false}>
            <button className="nx-dropdown-button">Foo</button>
          </NxIconDropdown>
        );

        expect(toggleBtn).toHaveFocus();
      });
});
