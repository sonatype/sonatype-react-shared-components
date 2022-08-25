/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxFormSelect from '../NxFormSelect';

describe('NxFormSelect', function() {
  const minimalProps = { value: '', onChange: () => {} },
      quickRender = rtlRender(NxFormSelect, minimalProps),
      renderEl = rtlRenderElement(NxFormSelect, minimalProps);

  it('renders a <select> ', function() {
    expect(quickRender().getByRole('combobox').tagName).toBe('SELECT');
  });

  it('adds additional specified classNames to the top-level element', function() {
    const el = renderEl({ className: 'foo' })!,
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional props to the select', function() {
    const select = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('combobox');

    expect(select).toHaveAttribute('lang', 'en-US');
    expect(select).toHaveAttribute('id', 'foo');
  });

  it('passes children to the select', function() {
    const select = quickRender({
          children: (
            <>
              <option>Foo</option>
              <option>Bar</option>
            </>
          )
        }).getByRole('combobox') as HTMLSelectElement,
        { options } = select;

    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('Foo');
    expect(options[1]).toHaveTextContent('Bar');
  });

  it('forwards a ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('calls onChange when the select value is changed', async function() {
    let capturedValue: HTMLSelectElement;

    const user = userEvent.setup(),
        onChange = jest.fn().mockImplementation(evt => { capturedValue = evt.target.value; }),
        component = quickRender({
          onChange,
          children: (
            <>
              <option>Foo</option>
              <option>Bar</option>
            </>
          )
        }),
        select = component.getByRole('combobox');

    expect(onChange).not.toHaveBeenCalled();

    await user.selectOptions(select, 'Bar');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(capturedValue!).toBe('Bar');
  });
});
