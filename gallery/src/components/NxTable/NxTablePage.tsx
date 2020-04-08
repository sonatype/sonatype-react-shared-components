/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

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
        <p>
          NxTable is the top-level component to use when displaying tables of data.
        </p>
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
