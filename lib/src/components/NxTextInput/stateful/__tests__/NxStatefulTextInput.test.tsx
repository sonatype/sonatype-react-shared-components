/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
// import { render, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxStatefulTextInput, { PublicProps } from '../NxStatefulTextInput';

describe('PrivateNxStatefulTextInput', function() {
  const minimalProps: PublicProps & RefAttributes<HTMLDivElement> = {
        defaultValue: ''
      },
      quickRender = rtlRender(NxStatefulTextInput, minimalProps),
      renderEl = rtlRenderElement(NxStatefulTextInput, minimalProps);

  it('renders an input with type="text" by default', function() {
    expect(quickRender().getByRole('textbox').tagName).toBe('INPUT');
    expect(quickRender().getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('renders a password input if type is "password"', function() {
    // input type="password" don't have a role
    const inputEl = quickRender({ type: 'password' }).container.querySelector('input');

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'password');
  });

  it('renders a textarea if type is "textarea"', function() {
    expect(quickRender({ type: 'textarea' }).getByRole('textbox').tagName).toBe('TEXTAREA');
  });

  it('sets ref on the input', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the input', function() {
    const input = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('textbox');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('lang', 'en-US');
  });

  it('sets the value as specified', function() {
    expect(quickRender({ defaultValue: 'boo' }).getByRole('textbox')).toHaveAttribute('value', 'boo');
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        input = quickRender({ onChange }).getByRole('textbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onChange).toHaveBeenCalledWith('a');
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).getByRole('textbox');

    expect(onKeyPress).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });
});
