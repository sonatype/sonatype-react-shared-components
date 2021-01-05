/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxBlockquoteExampleCode = require('!!raw-loader!./NxBlockquoteExample.html').default;

const NxBlockquotePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          The <code className="nx-code">.nx-blockquote</code> CSS class provides standard RSC styling
          for <code className="nx-code">&lt;blockquote&gt;</code> elements.
        </p>
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
