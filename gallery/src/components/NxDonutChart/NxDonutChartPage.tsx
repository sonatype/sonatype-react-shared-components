/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxDonutChartMinimalExample from './NxDonutChartMinimalExample';
import NxDonutChartArbitraryColorExample from './NxDonutChartArbitraryColorExample';

const nxDonutChartMinimalExampleCode = require('!!raw-loader!./NxDonutChartMinimalExample').default;
const nxDonutChartArbitraryColorCode = require('!!raw-loader!./NxDonutChartArbitraryColorExample').default;

const NxDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxDonutChart</code> represents a multidata donut chart.
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
            <td className="nx-cell">dataPoints</td>
            <td className="nx-cell">NxDonutChartDataPoint[]</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
                Each array element represents a data point to be added to the donut
              <br></br>
              <p><strong>value:</strong> value as a percentage</p>
              <p><strong>severity:</strong> color to fill the section of the donut, options are<sup>1</sup>:</p>
              <ul>
                <li><code className="cn-severity-donut-chart__critical-arc">critical</code></li>
                <li><code className="cn-severity-donut-chart__severe-arc">severe</code></li>
                <li><code className="cn-severity-donut-chart__moderate-arc">moderate</code></li>
                <li><code className="cn-severity-donut-chart__low-arc">low</code></li>
                <li><code className="cn-severity-donut-chart__no-threat-arc">no-threat</code></li>
                <li><code className="cn-severity-donut-chart__unspecified-arc">unspecified</code></li>
              </ul>
              <p><strong>label:</strong> to be used</p>
              <p>
                  {/* eslint-disable-next-line max-len */}
                <sup>note 1</sup>: It is possible to specify arbitrary colors, firstly you will need to <code className="nx-code">unset</code> all css color options <code className="nx-code">.nx-severity-donut-chart__#severity-arc</code> where <code className="nx-code">#severity</code> are the options from the list above
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Examples"
                        id="nx-binary-donut-chart-minimal-examples"
                        codeExamples={nxDonutChartMinimalExampleCode}
                        liveExample={NxDonutChartMinimalExample}>
        Minimal examples of <code className="nx-code">NxDonutChart</code>s with different values.
        Some of these charts demonstrate the usage of <code className="nx-code">aria-label</code> to describe the
        chart contents.
    </GalleryExampleTile>
    <GalleryExampleTile title="Arbitrary Color Examples"
                        id="nx-binary-donut-chart-arbitrary-color-examples"
                        codeExamples={nxDonutChartArbitraryColorCode}
                        liveExample={NxDonutChartArbitraryColorExample}>
          Minimal examples of <code className="nx-code">NxDonutChart</code>s with different color values specified.
    </GalleryExampleTile>
  </>;

export default NxDonutChartPage;
