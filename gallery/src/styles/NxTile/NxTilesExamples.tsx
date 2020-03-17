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
import NxTileHeadlineExample from './NxTileHeadlineExample';
import NxTileAlertExample from './NxTileAlertWarningExample';
import NxTileAlertInfoExample from './NxTileAlertInfoExample';
import NxTileAlertErrorExample from './NxTileAlertErrorExample';

const NxSimpleTileCode = require('!!raw-loader!./NxSimpleTileExample').default,
    NxTileWithActionsCode = require('!!raw-loader!./NxTileWithActionsExample').default,
    NxTileWithSubtitleCode = require('!!raw-loader!./NxTileWithSubtitleExample').default,
    NxTileWithHorizontalRuleCode = require('!!raw-loader!./NxTileWithHorizontalRuleExample').default,
    NxTileHeadlineCode = require('!!raw-loader!./NxTileHeadlineExample').default,
    NxTileAlertWarningCode = require('!!raw-loader!./NxTileAlertWarningExample').default,
    NxTileAlertInfoCode = require('!!raw-loader!./NxTileAlertInfoExample').default,
    NxTileAlertErrorCode = require('!!raw-loader!./NxTileAlertErrorExample').default;

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

    <GalleryTile title="NX Tile with Headline Example">
      <NxTileHeadlineExample />
      <CodeExample content={NxTileHeadlineCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile Alert Warning Example">
      <NxTileAlertExample />
      <CodeExample content={NxTileAlertWarningCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile Alert Info Example">
      <NxTileAlertInfoExample />
      <CodeExample content={NxTileAlertInfoCode}/>
    </GalleryTile>

    <GalleryTile title="NX Tile Alert Error Example">
      <NxTileAlertErrorExample />
      <CodeExample content={NxTileAlertErrorCode}/>
    </GalleryTile>
  </>;

export default NxTilesExamples;
