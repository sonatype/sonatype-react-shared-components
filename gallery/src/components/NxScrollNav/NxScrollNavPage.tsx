/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxScrollNavExample from './NxScrollNavExample';

const nxScrollNavCode = require('./NxScrollNavExample?raw');

const NxScrollNavPage = () =>
  <>
    <GalleryDescriptionTile>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxScrollNavExample}
                        codeExamples={nxScrollNavCode}>
      TODO
    </GalleryExampleTile>
  </>;

export default NxScrollNavPage;
