/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTableClickableExample from './NxTableClickableExample';
import NxTableErrorExample from './NxTableErrorStateExample';
import NxTableFixedLayoutExample from './NxTableFixedLayoutExample';
import NxTableSortableExample from './NxTableSortableExample';
import NxTableFilterExample from './NxTableFilterExample';

import './NxTableTruncationAndWrappingExample.scss';
import './NxTableFixedLayoutExample.scss';

const NxTableSimpleCode = require('!!raw-loader!./NxTableDefaultExample.html').default,
    NxTableClickableCode = require('!!raw-loader!./NxTableClickableExample').default,
    NxTableEmptyCode = require('!!raw-loader!./NxTableEmptyExample.html').default,
    NxTableErrorStateCode = require('!!raw-loader!./NxTableErrorStateExample').default,
    NxTableScrollingCode = require('!!raw-loader!./NxTableScrollingExample.html').default,
    NxTableUnfilledScrollContainerCode = require('!!raw-loader!./NxTableUnfilledScrollContainerExample.html').default,
    NxTableTruncationAndWrappingCode = require('!!raw-loader!./NxTableTruncationAndWrappingExample.html').default,
    NxTableFixedLayoutCode = require('!!raw-loader!./NxTableFixedLayoutExample').default,
    NxTableTruncationAndWrappingScss = require('!!raw-loader!./NxTableTruncationAndWrappingExample.scss').default,
    NxTableFixedLayoutScss = require('!!raw-loader!./NxTableFixedLayoutExample.scss').default,
    NxTableFilterCode = require('!!raw-loader!./NxTableFilterExample').default,
    NxTableSortableCode = require('!!raw-loader!./NxTableSortableExample').default;

const truncationAndWrappingCodeExamples = [
      NxTableTruncationAndWrappingCode,
      { content: NxTableTruncationAndWrappingScss, language: 'scss'}
    ],
    fixedLayoutCodeExamples = [
      NxTableFixedLayoutCode,
      { content: NxTableFixedLayoutScss, language: 'scss'}
    ];

const NxTablesExamples = () =>
  <>
    <GalleryExampleTile title="NX Table Simple Example"
                        htmlExample={NxTableSimpleCode}
                        codeExamples={NxTableSimpleCode}>
      A simple, static demonstration of <code className="nx-code">nx-table</code> styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Truncation and Wrapping Example"
                        id="nx-table-truncation-wrapping-example"
                        htmlExample={NxTableTruncationAndWrappingCode}
                        codeExamples={truncationAndWrappingCodeExamples}>
      A demonstration of text truncation and wrapping within table cells. The first column truncates, while the second
      wraps. Notice that wrapping is the default behavior. Truncation requires an extra element within the table cell,
      which must have an explicit width.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Clickable Rows Example"
                        liveExample={NxTableClickableExample}
                        codeExamples={NxTableClickableCode}>
      A demonstration of an <code className="nx-code">nx-table</code> with rows that receive clickable styling and
      a chevron column.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Fixed Layout Example"
                        id="nx-table-fixed-layout-example"
                        liveExample={NxTableFixedLayoutExample}
                        codeExamples={fixedLayoutCodeExamples}>
      This example demonstrates the nx-table--fixed-layout class which is typically used in conjunction with
      a custom class to explicitly set the widths of table rows. Notice here that the implementation of a
      truncated column is simpler: the inner <code className="nx-code">div</code> is not necessary and instead
      the <code className="nx-code">.nx-truncate-ellipsis</code> class can be applied directly to the table cell.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Empty Example"
                        htmlExample={NxTableEmptyCode}
                        codeExamples={NxTableEmptyCode}>
      A demonstration of the expected styling and content of an empty <code className="nx-code">nx-table</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Error Message Example"
                        liveExample={NxTableErrorExample}
                        codeExamples={NxTableErrorStateCode}>
      A demonstration of the expected styling and content and an <code className="nx-code">nx-table</code> whose
      contents failed to load.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Scrolling Example"
                        id="nx-table-scrolling-example"
                        htmlExample={NxTableScrollingCode}
                        codeExamples={NxTableScrollingCode}>
      A demonstration of a table that scrolls due to the presence of a height-constrained, scrolling wrapper element.
      The headers stay stationary as the rows scroll. All tables that scroll "by themselves" (as opposed to being
      part of some broader section of the page that scrolls) should be implemented in this manner in order to get
      the sticky header behavior. For scrollable containers which, on the other hand, contain more content in addition
      to a table, sticky headers should not be used and therefore
      the <code className="nx-code">nx-table--scrollable</code> class should not be used on the table.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Unfilled Scroll Container Example"
                        id="nx-table-unfilled-scroll-container-example"
                        htmlExample={NxTableUnfilledScrollContainerCode}
                        codeExamples={NxTableUnfilledScrollContainerCode}>
      This example demonstrates what happens when a table is set up to enable scrolling, but does not have enough
      content to cause scrolling.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Sortable Rows Example"
                        liveExample={NxTableSortableExample}
                        codeExamples={NxTableSortableCode}>
          A demonstration of a <code className="nx-code">nx-table</code> used for columns that can be sorted.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Filter Rows Example"
                        liveExample={NxTableFilterExample}
                        codeExamples={NxTableFilterCode}>
        A demonstration of a <code className="nx-code">nx-table</code> with a header
        cell that contains a filter. Rows can be filtered depending on the text provided in the input.
    </GalleryExampleTile>
  </>;

export default NxTablesExamples;
