/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

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

const tableSimpleExampleCode = require('!!raw-loader!./NxTableSimpleExample').default;
const tableClickableExample = require('!!raw-loader!./NxTableClickableExample').default;
const tableSortableExample = require('!!raw-loader!./NxTableSortableExample').default;
const tableLoadingExample = require('!!raw-loader!./NxTableLoadingExample').default;
const tableErrorExample = require('!!raw-loader!./NxTableErrorExample').default;

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <h5>NxTable</h5>

        <p className="nx-p">
          The top-level component to use when displaying tables of data.
          It can have <code className="nx-code">&lt;NxTableHead&gt;</code> and
          <code className="nx-code">&lt;NxTableBody&gt;</code> components as children.
        </p>

        <hr />

        <h5>NxTableHead</h5>

        <p className="nx-p">
          Equivalent to the <code className="nx-code">&lt;thead&gt;</code> element.
          The <code className="nx-code">&lt;NxTableRow&gt;</code> component is the only valid child.
          Descendant <code className="nx-code">&lt;NxTableCell&gt;</code> components will have the
          <code className="nx-code">&lt;isHeader&gt;</code> prop set.
        </p>

        <hr />

        <h5>NxTableBody</h5>

        <p className="nx-p">
          Equivalent to the <code className="nx-code">&lt;tbody&gt;</code> element.
          It should have <code className="nx-code">&lt;NxTableRow&gt;</code> for children.
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
              <NxTableCell>columns</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Automatically set by <code className="nx-code">&lt;NxTable&gt;</code> to set the
                <code className="nx-code">colSpan</code> attribute on the loading spinner and error message
                <code className="nx-code">&lt;NxTableCell&gt;</code>
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>

        <hr />

        <h5>NxTableRow</h5>

        <p className="nx-p">
          Equivalent to the <code className="nx-code">&lt;tr&gt;</code> element.
          It automatically assigns <code className="nx-code">isHeader</code> on the children
          if that prop is set on this row.
          It should have <code className="nx-code">&lt;NxTableCell&gt;</code> for children.
        </p>

        <hr />

        <h5>NxTableCell</h5>

        <p className="nx-p">
          Equivalent to the <code className="nx-code">&lt;th&gt;</code> or
          <code className="nx-code">&lt;td&gt;</code> element.
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
              <NxTableCell>isHeader</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>Automatically set to true when in a &lt;NxTableHead&gt; component</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>isEmpty</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Used to indicate a table without contents, automatically applied when rendering the loading spinner
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>isError</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>Automatically set to true when in a &lt;NxTableHead&gt; component</NxTableCell>
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
              <NxTableCell>Used for columns that can be sorted</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>sortDir</NxTableCell>
              <NxTableCell style={{whiteSpace: 'nowrap'}}>asc | desc</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Used to indicate the sorting direction applied.
                A null value indicates the column is not yet sorted.
                This should only be used for <code className="nx-code">&lt;NxTableCell&gt;</code> components
                in the <code className="nx-code">&lt;NxTableHead&gt;</code>
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>hasIcon</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Used to indicate a column that contains a <code className="nx-code">&lt;NxFontAwesomeIcon&gt;</code>
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>
      <GalleryTile title="Simple Example">
        <NxTableSimpleExample/>
        <CodeExample content={tableSimpleExampleCode}/>
      </GalleryTile>
      <GalleryTile title="Clickable Row Example">
        <NxTableClickableExample />
        <CodeExample content={tableClickableExample} />
      </GalleryTile>
      <GalleryTile title="Sortable Columns Example">
        <NxTableSortableExample />
        <CodeExample content={tableSortableExample} />
      </GalleryTile>
      <GalleryTile title="Loading Example">
        <NxTableLoadingExample />
        <CodeExample content={tableLoadingExample} />
      </GalleryTile>
      <GalleryTile title="Error Example">
        <NxTableErrorExample />
        <CodeExample content={tableErrorExample} />
      </GalleryTile>
    </>
  );
}
