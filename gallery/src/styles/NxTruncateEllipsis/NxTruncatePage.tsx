/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTruncateExample from './NxTruncateExample';

const nxTruncateExampleCode = require('./NxTruncateExample?raw'),
    nxTruncateExampleSCSS = require('./NxTruncateExample.scss?raw');

const NxTruncatePage = () => {
  const codeExamples = [
    nxTruncateExampleCode,
    { content: nxTruncateExampleSCSS, language: 'scss' }
  ];

  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>truncate-ellipsis</NxCode> mixin is a simple way to add ellipsis truncation to
          any object. The mixin automatically adds the three required CSS attributes, but the end user must provide
          their own means of limiting the width of the element, such as an explicit <NxCode>max-width</NxCode> or by
          limiting the element to its container.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxTruncateExample}>
        In this example a border and some padding have been added for clarity.
      </GalleryExampleTile>
    </>
  );
};

export default NxTruncatePage;
