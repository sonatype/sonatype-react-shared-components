/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatIndicatorByCategoryExample from './NxThreatIndicatorByCategoryExample';
import NxThreatIndicatorByPolicyNumberExample from './NxThreatIndicatorByPolicyNumberExample';
import NxThreatIndicatorListExample from './NxThreatIndicatorListExample';

const nxThreatIndicatorByCategoryCode = require('!!raw-loader!./NxThreatIndicatorByCategoryExample').default,
    nxThreatIndicatorByPolicyNumberCode = require('!!raw-loader!./NxThreatIndicatorByPolicyNumberExample').default,
    nxThreatIndicatorListCode = require('!!raw-loader!./NxThreatIndicatorListExample').default;

const NxThreatIndicatorPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxThreatIndicator</code> is an inline element used
        to indicate via color the IQ policy threat level of the information to follow that follows it.
      </p>
      <p className="nx-p">
        There are two scales to choose from: threat level by category, and threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <code className="nx-code">threatLevelCategory</code> takes precedence. If neither are passed,
        the <code className="nx-code">unspecified</code> category is used
      </p>
      <table className="nx-table">
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
            <td className="nx-cell">threatLevelCategory</td>
            <td className="nx-cell">One of 'unspecified', 'none', 'low', 'moderate', 'severe', or 'critical'</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A Threat Level Category off of which to base the indicator color</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">policyThreatLevel</td>
            <td className="nx-cell">number (0 - 10 inclusive)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A Policy Threat Level Number off of which to base the indicator color</td>
          </tr>
        </tbody>
      </table>

      <p className="nx-p">
        The following table shows the mapping between threat level number and threat level category.
      </p>
      <table className="nx-table">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Threat Level Number</th>
            <th className="nx-cell nx-cell--header">Threat Level Category</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">0</td>
            <td className="nx-cell">none</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">1</td>
            <td className="nx-cell">low</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">2 - 3</td>
            <td className="nx-cell">moderate</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">4 - 7</td>
            <td className="nx-cell">severe</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">8 - 10</td>
            <td className="nx-cell">critical</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Threat Indicators by Category"
                        id="nx-threat-indicator-list-example"
                        liveExample={NxThreatIndicatorByCategoryExample}
                        codeExamples={nxThreatIndicatorByCategoryCode}>
      A series of lines of text, each beginning with an <code className="nx-code">NxThreatIndicator</code> whose
      color is set to a different <code className="nx-code">threatLevelCategory</code> value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Indicators by Policy Number"
                        liveExample={NxThreatIndicatorByPolicyNumberExample}
                        codeExamples={nxThreatIndicatorByPolicyNumberCode}>
      A series of lines of text, each beginning with an <code className="nx-code">NxThreatIndicator</code> whose
      color is set to a different <code className="nx-code">policyThreatNumber</code> value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Indicators in nx-list"
                        liveExample={NxThreatIndicatorListExample}
                        codeExamples={nxThreatIndicatorListCode}>
      An <code className="nx-code">.nx-list</code> including rows in various configurations, each starting with
      and <code className="nx-code">NxThreatIndicator</code>. Note that this list uses such a wide variety of
      items for layout illustration purposes only. In practice you would not, for instance, have action buttons within
      an item of a clickable list.
    </GalleryExampleTile>
  </>;

export default NxThreatIndicatorPage;
