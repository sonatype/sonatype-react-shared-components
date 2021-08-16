/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxH1ExampleCode = require('./NxH1Example.html'),
    nxH2ExampleCode = require('./NxH2Example.html'),
    nxH3ExampleCode = require('./NxH3Example.html'),
    nxH4ExampleCode = require('./NxH4Example.html');

const NxHPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          RSC includes styles for HTML heading elements (<NxCode>&lt;h1&gt;</NxCode> etc.) for heading levels 1
          through 4. These styles are defined on the <NxCode>nx-h1</NxCode>, <NxCode>nx-h2</NxCode>,
          <NxCode>nx-h3</NxCode>, <NxCode>nx-h4</NxCode> classes. In React, the <NxCode>NxH1</NxCode>,
          <NxCode>NxH2</NxCode>, <NxCode>NxH3</NxCode>, <NxCode>NxH4</NxCode> elements can be used instead.
        </NxP>
        <NxP>
          Given how rarely headings at levels 5 and 6 are needed, RSC does not currently define styles for them.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="H1 Example"
                          codeExamples={nxH1ExampleCode}
                          htmlExample={nxH1ExampleCode}>
        An example of an H1 with RSC styling.
      </GalleryExampleTile>
      <GalleryExampleTile title="H2 Example"
                          codeExamples={nxH2ExampleCode}
                          htmlExample={nxH2ExampleCode}>
        An example of an H2 with RSC styling.
      </GalleryExampleTile>
      <GalleryExampleTile title="H3 Example"
                          codeExamples={nxH3ExampleCode}
                          htmlExample={nxH3ExampleCode}>
        An example of an H3 with RSC styling.
      </GalleryExampleTile>
      <GalleryExampleTile title="H4 Example"
                          codeExamples={nxH4ExampleCode}
                          htmlExample={nxH4ExampleCode}>
        An example of an H4 with RSC styling.
      </GalleryExampleTile>
    </>
  );
};

export default NxHPage;
