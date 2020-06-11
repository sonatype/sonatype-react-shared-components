/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import RawHtmlExample from '../../RawHtmlExample';

const nxAlertInfoCode = require('./NxAlertInfoExample.html').default,
    nxAlertWarningCode = require('./NxAlertWarningExample.html').default,
    nxAlertErrorCode = require('./NxAlertErrorExample.html').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Standard name spaced alert styles.</p>
    </GalleryDescriptionTile>

    <GalleryTile title="Information alert">
      <RawHtmlExample html={nxAlertInfoCode}/>
      <CodeExample content={nxAlertInfoCode}/>
    </GalleryTile>

    <GalleryTile title="Warning alert">
      <RawHtmlExample html={nxAlertWarningCode}/>
      <CodeExample content={nxAlertWarningCode}/>
    </GalleryTile>

    <GalleryTile title="Error alert">
      <RawHtmlExample html={nxAlertErrorCode}/>
      <CodeExample content={nxAlertErrorCode}/>
    </GalleryTile>
  </>;

export default NxAlertPage;
