/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import { waitFor } from '@testing-library/react';

import NxStatefulIconDropdown, { Props } from '../NxStatefulIconDropdown';

describe('NxStatefulIconDropdown', () => {
  const childClickSpy = jest.fn();

  const minimalProps: Props = {
        title: 'stateful dropdown',
        children: <a href='#' onClick={childClickSpy}>Hello</a>
      },
      quickRender = rtlRender(NxStatefulIconDropdown, minimalProps),
      renderEl = rtlRenderElement(NxStatefulIconDropdown, minimalProps);

  it('renders a button with type=button', function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveAttribute('type', 'button');
  });

  it('renders the dropdown menu containing the children', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    // dropdown menu does't have a role
    const menu = container.querySelector('div.nx-dropdown-menu'),
        link = getByRole('link');

    expect(menu).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(menu).toContainElement(link);
    expect(link).toHaveTextContent('Hello');
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

  it('renders a button with an accessible name when title prop is supplied', async function() {
    const toggleBtn = quickRender().getByRole('button');

    expect(toggleBtn).toBeInTheDocument();
    await waitFor(() => expect(toggleBtn).toHaveAccessibleName('stateful dropdown'));
  });

  it('toggles the dropdown when the toggle button is clicked', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    expect(container.querySelector('div.nx-dropdown-menu')).not.toBeInTheDocument();

    await user.click(toggleBtn);
    expect(container.querySelector('div.nx-dropdown-menu')).toBeInTheDocument();

    await waitFor(() => user.click(toggleBtn));
    expect(container.querySelector('div.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown when the Escape key is pressed on this component', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);
    expect(container.querySelector('div.nx-dropdown-menu')).toBeInTheDocument();

    toggleBtn.focus();
    await user.keyboard('[Escape]');
    expect(container.querySelector('div.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown when an outside click happens', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);
    expect(container.querySelector('div.nx-dropdown-menu')).toBeInTheDocument();

    await waitFor(() => user.click(document.body));
    expect(container.querySelector('div.nx-dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes the dropdown when a child is clicked - after calling the child\'s click handler', async function() {
    const user = userEvent.setup(),
        { container, getByRole } = quickRender(),
        toggleBtn = getByRole('button');

    await user.click(toggleBtn);

    const menu = container.querySelector('div.nx-dropdown-menu'),
        child = getByRole('link');

    expect(menu).toBeInTheDocument();

    await waitFor(() => user.click(child));
    expect(childClickSpy).toHaveBeenCalled();
    expect(menu).not.toBeInTheDocument();
  });
});
