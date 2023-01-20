/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { act, render, screen, fireEvent } from '@testing-library/react';
import { rtlRender, userEvent } from '../../../../__testutils__/rtlUtils';

import NxStatefulDropdown, { Props } from '../NxStatefulDropdown';

describe('NxStatefulDropdown', () => {
  const minimalProps = {
    label: 'dropdown',
    children: <a>Hello</a>
  };

  const quickRender = rtlRender<Props>(NxStatefulDropdown, minimalProps);

  it('renders an NxDropdown toggle element correctly with the given props', function() {
    const { container } = quickRender({
      variant: 'tertiary',
      className: 'extra-class',
      disabled: true
    });

    const dropdown = container.querySelector('.nx-dropdown');
    const toggleButton = screen.getByRole('button', { name: 'dropdown' });

    expect(dropdown).toHaveClass('extra-class');
    expect(toggleButton).toHaveClass('nx-btn--tertiary');
    expect(toggleButton).toHaveClass('disabled');
  });

  it('toggles the menu open and close when toggle is clicked', async function() {
    const user = userEvent.setup();

    const { container } = quickRender();
    const toggleButton = screen.getByRole('button', { name: 'dropdown' });

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(toggleButton);

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await act(async () => {
      await user.click(toggleButton);
    });

    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('closes the dropdown when the Escape key is pressed on this component', async function() {
    const user = userEvent.setup();
    const { container } = quickRender();

    const toggleButton = screen.getByRole('button', { name: 'dropdown' });
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

    await act(async () => {
      await user.click(screen.getByTestId('test-btn'));
    });

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

    const toggleButton = screen.getByRole('button', { name: 'dropdown' });

    await user.click(toggleButton);

    let menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();

    await act(async () => {
      await user.click(screen.getByTestId('child'));
    });

    expect(childClickSpy).toHaveBeenCalled();
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).not.toBeInTheDocument();

    await user.click(toggleButton);
    menu = container.querySelector('.nx-dropdown-menu');
    expect(menu).toBeInTheDocument();
  });
});
