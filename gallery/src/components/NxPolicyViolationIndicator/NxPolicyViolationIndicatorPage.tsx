/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPolicyViolationIndicatorByCategoryExample from './NxPolicyViolationIndicatorByCategoryExample';
import NxPolicyViolationIndicatorByPolicyNumberExample from './NxPolicyViolationIndicatorByPolicyNumberExample';

const nxPolicyViolationIndicatorByCategoryCode =
          require('./NxPolicyViolationIndicatorByCategoryExample?raw'),
    nxPolicyViolationIndicatorByPolicyNumberCode =
        require('./NxPolicyViolationIndicatorByPolicyNumberExample?raw');

const NxPolicyViolationIndicatorPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>NxPolicyViolationIndicator</NxCode> is an element used to indicate IQ policy threat
        level via color and text.
      </p>
      <p className="nx-p">
        There are two scales to choose from: threat level by category, and threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <NxCode>threatLevelCategory</NxCode> takes precedence. If neither are passed,
        the <NxCode>unspecified</NxCode> category is used.
      </p>
      <p className="nx-p">
        The text that appears inside the component can be specified by the user, or if no text is supplied the threat
        category will appear.
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
          <tr className="nx-table-row">
            <td className="nx-cell">HTML <NxCode>&lt;div&gt;</NxCode> Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">N/A</td>
            <td className="nx-cell">
              NxPolicyViolationIndicator supports any HTML attribute that's normally supported
              by <NxCode>&lt;div&gt;</NxCode>.
            </td>
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

    <GalleryExampleTile title="Policy Violation Indicators by Category"
                        id="nx-policy-violation-indicator-category-example"
                        liveExample={NxPolicyViolationIndicatorByCategoryExample}
                        codeExamples={nxPolicyViolationIndicatorByCategoryCode}>
      Examples of <NxCode>NxPolicyViolationIndicator</NxCode> displaying each of the available
      <NxCode>threatLevelCategory</NxCode> values with user specified text.
    </GalleryExampleTile>

    <GalleryExampleTile title="Policy Violation Indicators by Policy Number"
                        id="nx-policy-violation-indicator-number-example"
                        liveExample={NxPolicyViolationIndicatorByPolicyNumberExample}
                        codeExamples={nxPolicyViolationIndicatorByPolicyNumberCode}>
      Examples of <NxCode>NxPolicyViolationIndicator</NxCode> where the colours are specified by
      the <NxCode>policyThreatNumber</NxCode> value and the text shown is the default category label.
    </GalleryExampleTile>
  </>;

export default NxPolicyViolationIndicatorPage;
