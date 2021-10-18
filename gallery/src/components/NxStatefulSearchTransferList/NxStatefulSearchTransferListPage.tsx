/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import Example from './NxStatefulSearchTransferListExample';

const exampleCode = require('./NxStatefulSearchTransferListExample?raw');

const NxStatefulSearchTransferListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulSearchTranferList</NxCode> is a wrapper around <NxCode>NxSearchTransferList</NxCode> which
        manages the state of the two text inputs: the search box and the results filter box.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulSearchTranferList</NxCode> supports all of the same props
          as <NxCode>NxSearchTransferList</NxCode>, except for <NxCode>searchText</NxCode>,{' '}
          <NxCode>onSeachTextChange</NxCode>, <NxCode>addedItemsFilter</NxCode>,
          and <NxCode>onAddedItemsFilterChange</NxCode>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example" liveExample={Example} codeExamples={[exampleCode]}>
      A basic example of an <NxCode>NxStatefulSearchTranferList</NxCode>
    </GalleryExampleTile>
  </>;

export default NxStatefulSearchTransferListPage;
