/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxBinaryDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';
import NxBinaryDonutChartNoHoleExample from './NxBinaryDonutChartNoHoleExample';
import NxBinaryDonutChartLargeHoleExample from './NxBinaryDonutChartLargeHoleExample';
import NxBinaryDonutChartSkewedExample from './NxBinaryDonutChartSkewedExample';

import './NxBinaryDonutChartPage.scss';

const nxBinaryDonutChartMinimalExampleCode = require('!!raw-loader!./NxBinaryDonutChartMinimalExample').default;
const nxBinaryDonutChartNoHoleExample = require('!!raw-loader!./NxBinaryDonutChartNoHoleExample').default;
const nxBinaryDonutChartLargeHoleExample = require('!!raw-loader!./NxBinaryDonutChartLargeHoleExample').default;
const nxBinaryDonutChartSkewedExample = require('!!raw-loader!./NxBinaryDonutChartSkewedExample').default;

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxBinaryDonutChart</code> represents a binary donut chart.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Example"
                        className="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartMinimalExampleCode}
                        liveExample={NxBinaryDonutChartMinimalExample}>
        A minimal example of a <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with no Hole"
                        className="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartNoHoleExample}
                        liveExample={NxBinaryDonutChartNoHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> without a hole i.e. a pie chart.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with a Large Hole"
                        className="nx-binary-donut-chart-examples"
                        codeExamples={nxBinaryDonutChartLargeHoleExample}
                        liveExample={NxBinaryDonutChartLargeHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> with a large hole.
    </GalleryExampleTile>

    <GalleryExampleTile title="Skewed Example"
                        codeExamples={nxBinaryDonutChartSkewedExample}
                        liveExample={NxBinaryDonutChartSkewedExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> which is skewed.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
