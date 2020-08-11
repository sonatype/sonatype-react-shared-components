/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const NxSimpleTileCode = require('!!raw-loader!./NxSimpleTileExample.html').default,
    NxTileWithActionsCode = require('!!raw-loader!./NxTileWithActionsExample.html').default,
    NxTileWithSubtitleCode = require('!!raw-loader!./NxTileWithSubtitleExample.html').default,
    NxTileSubsectionCode = require('!!raw-loader!./NxTileSubsectionExample.html').default,
    NxTileWithHorizontalRuleCode = require('!!raw-loader!./NxTileWithHorizontalRuleExample.html').default;

const NxTilesExamples = () =>
  <>
    <GalleryExampleTile title="NX Simple Tile Example"
                        id="nx-tile-simple-example"
                        htmlExample={NxSimpleTileCode}
                        codeExamples={NxSimpleTileCode}>
      A simple example of an <code className="nx-code">nx-tile</code> including a header and a footer.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Actions Example"
                        id="nx-tile-actions-example"
                        htmlExample={NxTileWithActionsCode}
                        codeExamples={NxTileWithActionsCode}>
      An example of an <code className="nx-code">nx-tile</code> with action buttons and a subtitle in the header.
      Note that the title text does not wrap but truncates when it reaches the action buttons.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Subtitle Example"
                        id="nx-tile-subtitle-example"
                        htmlExample={NxTileWithSubtitleCode}
                        codeExamples={NxTileWithSubtitleCode}>
      An example of an <code className="nx-code">nx-tile</code> with a long subtitle that wraps.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Horizontal Rule Example"
                        id="nx-tile-horizontal-rule-example"
                        htmlExample={NxTileWithHorizontalRuleCode}
                        codeExamples={NxTileWithHorizontalRuleCode}>
      An example of a style variation giving the <code className="nx-code">nx-tile</code> a horizontal rule in between
      its header and content.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with a Subsection Header Example"
                        id="nx-tile-subsections-example"
                        htmlExample={NxTileSubsectionCode}
                        codeExamples={NxTileSubsectionCode}>
      An example of an <code className="nx-code">nx-tile</code> containing mulitple subsections. Note the horizontal
      rule which appears before the first subsection, but not between subsections.
    </GalleryExampleTile>
  </>;

export default NxTilesExamples;
