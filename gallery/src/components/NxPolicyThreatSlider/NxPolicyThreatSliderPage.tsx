/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxPolicyThreatSliderExample from './NxPolicyThreatSliderExample';
import NxPolicyThreatSliderDisabledExample from './NxPolicyThreatSliderDisabledExample';

const NxPolicyThreatSliderCode = require('!!raw-loader!./NxPolicyThreatSliderExample').default;
const NxPolicyThreatSliderDisabledCode = require('!!raw-loader!./NxPolicyThreatSliderDisabledExample').default;

export default function NxPolicyThreatSliderPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">A slider for selecting a range of policy threats (e.g. values between 0 and 10)</p>
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
              <td className="nx-cell">value</td>
              <td className="nx-cell">2-value array of integers between 0 and 10 inclusive</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">The values to which to set the range slider handles</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Optional additional CSS classes to apply</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onChange</td>
              <td className="nx-cell">Function which accepts 2-value array of integers between 0 and 10 inclusive</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Callback executed when the user changes the range selection</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">disabled</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Set to true to disable interaction with this component.</td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="General Example"
                          codeExamples={NxPolicyThreatSliderCode}
                          liveExample={NxPolicyThreatSliderExample}>
        This example shows an NxPolicyThreatSlider communicating its selected values
        to the calling code.
      </GalleryExampleTile>

      <GalleryExampleTile title="Disabled Example"
                          codeExamples={NxPolicyThreatSliderDisabledCode}
                          liveExample={NxPolicyThreatSliderDisabledExample}>
        This <code className="nx-code">NxPolicyThreatSlider</code> is disabled.
      </GalleryExampleTile>
    </>
  );
}
