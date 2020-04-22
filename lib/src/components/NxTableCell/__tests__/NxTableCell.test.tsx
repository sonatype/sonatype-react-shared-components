/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxTableCell from '../NxTableCell';

describe('NxTableCell', function () {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxTableCell, {});

  it('renders a table with the expected class names', function () {
    expect(getShallowComponent({ className: 'test' })).toMatchSelector('td.nx-cell.test');
  });

  it('adds the correct classnames when the cell isHeader', function () {
    expect(getShallowComponent({ isHeader: true })).toMatchSelector('th.nx-cell.nx-cell--header');
  });

  it('adds the correct classnames when the cell isEmpty', function () {
    expect(getShallowComponent({ isEmpty: true })).toMatchSelector('td.nx-cell.nx-cell--empty');
  });

  it('adds the correct classnames when the cell isError', function () {
    expect(getShallowComponent({ isError: true })).toMatchSelector('td.nx-cell.nx-error');
  });

  it('adds the correct classnames when the cell isNumeric', function () {
    expect(getShallowComponent({ isNumeric: true })).toMatchSelector('td.nx-cell.nx-cell--num');
  });

  it('adds the correct classnames when the cell hasIcon', function () {
    expect(getShallowComponent({ hasIcon: true })).toMatchSelector('td.nx-cell.nx-cell--icon');
  });

  it('shows the sortable icon when the cell isSortable but has no sort direction', function () {
    const component = getShallowComponent({ isSortable: true });

    expect(component.find('.nx-cell__sort-icons.fa-layers.fa-fw')).toContainReact(<NxFontAwesomeIcon icon={faSort}/>);
  });

  it('shows the sort ascending icon when the cell isSortable and has a sort direction "asc"', function () {
    const component = getShallowComponent({ isSortable: true, sortDir: 'asc' });

    expect(component).toContainMatchingElement('.nx-cell__sort-icons');
    expect(component.find('NxFontAwesomeIcon').first()).toHaveProp('icon', faSortDown);
    expect(component.find('NxFontAwesomeIcon').last()).toHaveProp('icon', faSortUp);
  });

  it('shows the sort descending icon when the cell isSortable and has a sort direction "desc"', function () {
    const component = getShallowComponent({ isSortable: true, sortDir: 'desc' });

    expect(component).toContainMatchingElement('.nx-cell__sort-icons');
    expect(component.find('NxFontAwesomeIcon').first()).toHaveProp('icon', faSortUp);
    expect(component.find('NxFontAwesomeIcon').last()).toHaveProp('icon', faSortDown);
  });
});
