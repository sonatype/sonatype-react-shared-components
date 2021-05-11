/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode, NxP } from '@sonatype/react-shared-components';

import './NxReadOnlyGridTileExample.scss';

const nxReadOnlyGridTileExampleCode = require('./NxReadOnlyGridTileExample.html'),
    nxReadOnlyGridTileExampleStyles = require('./NxReadOnlyGridTileExample.scss?raw');

const gridCode = [nxReadOnlyGridTileExampleCode, { content: nxReadOnlyGridTileExampleStyles, language: 'scss' }];

const NxReadOnlyGridTilePage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          A common pattern in some designs is to have a number of <NxCode>nx-read-only</NxCode>-like sections
          arranged into adjacent groups with borders in between within a tile. This page demonstrates the usage of
          <NxCode>nx-read-only</NxCode>, <NxCode>nx-grid</NxCode>, and <NxCode>nx-tile</NxCode> to accomplish that
          effect.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Tile Example"
                          codeExamples={gridCode}
                          defaultCheckeredBackground={true}
                          htmlExample={nxReadOnlyGridTileExampleCode}>
        A combination of <NxCode>nx-read-only</NxCode>, <NxCode>nx-grid</NxCode>, and <NxCode>nx-tile</NxCode>.
      </GalleryExampleTile>
    </>
  );
};

export default NxReadOnlyGridTilePage;
