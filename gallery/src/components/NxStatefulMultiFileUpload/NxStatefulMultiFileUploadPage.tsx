/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulMultiFileUploadExample from './NxStatefulMultiFileUploadExample';

const nxStatefulMultiFileUploadCode = require('./NxStatefulMultiFileUploadExample?raw');

const NxStatefulMultiFileUploadPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulMultiFileUpload</NxCode> is a stateful version of <NxCode>NxMultiFileUpload</NxCode>.
        It tracks the selected files and pristine state internally while still exposing an <NxCode>onChange</NxCode>
        {' '}prop which can be used to communicate the selected files to surrounding code.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulMultiFileUpload</NxCode> takes all of the same props as <NxCode>NxMultiFileUpload</NxCode>,
          {' '}except for <NxCode>files</NxCode> and <NxCode>isPristine</NxCode>. The <NxCode>onChange</NxCode> prop
          is optional.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-multi-file-upload-stateful-example"
                        liveExample={NxStatefulMultiFileUploadExample}
                        codeExamples={nxStatefulMultiFileUploadCode}>
      A basic example of an <NxCode>NxStatefulMultiFileUpload</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxStatefulMultiFileUploadPage;
