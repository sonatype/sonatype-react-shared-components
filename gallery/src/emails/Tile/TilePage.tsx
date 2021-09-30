/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const TileTableCode = require('./TileTableExample.html');
const TileDivCode = require('./TileDivExample.html');

const TilePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Tiles for emails. Based off <NxCode>NxTile</NxCode>.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Tile Table-based Example"
                        htmlExample={TileTableCode}
                        codeExamples={TileTableCode}
                        defaultCheckeredBackground={true}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Tile DIV-based Example"
                        htmlExample={TileDivCode}
                        codeExamples={TileDivCode}
                        defaultCheckeredBackground={true}>
    </GalleryExampleTile>
  </>;

export default TilePage;
