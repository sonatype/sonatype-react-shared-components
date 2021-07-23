/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxP } from '@sonatype/react-shared-components';
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxListExample from './NxListExample';

const NxListExampleCode = require('./NxListExample?raw');

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>NxList</NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Alert Example"
                        id="nx-alert-custom-example"
                        liveExample={NxListExample}
                        codeExamples={NxListExampleCode}>
      An example of a NxList.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
