/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import { NxTable, NxCode, NxP, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoLineChartExample from './NivoLineChartExample';
const NivolineChartSourceCode = require('./NivoLineChartExample?raw');

const NivoLineChartPage = () =>
  <>
    <GalleryExampleTile title="Nivo Line Chart Example"
                        id="nivo-line-chart-example"
                        liveExample={NivoLineChartExample}
                        codeExamples={NivolineChartSourceCode}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
  </>;

export default NivoLineChartPage;
