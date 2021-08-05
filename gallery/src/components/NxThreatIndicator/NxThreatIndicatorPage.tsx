/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import NxThreatIndicatorByCategoryExample from './NxThreatIndicatorByCategoryExample';
import NxThreatIndicatorByPolicyNumberExample from './NxThreatIndicatorByPolicyNumberExample';
import NxThreatIndicatorListExample from './NxThreatIndicatorListExample';
import NxThreatIndicatorTableExample from './NxThreatIndicatorTableExample';

const nxThreatIndicatorByCategoryCode = require('./NxThreatIndicatorByCategoryExample?raw'),
    nxThreatIndicatorByPolicyNumberCode = require('./NxThreatIndicatorByPolicyNumberExample?raw'),
    nxThreatIndicatorListCode = require('./NxThreatIndicatorListExample?raw'),
    nxThreatIndicatorTableCode = require('./NxThreatIndicatorTableExample?raw');

const NxThreatIndicatorPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxThreatIndicator</NxCode> is an inline element used
        to indicate via color the IQ policy threat level of the information to follow that follows it.
      </NxP>
      <NxP>
        There are two scales to choose from: threat level by category, and threat
        level by number. When using this component, it is expected that just one of the props will be passed. If both
        are passed, <NxCode>threatLevelCategory</NxCode> takes precedence. If neither are passed,
        the <NxCode>unspecified</NxCode> category is used
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

    <GalleryExampleTile title="Threat Indicators by Category"
                        id="nx-threat-indicator-simple-example"
                        liveExample={NxThreatIndicatorByCategoryExample}
                        codeExamples={nxThreatIndicatorByCategoryCode}>
      A series of lines of text, each beginning with an <NxCode>NxThreatIndicator</NxCode> whose
      color is set to a different <NxCode>threatLevelCategory</NxCode> value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Indicators by Policy Number"
                        liveExample={NxThreatIndicatorByPolicyNumberExample}
                        codeExamples={nxThreatIndicatorByPolicyNumberCode}>
      A series of lines of text, each beginning with an <NxCode>NxThreatIndicator</NxCode> whose
      color is set to a different <NxCode>policyThreatNumber</NxCode> value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Indicators in nx-list"
                        id="nx-threat-indicator-list-example"
                        liveExample={NxThreatIndicatorListExample}
                        codeExamples={nxThreatIndicatorListCode}>
      An <NxCode>.nx-list</NxCode> including rows in various configurations, each starting with
      an <NxCode>NxThreatIndicator</NxCode>. Note that this list uses such a wide variety of
      items for layout illustration purposes only. In practice you would not, for instance, have action buttons within
      an item of a clickable list.
    </GalleryExampleTile>

    <GalleryExampleTile title="Threat Indicators in nx-table"
                        id="nx-threat-indicator-table-example"
                        liveExample={NxThreatIndicatorTableExample}
                        codeExamples={nxThreatIndicatorTableCode}>
      Since <NxCode>nx-table</NxCode> is one of the primary places
      that <NxCode>NxThreatIndicator</NxCode> is intended to be used, this example demonstrates a
      typical usage of it. Note that no special classes or placements are needed here, it is essentially just the
      usual inline layout of the threat indicator and adjacent content, within a table cell.
    </GalleryExampleTile>
  </>;

export default NxThreatIndicatorPage;
