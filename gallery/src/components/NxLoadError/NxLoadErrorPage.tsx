/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadErrorSimpleExample from './NxLoadErrorSimpleExample';
import NxLoadErrorRetryExample from './NxLoadErrorRetryExample';
import NxLoadErrorRetryLongMessageExample from './NxLoadErrorRetryLongMessageExample';

const simpleSourceCode = require('!!raw-loader!./NxLoadErrorSimpleExample').default;
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
              See <a href="#/page/NxAlert"><code className="nx-code">NxAlert</code></a> for details.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={simpleSourceCode}
                        liveExample={NxLoadErrorSimpleExample}>
      This example demonstrates a basic NxLoadError which renders the error message in
      an alert box. Note that like <code className="nx-code">NxAlert</code>s in
      general, <code className="nx-code">NxLoadError</code>s that do not have a Retry button must define
      an <code className="nx-code">onClose</code> handler which is exposed via a Close button in the alert.
    </GalleryExampleTile>

    <GalleryExampleTile title="Retry Button"
                        codeExamples={retrySourceCode}
                        liveExample={NxLoadErrorRetryExample}>
      In this example, the error is cleared on retry. Note that the NxLoadError
      component disappears when that happens.
    </GalleryExampleTile>

    <GalleryExampleTile title="Retry Button with Long Text"
                        codeExamples={retryLongMessageSourceCode}
                        liveExample={NxLoadErrorRetryLongMessageExample}>
      This example demonstrates that when the text is long, the Retry button falls
      underneath of it but still on the right-hand side of the alert.
    </GalleryExampleTile>
  </>;

export default NxLoadErrorPage;
