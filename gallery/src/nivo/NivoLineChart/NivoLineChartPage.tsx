/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTextLink, NxP, NxH2, NxList } from '@sonatype/react-shared-components';

import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import NivoLineChartWithDateExample from './NivoLineChartWithDateExample';
import NivoLineChartWithStringExample from './NivoLineChartWithStringExample';

const NivolineChartWithDateSourceCode = require('./NivoLineChartWithDateExample?raw');
const NivolineChartWithStringSourceCode = require('./NivoLineChartWithStringExample?raw');

const NivoLineChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxH2>Nivo Line Chart</NxH2>

      <NxP>
        We provide recommendations for configurating Nivo's Line Chart.
        <NxTextLink href="https://nivo.rocks/line/" external>https://nivo.rocks/line/</NxTextLink>
      </NxP>

      <NxH2>Guidelines</NxH2>

      <NxList>
        <NxList.Item>
          When there is just one line, there should be no legend.
        </NxList.Item>
        <NxList.Item>
          When there is more than 1 but less or equal to 5 lines,
          the legend should be aligned to the bottom.
        </NxList.Item>
        <NxList.Item>
          When there is more than 5 lines, the legend should be aligned to the right.
        </NxList.Item>
        <NxList.Item>
          The maximum number of lines is 10, but we recommend between 1-5 lines per chart.
        </NxList.Item>
        <NxList.Item>
          Please consider the density of the chart to ensure that there is not too many points on the chart.
        </NxList.Item>
      </NxList>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="Nivo Line Chart String Example"
                        id="nivo-line-chart-string-example"
                        liveExample={NivoLineChartWithStringExample}
                        codeExamples={NivolineChartWithStringSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
    <GalleryExampleTile title="Nivo Line Chart Date Example"
                        id="nivo-line-chart-date-example"
                        liveExample={NivoLineChartWithDateExample}
                        codeExamples={NivolineChartWithDateSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
  </>;

export default NivoLineChartPage;
