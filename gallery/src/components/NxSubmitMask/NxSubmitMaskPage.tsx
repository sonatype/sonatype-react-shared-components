/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
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
      <p className="nx-p">
        NxSubmitMask creates a mask that covers the page while submission of a form or similar element
        is in progress, in order to indicate to the user that the submission is in-progress, and typically, when it
        has completed.
      </p>
      <p className="nx-p">
        Handling the brief display of the "success" part of the mask is left up to the caller, as it is often
        intertwined with other business logic (for example closing a modal) and may be best managed in redux or similar.
        A constant, <code className="nx-code">SUBMIT_MASK_SUCCESS_VISIBLE_TIME_MS</code>, is exported in order to
        provide said external business logic with a standard value for the amount of time to show the success mask.
        If you do not need to tie the showing and hiding of the success mask to other business logic, consider
        using <code className="nx-code">NxStatefulSubmitMask</code> which encapsulates the success mask management.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">success</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the mask should display as a success. When true, the loading spinner will not be present,
              the mask will have green styling, and the <code className="nx-code">successMessage</code> will be used
              instead of the <code className="nx-code">message</code> as described below. Defaults to false
            </td>
          </tr>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">message</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The text to display inside of the mask when <code className="nx-code">success</code> is false.  Defaults
              to "Submitting…"
            </td>
          </tr>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">successMessage</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The text to display inside of the mask when <code className="nx-code">success</code> is true. Defaults
              to "Success!"
            </td>
          </tr>
        </tbody>
      </table>
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
      An <code className="nx-code">NxSubmitMask</code> in the non-success phase with a custom message.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success Example"
                        id="nx-submit-mask-success-example"
                        liveExample={NxSubmitMaskSuccessExample}
                        codeExamples={NxSubmitMaskSuccessCode}>
      An <code className="nx-code">NxSubmitMask</code> in the success phase.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Success Message Example"
                        liveExample={NxSubmitMaskCustomSuccessMessageExample}
                        codeExamples={NxSubmitMaskCustomSuccessMessageCode}>
      An <code className="nx-code">NxSubmitMask</code> in the success phase with a custom success message. Note that the
      success message is a separate <code className="nx-code">prop</code> from the non-success message.
    </GalleryExampleTile>

  </>;

export default NxSubmitMaskPage;
