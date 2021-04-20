/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import { NxTable, NxTile, NxH3, NxP, NxCode } from '@sonatype/react-shared-components';

import NxTableSimpleExample from './NxTableSimpleExample';
import NxTableClickableExample from './NxTableClickableExample';
import NxTableSortableExample from './NxTableSortableExample';
import NxTableLoadingExample from './NxTableLoadingExample';
import NxTableErrorExample from './NxTableErrorExample';
import NxTableEmptyExample from './NxTableEmptyExample';
import NxTableMetaInfoExample from './NxTableMetaInfoExample';
import NxTableFilterExample from './NxTableFilterExample';
import NxTablePaginationExample from './NxTablePaginationExample';
import NxTablePaginationFilterExample from './NxTablePaginationFilterExample';

const tableSimpleExampleCode = require('./NxTableSimpleExample?raw');
const tableClickableExample = require('./NxTableClickableExample?raw');
const tableSortableExample = require('./NxTableSortableExample?raw');
const tableFilterExample = require('./NxTableFilterExample?raw');
const tablePaginationExample = require('./NxTablePaginationExample?raw');
const tablePaginationFilterExample = require('./NxTablePaginationFilterExample?raw');
const tablePaginationScss = require('./NxTablePaginationExample.scss?raw');
const tablePaginationFilterScss = require('./NxTablePaginationFilterExample.scss?raw');
const tableLoadingExample = require('./NxTableLoadingExample?raw');
const tableErrorExample = require('./NxTableErrorExample?raw');
const tableEmptyExample = require('./NxTableEmptyExample?raw');
const tableMetaInfoExample = require('./NxTableMetaInfoExample?raw');

import './NxTablePaginationExample.scss';
import './NxTablePaginationFilterExample.scss';

