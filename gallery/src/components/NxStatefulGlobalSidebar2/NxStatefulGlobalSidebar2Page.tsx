/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxH2, NxTile, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import CodeExample from '../../CodeExample';
import './NxStatefulGlobalSidebar2Page.scss';

const NxStatefulGlobalSidebar2Example = require('./NxStatefulGlobalSidebar2Example.tsx?raw');

export default function NxStatefulGlobalSidebar2Page() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxStatefulGlobalSidebar2</NxCode> is the stateful version of <NxCode>NxGlobalSidebar2</NxCode>. Please
          {' '}<NxTextLink href="#/Pages/Global%20Sidebar">refer to that component</NxTextLink> for shared
          props and documentation.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxStatefulGlobalSidebar2</NxCode> Props</NxH3>
          </NxTile.SubsectionHeader>
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
                <NxTable.Cell>isDefaultOpen</NxTable.Cell>
                <NxTable.Cell>Boolean</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  This value determines whether the sidebar's default state is open or closed. Replaces
                  <NxCode>isOpen</NxCode> in the non-stateful version.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Basic Stateful Global Sidebar Example with Nav</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <NxTextLink href="#/NxStatefulGlobalSidebar2Example">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxStatefulGlobalSidebar2Example} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
