/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';
import {
  NxTable,
  NxTile,
  NxH3,
  NxP,
  NxCode,
  NxTextLink,
  NxTabs,
  NxTabList,
  NxTab,
  NxTabPanel,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryMultiExampleTile}
  from '../../gallery-components/GalleryTiles';

import simpleReactExample from './NxTableSimpleExample';
import numberColumnReactExample from './NxTableNumberColumnExample';
import iconColumnReactExample from './NxTableIconColumnExample';
import truncationReactExample from './NxTableTruncationExample';
import fixedLayoutReactExample from './NxTableFixedLayoutExample';
import clickableRowReactExample from './NxTableClickableExample';
import clickableRowCustomIconReactExample from './NxTableClickableCustomExample';
import iconButtonsReactExample from './NxTableIconButtonExample';
import sortingReactExample from './NxTableSortableExample';
import loadingExample from './NxTableLoadingExample';
import errorReactExample from './NxTableErrorExample';
import emptyReactExample from './NxTableEmptyExample';
import customMetaInfoReactExample from './NxTableMetaInfoExample';
import filteringReactExample from './NxTableFilterExample';
import filterRowBtnReactExample from './NxTableFilterRowBtnExample';
import NxTablePaginationExample from './NxTablePaginationExample';
import NxTablePaginationFilterExample from './NxTablePaginationFilterExample';

import sortingHtmlExample from '../../styles/NxTable/NxTableSortableExample';
import filteringHtmlExample from '../../styles/NxTable/NxTableFilterExample';

const simpleReactCode = require('./NxTableSimpleExample?raw'),
    numberColumnReactCode = require('./NxTableNumberColumnExample?raw'),
    iconColumnReactCode = require('./NxTableIconColumnExample?raw'),
    truncationReactCode = require('./NxTableTruncationExample?raw'),
    fixedLayoutReactCode = require('./NxTableFixedLayoutExample?raw'),
    clickableRowReactCode = require('./NxTableClickableExample?raw'),
    clickableRowCustomIconReactCode = require('./NxTableClickableCustomExample?raw'),
    iconButtonsReactCode = require('./NxTableIconButtonExample?raw'),
    sortingReactCode = require('./NxTableSortableExample?raw'),
    filteringReactCode = require('./NxTableFilterExample?raw'),
    filterRowBtnReactCode = require('./NxTableFilterRowBtnExample?raw'),
    tablePaginationExample = require('./NxTablePaginationExample?raw'),
    tablePaginationFilterExample = require('./NxTablePaginationFilterExample?raw'),
    loadingCode = require('./NxTableLoadingExample?raw'),
    errorReactCode = require('./NxTableErrorExample?raw'),
    emptyReactCode = require('./NxTableEmptyExample?raw'),
    customMetaInfoReactCode = require('./NxTableMetaInfoExample?raw');

const tableSimpleHtmlExample = require('../../styles/NxTable/NxTableDefaultExample.html'),
    numberColumnHtmlExample = require('./NxTableNumberColumnExample.html'),
    iconColumnHtmlExample = require('./NxTableIconColumnExample.html'),
    clickableRowHtmlExample = require('../../styles/NxTable/NxTableClickableExample?raw'),
    clickableRowCustomIconHtmlExample = require('../../styles/NxTable/NxTableClickableExample?raw'),
    emptyHtmlExample = require('../../styles/NxTable/NxTableEmptyExample.html'),
    customMetaInfoHtmlExample = require('./NxTableMetaInfoExample.html'),
    filteringHtmlCode = require('../../styles/NxTable/NxTableFilterExample?raw'),
    sortingHtmlCode = require('../../styles/NxTable/NxTableSortableExample?raw');

import './NxTablePaginationExample.scss';
import './NxTablePaginationFilterExample.scss';
import '../../styles/NxTable/NxTableTruncationAndWrappingExample.scss';
import '../../styles/NxTable/NxTableFixedLayoutExample.scss';

const tablePaginationStyles = require('./NxTablePaginationExample.scss?raw'),
    tablePaginationFilterStyles = require('./NxTablePaginationFilterExample.scss?raw'),
    truncationStyles = require('../../styles/NxTable/NxTableTruncationAndWrappingExample.scss?raw'),
    fixedLayoutStyles = require('../../styles/NxTable/NxTableFixedLayoutExample.scss?raw');

