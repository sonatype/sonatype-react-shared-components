/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxPolicyThreatSliderExample from './NxPolicyThreatSliderExample';
import NxPolicyThreatSliderDisabledExample from './NxPolicyThreatSliderDisabledExample';

const NxPolicyThreatSliderCode = require('./NxPolicyThreatSliderExample?raw');
const NxPolicyThreatSliderDisabledCode = require('./NxPolicyThreatSliderDisabledExample?raw');

export default function NxPolicyThreatSliderPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>A slider for selecting a range of policy threats (e.g. values between 0 and 10)</NxP>
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
              <NxTable.Cell>value</NxTable.Cell>
              <NxTable.Cell>2-value array of integers between 0 and 10 inclusive</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The values to which to set the range slider handles</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Optional additional CSS classes to apply</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onChange</NxTable.Cell>
              <NxTable.Cell>Function which accepts 2-value array of integers between 0 and 10 inclusive</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Callback executed when the user changes the range selection</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Set to true to disable interaction with this component.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="General Example"
                          id="nx-policy-threat-slider-example"
                          codeExamples={NxPolicyThreatSliderCode}
                          liveExample={NxPolicyThreatSliderExample}>
        This example shows an NxPolicyThreatSlider communicating its selected values
        to the calling code.
      </GalleryExampleTile>

      <GalleryExampleTile title="Disabled Example"
                          id="nx-policy-threat-slider-disabled-example"
                          codeExamples={NxPolicyThreatSliderDisabledCode}
                          liveExample={NxPolicyThreatSliderDisabledExample}>
        This <NxCode>NxPolicyThreatSlider</NxCode> is disabled.
      </GalleryExampleTile>
    </>
  );
}
