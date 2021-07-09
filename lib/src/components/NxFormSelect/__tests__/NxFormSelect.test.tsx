/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxFormSelect, { Props } from '../NxFormSelect';
import { mount } from 'enzyme';

describe('NxFormSelect', function() {
  const minimalProps = { value: '', isPristine: false, onChange: () => {} },
      getShallow = getShallowComponent<Props>(NxFormSelect, minimalProps);

  it('renders a <select> with the nx-form-select class', function() {
    expect(getShallow()).toMatchSelector('select.nx-form-select');
  });

  it('adds additional specified classNames', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-form-select');
  });

  it('passes additional props to the select', function() {
    const component = getShallow({ id: 'foo', lang: 'en-US' });

    expect(component).toHaveProp('lang', 'en-US');
    expect(component).toHaveProp('id', 'foo');
  });

  it('adds the `pristine` class iff isPristine is true', function() {
    expect(getShallow()).not.toHaveClassName('pristine');
    expect(getShallow({ isPristine: true })).toHaveClassName('pristine');
  });

  it('forwards a ref to the select', function() {
    const ref = React.createRef<HTMLSelectElement>(),
        component = mount(<><NxFormSelect ref={ref} { ...minimalProps } /></>);

    expect(ref.current).toBe(component.getDOMNode());
  });

  it('attaches the onChange handler directly to the select', function() {
    const onChange = jest.fn(),
        component = getShallow({ onChange });

    expect(component).toHaveProp('onChange', onChange);
  });
});
