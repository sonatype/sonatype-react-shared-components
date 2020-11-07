/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import NxTable from '../NxTable';
import NxTableHead from '../NxTableHead';
import NxTableRow from '../NxTableRow';
import NxTableCell from '../NxTableCell';
import NxTableBody from '../NxTableBody';

describe('NxTable', function() {
  it('renders a table with the expected class names and id', function() {
    const component = shallow(<NxTable id="test" className="test" />);

    expect(component).toMatchSelector('table.nx-table.test#test');
  });

  /*
   * How exactly the header and colSpan things work (using Context currently) is an implementation detail
   * and so is best tested at this level rather than testing each part of it in the subcomponents
   */

  it('renders children as table with correct classes and element types for headers', function() {
    const component = mount(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Foo</NxTableCell>
            <NxTableCell>Bar</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          <NxTableRow>
            <NxTableCell>0</NxTableCell>
            <NxTableCell>1024</NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    );

    expect(component.find('thead th').length).toBe(2);
    expect(component.find('thead td')).not.toExist();
    expect(component.find('tbody td').length).toBe(2);
    expect(component.find('tbody th')).not.toExist();

    expect(component.find('thead tr')).toHaveClassName('nx-table-row--header');
    expect(component.find('thead tr')).toHaveClassName('nx-table-row');

    expect(component.find('th.nx-cell.nx-cell--header').length).toBe(2);

    expect(component.find('tbody tr')).not.toHaveClassName('nx-table-row--header');
    expect(component.find('td.nx-cell--header')).not.toExist();

    // colSpan should not be getting set on table cells
    expect(component.find('td').findWhere(td => td.prop('colSpan') != null)).not.toExist();
  });

  it('Puts the correct colSpan on a loading meta-info cell', function() {
    const component = mount(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Foo</NxTableCell>
            <NxTableCell>Bar</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody isLoading />
      </NxTable>
    );

    expect(component.find('td')).toHaveProp('colSpan', 2);
    expect(component.find('td')).toHaveClassName('nx-cell--meta-info');
  });

  it('Puts the correct colSpan on an emptyMessage meta-info cell', function() {
    const component = mount(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Foo</NxTableCell>
            <NxTableCell>Bar</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody emptyMessage="Empty" />
      </NxTable>
    );

    expect(component.find('td')).toHaveProp('colSpan', 2);
    expect(component.find('td')).toHaveClassName('nx-cell--meta-info');
    expect(component.find('td')).toHaveText('Empty');
  });

  it('Puts the correct colSpan on an error meta-info cell', function() {
    const component = mount(
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Foo</NxTableCell>
            <NxTableCell>Bar</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody error="Error!"/>
      </NxTable>
    );

    expect(component.find('td')).toHaveProp('colSpan', 2);
    expect(component.find('td')).toHaveClassName('nx-cell--meta-info');
    expect(component.find('td')).toIncludeText('Error!');
  });
});
