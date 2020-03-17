/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxGridExample from './NxGridExample';

const NxGridCode = require('!!raw-loader!./NxGridExample').default,
    NxGridMixinUsageCode = require('!!raw-loader!./CustomWidthExample.scss').default;

const NxGridExamples = () =>
  <>
    <GalleryTile title="NX Grid Example">
      <NxGridExample />
      <CodeExample content={NxGridCode}/>
      <CodeExample content={NxGridMixinUsageCode}/>
    </GalleryTile>
  </>;

export default NxGridExamples;
