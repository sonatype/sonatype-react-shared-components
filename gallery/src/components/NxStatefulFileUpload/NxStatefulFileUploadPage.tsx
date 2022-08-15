/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulFileUploadExample from './NxStatefulFileUploadExample';

const nxStatefulFileUploadCode = require('./NxStatefulFileUploadExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulFileUpload</NxCode> is a stateful version of <NxCode>NxFileUpload</NxCode>.
        It tracks the selected file internally while still exposing an <NxCode>onChange</NxCode>
        prop which can be used to communicate the selected file to surrounding code.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulFileUpload</NxCode> takes all of the same props as <NxCode>NxFileUpload</NxCode>, except
          for <NxCode>files</NxCode>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulFileUploadExample}
                        codeExamples={nxStatefulFileUploadCode}>
      A basic example of an <NxCode>NxStatefulFileUpload</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
