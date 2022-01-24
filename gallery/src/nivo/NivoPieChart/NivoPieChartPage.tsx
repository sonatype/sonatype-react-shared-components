/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import { NxTable, NxCode, NxP, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoPieChartExample from './NivoPieChartExample';
const NivoPieChartSourceCod = require('./NivoPieChartExample?raw');

const NivoPieChartPage = () =>
  <>
    <GalleryExampleTile title="Nivo Pie Chart Example"
                        id="nivo-pie-chart-example"
                        liveExample={NivoPieChartExample}
                        codeExamples={NivoPieChartSourceCod}>
      A basic example of a Line Chart.
    </GalleryExampleTile>
  </>;

export default NivoPieChartPage;
