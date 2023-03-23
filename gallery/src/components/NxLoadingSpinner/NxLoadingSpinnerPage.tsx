/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTile, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadingSpinnerExample from './NxLoadingSpinnerExample';

const sourceCode = require('./NxLoadingSpinnerExample?raw');

const NxLoadingSpinnerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Loading Spinner with caption</NxP>

      <NxTile.Subsection>
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
              <NxTable.Cell>aria-label</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                string that describes the status accessible name
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="General Example"
                        codeExamples={sourceCode}
                        liveExample={NxLoadingSpinnerExample}>
      The loading spinner.
    </GalleryExampleTile>
  </>;

export default NxLoadingSpinnerPage;
