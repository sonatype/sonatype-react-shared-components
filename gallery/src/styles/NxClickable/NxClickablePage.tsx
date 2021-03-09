/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxClickableExample from './NxClickableExample';

const nxClickableExampleCode = require('./NxClickableExample?raw');

const NxClickablePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          The <NxCode>.nx-clickable</NxCode> helper class allows you to quickly and easily
          indicate when a part of the UI is clickable when it might not be obvious to the user. It does this by
          simply changing the cursor to a pointer. It's intended to be used on UI elements like table rows.
          It is recommended that <NxCode>.nx-clickable</NxCode> be just one of the
          visual cues provided in the UI.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={nxClickableExampleCode}
                          liveExample={NxClickableExample}>
        The table below has a clickable and a non-clickable row. Hover over the rows to see the change.
      </GalleryExampleTile>
    </>
  );
};

export default NxClickablePage;
