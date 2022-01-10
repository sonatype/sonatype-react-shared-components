/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoPageExample from './NivoPageExample';
import NivoPieChartPageExample from './NivoPieChartExample';

const NivoPageExampleCode = require('./NivoPageExample?raw');
const NivoPieExampleChartCode = require('./NivoPieChartExample?raw');

const NivoPage = () =>
  <>
    <GalleryExampleTile title="Nivo Pie Chart"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPieChartPageExample}
                        codeExamples={NivoPieExampleChartCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPageExample}
                        codeExamples={NivoPageExampleCode}>
    </GalleryExampleTile>
  </>;

export default NivoPage;
