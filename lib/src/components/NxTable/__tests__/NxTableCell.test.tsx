/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faSort, faSortDown, faSortUp, faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { mount } from 'enzyme';
import 'jest-enzyme';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxTableCell from '../NxTableCell';
import NxTooltip from '../../NxTooltip/NxTooltip';
import { NxTableCellProps as Props } from '../types';
import { HeaderContext, RowContext } from '../contexts';

describe('NxTableCell', function () {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxTableCell, {}),
      getMountedHeaderComponent = (extraProps?: Props) => mount(
        <HeaderContext.Provider value={true}>
          <NxTableCell { ...extraProps }/>
        </HeaderContext.Provider>,
        { attachTo: document.createElement('tr') }
      ).children();

  it('renders a table with the expected class names', function () {
    expect(getShallowComponent({ className: 'test' })).toMatchSelector('td.nx-cell.test');
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

  describe('when the chevron prop is true', function() {

    describe('when not isHeader', function() {
      it('adds the nx-cell--row-btn class', function() {
        expect(getShallowComponent({ chevron: undefined })).not.toHaveClassName('nx-cell--row-btn');
        expect(getShallowComponent({ chevron: null })).not.toHaveClassName('nx-cell--row-btn');
        expect(getShallowComponent({ chevron: false })).not.toHaveClassName('nx-cell--row-btn');

        expect(getShallowComponent({ chevron: true })).toHaveClassName('nx-cell--row-btn');
      });

      it('ignores the children and sort settings and adds a Chevron icon child wrapped in a nx-cell__row-btn',
          function() {
            const component = getShallowComponent({
              chevron: true,
              sortDir: 'asc',
              children: <span>foo</span>
            });

            function Fixture() {
              return (
                <button className="nx-cell__row-btn"><NxFontAwesomeIcon icon={faChevronRight} /></button>
              );
            }

            expect(component.children()).toMatchElement(<Fixture />);
          }
      );

      it('sets the nx-cell__row-btn aria-label from the RowContext', function() {
        const component = mount(
          <RowContext.Provider value={{ label: 'foobar', isFilterHeader: false }}>
            <NxTableCell chevron/>
          </RowContext.Provider>,
          { attachTo: document.createElement('tr') }
        );

        expect(component.find('.nx-cell__row-btn')).toHaveProp('aria-label', 'foobar');
      });
    });

    describe('when isHeader', function() {
      it('renders a visually hidden header cell with the text "Select Row"', function() {
        const component = getMountedHeaderComponent({
          chevron: true,
          sortDir: 'asc',
          children: <span>foo</span>
        });

        expect(component).toMatchSelector('th.nx-cell.nx-cell--header');
        expect(component.children().length).toBe(1);
        expect(component.find('span')).not.toHaveText('foo');
        expect(component.find('span')).toHaveText('Select Row');
        expect(component.find('span')).toHaveClassName('nx-cell__row-btn-header-text');
      });
    });
  });

  describe('when the rowBtnIcon prop is set', function() {

    describe('when not isHeader', function() {
      it('adds the nx-cell--row-btn class', function() {
        expect(getShallowComponent({ rowBtnIcon: undefined })).not.toHaveClassName('nx-cell--row-btn');
        expect(getShallowComponent({ rowBtnIcon: null })).not.toHaveClassName('nx-cell--row-btn');

        expect(getShallowComponent({ rowBtnIcon: faEdit })).toHaveClassName('nx-cell--row-btn');
      });

      it('ignores the children and sort settings and adds the icon child wrapped in a nx-cell__row-btn',
          function() {
            const component = getShallowComponent({
              rowBtnIcon: faEdit,
              sortDir: 'asc',
              children: <span>foo</span>
            });

            function Fixture() {
              return (
                <button className="nx-cell__row-btn"><NxFontAwesomeIcon icon={faEdit} /></button>
              );
            }

            expect(component.children()).toMatchElement(<Fixture />);
          }
      );

      it('sets the nx-cell__row-btn aria-label from the RowContext', function() {
        const component = mount(
          <RowContext.Provider value={{ label: 'foobar', isFilterHeader: false }}>
            <NxTableCell rowBtnIcon={faEdit} />
          </RowContext.Provider>,
          { attachTo: document.createElement('tr') }
        );

        expect(component.find('.nx-cell__row-btn')).toHaveProp('aria-label', 'foobar');
      });
    });

    describe('when isHeader', function() {
      it('renders a visually hidden header cell with the text "Select Row"', function() {
        const component = getMountedHeaderComponent({
          rowBtnIcon: faEdit,
          sortDir: 'asc',
          children: <span>foo</span>
        });

        expect(component).toMatchSelector('th.nx-cell.nx-cell--header');
        expect(component.children().length).toBe(1);
        expect(component.find('span')).not.toHaveText('foo');
        expect(component.find('span')).toHaveText('Select Row');
        expect(component.find('span')).toHaveClassName('nx-cell__row-btn-header-text');
      });
    });
  });

  describe('when isHeader', function() {
    it('adds the nx-cell--header class', function() {
      expect(getMountedHeaderComponent()).toHaveClassName('nx-cell--header');
      expect(getMountedHeaderComponent()).toHaveClassName('nx-cell');
    });
  });

  describe('isSortable', function() {
    describe('when not isHeader', function() {
      it('renders as normal', function() {
        expect(getShallowComponent({ isSortable: true, children: 'foo' })).toMatchElement(
          <td className="nx-cell">foo</td>
        );
      });
    });

    describe('when isHeader', function() {
      it('sets aria-sort appropriately', function() {
        expect(getMountedHeaderComponent({ isSortable: true })).toHaveProp('aria-sort', 'none');
        expect(getMountedHeaderComponent({ isSortable: true, sortDir: 'asc' })).toHaveProp('aria-sort', 'ascending');
        expect(getMountedHeaderComponent({ isSortable: true, sortDir: 'desc' })).toHaveProp('aria-sort', 'descending');
      });

      it('wraps the cell contents in a tooltip specifying the content and sort direction', function() {
        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo' }).children()).toMatchSelector(NxTooltip);

        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo' }).find(NxTooltip))
            .toHaveProp('title', 'foo unsorted');

        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo', sortDir: 'asc' }).find(NxTooltip))
            .toHaveProp('title', 'foo ascending');

        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo', sortDir: 'desc' }).find(NxTooltip))
            .toHaveProp('title', 'foo descending');
      });

      it('adds an aria-label to the button matching the tooltip', function() {
        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo' }).find('button'))
            .toHaveProp('aria-label', 'foo unsorted');

        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo', sortDir: 'asc' }).find('button'))
            .toHaveProp('aria-label', 'foo ascending');

        expect(getMountedHeaderComponent({ isSortable: true, children: 'foo', sortDir: 'desc' }).find('button'))
            .toHaveProp('aria-label', 'foo descending');
      });

      it('wraps the cell contents in a button within the tooltip with the nx-cell__sort-btn class', function() {
        const tooltip = getMountedHeaderComponent({ isSortable: true, children: 'foo' }).children(),
            button = tooltip.find('button');

        expect(button).toMatchSelector('.nx-cell__sort-btn');
        expect(button).toHaveProp('type', 'button');
        expect(button).toHaveText('foo');
      });

      it('shows the appropriate sorting icons', function() {
        const unsortedIcons = getMountedHeaderComponent({ isSortable: true }).find('.nx-cell__sort-icons'),
            ascIcons = getMountedHeaderComponent({ isSortable: true, sortDir: 'asc' }).find('.nx-cell__sort-icons'),
            descIcons = getMountedHeaderComponent({ isSortable: true, sortDir: 'desc' }).find('.nx-cell__sort-icons');

        expect(unsortedIcons).toContainReact(<NxFontAwesomeIcon icon={faSort}/>);

        expect(ascIcons.find(NxFontAwesomeIcon).first()).toHaveProp('icon', faSortDown);
        expect(ascIcons.find(NxFontAwesomeIcon).last()).toHaveProp('icon', faSortUp);

        expect(descIcons.find(NxFontAwesomeIcon).first()).toHaveProp('icon', faSortUp);
        expect(descIcons.find(NxFontAwesomeIcon).last()).toHaveProp('icon', faSortDown);
      });
    });
  });

  describe('when the RowContext has isFilterHeader set', function() {
    it('renders a td even if the HeaderContext  is set', function() {
      const component = mount(
        <HeaderContext.Provider value={true}>
          <RowContext.Provider value={{ label: 'foobar', isFilterHeader: true }}>
            <NxTableCell />
          </RowContext.Provider>
        </HeaderContext.Provider>,
        { attachTo: document.createElement('tr') }
      );

      expect(component.find('td')).toHaveClassName('nx-cell');
    });
  });
});
