/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import { NxTable, NxCode, NxP, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoLineChartWithDateExample from './NivoLineChartWithDateExample';
import NivoLineChartWithStringExample from './NivoLineChartWithStringExample';

const NivolineChartWithDateSourceCode = require('./NivoLineChartWithDateExample?raw');
const NivolineChartWithStringSourceCode = require('./NivoLineChartWithStringExample?raw');

const NivoLineChartPage = () =>
  <>
    <GalleryExampleTile title="Nivo Line Chart Date Example"
                        id="nivo-line-chart-date-example"
                        liveExample={NivoLineChartWithDateExample}
                        codeExamples={NivolineChartWithDateSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Line Chart String Example"
                        id="nivo-line-chart-string-example"
                        liveExample={NivoLineChartWithStringExample}
                        codeExamples={NivolineChartWithStringSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
  </>;

export default NivoLineChartPage;
