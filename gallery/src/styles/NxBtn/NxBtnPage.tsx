/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxBtnPrimaryExample from './NxBtnPrimaryExample';
import NxBtnDefaultExample from './NxBtnDefaultExample';
import NxBtnTertiaryExample from './NxBtnTertiaryExample';
import NxBtnErrorExample from './NxBtnErrorExample';
import NxBtnIconExample from './NxBtnIconExample';

const nxBtnPrimaryCode = require('!!raw-loader!./NxBtnPrimaryExample').default,
    nxBtnDefaultCode = require('!!raw-loader!./NxBtnDefaultExample').default,
    nxBtnTertiaryCode = require('!!raw-loader!./NxBtnTertiaryExample').default,
    nxBtnErrorCode = require('!!raw-loader!./NxBtnErrorExample').default,
    nxBtnIconCode = require('!!raw-loader!./NxBtnIconExample').default;

const NxBtnPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p"><code className="nx-code">.nx-btn</code> is the standard class for all buttons.</p>
      <p className="nx-p">
        When a button is not contained in a <code className="nx-code">footer</code>, then an enclosing
        <code className="nx-code">.nx-btn-bar</code> is generally required to ensure that the buttons are spaced
        appropriately from other content.
      </p>
    </GalleryDescriptionTile>

    <GalleryTile title="Default">
      <NxBtnDefaultExample/>
      <CodeExample content={nxBtnDefaultCode}/>
    </GalleryTile>

    <GalleryTile title="Primary">
      <NxBtnPrimaryExample/>
      <CodeExample content={nxBtnPrimaryCode}/>
    </GalleryTile>

    <GalleryTile title="Tertiary">
      <NxBtnTertiaryExample/>
      <CodeExample content={nxBtnTertiaryCode}/>
    </GalleryTile>

    <GalleryTile title="Error">
      <NxBtnErrorExample/>
      <CodeExample content={nxBtnErrorCode}/>
    </GalleryTile>

    <GalleryTile title="Buttons with Icons">
      <NxBtnIconExample/>
      <CodeExample content={nxBtnIconCode}/>
    </GalleryTile>
  </>;

export default NxBtnPage;
