/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableHead from '../NxTableHead';
import NxTableRow from '../../NxTableRow/NxTableRow';

describe('NxTableHead', function () {
  it('sets the isHeader property on children', function () {
    expect(shallow(<NxTableHead><NxTableRow /></NxTableHead>).contains(<NxTableRow isHeader />)).toBe(true);
  });

  it('passes additional props through', function () {
    expect(shallow(<NxTableHead className="test" />)).toMatchSelector('thead.test');
  });
});
