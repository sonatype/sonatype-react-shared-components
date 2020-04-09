/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableCell from '../NxTableCell';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxTableCell', function () {
  it('renders a table with the expected class names', function () {
    expect(shallow(<NxTableCell className="test"/>)).toMatchSelector('td.nx-cell.test');
  });

  it('adds the correct classnames when the cell isHeader', function() {
    expect(shallow(<NxTableCell isHeader />)).toMatchSelector('th.nx-cell.nx-cell--header');
  });

  it('adds the correct classnames when the cell isEmpty', function () {
    expect(shallow(<NxTableCell isEmpty />)).toMatchSelector('td.nx-cell.nx-cell--empty');
  });

  it('adds the correct classnames when the cell isError', function () {
    expect(shallow(<NxTableCell isError />)).toMatchSelector('td.nx-cell.nx-error');
  });

  it('adds the correct classnames when the cell isNumeric', function () {
    expect(shallow(<NxTableCell isNumeric />)).toMatchSelector('td.nx-cell.nx-cell--num');
  });

  it('adds the correct classnames when the cell hasIcon', function () {
    expect(shallow(<NxTableCell hasIcon />)).toMatchSelector('td.nx-cell.nx-cell--icon');
  });

  it('shows the sortable icon when the cell isSortable but has no sort direction', function() {
    const component = shallow(<NxTableCell isSortable />);

    expect(component.contains(<NxFontAwesomeIcon icon={faSort} fixedWidth />)).toBe(true);
  });

  it('shows the sort ascending icon when the cell isSortable and has a sort direction "asc"', function () {
    const component = shallow(<NxTableCell isSortable sortDir="asc"/>);

    expect(component.contains(<NxFontAwesomeIcon icon={faSortUp} fixedWidth />)).toBe(true);
  });

  it('shows the sort descending icon when the cell isSortable and has a sort direction "desc"', function () {
    const component = shallow(<NxTableCell isSortable sortDir="desc" />);

    expect(component.contains(<NxFontAwesomeIcon icon={faSortDown} fixedWidth />)).toBe(true);
  });
});
