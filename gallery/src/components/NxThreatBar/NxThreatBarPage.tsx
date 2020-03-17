/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

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
      <p>
        <code className="nx-code">NxThreatBar</code> is used at the left edge of a table cell or list item
        to indicate via color the threat level of the information to follow.
      </p>
      <p>
        There are two scales to choose from: threat level by category, and policy threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <code className="nx-code">threatLevelCategory</code> takes precedence. If neither are passed,
        the <code className="nx-code">unspecified</code> category is used
      </p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>threatLevelCategory</td>
            <td>One of 'unspecified', 'none', 'low', 'moderate', 'severe', or 'critical'</td>
            <td>No</td>
            <td>A Threat Level Category to base the bar color off of</td>
          </tr>
          <tr>
            <td>policyThreatLevel</td>
            <td>number (0 - 10 inclusive)</td>
            <td>No</td>
            <td>A Policy Threat Level Number to base the bar color off of</td>
          </tr>
        </tbody>
      </table>

      <p>The following table shows the mapping between threat level number and threat level category</p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Threat Level Number</th>
            <th>Threat Level Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>none</td>
          </tr>
          <tr>
            <td>1</td>
            <td>low</td>
          </tr>
          <tr>
            <td>2 - 3</td>
            <td>moderate</td>
          </tr>
          <tr>
            <td>4 - 7</td>
            <td>severe</td>
          </tr>
          <tr>
            <td>8 - 10</td>
            <td>critical</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Threat Bars by Category in .nx-list">
      <NxThreatBarByCategoryExampleList/>
      <CodeExample content={nxThreatBarByCategoryListCode}/>
    </GalleryTile>

    <GalleryTile title="Threat Bars by Policy Number in .nx-list">
      <NxThreatBarByPolicyNumberExampleList/>
      <CodeExample content={nxThreatBarByPolicyNumberListCode}/>
    </GalleryTile>

    <GalleryTile title="Threat Bars by Category in .nx-table">
      <NxThreatBarByCategoryExampleTable/>
      <CodeExample content={nxThreatBarByCategoryTableCode}/>
    </GalleryTile>

    <GalleryTile title="Threat Bars by Policy Number in .nx-table">
      <NxThreatBarByPolicyNumberExampleTable/>
      <CodeExample content={nxThreatBarByPolicyNumberTableCode}/>
    </GalleryTile>
  </>;

export default NxThreatBarPage;
