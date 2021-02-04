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
          <tr className="nx-table-row">
            <td className="nx-cell">aria-label</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If the chart is not accompanied by visible text content that contains the same information that the chart
              conveys, then the chart should have an <code className="nx-code">aria-label</code> attribute giving it
              an accessible name which adequately describes its information for non-visual users. If the chart is
              accompanied by a text description however, such a label would be redundant and the chart is considered
              a presentational element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">SVG <code className="nx-code">&lt;svg&gt;</code> Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://developer.mozilla.org/en/docs/Web/SVG/Element/svg">
                SVG Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              NxBinaryDonutChart supports any SVG attribute that's normally supported
              by <code className="nx-code">&lt;svg&gt;</code>.
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
      Some of these charts demonstrate the usage of <code className="nx-code">aria-label</code> to describe the
      chart contents.
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
