/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxMeterExample from './NxMeterExample';

const nxMeterExampleCode = require('./NxMeterExample?raw');

const NxMeterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A progress indicator component showing the completion progress
        of a task with support for labels and percentage counter.
        This component does not support indeterminate state.
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
            <NxTable.Cell><NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>0 &ge; number &le; <NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Value indicating progress. A number from  0 to <NxCode>max</NxCode>.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>number &gt; 0 and number &ge; <NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to 100.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxMeter"
                        id="nx-meter-example"
                        liveExample={NxMeterExample}
                        codeExamples={nxMeterExampleCode}>
      Examples of <NxCode>NxMeter</NxCode> showing 0% measurement, a 100% meaurement, and in-between measurement.
    </GalleryExampleTile>
  </>;

export default NxMeterPage;
