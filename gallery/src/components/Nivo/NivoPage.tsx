/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoPageExample from './NivoPageExample';
import NivoLineChart2Example from './NivoLineChart2Example';
import NivoPieChartPageExample from './NivoPieChartExample';
import NivoLog4jExample from './NivoLog4jExample';

const NivoLog4jExampleCode = require('./NivoLog4jExample?raw');

const NivoPageExampleCode = require('./NivoPageExample?raw');
const NivoLineChart2ExampleCode = require('./NivoLineChart2Example?raw');
const NivoPieExampleChartCode = require('./NivoPieChartExample?raw');

const NivoPage = () =>
  <>
    <GalleryExampleTile title="Nivo Log4j Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoLog4jExample}
                        codeExamples={NivoLog4jExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Line Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPageExample}
                        codeExamples={NivoPageExampleCode}>
    </GalleryExampleTile>
    <GalleryExampleTile title="Nivo Line 2 Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoLineChart2Example}
                        codeExamples={NivoLineChart2ExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Pie Chart"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPieChartPageExample}
                        codeExamples={NivoPieExampleChartCode}
    >
    </GalleryExampleTile>

    <GalleryExampleTile title="Nivo Line Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPageExample}
                        codeExamples={NivoPageExampleCode}>
    </GalleryExampleTile>
  </>;

export default NivoPage;
