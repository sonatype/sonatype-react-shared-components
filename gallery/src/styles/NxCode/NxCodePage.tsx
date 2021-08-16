/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxP } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxCodeExampleCode = require('./NxCodeExample.html');

const NxCodePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          Using the <NxCode>&lt;code&gt;</NxCode> HTML tag with the
          <NxCode>.nx-code</NxCode> className applies a monospace font and other styling to make your
          code snippets stand out. When working in React, the <NxCode>NxCode</NxCode> component is available for
          a more convenient way to apply these styles.
        </NxP>
        <NxP>
          <NxCode>.nx-code</NxCode> is used extensively throughout the RSC Gallery.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Styling code snippets"
                          codeExamples={nxCodeExampleCode}
                          htmlExample={nxCodeExampleCode}>
        A couple of simple inline examples.
      </GalleryExampleTile>
    </>
  );
};

export default NxCodePage;
