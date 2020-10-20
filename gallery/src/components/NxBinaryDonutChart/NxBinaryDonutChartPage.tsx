/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxBinaryDonutChartFullExample from './NxBinaryDonutChartFullExample';
import NxBinaryDonutChartHalfExample from './NxBinaryDonutChartHalfExample';
import NxBinaryDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';
import NxBinaryDonutChartNoHoleExample from './NxBinaryDonutChartNoHoleExample';
import NxBinaryDonutChartLargeHoleExample from './NxBinaryDonutChartLargeHoleExample';
import NxBinaryDonutChartQuarterExample from './NxBinaryDonutChartQuarterExample';

const nxBinaryDonutChartFullExample = require('!!raw-loader!./NxBinaryDonutChartFullExample').default;
const nxBinaryDonutChartHalfExample = require('!!raw-loader!./NxBinaryDonutChartHalfExample').default;
const nxBinaryDonutChartMinimalExampleCode = require('!!raw-loader!./NxBinaryDonutChartMinimalExample').default;
const nxBinaryDonutChartNoHoleExample = require('!!raw-loader!./NxBinaryDonutChartNoHoleExample').default;
const nxBinaryDonutChartLargeHoleExample = require('!!raw-loader!./NxBinaryDonutChartLargeHoleExample').default;
const nxBinaryDonutChartQuarterExample = require('!!raw-loader!./NxBinaryDonutChartQuarterExample').default;

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxBinaryDonutChart</code> represents a binary donut chart.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Example"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartMinimalExampleCode}
                        liveExample={NxBinaryDonutChartMinimalExample}>
        A minimal example of a <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with half Donut"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartHalfExample}
                        liveExample={NxBinaryDonutChartHalfExample}>
        An example of a half <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with quarter Donut"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartQuarterExample}
                        liveExample={NxBinaryDonutChartQuarterExample}>
        An example of a quarter <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with full Donut"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartFullExample}
                        liveExample={NxBinaryDonutChartFullExample}>
        An example of a full <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with no Hole"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartNoHoleExample}
                        liveExample={NxBinaryDonutChartNoHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> without a hole i.e. a pie chart.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with a Large Hole"
                        id="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartLargeHoleExample}
                        liveExample={NxBinaryDonutChartLargeHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> with a large hole.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
