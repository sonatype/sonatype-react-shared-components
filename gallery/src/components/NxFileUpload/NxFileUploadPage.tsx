/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFileUploadExample from './NxFileUploadExample';

const nxFileUploadCode = require('./NxFileUploadExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>...</NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-file-upload-example"
                        liveExample={NxFileUploadExample}
                        codeExamples={nxFileUploadCode}>
      A basic example of an <NxCode>NxFileUpload</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
