/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTileFormExample from './NxTileFormExample';
import NxTileDropdownActionsExample from './NxTileDropdownActionsExample';
import NxTileAccordionExample from './NxTileAccordionExample';
import NxTilePolicyViolationIndicatorExample from './NxTilePolicyViolationIndicatorExample';

const NxSimpleTileCode = require('./NxSimpleTileExample.html'),
    NxTileWithActionsCode = require('./NxTileWithActionsExample.html'),
    NxTileWithSubtitleCode = require('./NxTileWithSubtitleExample.html'),
    NxTileSubsectionCode = require('./NxTileSubsectionExample.html'),
    NxTileFormCode = require('./NxTileFormExample.tsx?raw'),
    NxTileDropdownActionsCode = require('./NxTileDropdownActionsExample?raw'),
    NxTileAccordionCode = require('./NxTileAccordionExample?raw'),
    NxTilePolicyViolationIndicatorCode = require('./NxTilePolicyViolationIndicatorExample?raw');

const NxTilesExamples = () =>
  <>
    <GalleryExampleTile title="NX Simple Tile Example"
                        id="nx-tile-simple-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxSimpleTileCode}
                        codeExamples={NxSimpleTileCode}>
      A simple example of an <NxCode>nx-tile</NxCode> including a header and a footer.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Actions Example"
                        id="nx-tile-actions-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileWithActionsCode}
                        codeExamples={NxTileWithActionsCode}>
      An example of an <NxCode>nx-tile</NxCode> with action buttons and a subtitle in the header.
      Note that the title text does not wrap but truncates when it reaches the action buttons.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Subtitle Example"
                        id="nx-tile-subtitle-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileWithSubtitleCode}
                        codeExamples={NxTileWithSubtitleCode}>
      An example of an <NxCode>nx-tile</NxCode> with a long subtitle that wraps.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with a Subsection Header Example"
                        id="nx-tile-subsections-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileSubsectionCode}
                        codeExamples={NxTileSubsectionCode}>
      An example of an <NxCode>nx-tile</NxCode> containing mulitple subsections. Note the horizontal
      rule which appears before the first subsection, but not between subsections.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile consisting of a form"
                        id="nx-tile-form-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileFormExample}
                        codeExamples={NxTileFormCode}>
      An example of an <NxCode>nx-tile</NxCode> which solely contains a form.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with an NxDropdown in the actions buttons area"
                        id="nx-tile-dropdown-actions-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileDropdownActionsExample}
                        codeExamples={NxTileDropdownActionsCode}>
      An example of a tile with an <NxCode>NxDropdown</NxCode> (or
      {' '}<NxCode>NxStatefulDropdown</NxCode>, as the case may be) in the actions area.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with accordions"
                        id="nx-tile-accordion-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileAccordionExample}
                        codeExamples={NxTileAccordionCode}>
      An example of a tile with <NxCode>NxAccordions</NxCode>{' '}
      (or <NxCode>NxStatefulAccordions</NxCode>) within.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Tile with Policy Violation Indicator"
                        id="nx-tile-policy-violation-indicator-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTilePolicyViolationIndicatorExample}
                        codeExamples={NxTilePolicyViolationIndicatorCode}>
      An example of a tile with <NxCode>NxPolicyViolationIndicator</NxCode>{' '}
      in the header.
    </GalleryExampleTile>
  </>;

export default NxTilesExamples;
