/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

import NxTableSimpleExample from './NxTableSimpleExample';
import NxTableClickableExample from './NxTableClickableExample';
import NxTableSortableExample from './NxTableSortableExample';
import NxTableLoadingExample from './NxTableLoadingExample';
import NxTableErrorExample from './NxTableErrorExample';
import NxTableEmptyExample from './NxTableEmptyExample';
import NxTableMetaInfoExample from './NxTableMetaInfoExample';
import NxTableFilterExample from './NxTableFilterExample';
import NxTablePaginationExample from './NxTablePaginationExample';

const tableSimpleExampleCode = require('!!raw-loader!./NxTableSimpleExample').default;
const tableClickableExample = require('!!raw-loader!./NxTableClickableExample').default;
const tableSortableExample = require('!!raw-loader!./NxTableSortableExample').default;
const tableFilterExample = require('!!raw-loader!./NxTableFilterExample').default;
const tablePaginationExample = require('!!raw-loader!./NxTablePaginationExample').default;
const tablePaginationScss = require('!!raw-loader!./NxTablePaginationExample.scss').default;
const tableLoadingExample = require('!!raw-loader!./NxTableLoadingExample').default;
const tableErrorExample = require('!!raw-loader!./NxTableErrorExample').default;
const tableEmptyExample = require('!!raw-loader!./NxTableEmptyExample').default;
const tableMetaInfoExample = require('!!raw-loader!./NxTableMetaInfoExample').default;

import './NxTablePaginationExample.scss';

const paginationCodeExamples = [
  tablePaginationExample,
  { content: tablePaginationScss, language: 'scss'}
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
            It can have <code className="nx-code">NxTableHead</code> and
            {' '}<code className="nx-code">NxTableBody</code> components as children.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTableHead</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;thead&gt;</code> element.
            The <code className="nx-code">NxTableRow</code> component is the only valid child.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTableBody</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;tbody&gt;</code> element.
            It should have <code className="nx-code">NxTableRow</code> for children.
          </p>
          <NxTable>
            <NxTableHead>
              <NxTableRow>
                <NxTableCell>Prop</NxTableCell>
                <NxTableCell>Type</NxTableCell>
                <NxTableCell>Required</NxTableCell>
                <NxTableCell>Details</NxTableCell>
              </NxTableRow>
            </NxTableHead>
            <NxTableBody>
              <NxTableRow>
                <NxTableCell>isLoading</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>Used to show a loading spinner instead of the table content</NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>error</NxTableCell>
                <NxTableCell>string</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>Used to show an error message instead of the table content</NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>retryHandler</NxTableCell>
                <NxTableCell>Function</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Used to provide the handler for the Retry button that appears when the error state is active.
                  Required when <code className="nx-code">error</code> is present.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>emptyMessage</NxTableCell>
                <NxTableCell>string</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Used to show a message when the table is otherwise empty (i.e. when it has no externally specified
                  child rows, is not loading, and is not in an error state. This prop must be specified if the
                  table is empty. If this table is not empty, this prop may be specified, having no effect.
                  In essence, the best practice is to specify this prop on all tables which <em>may</em> be empty.
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
          </NxTable>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTableRow</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;tr&gt;</code> element.
            It should have <code className="nx-code">NxTableCell</code> for children.
          </p>
          <NxTable>
            <NxTableHead>
              <NxTableRow>
                <NxTableCell>Prop</NxTableCell>
                <NxTableCell>Type</NxTableCell>
                <NxTableCell>Required</NxTableCell>
                <NxTableCell>Details</NxTableCell>
              </NxTableRow>
            </NxTableHead>
            <NxTableBody>
              <NxTableRow>
                <NxTableCell>isClickable</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>Indicates that a table row is clickable.</NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>isFilterHeader</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>Indicates that this row is a table header row containing filter inputs.</NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>selected</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  For clickable table rows, indicates that this row is the currently selected one.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>isHeader</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Automatically set to true when in an <code className="nx-code">NxTableHead</code> component
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
          </NxTable>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTableCell</h3>
          </header>
          <p className="nx-p">
            Equivalent to the <code className="nx-code">&lt;th&gt;</code> or
            {' '}<code className="nx-code">&lt;td&gt;</code> element.
          </p>

          <NxTable>
            <NxTableHead>
              <NxTableRow>
                <NxTableCell>Prop</NxTableCell>
                <NxTableCell>Type</NxTableCell>
                <NxTableCell>Required</NxTableCell>
                <NxTableCell>Details</NxTableCell>
              </NxTableRow>
            </NxTableHead>
            <NxTableBody>
              <NxTableRow>
                <NxTableCell>metaInfo</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Sets the <code className="nx-code">.nx-cell--meta-info</code> class on the cell. This class is
                  applied to table cells that provide meta-information about the table data, such as loading, error,
                  and empty table states. For those three states, the caller of
                  the <code className="nx-code">NxTable</code> react component does not manage the table cells
                  directly (instead using the appropriate props on <code className="nx-code">NxTableBody</code>), and
                  therefore does not need to use this prop. However, the prop is available for any
                  other meta-info states that the caller might wish to convey. The intended usage is that a cell
                  using this prop would be the only cell in the only row in the table body, and would have
                  a <code className="nx-code">colspan</code> attribute causing it to span all the way across the
                  table.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>isNumeric</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>Used for columns that contain numeric information</NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>isSortable</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Used for column headers that can be sorted. Should not be applied to data cells
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>sortDir</NxTableCell>
                <NxTableCell style={{whiteSpace: 'nowrap'}}>asc | desc</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Used to indicate the sorting direction applied.
                  A null value indicates the column is not yet sorted.
                  This should only be used for <code className="nx-code">NxTableCell</code> components
                  in the <code className="nx-code">NxTableHead</code>
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>hasIcon</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Used to indicate a column whose data cells contain only one or
                  more <code className="nx-code">NxFontAwesomeIcon</code>s
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>chevron</NxTableCell>
                <NxTableCell>boolean</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Desginates a cell that should contain only the right-facing chevron icon used at that end of
                  clickable table cells. <code className="nx-code">NxTableCell</code>s with this prop set will
                  self-populate with the icon, and do not take <code className="nx-code">children</code>.
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
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
