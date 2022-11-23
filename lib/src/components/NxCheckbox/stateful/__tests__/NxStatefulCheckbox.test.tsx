/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxStatefulCheckbox, { Props } from '../NxStatefulCheckbox';

describe('NxStatefulCheckbox', function() {
  const minimalProps: Props & RefAttributes<HTMLLabelElement> = {
        defaultChecked: false
      },
      quickRender = rtlRender(NxStatefulCheckbox, minimalProps),
      renderEl = rtlRenderElement(NxStatefulCheckbox, minimalProps);

  it('renders a <label> as an accessible name and contains a checkbox role <input>', function() {
    const el = renderEl({ children: 'foo' })!,
        input = within(el).getByRole('checkbox');

    expect(el).toHaveTextContent('foo');
    expect(el).toContainElement(input);
    expect(input).toHaveAccessibleName('foo');
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the top-level element', function() {
    const el = renderEl({ id: 'foo', lang: 'en-US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('passes input attributes into the input', function() {
    const input = quickRender({ inputAttributes: { id: 'boo', name: 'boo' } }).getByRole('checkbox');

    expect(input).toHaveAttribute('id', 'boo');
    expect(input).toHaveAttribute('name', 'boo');
  });

  it('sets ref on the top-level element', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('disables the input iff disabled is set', function() {
    expect(quickRender().getByRole('checkbox')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('checkbox')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('checkbox')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).getByRole('checkbox')).toBeDisabled();
  });

  it('renders label text iff there are children', function() {
    expect(renderEl({ children: 'foo' })).toHaveTextContent('foo');
    expect(renderEl()).toHaveTextContent('');
  });

  it('adds the tm-checked class when checked, and the tm-unchecked class when unchecked', async function() {
    const user = userEvent.setup(),
        el = renderEl({ children: 'foo' })!,
        input = within(el).getByRole('checkbox');

    expect(el).toHaveClass('tm-unchecked');
    expect(el).not.toHaveClass('tm-checked');

    await user.click(input);

    expect(el).toHaveClass('tm-checked');
    expect(el).not.toHaveClass('tm-unchecked');
  });

  it('sets the input to checked per the value of defaultChecked', function() {
    expect(quickRender({ defaultChecked: false }).getByRole('checkbox')).not.toBeChecked();
    expect(quickRender({ defaultChecked: true }).getByRole('checkbox')).toBeChecked();
  });

  it('updates checked state when the checkbox is toggled', async function() {
    const user = userEvent.setup(),
        input = quickRender().getByRole('checkbox');

    expect(input).not.toBeChecked();

    await user.click(input);

    expect(input).toBeChecked();

    await user.click(input);

    expect(input).not.toBeChecked();
  });

  it('calls its onChange prop when the input fires a change event', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        input = quickRender({ onChange }).getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.click(input);

    expect(onChange).toHaveBeenCalled();
  });
});
