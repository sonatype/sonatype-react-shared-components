/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxPreExampleCode = require('!!raw-loader!./NxPreExample.html').default;
const nxCodeBlockExampleCode = require('!!raw-loader!./NxCodeBlockExample.html').default;

const NxPrePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          The <code className="nx-code">.nx-pre</code> CSS class provides standard RSC styling
          for <code className="nx-code">&lt;pre&gt;</code> elements. Used conjunction with
          a <code className="nx-code">&lt;code&gt;</code> element and
          the <code className="nx-code">.nx-code</code> class creates a "code block" layout.
        </p>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Basic Example"
                          codeExamples={nxPreExampleCode}
                          htmlExample={nxPreExampleCode}>
        An example preformatted text area.
      </GalleryExampleTile>

      <GalleryExampleTile title="Code Block Example"
                          codeExamples={nxCodeBlockExampleCode}
                          htmlExample={nxCodeBlockExampleCode}>
        An example code block.
      </GalleryExampleTile>
    </>
  );
};

export default NxPrePage;
