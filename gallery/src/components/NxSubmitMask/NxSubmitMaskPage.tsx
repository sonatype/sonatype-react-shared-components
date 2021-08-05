/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import NxSubmitMaskCustomMessageExample from './NxSubmitMaskCustomMessageExample';
import NxSubmitMaskSuccessExample from './NxSubmitMaskSuccessExample';
import NxSubmitMaskCustomSuccessMessageExample from './NxSubmitMaskCustomSuccessMessageExample';
import NxSubmitMaskFullscreenExample from './NxSubmitMaskFullscreenExample';

const NxSubmitMaskCustomMessageCode = require('./NxSubmitMaskCustomMessageExample?raw'),
    NxSubmitMaskSuccessCode = require('./NxSubmitMaskSuccessExample?raw'),
    NxSubmitMaskCustomSuccessMessageCode = require('./NxSubmitMaskCustomSuccessMessageExample?raw'),
    NxSubmitMaskFullscreenCode = require('./NxSubmitMaskFullscreenExample?raw');

const NxSubmitMaskPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        NxSubmitMask creates a mask that covers the page while submission of a form or similar element
        is in progress, in order to indicate to the user that the submission is in-progress, and typically, when it
        has completed.
      </NxP>
      <NxP>
        Handling the brief display of the "success" part of the mask is left up to the caller, as it is often
        intertwined with other business logic (for example closing a modal) and may be best managed in redux or similar.
        A constant, <NxCode>SUBMIT_MASK_SUCCESS_VISIBLE_TIME_MS</NxCode>, is exported in order to
        provide said external business logic with a standard value for the amount of time to show the success mask.
        If you do not need to tie the showing and hiding of the success mask to other business logic, consider
        using <NxCode>NxStatefulSubmitMask</NxCode> which encapsulates the success mask management.
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
              instead of the <NxCode>message</NxCode> as described below. Defaults to false
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
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-submit-mask-loading-example"
                        liveExample={NxSubmitMaskFullscreenExample}
                        codeExamples={NxSubmitMaskFullscreenCode}>
      An example that displays a submit mask. This example activates upon clicking the button below.
      Once the mask is visible, press ESC to dismiss it. This ESC-key behavior is just part of this example so that you
      can get out of it, it is not built-in mask behavior. It only works as long as the button has focus.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Message Example"
                        liveExample={NxSubmitMaskCustomMessageExample}
                        codeExamples={NxSubmitMaskCustomMessageCode}>
      An <NxCode>NxSubmitMask</NxCode> in the non-success phase with a custom message.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success Example"
                        id="nx-submit-mask-success-example"
                        liveExample={NxSubmitMaskSuccessExample}
                        codeExamples={NxSubmitMaskSuccessCode}>
      An <NxCode>NxSubmitMask</NxCode> in the success phase.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Success Message Example"
                        liveExample={NxSubmitMaskCustomSuccessMessageExample}
                        codeExamples={NxSubmitMaskCustomSuccessMessageCode}>
      An <NxCode>NxSubmitMask</NxCode> in the success phase with a custom success message. Note that the
      success message is a separate <NxCode>prop</NxCode> from the non-success message.
    </GalleryExampleTile>

  </>;

export default NxSubmitMaskPage;
