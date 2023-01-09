/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxCheckbox, { Props } from '../NxCheckbox';

describe('NxCheckbox', function() {
  const minimalProps: Props & RefAttributes<HTMLLabelElement> = {
        isChecked: false
      },
      quickRender = rtlRender(NxCheckbox, minimalProps),
      renderEl = rtlRenderElement(NxCheckbox, minimalProps);

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

  it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
    expect(renderEl()).toHaveClass('tm-unchecked');
    expect(renderEl()).not.toHaveClass('tm-checked');
    expect(renderEl({ isChecked: true })).toHaveClass('tm-checked');
    expect(renderEl({ isChecked: true })).not.toHaveClass('tm-unchecked');
  });

  it('sets the input to checked per the value of isChecked', function() {
    expect(quickRender({ isChecked: false }).getByRole('checkbox')).not.toBeChecked();
    expect(quickRender({ isChecked: true }).getByRole('checkbox')).toBeChecked();
  });

  it('calls its onChange prop when the input fires a change event', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        input = quickRender({ onChange }).getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.click(input);

    expect(onChange).toHaveBeenCalled();
  });

  it('sets the input as readonly if there is no onChange handler', function() {
    expect(quickRender().getByRole('checkbox')).toHaveAttribute('readOnly');
    expect(quickRender({ onChange: undefined }).getByRole('checkbox')).toHaveAttribute('readOnly');
    expect(quickRender({ onChange: null }).getByRole('checkbox')).toHaveAttribute('readOnly');
  });
});
