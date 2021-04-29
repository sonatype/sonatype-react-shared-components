/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTable, NxTile, NxH2 } from '@sonatype/react-shared-components';

import './NxStatefulGlobalSidebarPage.scss';

const NxStatefulGlobalSidebarExample = require('./NxStatefulGlobalSidebarExample.tsx?raw');

export default function NxStatefulGlobalSidebarPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxStatefulGlobalSidebar</NxCode> is the stateful version of <NxCode>NxGlobalSidebar</NxCode>. Please
          {' '}<a className="nx-text-link" href="#/Pages/NxGlobalSidebar">refer to that component</a> for shared
          props and documentation.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <h3 className="nx-h3"><NxCode>NxStatefulGlobalSidebar</NxCode> Props</h3>
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
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  This value determines whether the sidebar's default state is open or closed.
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
            <a className="nx-text-link" href="#/NxStatefulGlobalSidebarExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxStatefulGlobalSidebarExample} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
