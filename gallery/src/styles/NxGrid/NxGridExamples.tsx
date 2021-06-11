/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './CustomWidthExample.scss';
import { NxCode } from '@sonatype/react-shared-components';

const NxGridCode = require('./NxGridExample.html'),
    NxGridScrollingCode = require('./NxGridScrollingExample.html'),
    NxGridMixinUsageCode = require('./CustomWidthExample.scss?raw');

const NxGridExamples = () =>
  <>
    <GalleryExampleTile title="NX Grid Example"
                        htmlExample={NxGridCode}
                        codeExamples={[NxGridCode, { content: NxGridMixinUsageCode, language: 'scss' }]}>
      An example of an <code className="nx-code">nx-grid</code> demonstrating a variety of column layouts in different
      rows. Particularly note the custom <code className="nx-code">nx-grid-col--200px</code> class defined for this
      example using a SCSS mixin.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Grid Scrolling Cell Example"
                        htmlExample={NxGridScrollingCode}
                        codeExamples={NxGridScrollingCode}>
      An example of an <NxCode>nx-grid</NxCode> containing two cells each of which scroll. As is typical in this
      case, a horizontal keyline is added above the row of cells.
    </GalleryExampleTile>
  </>;

export default NxGridExamples;
