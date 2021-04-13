/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

const nxBtnPrimaryCode = require('./NxBtnPrimaryExample.html'),
    nxBtnDefaultCode = require('./NxBtnDefaultExample.html'),
    nxBtnTertiaryCode = require('./NxBtnTertiaryExample.html'),
    nxBtnErrorCode = require('./NxBtnErrorExample.html'),
    nxBtnIconCode = require('./NxBtnIconExample.html');

const NxBtnPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p"><code className="nx-code">.nx-btn</code> is the standard class for all buttons.</p>
      <p className="nx-p">
        When a button is not contained in a <code className="nx-code">footer</code>, then an enclosing
        <code className="nx-code">.nx-btn-bar</code> is generally required to ensure that the buttons are spaced
        appropriately from other content.
      </p>
      <p className="nx-p">
        When working in React, it is recommended to use the <NxCode>NxButton</NxCode> component which provides a more
        convenient way to use these styles.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default"
                        htmlExample={nxBtnDefaultCode}
                        codeExamples={nxBtnDefaultCode}>
      A series of <code className="nx-code">nx-btn</code>s within a <code className="nx-code">nx-btn-bar</code>
      alongside other block content and inline content. Some of the buttons demonstrate disabled styling, applied
      both by the <code className="nx-code">disabled</code> HTML attribute and by
      the <code className="nx-code">.disabled</code> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Primary"
                        htmlExample={nxBtnPrimaryCode}
                        codeExamples={nxBtnPrimaryCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "primary" styles, along with disabled
      primary buttons. Note that the standard disabled styles override the primary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Tertiary"
                        htmlExample={nxBtnTertiaryCode}
                        codeExamples={nxBtnTertiaryCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "tertiary" styles, along with disabled
      tertiary buttons. Note that the standard disabled styles override the tertiary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error"
                        htmlExample={nxBtnErrorCode}
                        codeExamples={nxBtnErrorCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "error" styles, along with a disabled
      error buttons. Note that the standard disabled styles override the error styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Buttons with Icons"
                        htmlExample={nxBtnIconCode}
                        codeExamples={nxBtnIconCode}>
      A demonstration of <code className="nx-code">nx-btn</code>s containing icons. One contains only an icon while
      the other contains both an icon and text.
    </GalleryExampleTile>
  </>;

export default NxBtnPage;
