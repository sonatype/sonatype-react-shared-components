/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxAlertExample from './NxAlertExample';
import NxErrorAlertExample from './NxErrorAlertExample';
import NxWarningAlertExample from './NxWarningAlertExample';
import NxInfoAlertExample from './NxInfoAlertExample';
import CodeExample from '../../CodeExample';

const nxErrorAlertExampleCode = require('!!raw-loader!./NxErrorAlertExample').default,
    nxInfoAlertExampleCode = require('!!raw-loader!./NxInfoAlertExample').default,
    nxWarningAlertExampleCode = require('!!raw-loader!./NxWarningAlertExample').default,
    nxAlertExampleCode = require('!!raw-loader!./NxAlertExample').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Generic alert.</p>
      <p>Handy for DIY alert variations</p>
      <p>Accepts any prop that is valid on a div as well as the following:</p>
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
            <td>icon</td>
            <td>FontAwesome's Icons</td>
            <td>Yes</td>
            <td>
              A FontAwesome icon to use in the alert message
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Alert Example">
      <NxAlertExample/>
      <CodeExample content={nxAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="NxErrorAlert, NxInfoAlert, NxWarningAlert">
      <p>Standard sonatype alerts.</p>
      <p>They come in three variations: Error, Info, and Warning.</p>
      <p>Accepts any prop that is valid on a div</p>
    </GalleryTile>

    <GalleryTile title="Error Alert Example">
      <NxErrorAlertExample />
      <CodeExample content={nxErrorAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="Info Alert Example">
      <NxInfoAlertExample />
      <CodeExample content={nxInfoAlertExampleCode} />
    </GalleryTile>

    <GalleryTile title="Warning Alert Example">
      <NxWarningAlertExample />
      <CodeExample content={nxWarningAlertExampleCode} />
    </GalleryTile>
  </>;

export default NxAlertPage;
