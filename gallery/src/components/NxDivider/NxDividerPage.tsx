/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile, NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxDividerHorizontalExample from './NxDividerHorizontalExample';
import NxDividerVerticalExample from './NxDividerVerticalExample';

const NxDividerHorizontalExampleCode = require('./NxDividerHorizontalExample?raw'),
    NxDividerVerticalExampleCode = require('./NxDividerVerticalExample?raw');

const NxDividerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        NxDivider renders a divider.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDivider</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>horizontal</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Creates a horizontal divider.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>vertical</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Creates a vertical divider.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxInfoAlert>
          If the <NxCode>horizontal</NxCode> or <NxCode>vertical</NxCode> prop is not specified,
          then <NxCode>{'<NxDivider />'}</NxCode> renders a horizontal divider by default.
        </NxInfoAlert>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Horizontal Example"
                        liveExample={NxDividerHorizontalExample}
                        codeExamples={NxDividerHorizontalExampleCode}>
      A simple example of a horizontal <NxCode>NxDivider</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Simple Vertical Example"
                        liveExample={NxDividerVerticalExample}
                        codeExamples={NxDividerVerticalExampleCode}>
      A simple example of a vertical <NxCode>NxDivider</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxDividerPage;
