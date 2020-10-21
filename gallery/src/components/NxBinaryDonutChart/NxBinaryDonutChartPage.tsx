/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxBinaryDonutChartEmptyExample from './NxBinaryDonutChartEmptyExample';
import NxBinaryDonutChartFullExample from './NxBinaryDonutChartFullExample';
import NxBinaryDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';
import NxBinaryDonutChartNoHoleExample from './NxBinaryDonutChartNoHoleExample';
import NxBinaryDonutChartLargeHoleExample from './NxBinaryDonutChartLargeHoleExample';

const nxBinaryDonutChartEmptyExample = require('!!raw-loader!./NxBinaryDonutChartEmptyExample').default;
const nxBinaryDonutChartFullExample = require('!!raw-loader!./NxBinaryDonutChartFullExample').default;
const nxBinaryDonutChartMinimalExampleCode = require('!!raw-loader!./NxBinaryDonutChartMinimalExample').default;
const nxBinaryDonutChartNoHoleExample = require('!!raw-loader!./NxBinaryDonutChartNoHoleExample').default;
const nxBinaryDonutChartLargeHoleExample = require('!!raw-loader!./NxBinaryDonutChartLargeHoleExample').default;

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxBinaryDonutChart</code> represents a binary donut chart.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">percent</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Percentage which this donut represents. E.g. when 0 the donut is empty, and as it increases towards 100
              the amount of the donut which is filled in increases.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">innerRadiusPercent</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The size of the hole in the donut, as a percentage of the donut's overall size.  The default value is 50.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Examples"
                        id="nx-binary-donut-chart-minimal-examples"
                        codeExamples={nxBinaryDonutChartMinimalExampleCode}
                        liveExample={NxBinaryDonutChartMinimalExample}>
        Minimal examples of <code className="nx-code">NxBinaryDonutChart</code>s with different values.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with empty Donut"
                        id="nx-binary-donut-chart-empty-example"
                        codeExamples={nxBinaryDonutChartEmptyExample}
                        liveExample={NxBinaryDonutChartEmptyExample}>
        An example of a an empty <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with full Donut"
                        id="nx-binary-donut-chart-full-example"
                        codeExamples={nxBinaryDonutChartFullExample}
                        liveExample={NxBinaryDonutChartFullExample}>
        An example of a full <code className="nx-code">NxBinaryDonutChart</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with no Hole"
                        id="nx-binary-donut-chart-no-hole-example"
                        codeExamples={nxBinaryDonutChartNoHoleExample}
                        liveExample={NxBinaryDonutChartNoHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> without a hole i.e. a pie chart.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with a Large Hole"
                        id="nx-binary-donut-chart-large-hole-example"
                        codeExamples={nxBinaryDonutChartLargeHoleExample}
                        liveExample={NxBinaryDonutChartLargeHoleExample}>
        An example of a <code className="nx-code">NxBinaryDonutChart</code> with a large hole.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
