/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxSimpleTileExample from './NxSimpleTileExample';
import NxTileWithActionsExample from './NxTileWithActionsExample';
import NxTileWithSubtitleExample from './NxTileWithSubtitleExample';
import NxTileWithHorizontalRuleExample from './NxTileWithHorizontalRuleExample';

const NxSimpleTileCode = require('!!raw-loader!./NxSimpleTileExample').default,
    NxTileWithActionsCode = require('!!raw-loader!./NxTileWithActionsExample').default,
    NxTileWithSubtitleCode = require('!!raw-loader!./NxTileWithSubtitleExample').default,
    NxTileWithHorizontalRuleCode = require('!!raw-loader!./NxTileWithHorizontalRuleExample').default;

const NxTilesExamples = () =>
  <>
    <GalleryTile title="NX Simple Tile Example">
      <NxSimpleTileExample />
      <CodeExample content={NxSimpleTileCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile with Actions Example">
      <NxTileWithActionsExample />
      <CodeExample content={NxTileWithActionsCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile with Subtitle Example">
      <NxTileWithSubtitleExample />
      <CodeExample content={NxTileWithSubtitleCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile with Horizontal Rule Example">
      <NxTileWithHorizontalRuleExample />
      <CodeExample content={NxTileWithHorizontalRuleCode}/>
    </GalleryTile>
  </>;

export default NxTilesExamples;
