/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode } from '@sonatype/react-shared-components';

const nxPExampleCode = require('./NxPExample.html');

const NxPPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          Using the <NxCode>&lt;p&gt;</NxCode> HTML tag with the
          <NxCode>.nx-p</NxCode> className applies standard RSC typography, margin and maximum width styles
          for paragraph text. When working in React, the <NxCode>NxP</NxCode> component is available for
          a more convenient way to apply these styles.
        </NxP>
        <NxP>
          <NxCode>.nx-p</NxCode> is used extensively throughout the RSC Gallery.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Example paragraphs"
                          codeExamples={nxPExampleCode}
                          htmlExample={nxPExampleCode}>
        An example showing multiple styled paragraphs. Note the spacing between them and the maximum text width.
      </GalleryExampleTile>
    </>
  );
};

export default NxPPage;
