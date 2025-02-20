/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement, userEvent, runTimers } from '../../../../__testutils__/rtlUtils';
import { act, within } from '@testing-library/react';

import NxStatefulIconDropdown, { Props } from '../NxStatefulIconDropdown';

describe('NxStatefulIconDropdown', () => {
  const minimalProps: Props = {
        title: 'stateful dropdown',
        children: <a>Hello</a>
      },
      quickRender = rtlRender(NxStatefulIconDropdown, minimalProps),
      renderEl = rtlRenderElement(NxStatefulIconDropdown, minimalProps);

  it('renders a button with type=button', function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveAttribute('type', 'button');
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
        { container, getByRole } = quickRender({ disabled: true }),
        toggleBtn = getByRole('button');

    expect(toggleBtn).toHaveClass('disabled');
    expect(toggleBtn).toHaveAttribute('aria-disabled', 'true');

    await user.click(toggleBtn);
    // Currently, the dropdown menu does not have the proper aria role set.
    // This will be addressed in this ticket:
    // https://issues.sonatype.org/browse/RSC-989
    const menu = container.querySelector('.nx-dropdown-menu');

    expect(menu).not.toBeInTheDocument();
  });

  it('renders a button with an accessible name when title prop is supplied', async function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();

    await runTimers();

    expect(toggleBtn).toHaveAccessibleName('stateful dropdown');
  });

  it('renders the children within the dropdown menu in the specified order', async function() {
    const children = [
      <a data-testid="menu-child" key="1">Link1</a>,
      <a data-testid="menu-child" key="2">Link2</a>,
      <button data-testid="menu-child" key="3">Link3</button>,
      <button data-testid="menu-child" key="4">Link4</button>
    ];

    const user = userEvent.setup(),
        el = renderEl({ children })!,
        toggleBtn = within(el).getByRole('button');

    await user.click(toggleBtn);

    const menu = el.querySelector('.nx-dropdown-menu'),
        menuChildren = within(el).getAllByTestId('menu-child');

    expect(menu).toBeInTheDocument();
    expect(menuChildren[0]).toHaveTextContent('Link1');
    expect(menuChildren[1]).toHaveTextContent('Link2');
    expect(menuChildren[2]).toHaveTextContent('Link3');
    expect(menuChildren[3]).toHaveTextContent('Link4');
  });

  it('toggles the dropdown open and closed when the toggle button is clicked', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();

    await user.click(toggleBtn);

    expect(container.querySelector('.nx-dropdown-menu')).toBeInTheDocument();

    await act(async () => { await user.click(toggleBtn); });

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown if a click happens anywhere when the dropdown is already open', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    expect(container.querySelector('.nx-dropdown-menu')).toBeInTheDocument();

    await act(async () => { await user.click(document.body); });

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('does not open the dropdown if a click happens anywhere aside from the '
    + 'toggle button when the dropdown is closed', async function() {
    const user = userEvent.setup(),
        el = renderEl()!;

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();

    await user.click(document.body);

    expect(el.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('does not open the dropdown if a click happens anywhere when the dropdown is disabled', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender({ disabled: true }),
        toggleBtn = getByRole('button');

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();

    await user.click(toggleBtn);

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown when a child is clicked - after calling the child\'s click handler', async function() {
    const user = userEvent.setup(),
        childClickSpy = jest.fn(),
        { container, getByRole, getByTestId } = quickRender({
          children: <a data-testid="child" onClick={childClickSpy}>Hello</a>
        }),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    const menu = container.querySelector('.nx-dropdown-menu'),
        children = getByTestId('child');

    expect(menu).toBeInTheDocument();

    await act(async () => { await user.click(children); });

    expect(childClickSpy).toHaveBeenCalled();
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when the Escape key is pressed and dropdown is open', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    expect(container.querySelector('.nx-dropdown-menu')).toBeInTheDocument();

    await act(() => { toggleBtn.focus(); });
    await user.keyboard('[Escape]');

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('does not open the dropdown when the Escape key is pressed and dropdown is closed', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();

    await act(() => { toggleBtn.focus(); });
    await user.keyboard('[Escape]');

    expect(container.querySelector('.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('does not close the dropdown when the Escape key is pressed and dropdown is disabled', async function() {
    const user = userEvent.setup(),
        { container, getByRole, rerender } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    expect(container.querySelector('.nx-dropdown-menu')).toBeInTheDocument();

    rerender(<NxStatefulIconDropdown {...minimalProps} disabled={true}/>);

    await act(() => { toggleBtn.focus(); });
    await user.keyboard('[Escape]');

    expect(container.querySelector('.nx-dropdown-menu')).toBeInTheDocument();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed',
      async function() {
        const props: Partial<Props> = {
              children: <button data-testid="dropdown-button">Foo</button>
            },
            user = userEvent.setup(),
            { getByTestId, getByRole } = quickRender(props),
            toggleBtn = getByRole('button');

        await user.click(toggleBtn);

        const menuBtn = getByTestId('dropdown-button');

        menuBtn.focus();

        expect(document.activeElement).toBe(menuBtn);

        await user.keyboard('[Escape]');

        expect(document.activeElement).toBe(toggleBtn);
      });
});
