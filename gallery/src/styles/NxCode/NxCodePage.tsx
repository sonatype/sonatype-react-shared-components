/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxCodeExample from './NxCodeExample';

const nxCodeExampleCode = require('!!raw-loader!./NxCodeExample').default;

const NxCodePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          Using the <code className="nx-code">&lt;code&gt;</code> HTML tag with the
          <code className="nx-code">.nx-code</code> className applies a monospace font and other styling to make your
          code snippets stand out.
        </p>
        <p className="nx-p">
          <code className="nx-code">.nx-code</code> is used extensively throughout the RSC Gallery.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Styling code snippets"
                          codeExamples={nxCodeExampleCode}
                          liveExample={NxCodeExample}>
        A couple of simple inline examples.
      </GalleryExampleTile>
    </>
  );
};

export default NxCodePage;
