/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoLineExample from './NivoLineExample';
import NivoBarExample from './NivoBarExample';
import NivoPieExample from './NivoPieExample';

const NivoLineExampleCode = require('./NivoLineExample?raw');
const NivoBarExampleCode = require('./NivoBarExample?raw');
const NivoPieExampleCode = require('./NivoPieExample?raw');

const NivoPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>Nivo</NxCode>
      </NxP>
      <NxP>
        The <NxCode>Nivo</NxCode>
      </NxP>
      <NxP>
        By default the CSS display property of <NxCode>Nivo</NxCode>
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
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxH3>Accessibility</NxH3>
      <NxP>
        <NxCode>Nivo</NxCode>
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Attribute</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode></NxCode></NxTable.Cell>
            <NxTable.Cell>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nivo Line Chart Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoLineExample}
                        codeExamples={NivoLineExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Bar Chart Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoBarExample}
                        codeExamples={NivoBarExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Chart Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPieExample}
                        codeExamples={NivoPieExampleCode}>
    </GalleryExampleTile>

  </>;

export default NivoPage;
