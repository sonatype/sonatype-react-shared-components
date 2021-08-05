/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import NxStatefulSubmitMaskExample from './NxStatefulSubmitMaskExample';
import NxStatefulSubmitMaskCustomMessageExample from './NxStatefulSubmitMaskCustomMessageExample';

const NxStatefulSubmitMaskCode = require('./NxStatefulSubmitMaskExample?raw'),
    NxStatefulSubmitMaskCustomMessageCode = require('./NxStatefulSubmitMaskCustomMessageExample?raw');

const NxStatefulSubmitMaskPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        This is a wrapper around <NxCode>NxSubmitMask</NxCode> which manages the display and then
        hiding of the success phase of the mask.
      </NxP>
      <NxP>
        The externally visible "success" state, specified by setting the <NxCode>success</NxCode> prop
        to true, encompasses two interally-managed states: the actual, visible success state, and then the automatic
        removal of the mask after the success state has been visible for a brief time.  Since this component manages
        these states internally, from an external perspective "success" is the end state
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
            <NxTable.Cell>success</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the mask should display as a success. When true, the loading spinner will not be present,
              the mask will have green styling, and the <NxCode>successMessage</NxCode> will be used
              instead of the <NxCode>message</NxCode> as described below. In this stateful component,
              the success state will only be visible briefly and then will automatically hide. Defaults to false
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>message</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The text to display inside of the mask when <NxCode>success</NxCode> is false.  Defaults
              to "Submitting…"
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>successMessage</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The text to display inside of the mask when <NxCode>success</NxCode> is true. Defaults
              to "Success!"
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        The examples on this page each start in a non-success state for five seconds before being updated to the
        success state
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulSubmitMaskExample}
                        codeExamples={NxStatefulSubmitMaskCode}>
      An example of a simple <NxCode>NxStatefulSubmitMask</NxCode>. Click the button below to begin
      the example.  Once the button is clicked, the example is set up to stay in the non-success state for five
      seconds, demonstrating the delay in the completion of some asynchronous processing. Then, after five seconds,
      the mask reaches the Sucess state which it automatically displays for a brief period of time.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Message Example"
                        liveExample={NxStatefulSubmitMaskCustomMessageExample}
                        codeExamples={NxStatefulSubmitMaskCustomMessageCode}>
      An example with a similar setup to the one above. This one however includes a custom message for both the
      non-success and success phases.
    </GalleryExampleTile>
  </>;

export default NxStatefulSubmitMaskPage;
