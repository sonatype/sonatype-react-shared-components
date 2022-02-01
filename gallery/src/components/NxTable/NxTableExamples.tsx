/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode } from '@sonatype/react-shared-components';

import { GalleryExampleTile, GalleryMultiExampleTile } from '../../gallery-components/GalleryTiles';

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

import sortingHtmlExample from './NxTableSortableHtmlExample';
import filteringHtmlExample from './NxTableFilterHtmlExample';

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

const tableSimpleHtmlExample = require('./NxTableSimpleExample.html'),
    numberColumnHtmlExample = require('./NxTableNumberColumnExample.html'),
    iconColumnHtmlExample = require('./NxTableIconColumnExample.html'),
    clickableRowCustomIconHtmlExample = require('./NxTableClickableCustomExample.html'),
    emptyHtmlExample = require('./NxTableEmptyExample.html'),
    customMetaInfoHtmlExample = require('./NxTableMetaInfoExample.html'),
    filteringHtmlCode = require('./NxTableFilterHtmlExample?raw'),
    sortingHtmlCode = require('./NxTableSortableHtmlExample?raw');

import './NxTablePaginationExample.scss';
import './NxTablePaginationFilterExample.scss';
import './NxTableTruncationAndWrappingExample.scss';
import './NxTableFixedLayoutExample.scss';

const tablePaginationStyles = require('./NxTablePaginationExample.scss?raw'),
    tablePaginationFilterStyles = require('./NxTablePaginationFilterExample.scss?raw'),
    truncationStyles = require('./NxTableTruncationAndWrappingExample.scss?raw'),
    fixedLayoutStyles = require('./NxTableFixedLayoutExample.scss?raw');

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

export function NxTableSimpleExamples() {
  return (
    <GalleryMultiExampleTile title="Simple Example"
                             reactLiveExample={simpleReactExample}
                             reactCodeExample={simpleReactCode}
                             htmlLiveExample={tableSimpleHtmlExample}>
      A basic example of the <NxCode>NxTable</NxCode> React components family and
      the <NxCode>nx-table</NxCode> CSS class family.
    </GalleryMultiExampleTile>
  );
}

export function NxTableSpecialColumnExamples() {
  return (
    <>
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
    </>
  );
}

export function NxTableStylingCustomizationExamples() {
  return (
    <>
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
    </>
  );
}

export function NxTableComplexContentExamples() {
  return (
    <>
      <GalleryExampleTile title="Clickable Row Example"
                          id="nx-table-clickable-example"
                          liveExample={clickableRowReactExample}
                          codeExamples={clickableRowReactCode}>
        An example where the rows are styled to indicate that they are clickable.
      </GalleryExampleTile>

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
    </>
  );
}
