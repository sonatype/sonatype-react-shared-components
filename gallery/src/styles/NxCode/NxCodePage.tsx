/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxCodeExampleCode = require('./NxCodeExample.html');

const NxCodePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          Using the <NxCode>&lt;code&gt;</NxCode> HTML tag with the
          <NxCode>.nx-code</NxCode> className applies a monospace font and other styling to make your
          code snippets stand out.
        </p>
        <p className="nx-p">
          <NxCode>.nx-code</NxCode> is used extensively throughout the RSC Gallery.
        </p>
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
