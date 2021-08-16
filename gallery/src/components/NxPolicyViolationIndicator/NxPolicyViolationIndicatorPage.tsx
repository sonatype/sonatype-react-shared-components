/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';
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
      <NxP>
        <NxCode>NxPolicyViolationIndicator</NxCode> is an element used to indicate IQ policy threat
        level via color and text.
      </NxP>
      <NxP>
        There are two scales to choose from: threat level by category, and threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <NxCode>threatLevelCategory</NxCode> takes precedence. If neither are passed,
        the <NxCode>unspecified</NxCode> category is used.
      </NxP>
      <NxP>
        The text that appears inside the component can be specified by the user, or if no text is supplied the threat
        category will appear.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>threatLevelCategory</NxTable.Cell>
            <NxTable.Cell>One of 'unspecified', 'none', 'low', 'moderate', 'severe', or 'critical'</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>A Threat Level Category off of which to base the indicator color</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>policyThreatLevel</NxTable.Cell>
            <NxTable.Cell>number (0 - 10 inclusive)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>A Policy Threat Level Number off of which to base the indicator color</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxPolicyViolationIndicator supports any HTML attribute that's normally supported
              by <NxCode>&lt;div&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>

      <NxP>
        The following table shows the mapping between threat level number and threat level category.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Threat Level Number</NxTable.Cell>
            <NxTable.Cell>Threat Level Category</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>0</NxTable.Cell>
            <NxTable.Cell>none</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>1</NxTable.Cell>
            <NxTable.Cell>low</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>2 - 3</NxTable.Cell>
            <NxTable.Cell>moderate</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>4 - 7</NxTable.Cell>
            <NxTable.Cell>severe</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>8 - 10</NxTable.Cell>
            <NxTable.Cell>critical</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
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
