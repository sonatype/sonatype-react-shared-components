/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableRow from '../NxTableRow';
import NxTableCell from '../../NxTableCell/NxTableCell';

describe('NxTableRow', function () {
  it('sets the correct class names', function () {
    expect(shallow(<NxTableRow className="test" />)).toMatchSelector('tr.test');
  });

  it('sets the header class', function() {
    expect(shallow(<NxTableRow isHeader />)).toMatchSelector('tr.nx-table-row--header');
  });

  it('sets the clickable class', function () {
    expect(shallow(<NxTableRow isClickable />)).toMatchSelector('tr.nx-clickable');
  });

  it('passes through arbitrary props', function() {
    expect(shallow(<NxTableRow id="test" />)).toMatchSelector('#test');
  });

  it('sets the isHeader property on children', function () {
    expect(shallow(<NxTableRow isHeader><NxTableCell /></NxTableRow>).contains(<NxTableCell isHeader />)).toBe(true);
  });
});
