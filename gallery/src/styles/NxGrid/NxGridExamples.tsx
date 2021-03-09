/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './CustomWidthExample.scss';

const NxGridCode = require('./NxGridExample.html'),
    NxGridMixinUsageCode = require('./CustomWidthExample.scss?raw');

const NxGridExamples = () =>
  <>
    <GalleryExampleTile title="NX Grid Example"
                        htmlExample={NxGridCode}
                        codeExamples={[NxGridCode, { content: NxGridMixinUsageCode, language: 'scss' }]}>
      An example of an <NxCode>nx-grid</NxCode> demonstrating a variety of column layouts in different
      rows. Particularly note the custom <NxCode>nx-grid-col--200px</NxCode> class defined for this
      example using a SCSS mixin.
    </GalleryExampleTile>
  </>;

export default NxGridExamples;
