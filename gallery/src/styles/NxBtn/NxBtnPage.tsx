/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

const nxBtnPrimaryCode = require('./NxBtnPrimaryExample.html'),
    nxBtnDefaultCode = require('./NxBtnDefaultExample.html'),
    nxBtnTertiaryCode = require('./NxBtnTertiaryExample.html'),
    nxBtnErrorCode = require('./NxBtnErrorExample.html'),
    nxBtnIconCode = require('./NxBtnIconExample.html');

const NxBtnPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p"><NxCode>.nx-btn</NxCode> is the standard class for all buttons.</p>
      <p className="nx-p">
        When a button is not contained in a <NxCode>footer</NxCode>, then an enclosing
        <NxCode>.nx-btn-bar</NxCode> is generally required to ensure that the buttons are spaced
        appropriately from other content.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default"
                        htmlExample={nxBtnDefaultCode}
                        codeExamples={nxBtnDefaultCode}>
      A series of <NxCode>nx-btn</NxCode>s within a <NxCode>nx-btn-bar</NxCode>
      alongside other block content and inline content. Some of the buttons demonstrate disabled styling, applied
      both by the <NxCode>disabled</NxCode> HTML attribute and by
      the <NxCode>.disabled</NxCode> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Primary"
                        htmlExample={nxBtnPrimaryCode}
                        codeExamples={nxBtnPrimaryCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "primary" styles, along with disabled
      primary buttons. Note that the standard disabled styles override the primary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Tertiary"
                        htmlExample={nxBtnTertiaryCode}
                        codeExamples={nxBtnTertiaryCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "tertiary" styles, along with disabled
      tertiary buttons. Note that the standard disabled styles override the tertiary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error"
                        htmlExample={nxBtnErrorCode}
                        codeExamples={nxBtnErrorCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "error" styles, along with a disabled
      error buttons. Note that the standard disabled styles override the error styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Buttons with Icons"
                        htmlExample={nxBtnIconCode}
                        codeExamples={nxBtnIconCode}>
      A demonstration of <NxCode>nx-btn</NxCode>s containing icons. One contains only an icon while
      the other contains both an icon and text.
    </GalleryExampleTile>
  </>;

export default NxBtnPage;
