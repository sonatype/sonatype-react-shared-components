/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxDateInput, { Props } from '../NxDateInput';
import { PrivateNxTextInput } from '../../NxTextInput/NxTextInput';

describe('NxDateInput', function() {
  const minimalProps = {
        value: '2021-10-04',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxDateInput, minimalProps);

  it('should have an PrivateNxTextInput under the hood', function() {
    const component = getShallowComponent();
    expect(component.find(PrivateNxTextInput)).toExist();
  });

  it('should ignore type attribute', function() {
    const component = getShallowComponent({ type: 'text' } as Partial<Props>);
    expect(component.find(PrivateNxTextInput)).toHaveProp('type', 'date');
  });

  it('should pass props to the PrivateNxTextInput component', function() {
    const onChange = jest.fn();
    const onKeyPress = jest.fn();
    const component = getShallowComponent({
      className: 'test',
      isPristine: true,
      value: '2021-10-04',
      onChange,
      onKeyPress
    });
    const nxTextInput = component.find(PrivateNxTextInput);
    expect(nxTextInput).toHaveProp('className', 'test');
    expect(nxTextInput).toHaveProp('isPristine', true);
    expect(nxTextInput).toHaveProp('value', '2021-10-04');
    expect(nxTextInput).toHaveProp('onChange', onChange);
    expect(nxTextInput).toHaveProp('onKeyPress', onKeyPress);
  });

  it('should pass in ref to the input element', function() {
    const ref = React.createRef<HTMLDivElement>();
    const component = mount(<><NxDateInput ref={ref} { ...minimalProps } /></>);
    expect(ref.current).toBeDefined();
    expect(component.find('.nx-text-input').getDOMNode()).toBe(ref.current);
  });
});
