/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxP, NxCode } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxBlockquoteExampleCode = require('./NxBlockquoteExample.html');

const NxBlockquotePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>.nx-blockquote</NxCode> CSS class provides standard RSC styling
          for <NxCode>&lt;blockquote&gt;</NxCode> elements.
        </NxP>
        <NxP>
          These styles are also available via the <NxCode>NxBlockquote</NxCode> convenience React component.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Basic Example"
                          codeExamples={nxBlockquoteExampleCode}
                          htmlExample={nxBlockquoteExampleCode}>
        An example blockquote.
      </GalleryExampleTile>
    </>
  );
};

export default NxBlockquotePage;
