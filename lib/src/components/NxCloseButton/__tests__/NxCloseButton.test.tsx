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
import NxCloseButton from '../NxCloseButton';
import Close from '../../../icons/Close';

describe('NxCloseButton', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxCloseButton, {});

  it('renders a button with type=button with aria-label "Close"', function() {
    expect(getShallowComponent()).toMatchSelector('button');
    expect(getShallowComponent()).toHaveProp('aria-label', 'Close');
    expect(getShallowComponent()).toHaveProp('type', 'button');
  });

  it('adds the nx-btn, nx-btn--icon-only, and nx-btn-close classes', function() {
    const component = getShallowComponent();

    expect(component).toHaveClassName('nx-btn');
    expect(component).toHaveClassName('nx-btn--icon-only');
    expect(component).toHaveClassName('nx-btn--close');
  });

  it('passes the specified classes to the button', function() {
    expect(getShallowComponent({ className: 'foo' })).toHaveClassName('foo');
    expect(getShallowComponent({ className: 'foo' })).toHaveClassName('nx-btn--close');
  });

  it('passes other props on to the NxButton', function() {
    expect(getShallowComponent({ id: 'foo' })).toHaveProp('id', 'foo');
  });

  it('contains a Close icon', function() {
    expect(getShallowComponent().children()).toMatchSelector(Close);
  });

  it('sets aria-disabled if the className includes a disabled class', function() {
    expect(getShallowComponent()).toHaveProp('aria-disabled', false);
    expect(getShallowComponent({ className: 'disabled foo' })).toHaveProp('aria-disabled', true);
  });

  it('fowards a ref to the button', function() {
    const ref = React.createRef<HTMLButtonElement>(),
        component = mount(<><NxCloseButton ref={ref} /></>);

    expect(component.getDOMNode()).toBe(ref.current);
  });
});
