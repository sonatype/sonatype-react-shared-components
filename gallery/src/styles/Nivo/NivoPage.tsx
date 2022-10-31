/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTextLink } from '@sonatype/react-shared-components';

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
        <NxTextLink external href="https://nivo.rocks/components/">Nivo</NxTextLink> charts are
        recommended for data visualization.
      </NxP>
      <NxH3>Accessibility</NxH3>
      <NxP>
        The color array show below is recommended for use in the Nivo charts.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Priority </NxTable.Cell>
            <NxTable.Cell>Color</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>First</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-teal-40</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Second</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-red-65</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Third</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-green-80</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Fourth</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-purple-60</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Fifth</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-orange-40</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Sixth</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-pink-60</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Seventh</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-turquoise-30</NxCode></NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>Eight</NxTable.Cell>
            <NxTable.Cell><NxCode>nx-indigo-60</NxCode></NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nivo Line Chart Example"
                        defaultCheckeredBackground={false}
                        id="nivo-line-chart-example"
                        liveExample={NivoLineExample}
                        codeExamples={NivoLineExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Bar Chart Example"
                        defaultCheckeredBackground={false}
                        id="nivo-bar-chart-example"
                        liveExample={NivoBarExample}
                        codeExamples={NivoBarExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Chart Example"
                        defaultCheckeredBackground={false}
                        id="nivo-pie-chart-example"
                        liveExample={NivoPieExample}
                        codeExamples={NivoPieExampleCode}>
    </GalleryExampleTile>

  </>;

export default NivoPage;
