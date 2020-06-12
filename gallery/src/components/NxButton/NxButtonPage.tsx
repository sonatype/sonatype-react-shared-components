/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxButtonDefaultExample from './NxButtonDefaultExample';
import NxButtonPrimaryExample from './NxButtonPrimaryExample';
import NxButtonTertiaryExample from './NxButtonTertiaryExample';
import NxButtonErrorExample from './NxButtonErrorExample';
import NxButtonIconExample from './NxButtonIconExample';
import NxButtonIconOnlyExample from './NxButtonIconOnlyExample';

const NxButtonDefaultCode = require('!!raw-loader!./NxButtonDefaultExample').default,
    nxButtonPrimaryCode = require('!!raw-loader!./NxButtonPrimaryExample').default,
    nxButtonTertiaryCode = require('!!raw-loader!./NxButtonTertiaryExample').default,
    nxButtonErrorCode = require('!!raw-loader!./NxButtonErrorExample').default,
    nxButtonIconCode = require('!!raw-loader!./NxButtonIconExample').default,
    nxButtonIconOnlyCode = require('!!raw-loader!./NxButtonIconOnlyExample').default;

export default function NxButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p><code className="nx-code">.nx-btn</code> is the standard class for all buttons.</p>
        <p>
          When a button is not contained in a <code className="nx-code">footer</code>, then an enclosing
          <code className="nx-code">.nx-btn-bar</code> is generally required to ensure that the buttons are spaced
          appropriately from other content.
        </p>
      </GalleryDescriptionTile>

      <GalleryTile title="Secondary (Default)">
        <NxButtonDefaultExample/>
        <CodeExample content={NxButtonDefaultCode}/>
      </GalleryTile>

      <GalleryTile title="Primary">
        <NxButtonPrimaryExample/>
        <CodeExample content={nxButtonPrimaryCode}/>
      </GalleryTile>

      <GalleryTile title="Tertiary">
        <NxButtonTertiaryExample/>
        <CodeExample content={nxButtonTertiaryCode}/>
      </GalleryTile>

      <GalleryTile title="Error">
        <NxButtonErrorExample/>
        <CodeExample content={nxButtonErrorCode}/>
      </GalleryTile>

      <GalleryTile title="Using icons in buttons">
        <NxButtonIconExample/>
        <CodeExample content={nxButtonIconCode}/>
      </GalleryTile>

      <GalleryTile title="Icon only buttons">
        <NxButtonIconOnlyExample/>
        <CodeExample content={nxButtonIconOnlyCode}/>
      </GalleryTile>
    </>
  );
}
