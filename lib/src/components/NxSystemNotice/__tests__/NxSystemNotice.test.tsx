/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import NxSystemNotice from '../NxSystemNotice';

describe('NxSystemNotice', function() {
  describe('NxSystemNotice', function() {
    it('makes a <div> with an nx-system-notice class', function() {
      expect(shallow(<NxSystemNotice/>)).toMatchSelector('div.nx-system-notice');
    });
  });

  describe('NxSystemNotice.Container', function() {
    it('makes a <div> with an nx-system-notice-container class', function() {
      expect(shallow(<NxSystemNotice.Container/>)).toMatchSelector('div.nx-system-notice-container');
    });
  });
});
