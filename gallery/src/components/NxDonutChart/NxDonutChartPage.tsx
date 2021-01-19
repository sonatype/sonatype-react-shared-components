/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';

const nxDonutChartMinimalExampleCode = require('!!raw-loader!./NxDonutChartMinimalExample').default;

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
              <p>value: percentage</p>
              <p>severity: color to fill the section of the donut</p>
              <p>label to be used</p>
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
  </>;

export default NxDonutChartPage;
