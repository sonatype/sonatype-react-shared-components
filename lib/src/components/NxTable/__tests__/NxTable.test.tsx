/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTable from '../NxTable';
import NxTableHead from '../../NxTableHead/NxTableHead';
import NxTableRow from '../../NxTableRow/NxTableRow';
import NxTableCell from '../../NxTableCell/NxTableCell';
import NxTableBody from '../../NxTableBody/NxTableBody';

describe('NxTable', function() {
  it('renders a table with the expected class names and id', function() {
    const component = shallow(<NxTable id="test" className="test" />);

    expect(component).toMatchSelector('table.nx-table.test#test');
  });

  it('computes the columns in NxTableHead and passes them to NxTableBody', function() {
    const component = shallow(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell />
          </NxTableRow>
        </NxTableHead>
        <NxTableBody />
      </NxTable>
    );

    expect(component.findWhere(child => child.type() === NxTableBody)).toHaveProp('columns', 1);
  });

  it('does not pass columns to NxTableBody', function () {
    const component = shallow(
      <NxTable>
        <NxTableBody />
      </NxTable>
    );

    expect(component.find(NxTableBody)).not.toHaveProp('columns');
  });

  it('renders the NxTableHead', function() {
    expect(shallow(<NxTable><NxTableHead /></NxTable>)).toContainReact(<NxTableHead />);
  });
});
