/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxH2, NxP, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoPieChartExample from './NivoPieChartExample';
const NivoPieChartSourceCode = require('./NivoPieChartExample?raw');

const NivoPieChartPage = () =>
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
      </NxList>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="Nivo Pie Chart Example"
                        id="nivo-pie-chart-example"
                        liveExample={NivoPieChartExample}
                        codeExamples={NivoPieChartSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
  </>;

export default NivoPieChartPage;
