/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';

import { NxErrorStatusIndicator, NxIntermediateStatusIndicator, NxNegativeStatusIndicator, NxPositiveStatusIndicator }
  from '../NxStatusIndicator';

describe('NxNegativeStatusIndicator', function() {
  it('makes a <span> tag with nx-status-indicator and nx-status-indicator--negative classes', function() {
    const nativeEl = mount(<NxNegativeStatusIndicator/>).children().children();
    expect(nativeEl).toMatchSelector('span.nx-status-indicator');
    expect(nativeEl).toHaveClassName('nx-status-indicator--negative');
  });

  it('sets the "status" role', function() {
    const nativeEl = mount(<NxNegativeStatusIndicator/>).children().children();
    expect(nativeEl).toHaveProp('role', 'status');
  });
});

describe('NxPositiveStatusIndicator', function() {
  it('makes a <span> tag with nx-status-indicator and nx-status-indicator--positive classes', function() {
    const nativeEl = mount(<NxPositiveStatusIndicator/>).children().children();
    expect(nativeEl).toMatchSelector('span.nx-status-indicator');
    expect(nativeEl).toHaveClassName('nx-status-indicator--positive');
  });

  it('sets the "status" role', function() {
    const nativeEl = mount(<NxPositiveStatusIndicator/>).children().children();
    expect(nativeEl).toHaveProp('role', 'status');
  });
});

describe('NxIntermediateStatusIndicator', function() {
  it('makes a <span> tag with nx-status-indicator and nx-status-indicator--intermediate classes', function() {
    const nativeEl = mount(<NxIntermediateStatusIndicator/>).children().children();
    expect(nativeEl).toMatchSelector('span.nx-status-indicator');
    expect(nativeEl).toHaveClassName('nx-status-indicator--intermediate');
  });

  it('sets the "status" role', function() {
    const nativeEl = mount(<NxIntermediateStatusIndicator/>).children().children();
    expect(nativeEl).toHaveProp('role', 'status');
  });
});

describe('NxErrorStatusIndicator', function() {
  it('makes a <span> tag with nx-status-indicator and nx-status-indicator--error classes', function() {
    const nativeEl = mount(<NxErrorStatusIndicator/>).children().children();
    expect(nativeEl).toMatchSelector('span.nx-status-indicator');
    expect(nativeEl).toHaveClassName('nx-status-indicator--error');
  });

  it('sets the "status" role', function() {
    const nativeEl = mount(<NxErrorStatusIndicator/>).children().children();
    expect(nativeEl).toHaveProp('role', 'status');
  });
});
