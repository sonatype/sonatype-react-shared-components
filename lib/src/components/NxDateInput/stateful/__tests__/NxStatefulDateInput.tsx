/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import NxStatefulTextInput from '../../../NxTextInput/stateful/NxStatefulTextInput';
import NxStatefulDateInput, { Props } from '../NxStatefulDateInput';

describe('NxStatefulDateInput', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulDateInput, {});

  it('renders an NxStatefulTextInput under the hood', function() {
    const component = getShallowComponent({ className: 'foo' });
    expect(component.find(NxStatefulTextInput)).toExist();
  });

  it('renders a NxStatefulTextInput with specified attributes', function() {
    const component = getShallowComponent({
      className: 'foo',
      defaultValue: 'bar'
    });

    const nxStatefulTextInput = component.find(NxStatefulTextInput);
    expect(nxStatefulTextInput).toHaveProp('className', 'foo');
    expect(nxStatefulTextInput).toHaveProp('defaultValue', 'bar');
  });

  // it('passes through html props to the element', function() {
  //   expect(getShallowComponent({ disabled: false })).toHaveProp('disabled', false);
  //   expect(getShallowComponent({ disabled: true })).toHaveProp('disabled', true);
  //   expect(getShallowComponent({ id: 'test-id'})).toHaveProp('id', 'test-id');
  //   expect(getShallowComponent({ placeholder: 'test placeholder'})).toHaveProp('placeholder', 'test placeholder');
  //   expect(getShallowComponent({ minLength: 4 })).toHaveProp('minLength', 4);
  //   expect(getShallowComponent({ name: 'a-name' })).toHaveProp('name', 'a-name');
  // });

  it('should pass in ref into the inner input', function() {
    const ref = React.createRef<HTMLInputElement>(),
        component = mount(<><NxStatefulDateInput ref={ref} /></>),
        domNode = component.find('input').getDOMNode();

    expect(ref.current).toBe(domNode);
  });
});