const paginationCodeExamples = [
      tablePaginationExample,
      { content: tablePaginationScss, language: 'scss'}
    ],
    paginationFilterCodeExamples = [
      tablePaginationFilterExample,
      { content: tablePaginationFilterScss, language: 'scss'}
    ];

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          A set of React components which encapsulate and assist with the styles for HTML tables.
        </p>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTable</h3>
          </header>
          <p className="nx-p">
            The top-level component to use when displaying tables of data.
            It can have <code className="nx-code">NxTable.Head</code> and
            {' '}<code className="nx-code">NxTable.Body</code> components as children. It can receive any attribute
            that would be valid on a <code className="nx-code">&lt;table&gt;</code>.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTable.Head</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;thead&gt;</code> element.
            The <code className="nx-code">NxTable.Row</code> component is the only valid child. This component can
            receive any attribute that would be valid on a <code className="nx-code">&lt;thead&gt;</code>.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTable.Body</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;tbody&gt;</code> element.
            It should have <code className="nx-code">NxTable.Row</code> for children. This component can
            receive any attribute that would be valid on a <code className="nx-code">&lt;tbody&gt;</code> as well as the
            following props:
          </p>
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
                  Required when <code className="nx-code">error</code> is present.
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
            </NxTable.Body>
          </NxTable>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTable.Row</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;tr&gt;</code> element.
            It should have <code className="nx-code">NxTable.Cell</code> for children. This component can
            receive any attribute that would be valid on a <code className="nx-code">&lt;tr&gt;</code> as well as the
            following props:
          </p>
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
            </NxTable.Body>
          </NxTable>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTable.Cell</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;th&gt;</code> or
            {' '}<code className="nx-code">&lt;td&gt;</code> element. This component can
            receive any attribute that would be valid on a <code className="nx-code">&lt;td&gt;</code> as well as the
            following:
          </p>

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
                  Sets the <code className="nx-code">.nx-cell--meta-info</code> class on the cell. This class is
                  applied to table cells that provide meta-information about the table data, such as loading, error,
                  and empty table states. For those three states, the caller of
                  the <code className="nx-code">NxTable</code> react component does not manage the table cells
                  directly (instead using the appropriate props on <code className="nx-code">NxTable.Body</code>), and
                  therefore does not need to use this prop. However, the prop is available for any
                  other meta-info states that the caller might wish to convey. The intended usage is that a cell
                  using this prop would be the only cell in the only row in the table body, and would have
                  a <code className="nx-code">colspan</code> attribute causing it to span all the way across the
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
                  This should only be used for <code className="nx-code">NxTable.Cell</code> components
                  in the <code className="nx-code">NxTable.Head</code>
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>hasIcon</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  Used to indicate a column whose data cells contain only one or
                  more <code className="nx-code">NxFontAwesomeIcon</code>s
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>chevron</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  Desginates a cell that should contain only the right-facing chevron icon used at that end of
                  clickable table cells. <code className="nx-code">NxTable.Cell</code>s with this prop set will
                  self-populate with the icon, and do not take <code className="nx-code">children</code>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </section>

        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Deprecated Component Names</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            As seen above, the various child components of <NxCode>NxTable</NxCode> are attached as properties on the
            <NxCode>NxTable</NxCode> object and typically accessed using JavaScript dot notation. In previous versions
            of RSC, this was not the case and the subobjects were instead exposed as top level exports with names along
            the lines of <NxCode>NxTableRow</NxCode>, <NxCode>NxTableCell</NxCode>, and so on. These old names are still
            exported by RSC for backwards compatibility, but are deprecated and may be removed in a future major version
            release.
          </NxP>
        </NxTile.Subsection>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">SCSS Helper Functions</h3>
          </header>
          <p className="nx-p">
            When constructing a table of paginated data, it is often the case that the table is intended to be exactly
            tall enough to contain one full page's worth of rows, even when on the last page, which may contain fewer
            rows. Achieving this effect requires setting an explicit height on the table container element that is
            equal to the height that it would implicitly get when full. Calculating this height however is
            somewhat complex, requiring summing up the heights of the various table elements in play. Therefore
            RSC provides a SCSS helper function which will return the height of
            the <code className="nx-code">.nx-table-container</code>'s content box for a paginated table with the
            given parameters. The function, located in
            the <code className="nx-code">scss-shared/_nx-table-helpers.scss</code> file, is named
            <code className="nx-code">pagination-table-height</code>. See the description of its parameters below.
          </p>
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
                <NxTable.Cell><code className="nx-code">$body-row-count</code></NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>N/A</NxTable.Cell>
                <NxTable.Cell>
                  The number of rows of content that the table body should have room for. This assumes that each
                  row contains only a single line of text. Wrapping text or other elements that expand the size
                  of any row will throw off the calculation.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><code className="nx-code">$header-filter-row-count</code></NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>0</NxTable.Cell>
                <NxTable.Cell>
                  The number of filter header rows on the table.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><code className="nx-code">$header-row-count</code></NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>1</NxTable.Cell>
                <NxTable.Cell>
                  The number of standard header rows on the table. This number should not include the count of any
                  filter header rows.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </section>

        <p className="nx-p">
          For guidance on the construction of a scrolling table, see the scrolling example on
          the <code className="nx-code">nx-table-container</code> HTML element page.
        </p>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple Example"
                          liveExample={NxTableSimpleExample}
                          codeExamples={tableSimpleExampleCode}>
        A basic example of <code className="nx-code">NxTable</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Clickable Row Example"
                          id="nx-table-clickable-example"
                          liveExample={NxTableClickableExample}
                          codeExamples={tableClickableExample}>
        An example where the rows are styled to indicate that they are clickable.
      </GalleryExampleTile>

      <GalleryExampleTile title="Sortable Columns Example"
                          id="nx-table-sortable-example"
                          liveExample={NxTableSortableExample}
                          codeExamples={tableSortableExample}>
        An example with a sortable column.
      </GalleryExampleTile>

      <GalleryExampleTile title="Filter Columns Example"
                          id="nx-table-filter-example"
                          liveExample={NxTableFilterExample}
                          codeExamples={tableFilterExample}>
        An example with filter columns.
        The first column has a basic filter input, the rows will be filtered
        if any name contains the text provided in the input.
        The second column has a filter input which provides a suggestion capability, the rows will be filtered
        when the country contains the text provided in the input.
      </GalleryExampleTile>

      <GalleryExampleTile title="Pagination Example"
                          id="nx-table-pagination-example"
                          liveExample={NxTablePaginationExample}
                          codeExamples={paginationCodeExamples}>
        An example of a table with an <code className="nx-code">NxPagination</code> component in the footer to control
        paging.
      </GalleryExampleTile>

      <GalleryExampleTile title="Pagination and Filtering Example"
                          id="nx-table-pagination-filter-example"
                          liveExample={NxTablePaginationFilterExample}
                          codeExamples={paginationFilterCodeExamples}>
        An example of a table with an <code className="nx-code">NxPagination</code> component in the footer to control
        paging as well as a row of filter headers. Demonstrates the use of
        the <code className="nx-code">pagination-table-height</code> SCSS function when a filter row is present.
      </GalleryExampleTile>

      <GalleryExampleTile title="Loading Example"
                          id="nx-table-loading-example"
                          liveExample={NxTableLoadingExample}
                          codeExamples={tableLoadingExample}>
        An example of how <code className="nx-code">NxTable</code> should be used while its data is loading.
      </GalleryExampleTile>

      <GalleryExampleTile title="Error Example"
                          id="nx-table-error-example"
                          liveExample={NxTableErrorExample}
                          codeExamples={tableErrorExample}>
        An example of how <code className="nx-code">NxTable</code> should be used to indicate that there was an error
        loading its data.
      </GalleryExampleTile>

      <GalleryExampleTile title="Empty Example"
                          liveExample={NxTableEmptyExample}
                          codeExamples={tableEmptyExample}>
        An example of how <code className="nx-code">NxTable</code> should be used to indicate that there is no data
        to be seen.
      </GalleryExampleTile>

      <GalleryExampleTile title="Custom Meta-Info Example"
                          liveExample={NxTableMetaInfoExample}
                          codeExamples={tableMetaInfoExample}>
        An example of how <code className="nx-code">NxTable</code> should be used with a custom meta-info situation.
      </GalleryExampleTile>
    </>
  );
}