const truncationAndWrappingCodeExamples = [
      truncationReactCode,
      { content: truncationStyles, language: 'scss'}
    ],
    fixedLayoutCodeExamples = [
      fixedLayoutReactCode,
      { content: fixedLayoutStyles, language: 'scss'}
    ];

const paginationCodeExamples = [
      tablePaginationExample,
      { content: tablePaginationStyles, language: 'scss'}
    ],
    paginationFilterCodeExamples = [
      tablePaginationFilterExample,
      { content: tablePaginationFilterStyles, language: 'scss'}
    ];

export default function NxTablePage() {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
        <NxTabList>
          <NxTab>Usage</NxTab>
          <NxTab>Simple Examples</NxTab>
          <NxTab>Special Column Types</NxTab>
          <NxTab>Styling Customizations</NxTab>
          <NxTab>Complex Content</NxTab>
        </NxTabList>

        <NxTabPanel>
          <GalleryDescriptionTile>
            <NxP>
              A React component and basic HTML styles are availble which encapsulate and assist with the styles for HTML
              tables.
            </NxP>
            <NxP>
              For guidance on the construction of a scrolling table, see the scrolling example on
              the <NxCode>nx-table-container</NxCode> HTML element page.
            </NxP>
            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable Props and Classes</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                The top-level component to use when displaying tables of data.
                It can have <NxCode>NxTable.Head</NxCode> and
                {' '}<NxCode>NxTable.Body</NxCode> components as children.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;table&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/table">
                        HTML table Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;table&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                The top-level component to use when displaying tables of data.
                It can have <NxCode>NxTable.Head</NxCode> and
                {' '}<NxCode>NxTable.Body</NxCode> components as children.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;table&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/table">
                        HTML table Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;table&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable.Head</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                Equivalent to the <NxCode>&lt;thead&gt;</NxCode> element.
                The <NxCode>NxTable.Row</NxCode> component is the only valid child.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;thead&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/thead">
                        HTML thead Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable.Head</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;thead&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable.Body</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                Equivalent to the <NxCode>&lt;tbody&gt;</NxCode> element.
                It should have <NxCode>NxTable.Row</NxCode> for children.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>isLoading</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>Used to show a loading spinner instead of the table content</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>error</NxTable.Cell>
                    <NxTable.Cell>string</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>Used to show an error message instead of the table content</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>retryHandler</NxTable.Cell>
                    <NxTable.Cell>Function</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Used to provide the handler for the Retry button that appears when the error state is active.
                      Required when <NxCode>error</NxCode> is present.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>emptyMessage</NxTable.Cell>
                    <NxTable.Cell>string</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Used to show a message when the table is otherwise empty (i.e. when it has no externally specified
                      child rows, is not loading, and is not in an error state. This prop must be specified if the
                      table is empty. If this table is not empty, this prop may be specified, having no effect.
                      In essence, the best practice is to specify this prop on all tables which <em>may</em> be empty.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;tbody&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody">
                        HTML tbody Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable.Body</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;tbody&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable.Row</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                Equivalent to the <NxCode>&lt;tr&gt;</NxCode> element.
                It should have <NxCode>NxTable.Cell</NxCode> for children.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>isClickable</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>Indicates that a table row is clickable.</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>isFilterHeader</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>Indicates that this row is a table header row containing filter inputs.</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>selected</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      For clickable table rows, indicates that this row is the currently selected one.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>clickAccessibleLabel</NxTable.Cell>
                    <NxTable.Cell>string</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      The accessible name to set on the click target for this row – i.e. the value to read out in a
                      screenreader when the row (the icon button at the end, really) is focused. If not specified, the
                      full text content of all cells in the row will be used as the label.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;tr&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/tr">
                        HTML tr Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable.Row</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;tr&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>NxTable.Cell</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                Equivalent to the <NxCode>&lt;th&gt;</NxCode> or
                {' '}<NxCode>&lt;td&gt;</NxCode> element.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Prop</NxTable.Cell>
                    <NxTable.Cell>Type</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell>metaInfo</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Sets the <NxCode>.nx-cell--meta-info</NxCode> class on the cell. This class is
                      applied to table cells that provide meta-information about the table data, such as loading, error,
                      and empty table states. For those three states, the caller of
                      the <NxCode>NxTable</NxCode> react component does not manage the table cells
                      directly (instead using the appropriate props on <NxCode>NxTable.Body</NxCode>), and
                      therefore does not need to use this prop. However, the prop is available for any
                      other meta-info states that the caller might wish to convey. The intended usage is that a cell
                      using this prop would be the only cell in the only row in the table body, and would have
                      a <NxCode>colspan</NxCode> attribute causing it to span all the way across the
                      table.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>isNumeric</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>Used for columns that contain numeric information</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>isSortable</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Used for column headers that can be sorted. Should not be applied to data cells
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>sortDir</NxTable.Cell>
                    <NxTable.Cell style={{whiteSpace: 'nowrap'}}>asc | desc</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Used to indicate the sorting direction applied.
                      A null value indicates the column is not yet sorted.
                      This should only be used for <NxCode>NxTable.Cell</NxCode> components
                      in the <NxCode>NxTable.Head</NxCode>
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>hasIcon</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Used to indicate a column whose data cells contain only one or
                      more <NxCode>NxFontAwesomeIcon</NxCode>s
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>rowBtnIcon</NxTable.Cell>
                    <NxTable.Cell>FontAwesome Icon Descriptor</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      Desginates a cell that should contain only the the specified icon. This is to be used at that end
                      of clickable table rows. <NxCode>NxTable.Cell</NxCode>s with this prop set will
                      self-populate with the icon, and do not take <NxCode>children</NxCode>. The icon
                      will be wrapped in a button for accessibility purposes, with the button's accessible name set by
                      the row's <NxCode>clickAccessibleLabel</NxCode> prop or generated from the text contents of the
                      rest of the row.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>chevron</NxTable.Cell>
                    <NxTable.Cell>boolean</NxTable.Cell>
                    <NxTable.Cell>false</NxTable.Cell>
                    <NxTable.Cell>
                      An alternative to <NxCode>rowBtnIcon</NxCode> for the most common clickable row icon: the
                      right-facing chevron. This is provided for convenience and backwards compatibility. If set
                      simultaneously with <NxCode>rowBtnIcon</NxCode>, that prop takes precedence.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>HTML <NxCode>&lt;td&gt;</NxCode> Attributes</NxTable.Cell>
                    <NxTable.Cell>
                      <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/td">
                        HTML td Attributes
                      </NxTextLink>
                    </NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>
                      <NxCode>NxTable.Cell</NxCode> supports any HTML attribute that's normally
                      supported by <NxCode>&lt;td&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Class</NxTable.Cell>
                    <NxTable.Cell>Location</NxTable.Cell>
                    <NxTable.Cell>Details</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table</NxCode></NxTable.Cell>
                    <NxTable.Cell>Top-Level</NxTable.Cell>
                    <NxTable.Cell>
                      Default table class. Note that a properly configured table require
                      <NxCode>&lt;thead&gt;</NxCode>, <NxCode>&lt;tbody&gt;</NxCode>
                      and correct classes on rows and cells.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table--clickable</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-table</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      A "clickable" table is one where the table rows accept a click event and (usually) navigate to
                      another view.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table--scrollable</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-table</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      <NxWarningAlert>
                        Deprecated. Use an <NxCode>.nx-table-container.nx-scrollable</NxCode> wrapper
                        around a plain <NxCode>.nx-table</NxCode> instead.
                      </NxWarningAlert>
                      When a table which scrolls in of itself is desired, wrap the table in
                      an <NxCode>.nx-scrollable</NxCode> wrapper and give it a class
                      of <NxCode>.nx-table--scrollable</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table--fixed-layout</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-table</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      Used to apply{' '}
                      <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout">
                        <NxCode>table-layout: fixed</NxCode>
                      </NxTextLink>
                      {' '}to <NxCode>nx-table</NxCode>s. This class should be used in lieu of setting
                      <NxCode>table-layout</NxCode> manually, as it also makes some adjustments to the
                      behavior of other table classes in order to make them compatible with a fixed layout.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table-row</NxCode></NxTable.Cell>
                    <NxTable.Cell>Element</NxTable.Cell>
                    <NxTable.Cell>Basic table row class.</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-table-row--header</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-table-row</NxCode></NxTable.Cell>
                    <NxTable.Cell>Used for table rows within a <NxCode>&lt;thead&gt;</NxCode>.</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>Element</NxTable.Cell>
                    <NxTable.Cell>
                      Standard tabel cell class, applied to both <NxCode>&lt;td&gt;</NxCode> and
                      <NxCode>&lt;th&gt;</NxCode>.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-cell--header</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>Used for style table header cells.</NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-cell--num</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      Used to style header and body cells whose content is numerical. Centers the header and content.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>.nx-cell--meta-info</NxCode></NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      Applied to table cells that provide meta-information about the table data. There are three known
                      use cases for this: loading states, error states, and empty states. In each of these cases, the
                      table body should contain a single row with a single cell. That cell should use the `colspan`
                      attribute to stretch all the way across the table, and should use this class.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell--icon</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      This class should be used when the only contents of a cell one or more icons.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell--row-btn</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      This class is intended for the cells holding the icons that should be placed on the right
                      side of clickable table rows. It creates a column of the appropriate width for the icon. It
                      is <em>not</em> necessary to additional use <NxCode>.nx-cell--icon</NxCode> on these
                      cells.
                      <NxWarningAlert>
                        When used within a fixed-layout table (e.g. with <NxCode>.nx-table--fixed-layout</NxCode>), care
                        must be taken to ensure that cells with this class have the appropriate width. By default they
                        are given a width appropriate for the right-chevron icon. If a different icon is used, a
                        different width must be set on the element such that the padding box of the table cell matches
                        the border box of the enclosed button.
                      </NxWarningAlert>
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell--chevron</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>Deprecated alias for <NxCode>nx-cell--row-btn</NxCode></NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell--filter-header</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      Used for style table header cells with a filter
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell__sort-btn</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>
                      Child of <NxCode>.nx-cell--header</NxCode> wrapping all other content
                    </NxTable.Cell>
                    <NxTable.Cell>
                      For a header cell that contains sort icons, the cell should contain a button with this class
                      which then contains the actual cell header text and sort icons. This improves accessibility of the
                      sorting feature. The button should have an accessible name which describes the header name and the
                      current sort direction of this column.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell__row-btn</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>
                      Child of <NxCode>.nx-cell--row-btn</NxCode> which then wraps the actual icon
                    </NxTable.Cell>
                    <NxTable.Cell>
                      In order to make clickable rows accessible, the icon should be contained within a button
                      bearing this class. The button should additionally have an accessible name which describes the
                      row, typically by including its full text content.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell>
                      <NxCode>.nx-cell--filter-header</NxCode>
                    </NxTable.Cell>
                    <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
                    <NxTable.Cell>
                      Used for style table header cells with a filter
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>Deprecated Component Names</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                As seen above, the various child components of <NxCode>NxTable</NxCode> are attached as properties on
                the <NxCode>NxTable</NxCode> object and typically accessed using JavaScript dot notation. In previous
                versions of RSC, this was not the case and the subobjects were instead exposed as top level exports
                with names along the lines of <NxCode>NxTable.Row</NxCode>, <NxCode>NxTable.Cell</NxCode>, and so on.
                These old names are still exported by RSC for backwards compatibility, but are deprecated and may be
                removed in a future major version release.
              </NxP>
            </NxTile.Subsection>

            <NxTile.Subsection>
              <NxTile.SubsectionHeader>
                <NxH3>SCSS Helper Functions</NxH3>
              </NxTile.SubsectionHeader>
              <NxP>
                When constructing a table of paginated data, it is often the case that the table is intended to be
                exactly tall enough to contain one full page's worth of rows, even when on the last page, which may
                contain fewer
                rows. Achieving this effect requires setting an explicit height on the table container element that is
                equal to the height that it would implicitly get when full. Calculating this height however is
                somewhat complex, requiring summing up the heights of the various table elements in play. Therefore
                RSC provides a SCSS helper function which will return the height of
                the <NxCode>.nx-table-container</NxCode>'s content box for a paginated table with the
                given parameters. The function, located in
                the <NxCode>scss-shared/_nx-table-helpers.scss</NxCode> file, is named
                <NxCode>pagination-table-height</NxCode>. See the description of its parameters below.
              </NxP>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Name</NxTable.Cell>
                    <NxTable.Cell>Required</NxTable.Cell>
                    <NxTable.Cell>Default Value</NxTable.Cell>
                    <NxTable.Cell>Description</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>$body-row-count</NxCode></NxTable.Cell>
                    <NxTable.Cell>Yes</NxTable.Cell>
                    <NxTable.Cell>N/A</NxTable.Cell>
                    <NxTable.Cell>
                      The number of rows of content that the table body should have room for. This assumes that each
                      row contains only a single line of text. Wrapping text or other elements that expand the size
                      of any row will throw off the calculation.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>$header-filter-row-count</NxCode></NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>0</NxTable.Cell>
                    <NxTable.Cell>
                      The number of filter header rows on the table.
                    </NxTable.Cell>
                  </NxTable.Row>
                  <NxTable.Row>
                    <NxTable.Cell><NxCode>$header-row-count</NxCode></NxTable.Cell>
                    <NxTable.Cell>No</NxTable.Cell>
                    <NxTable.Cell>1</NxTable.Cell>
                    <NxTable.Cell>
                      The number of standard header rows on the table. This number should not include the count of any
                      filter header rows.
                    </NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Body>
              </NxTable>
            </NxTile.Subsection>

            <NxP>
              For guidance on the construction of a scrolling table, see the scrolling example on
              the <NxCode>nx-table-container</NxCode> HTML element page.
            </NxP>
          </GalleryDescriptionTile>
        </NxTabPanel>

        <NxTabPanel>
          <GalleryMultiExampleTile title="Simple Example"
                                   reactLiveExample={simpleReactExample}
                                   reactCodeExample={simpleReactCode}
                                   htmlLiveExample={tableSimpleHtmlExample}>
            A basic example of the <NxCode>NxTable</NxCode> React components family and
            the <NxCode>nx-table</NxCode> CSS class family.
          </GalleryMultiExampleTile>
        </NxTabPanel>
        <NxTabPanel>
          <GalleryMultiExampleTile title="Number Column Example"
                                   reactLiveExample={numberColumnReactExample}
                                   reactCodeExample={numberColumnReactCode}
                                   htmlLiveExample={numberColumnHtmlExample}>
            A table containing a column whose data is strictly numerical. Such columns are designated by the
            <NxCode>isNumeric</NxCode> prop in React or the <NxCode>nx-cell--num</NxCode> class when using plain
            HTML.
          </GalleryMultiExampleTile>
          <GalleryMultiExampleTile title="Icon Column Example"
                                   reactLiveExample={iconColumnReactExample}
                                   reactCodeExample={iconColumnReactCode}
                                   htmlLiveExample={iconColumnHtmlExample}>
            A table containing a column whose data consists only of icons. Such columns are designated by the
            <NxCode>hasIcon</NxCode> prop in React or the <NxCode>nx-cell--icon</NxCode> class when using plain
            HTML.
          </GalleryMultiExampleTile>
        </NxTabPanel>
        <NxTabPanel>
          <GalleryExampleTile title="Truncation and Wrapping Example"
                              id="nx-table-truncation-wrapping-example"
                              liveExample={truncationReactExample}
                              codeExamples={truncationAndWrappingCodeExamples}>
            A demonstration of text truncation and wrapping within table cells. The first column truncates, while the
            second wraps. Notice that wrapping is the default behavior. Truncation requires an extra element within the
            table cell, which must have an explicit width.
          </GalleryExampleTile>
          <GalleryExampleTile title="Fixed Layout Example"
                              id="nx-table-fixed-layout-example"
                              liveExample={fixedLayoutReactExample}
                              codeExamples={fixedLayoutCodeExamples}>
            This example demonstrates the nx-table--fixed-layout class which is typically used in conjunction with
            a custom class to explicitly set the widths of table rows. Notice here that the implementation of a
            truncated column is simpler: the inner <NxCode>div</NxCode> is not necessary and instead
            the <NxCode>.nx-truncate-ellipsis</NxCode> class can be applied directly to the table cell.
          </GalleryExampleTile>
        </NxTabPanel>
        <NxTabPanel>
          <GalleryMultiExampleTile title="Clickable Row Example"
                                   id="nx-table-clickable-example"
                                   reactLiveExample={clickableRowReactExample}
                                   reactCodeExample={clickableRowReactCode}
                                   htmlLiveExample={clickableRowHtmlExample}>
            An example where the rows are styled to indicate that they are clickable.
          </GalleryMultiExampleTile>

          <GalleryMultiExampleTile title="Clickable Row Custom Icon Example"
                                   id="nx-table-clickable-custom-example"
                                   reactLiveExample={clickableRowCustomIconReactExample}
                                   reactCodeExample={clickableRowCustomIconReactCode}
                                   htmlLiveExample={clickableRowCustomIconHtmlExample}>
            An example where the rows are styled to indicate that they are clickable, using a custom icon rather than
            the typical right-facing chevron.
          </GalleryMultiExampleTile>

          <GalleryExampleTile title="Icon Buttons in Rows Example"
                              id="nx-table-icon-buttons-example"
                              liveExample={iconButtonsReactExample}
                              codeExamples={iconButtonsReactCode}>
            A demonstration of an <NxCode>NxTable</NxCode> with icon-only buttons and an icon-only dropdown in both the
            filter row and the content rows. Note that the buttons in the filter row are the standard height while the
            buttons in the content rows are smaller. The default styles only support these sorts of buttons in the
            rightmost column.
          </GalleryExampleTile>

          <GalleryExampleTile title="Loading Example"
                              id="nx-table-loading-example"
                              liveExample={loadingExample}
                              codeExamples={loadingCode}>
            An example of how <NxCode>NxTable</NxCode> should be used while its data is loading.
          </GalleryExampleTile>

          <GalleryExampleTile title="Error Example"
                              id="nx-table-error-example"
                              liveExample={errorReactExample}
                              codeExamples={errorReactCode}>
            An example of how <NxCode>NxTable</NxCode> should be used to indicate that there was an error
            loading its data.
          </GalleryExampleTile>

          <GalleryMultiExampleTile title="Empty Example"
                                   reactLiveExample={emptyReactExample}
                                   reactCodeExample={emptyReactCode}
                                   htmlLiveExample={emptyHtmlExample}>
            An example of how <NxCode>NxTable</NxCode> should be used to indicate that there is no data
            to be seen.
          </GalleryMultiExampleTile>

          <GalleryMultiExampleTile title="Custom Meta-Info Example"
                                   reactLiveExample={customMetaInfoReactExample}
                                   reactCodeExample={customMetaInfoReactCode}
                                   htmlLiveExample={customMetaInfoHtmlExample}>
            An example of how <NxCode>NxTable</NxCode> should be used in a custom meta-info situation.
          </GalleryMultiExampleTile>

          <GalleryMultiExampleTile title="Sortable Columns Example"
                                   id="nx-table-sortable-example"
                                   reactLiveExample={sortingReactExample}
                                   reactCodeExample={sortingReactCode}
                                   htmlLiveExample={sortingHtmlExample}
                                   htmlCodeExample={sortingHtmlCode}>
            An example with a sortable column.
          </GalleryMultiExampleTile>

          <GalleryMultiExampleTile title="Filter Columns Example"
                                   id="nx-table-filter-example"
                                   reactLiveExample={filteringReactExample}
                                   reactCodeExample={filteringReactCode}
                                   htmlLiveExample={filteringHtmlExample}
                                   htmlCodeExample={filteringHtmlCode}>
            An example with filter columns.
            The first column has a basic filter input, the rows will be filtered
            if any name contains the text provided in the input.
            The second column has a filter input which provides a suggestion capability, the rows will be filtered
            when the country contains the text provided in the input.
          </GalleryMultiExampleTile>

          <GalleryExampleTile title="Icon Button in Filter Row Example"
                              id="nx-table-icon-button-filter-row-example"
                              liveExample={filterRowBtnReactExample}
                              codeExamples={filterRowBtnReactCode}>
            A table with an additional icon button in the filter row.
          </GalleryExampleTile>

          <GalleryExampleTile title="Pagination Example"
                              id="nx-table-pagination-example"
                              liveExample={NxTablePaginationExample}
                              codeExamples={paginationCodeExamples}>
            An example of a table with an <NxCode>NxPagination</NxCode> component in the footer to control
            paging.
          </GalleryExampleTile>

          <GalleryExampleTile title="Pagination and Filtering Example"
                              id="nx-table-pagination-filter-example"
                              liveExample={NxTablePaginationFilterExample}
                              codeExamples={paginationFilterCodeExamples}>
            An example of a table with an <NxCode>NxPagination</NxCode> component in the footer to control
            paging as well as a row of filter headers. Demonstrates the use of
            the <NxCode>pagination-table-height</NxCode> SCSS function when a filter row is present.
          </GalleryExampleTile>
        </NxTabPanel>
      </NxTabs>
    </>
  );
}
