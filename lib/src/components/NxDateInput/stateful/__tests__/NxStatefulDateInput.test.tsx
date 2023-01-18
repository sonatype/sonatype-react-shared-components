/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import { PrivateNxStatefulTextInput } from '../../../NxTextInput/stateful/NxStatefulTextInput';
import NxStatefulDateInput, { Props } from '../NxStatefulDateInput';

describe('NxStatefulDateInput', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulDateInput, {});

  it('should ignore type attribute', function() {
    const component = getShallowComponent({ type: 'text' } as Partial<Props>);
    expect(component.find(PrivateNxStatefulTextInput)).toHaveProp('type', 'date');
  });

  it('renders an PrivateNxStatefulTextInput under the hood', function() {
    const component = getShallowComponent({ className: 'foo' });
    expect(component.find(PrivateNxStatefulTextInput)).toExist();
  });

  it('renders a PrivateNxStatefulTextInput with specified attributes', function() {
    const component = getShallowComponent({
      className: 'foo',
      defaultValue: '2021-10-04'
    });

    const nxStatefulTextInput = component.find(PrivateNxStatefulTextInput);
    expect(nxStatefulTextInput).toHaveProp('className', 'foo');
    expect(nxStatefulTextInput).toHaveProp('defaultValue', '2021-10-04');
  });

  it('should pass in ref to the input element', function() {
    const ref = React.createRef<HTMLDivElement>();
    const component = mount(<><NxStatefulDateInput ref={ref} /></>);
    expect(ref.current).toBeDefined();
    expect(component.find('.nx-text-input').getDOMNode()).toBe(ref.current);
  });
});
