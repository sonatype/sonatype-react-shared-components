/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableRow from '../NxTableRow';

describe('NxTableRow', function () {
  it('sets the correct class names', function () {
    expect(shallow(<NxTableRow className="test" />)).toMatchSelector('tr.test');
  });

  it('sets the clickable class', function () {
    expect(shallow(<NxTableRow isClickable />)).toMatchSelector('tr.nx-clickable');
  });

  it('passes through arbitrary props', function() {
    expect(shallow(<NxTableRow id="test" />)).toMatchSelector('#test');
  });

  it('sets the filter header class', function() {
    expect(shallow(<NxTableRow isFilterHeader />)).toMatchSelector('tr.nx-table-row--filter-header');
  });
});
