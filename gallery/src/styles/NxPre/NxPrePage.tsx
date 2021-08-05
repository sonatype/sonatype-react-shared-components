/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode } from '@sonatype/react-shared-components';

const nxPreExampleCode = require('./NxPreExample.html');

const NxPrePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>.nx-pre</NxCode> CSS class provides standard RSC styling
          for <NxCode>&lt;pre&gt;</NxCode> elements such as code blocks.
          An <NxCode>NxPre</NxCode> convenience component is also provided.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Basic Example"
                          codeExamples={nxPreExampleCode}
                          htmlExample={nxPreExampleCode}>
        An example preformatted text region.
      </GalleryExampleTile>
    </>
  );
};

export default NxPrePage;
