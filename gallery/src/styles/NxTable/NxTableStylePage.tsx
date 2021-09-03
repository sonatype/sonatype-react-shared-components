/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxWarningAlert, NxTable, NxP, NxCode, NxTextLink }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxTableExamples from './NxTableExamples';

const NxTableStylePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        This is the styling and layout for a basic table. There are few variations demonstrated here:
      </NxP>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">Basic table layout</li>
        <li className="nx-list__item">Tables with clickable rows</li>
        <li className="nx-list__item">Empty tables</li>
        <li className="nx-list__item">A table with an error.</li>
      </ul>
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
              A "clickable" table is one where the table rows accept a click event and (usually) navigate to another
              view.
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
              Applied to table cells that provide meta-information about the table data. There are three known use
              cases for this: loading states, error states, and empty states. In each of these cases, the table body
              should contain a single row with a single cell. That cell should use the `colspan` attribute to
              stretch all the way across the table, and should use this class.
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
              <NxCode>.nx-cell--chevron</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-cell</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class is intended for the cells holding the Chevron icons that should be placed on the right
              side of clickable table rows. It creates a column of the appropriate width for the icon. It
              is <em>not</em> necessary to additional use <NxCode>.nx-cell--icon</NxCode> on these
              cells.
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
              <NxCode>.nx-cell__chevron-btn</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              Child of <NxCode>.nx-cell--chevron</NxCode> which then wraps the actual chevron icon
            </NxTable.Cell>
            <NxTable.Cell>
              In order to make clickable rows accessible, the chevron icon should be contained within a button
              bearing this class. The button should additionally have an accessible name which describes the row,
              typically by including its full text content.
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

      <NxInfoAlert>
        Note that some of these examples are shown in react as they includes specific icons. When working in
        React, <NxCode>NxFontAwesomeIcon</NxCode> should be used as shown to get these icons.
        When not working in react, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxTableExamples />
  </>;

export default NxTableStylePage;
