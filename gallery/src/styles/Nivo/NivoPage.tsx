/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoLineExample from './NivoLineExample';
import NivoBarExample from './NivoBarExample';
import NivoPieExample from './NivoPieExample';

const NivoLineExampleCode = require('./NivoLineExample?raw');
const NivoBarExampleCode = require('./NivoBarExample?raw');
const NivoPieExampleCode = require('./NivoPieExample?raw');
const NivoLineExampleData = require('./lineData?raw');
const NivoBarExampleData = require('./barData?raw');
const NivoPieExampleData = require('./pieData?raw');

const NivoPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxTextLink external href="https://nivo.rocks/components/">Nivo</NxTextLink> charts are
        recommended for data visualization.
      </NxP>
      <NxP>
        The charts should be within an element with a definite
        height. If they are not, the chart will have a height of zero and will not be visible.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>RSC Nivo Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          RSC provides several data structures that can be used with Nivo charts in order to give them the recommended,
          RSC-compatible styling.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NIVO_COLORS</NxCode></NxTable.Cell>
              <NxTable.Cell>string[]</NxTable.Cell>
              <NxTable.Cell>
                An array containing the recommended colors for use with Nivo charts in RSC-based applications.
                There are eight recommended colors that should be used in order by priority. The colors should be used
                on charts with RSC's <NxCode>NIVO_THEME</NxCode>. Note that these colors should only be used for data
                that does not have some more meaningful set of colors that could be associated with it. For instance,
                data where each category corresponds to a Threat Category should use the Threat Category colors,
                not these arbitrary colors.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NIVO_THEME</NxCode></NxTable.Cell>
              <NxTable.Cell>object</NxTable.Cell>
              <NxTable.Cell>
                An object that can be passed as the <NxCode>theme</NxCode> prop of a nivo chart component in order
                to render it with the recommended RSC colors for lines and text.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nivo Line Chart Example"
                        id="nivo-line-chart-example"
                        liveExample={NivoLineExample}
                        codeExamples={[NivoLineExampleCode, NivoLineExampleData]}>
      Basic example of using a Nivo <NxTextLink external href="https://nivo.rocks/line/">line</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Bar Chart Example"
                        id="nivo-bar-chart-example"
                        liveExample={NivoBarExample}
                        codeExamples={[NivoBarExampleCode, NivoBarExampleData]}>
      Basic example of using a Nivo <NxTextLink external href="https://nivo.rocks/bar/">bar</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Chart Example"
                        id="nivo-pie-chart-example"
                        liveExample={NivoPieExample}
                        codeExamples={[NivoPieExampleCode, NivoPieExampleData]}>
      Basic example of using a Nivo <NxTextLink external href="https://nivo.rocks/pie/">pie</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

  </>;

export default NivoPage;
