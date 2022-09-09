/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTextLink, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulTransferListExample from './NxStatefulTransferListExample';

const nxStatefulTransferListExample = require('./NxStatefulTransferListExample?raw');

const NxTransferListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulTransferList</NxCode> is a wrapper around{' '}
        <NxTextLink href="#/pages/Transfer%20List">
          <NxCode>NxTransferList</NxCode>
        </NxTextLink>
        {' '}which encapsulates the state handling around the filter boxes. The selection state of the items is still
        left to external code.
      </NxP>
      <NxP>
        This component takes the same props as <NxCode>NxTransferList</NxCode>, except that it does not take
        the four props related to the filter boxes: <NxCode>availableItemsFilter</NxCode>,
        <NxCode>selectedItemsFilter</NxCode>, <NxCode>onAvailableItemsFilterChange</NxCode>, and
        <NxCode>onSelectedItemsFilterChange</NxCode>.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Usage Notes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Like <NxCode>NxTransferList</NxCode>, <NxCode>NxStatefulTransferList</NxCode> would typically be used
          within a form, and should typically be wrapped
          in an <NxCode>NxFieldset</NxCode> in order to provide a label and spacing for the form field represented
          by this component. See the <NxTextLink>Form Layout Page</NxTextLink> for an example.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        id="nx-stateful-transfer-list-example"
                        codeExamples={nxStatefulTransferListExample}
                        liveExample={NxStatefulTransferListExample}>
      Demonstrates an <NxCode>NxStatefulTransferList</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTransferListPage;
