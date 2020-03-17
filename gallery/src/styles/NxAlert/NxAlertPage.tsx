/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxAlertInfoExample from './NxAlertInfoExample';
import NxAlertWarningExample from './NxAlertWarningExample';
import NxAlertErrorExample from './NxAlertErrorExample';
import NxAlertErrorRetryExample from './NxAlertErrorRetryExample';

const nxAlertInfoCode = require('!!raw-loader!./NxAlertInfoExample').default,
    nxAlertWarningCode = require('!!raw-loader!./NxAlertWarningExample').default,
    nxAlertErrorCode = require('!!raw-loader!./NxAlertErrorExample').default,
    nxAlertErrorRetryCode = require('!!raw-loader!./NxAlertErrorRetryExample').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Standard name spaced alert styles.</p>
    </GalleryDescriptionTile>

    <GalleryTile title="Information alert">
      <NxAlertInfoExample/>
      <CodeExample content={nxAlertInfoCode}/>
    </GalleryTile>

    <GalleryTile title="Warning alert">
      <NxAlertWarningExample/>
      <CodeExample content={nxAlertWarningCode}/>
    </GalleryTile>

    <GalleryTile title="Error alert">
      <NxAlertErrorExample/>
      <CodeExample content={nxAlertErrorCode}/>
    </GalleryTile>

    <GalleryTile title="Error alert with retry button">
      <NxAlertErrorRetryExample/>
      <CodeExample content={nxAlertErrorRetryCode} />
    </GalleryTile>
  </>;

export default NxAlertPage;
