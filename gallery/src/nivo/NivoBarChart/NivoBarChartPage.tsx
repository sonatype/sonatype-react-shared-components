/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import { NxTable, NxCode, NxP, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoBarChartExample from './NivoBarChartExample';

const NivoBarChartSourceCode = require('./NivoBarChartExample?raw');

const NivoBarChartPage = () =>
  <>
    <GalleryExampleTile title="Nivo Bar Chart Example"
                        id="nivo-bar-chart-example"
                        liveExample={NivoBarChartExample}
                        codeExamples={NivoBarChartSourceCode}>
      A basic example of a Bar Chart.
    </GalleryExampleTile>
  </>;

export default NivoBarChartPage;
