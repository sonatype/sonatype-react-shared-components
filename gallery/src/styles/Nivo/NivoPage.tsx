/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxH3, NxTextLink } from '@sonatype/react-shared-components';

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
        recommended for data visualization. The charts should be within an element with a definite
        height. If they do not, the chart will have a height of zero and will not be visible.
      </NxP>
      <NxH3>Accessibility</NxH3>
      <NxP>
        The <NxCode>NIVO_COLORS</NxCode> array is recommended for use in the Nivo charts. The color
        array is available to be imported from the React Shared Components. There are eight recommended colors
        that should be used in order by priority. The colors should be used with a white
        background, and dark text should not be displayed on top of the colors.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nivo Line Chart Example"
                        id="nivo-line-chart-example"
                        liveExample={NivoLineExample}
                        codeExamples={[NivoLineExampleCode, NivoLineExampleData]}>
      Basic example of using a Nivo  <NxTextLink external href="https://nivo.rocks/line/">line</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Bar Chart Example"
                        id="nivo-bar-chart-example"
                        liveExample={NivoBarExample}
                        codeExamples={[NivoBarExampleCode, NivoBarExampleData]}>
      Basic example of using a Nivo  <NxTextLink external href="https://nivo.rocks/bar/">bar</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Chart Example"
                        id="nivo-pie-chart-example"
                        liveExample={NivoPieExample}
                        codeExamples={[NivoPieExampleCode, NivoPieExampleData]}>
      Basic example of using a Nivo  <NxTextLink external href="https://nivo.rocks/pie/">pie</NxTextLink> chart
      with the recommended color array.
    </GalleryExampleTile>

  </>;

export default NivoPage;
