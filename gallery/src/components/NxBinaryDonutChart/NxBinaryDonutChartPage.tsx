/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxBinaryDonutChartExample from './NxBinaryDonutChartExample';

const nxBinaryDonutChartExampleCode = require('!!raw-loader!./NxBinaryDonutChartExample').default;

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxBinaryDonutChart</code> represents a donut chart.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxBinaryDonutChartExampleCode}
                        liveExample={NxBinaryDonutChartExample}>
        This example demonstrates the display of an NxBinaryDonutChart.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
