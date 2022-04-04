/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

import './CustomWidthExample.scss';

const NxGridCode = require('./NxGridExample.html'),
    NxGridScrollingCode = require('./NxGridScrollingExample.html'),
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

    <GalleryExampleTile title="NX Grid Scrolling Cell Example"
                        htmlExample={NxGridScrollingCode}
                        codeExamples={NxGridScrollingCode}>
      An example of an <NxCode>nx-grid</NxCode> containing two cells each of which scroll. As is typical in this
      case, a horizontal keyline is added above the row of cells.

      Since this example renders a scrollable area without any interactive elements, <NxCode>tabindex="0"</NxCode> has
      been added to make the element part of the normal tab flow. It is not necessary to
      add <NxCode>tabindex</NxCode> if the scrollable area contains any interactive elements.
    </GalleryExampleTile>
  </>;

export default NxGridExamples;
