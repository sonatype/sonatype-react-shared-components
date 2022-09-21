/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxMeterExample from './NxMeterExample';

const nxMeterExampleCode = require('./NxMeterExample?raw');

const NxMeterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxMeter</NxCode> is an RSC-styled <NxCode>&lt;meter&gt;</NxCode> element – an indicator which can
        depict a scalar value within a known range. Examples of values that may be depicted with this component
        include percentages of items successfully identified.
      </NxP>
      <NxInfoAlert>
        There is a difference between meters and progress bars. While <NxCode>NxProgressBar</NxCode> is intended
        to show the current state of some process as it moves towards completion over time, <NxCode>NxMeter</NxCode>
        {' '}is intended to show a static numeric value in relation to its known maximum.
      </NxInfoAlert>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>0 &ge; number &le; <NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>Value indicating the measurement. A number from 0 to <NxCode>max</NxCode>.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>number &gt; 0 and number &ge; <NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>100</NxTable.Cell>
            <NxTable.Cell>
              The maximum that the value of the meter might reach. When <NxCode>value</NxCode> and{' '}
              <NxCode>max</NxCode> are equal, the meter is portrayed as being full.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>children</NxCode></NxTable.Cell>
            <NxTable.Cell>ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              Content placed within <NxCode>NxMeter</NxCode> will become both the tooltip and screenreader value
              of the meter. For accessibility this should always be specified, should make sense within the surrounding
              text content, and should fully describe the information conveyed by the meter.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>
              HTML <NxCode>&lt;meter&gt;</NxCode> Attributes Subset
            </NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/meter">
                Meter Attributes
              </NxTextLink>
              , excluding <NxCode>min</NxCode>, <NxCode>low</NxCode>, <NxCode>high</NxCode>,
              and <NxCode>optimum</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              NxMeter supports any html attribute that are normally supported by HTML
              <NxCode>&lt;meter&gt;</NxCode> elements, with the exception of <NxCode>min</NxCode>,
              <NxCode>low</NxCode>, <NxCode>high</NxCode>, and <NxCode>optimum</NxCode>. These attributes may
              become supported in the future.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxMeter"
                        id="nx-meter-example"
                        liveExample={NxMeterExample}
                        codeExamples={nxMeterExampleCode}>
      Examples of <NxCode>NxMeter</NxCode> showing 0% measurements, 100% meaurements, and in-between measurements.
    </GalleryExampleTile>
  </>;

export default NxMeterPage;
