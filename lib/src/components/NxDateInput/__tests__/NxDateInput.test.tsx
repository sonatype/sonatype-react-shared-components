/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { mount } from 'enzyme';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxDateInput, { Props } from '../NxDateInput';
import NxTextInput from '../../NxTextInput/NxTextInput';

describe('NxDateInput', function() {
  const minimalProps = {
        value: '',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxDateInput, minimalProps);

  it('should have an NxTextInput under the hood', function() {
    const component = getShallowComponent();
    expect(component.find(NxTextInput)).toExist();
  });

  it('should ignore type attribute', function() {
    const component = getShallowComponent({ type: 'text' } as Partial<Props>);
    expect(component.find(NxTextInput)).toHaveProp('type', 'date');
  });

  it('should pass props to the NxTextInput component', function() {
    const component = getShallowComponent({
      className: 'test'
    });
    const nxTextInput = component.find(NxTextInput);
    expect(nxTextInput).toHaveClassName('test');
  });

  it('should pass in ref to the input element', function() {
    const ref = React.createRef<HTMLInputElement>(),
        component = mount(<><NxDateInput { ...minimalProps } ref={ref} /></>),
        domNode = component.find('input').getDOMNode();

    expect(ref.current).toBe(domNode);
  });
});
