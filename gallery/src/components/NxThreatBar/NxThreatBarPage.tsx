/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatBarByCategoryExampleList from './NxThreatBarByCategoryExampleListElements';
import NxThreatBarByPolicyNumberExampleList from './NxThreatBarByPolicyNumberExampleListElements';
import NxThreatBarByCategoryExampleTable from './NxThreatBarByCategoryExampleTableElements';
import NxThreatBarByPolicyNumberExampleTable from './NxThreatBarByPolicyNumberExampleTableElements';

const nxThreatBarByCategoryListCode =
        require('!!raw-loader!./NxThreatBarByCategoryExampleListElements').default,
    nxThreatBarByPolicyNumberListCode =
        require('!!raw-loader!./NxThreatBarByPolicyNumberExampleListElements').default,
    nxThreatBarByCategoryTableCode =
        require('!!raw-loader!./NxThreatBarByCategoryExampleTableElements').default,
    nxThreatBarByPolicyNumberTableCode =
        require('!!raw-loader!./NxThreatBarByPolicyNumberExampleTableElements').default;

const NxThreatBarPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxThreatBar</code> is used at the left edge of a table cell or list item
        to indicate via color the threat level of the information to follow.
      </p>
      <p className="nx-p">
        There are two scales to choose from: threat level by category, and policy threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <code className="nx-code">threatLevelCategory</code> takes precedence. If neither are passed,
        the <code className="nx-code">unspecified</code> category is used
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
            <td className="nx-cell">threatLevelCategory</td>
            <td className="nx-cell">One of 'unspecified', 'none', 'low', 'moderate', 'severe', or 'critical'</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A Threat Level Category to base the bar color off of</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">policyThreatLevel</td>
            <td className="nx-cell">number (0 - 10 inclusive)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A Policy Threat Level Number to base the bar color off of</td>
          </tr>
        </tbody>
      </table>

      <p className="nx-p">
        The following table shows the mapping between threat level number and threat level category.
      </p>
      <table className="nx-table nx-table--gallery-props">
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

    <GalleryExampleTile title="Threat Bars by Category in .nx-list"
                        id="nx-threat-bar-list-example"
                        liveExample={NxThreatBarByCategoryExampleList}
                        codeExamples={nxThreatBarByCategoryListCode}>
      An <code className="nx-code">.nx-list</code> including rows displaying threat bars for each category.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Bars by Policy Number in .nx-list"
                        liveExample={NxThreatBarByPolicyNumberExampleList}
                        codeExamples={nxThreatBarByPolicyNumberListCode}>
      An <code className="nx-code">.nx-list</code> including rows displaying threat bars for range of policy threat
      numbers.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Bars by Category in .nx-table"
                        id="nx-threat-bar-table-example"
                        liveExample={NxThreatBarByCategoryExampleTable}
                        codeExamples={nxThreatBarByCategoryTableCode}>
      An <code className="nx-code">.nx-table</code> including rows displaying threat bars for each category.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Bars by Policy Number in .nx-table"
                        liveExample={NxThreatBarByPolicyNumberExampleTable}
                        codeExamples={nxThreatBarByPolicyNumberTableCode}>
      An <code className="nx-code">.nx-table</code> including rows displaying threat bars for range of policy threat
      numbers.
    </GalleryExampleTile>
  </>;

export default NxThreatBarPage;
