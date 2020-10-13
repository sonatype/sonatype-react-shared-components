/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faSort, faSortDown, faSortUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

  it('adds the correct classnames when the cell metaInfo', function () {
    expect(getShallowComponent({ metaInfo: true })).toMatchSelector('td.nx-cell.nx-cell--meta-info');
  });

  it('adds the correct classnames when the cell isNumeric', function () {
    expect(getShallowComponent({ isNumeric: true })).toMatchSelector('td.nx-cell.nx-cell--num');
  });

  it('adds the correct classnames when the cell hasIcon', function () {
    expect(getShallowComponent({ hasIcon: true })).toMatchSelector('td.nx-cell.nx-cell--icon');
  });

  it('adds the correct classnames when has a filter', function () {
    expect(getShallowComponent({ isFilter: true })).toMatchSelector('td.nx-cell.nx-table-cell--filter-header');
  });

  describe('when the chevron prop is true', function() {
    it('adds the nx-cell--chevron class', function() {
      expect(getShallowComponent({ chevron: undefined })).not.toHaveClassName('nx-cell--chevron');
      expect(getShallowComponent({ chevron: null })).not.toHaveClassName('nx-cell--chevron');
      expect(getShallowComponent({ chevron: false })).not.toHaveClassName('nx-cell--chevron');

      expect(getShallowComponent({ chevron: true })).toHaveClassName('nx-cell--chevron');
    });

    it('ignores the children and sort settings and adds a Chevron icon child', function() {
      const component = getShallowComponent({
        chevron: true,
        sortDir: 'asc',
        children: <span>foo</span>
      });

      function Fixture() {
        return <NxFontAwesomeIcon icon={faChevronRight} />;
      }

      expect(component.children()).toMatchElement(<Fixture />);
    });
  });

  it('shows the sortable icon when the cell isSortable but has no sort direction', function () {
    const component = getShallowComponent({ isSortable: true });

    expect(component.find('.nx-cell__sort-icons.fa-layers')).toContainReact(<NxFontAwesomeIcon icon={faSort}/>);
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
