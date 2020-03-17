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
import CodeExample from '../../CodeExample';

const simpleSourceCode = require('!!raw-loader!./NxLoadErrorSimpleExample').default;
const retrySourceCode = require('!!raw-loader!./NxLoadErrorRetryExample').default;

const NxLoadErrorPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Error message with optional Retry button</p>
      <p>Props:</p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>error</td>
            <td>string</td>
            <td>No</td>
            <td>
              A message that represents an error that occurred.  If null or undefined, NxLoadError will not render
              anything
            </td>
          </tr>
          <tr>
            <td>titleMessage</td>
            <td>string</td>
            <td>No</td>
            <td>A message to display before the error output. Defaults to 'An error occurred loading data.'</td>
          </tr>
          <tr>
            <td>retryHandler</td>
            <td>Function</td>
            <td>No</td>
            <td>If this is defined, a Retry button will be rendered which executes this function when clicked</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile>
      <NxLoadErrorSimpleExample />
      <CodeExample content={simpleSourceCode} />
    </GalleryExampleTile>
    <GalleryExampleTile>
      In this example, the error is cleared on retry.
      Note that the NxLoadError component disappears when that happens
      <NxLoadErrorRetryExample />
      <CodeExample content={retrySourceCode} />
    </GalleryExampleTile>
  </>;

export default NxLoadErrorPage;
