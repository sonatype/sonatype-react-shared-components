/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulTabsSimpleExample from './NxStatefulTabsSimpleExample';

const NxStatefulTabsSimpleCode = require('./NxStatefulTabsSimpleExample?raw');

export default function NxStatefulTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          This component simply wraps the <NxCode>NxTabs</NxCode> component
          to track the currently selected tab.
        </NxP>

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
              <NxTable.Cell>defaultActiveTab</NxTable.Cell>
              <NxTable.Cell>number</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                The index of the tab that should be active initially. If not set, no tab will be activated.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onTabSelect</NxTable.Cell>
              <NxTable.Cell>function(number)</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Called with the index of the newly selected tab when the currently selected tab changes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxTabs Example"
                          liveExample={NxStatefulTabsSimpleExample}
                          codeExamples={NxStatefulTabsSimpleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components.
      </GalleryExampleTile>
    </>
  );
}
