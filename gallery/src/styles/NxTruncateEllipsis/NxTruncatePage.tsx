/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTruncateExample from './NxTruncateExample';

const nxTruncateExampleCode = require('!!raw-loader!./NxTruncateExample').default,
    nxTruncateExampleSCSS = require('!!raw-loader!./NxTruncateExample.scss').default;

const NxTruncatePage = () => {
  const codeExamples = [
    nxTruncateExampleCode,
    { content: nxTruncateExampleSCSS, language: 'scss' }
  ];

  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          The <code className="nx-code">.nx-truncate-ellipsis</code> mixin is a simple way to add ellipsis truncation to
          any object. The mixin automatically adds the three required CSS attributes, but the end user must provide the
          <code className="nx-code">max-width:</code> value to their SCSS for truncation to work properly. Since this
          value is likley to be custom no default has be set.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          description="In this example a border and some padding have been added for clarity.">
        <NxTruncateExample />
      </GalleryExampleTile>
    </>
  );
};

export default NxTruncatePage;
