/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadErrorSimpleExample from './NxLoadErrorSimpleExample';
import NxLoadErrorNoCloseExample from './NxLoadErrorNoCloseExample';
import NxLoadErrorRetryExample from './NxLoadErrorRetryExample';
import NxLoadErrorRetryLongMessageExample from './NxLoadErrorRetryLongMessageExample';

const simpleSourceCode = require('!!raw-loader!./NxLoadErrorSimpleExample').default;
const noCloseSourceCode = require('!!raw-loader!./NxLoadErrorNoCloseExample').default;
const retrySourceCode = require('!!raw-loader!./NxLoadErrorRetryExample').default;
const retryLongMessageSourceCode = require('!!raw-loader!./NxLoadErrorRetryExample').default;

const NxLoadErrorPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Error message with optional Retry button</p>
      <p className="nx-p">Props:</p>
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
            <td className="nx-cell">error</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A message that represents an error that occurred.  If null or undefined, NxLoadError will not render
              anything
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">titleMessage</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A message to display before the error output. Defaults to 'An error occurred loading data.'
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">retryHandler</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If this is defined, a Retry button will be rendered which executes this function when clicked
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onClose</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A handler that dismisses the alert when called.
              See <a href="#/page/NxAlert"><code className="nx-code">NxAlert</code></a> for details. This should only
              be specified when a <code className="nx-code">retryHandler</code> is not provided.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Standard Example with Retry Button"
                        codeExamples={retrySourceCode}
                        liveExample={NxLoadErrorRetryExample}>
      In this example, the error is cleared on retry. Note that
      the <code className="nx-code">NxLoadError</code> component
      disappears when that happens. This is the most common usage
      of <code className="nx-code">NxLoadError</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Close Button"
                        codeExamples={simpleSourceCode}
                        liveExample={NxLoadErrorSimpleExample}>
      This example demonstrates a basic <code className="nx-code">NxLoadError</code> for cases where a Retry action
      does not make sense. In most cases, when an <code className="nx-code">NxLoadError</code> does
      not have a Retry button, it should have a Close button.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example without Close Button"
                        codeExamples={noCloseSourceCode}
                        liveExample={NxLoadErrorNoCloseExample}>
      This example demonstrates an <code className="nx-code">NxLoadError</code> has neither a Retry button nor a
      Close button. This arrangement should only be used for cases where:
      <ol>
        <li>
          The <code className="nx-code">NxLoadError</code> is the only component within the main area of the page.
        </li>
        <li>
          Retrying the load would not help.
        </li>
      </ol>
      Most typically, these conditions are met when the user manually navigates the page URL to an invalid route.
    </GalleryExampleTile>

    <GalleryExampleTile title="Retry Button with Long Text"
                        codeExamples={retryLongMessageSourceCode}
                        liveExample={NxLoadErrorRetryLongMessageExample}>
      This example demonstrates that when the text is long, the Retry button falls
      underneath of it but still on the right-hand side of the alert.
    </GalleryExampleTile>
  </>;

export default NxLoadErrorPage;
