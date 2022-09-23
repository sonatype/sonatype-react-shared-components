/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

import NxTileFormExample from './NxTileFormExample';
import NxTileFormErrorExample from './NxTileFormErrorExample';
import NxTileDropdownActionsExample from './NxTileDropdownActionsExample';
import NxTileAccordionExample from './NxTileAccordionExample';
import NxTilePolicyViolationIndicatorExample from './NxTilePolicyViolationIndicatorExample';
import NxTileSimpleConvenienceComponentsExample from './NxTileSimpleConvenienceComponentsExample';

const NxSimpleTileCode = require('./NxSimpleTileExample.html'),
    NxTileHeaderlessCode = require('./NxTileHeaderlessExample.html'),
    NxTileMultiHeaderCode = require('./NxTileMultiHeaderExample.html'),
    NxTileWithActionsCode = require('./NxTileWithActionsExample.html'),
    NxTileWithSubtitleCode = require('./NxTileWithSubtitleExample.html'),
    NxTileSubsectionCode = require('./NxTileSubsectionExample.html'),
    NxTileSubsectionWithPrecedingCode = require('./NxTileSubsectionWithPrecedingExample.html'),
    NxTileSubsectionWithSubtitleCode = require('./NxTileSubsectionWithSubtitleExample.html'),
    NxTileFormCode = require('./NxTileFormExample.tsx?raw'),
    NxTileFormErrorCode = require('./NxTileFormErrorExample.tsx?raw'),
    NxTileDropdownActionsCode = require('./NxTileDropdownActionsExample?raw'),
    NxTileAccordionCode = require('./NxTileAccordionExample?raw'),
    NxTileGridCode = require('./NxTileGridExample.html'),
    NxTilePolicyViolationIndicatorCode = require('./NxTilePolicyViolationIndicatorExample?raw'),
    NxTileSimpleConvenienceComponentsCode = require('./NxTileSimpleConvenienceComponentsExample?raw');

const NxTilesExamples = () =>
  <>
    <GalleryExampleTile title="Simple Example"
                        id="nx-tile-simple-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxSimpleTileCode}
                        codeExamples={NxSimpleTileCode}>
      A simple example of an <NxCode>nx-tile</NxCode> including a header and a footer.
    </GalleryExampleTile>

    <GalleryExampleTile title="Headerless Example"
                        id="nx-tile-headerless-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileHeaderlessCode}
                        codeExamples={NxTileHeaderlessCode}>
      A simple example of an <NxCode>nx-tile</NxCode> containing only a content area and no header.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header Actions Example"
                        id="nx-tile-actions-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileWithActionsCode}
                        codeExamples={NxTileWithActionsCode}>
      An example of an <NxCode>nx-tile</NxCode> with action buttons and a subtitle in the header.
      Note that the title text does not wrap but truncates when it reaches the action buttons.
    </GalleryExampleTile>

    <GalleryExampleTile title="Subtitle Example"
                        id="nx-tile-subtitle-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileWithSubtitleCode}
                        codeExamples={NxTileWithSubtitleCode}>
      An example of an <NxCode>nx-tile</NxCode> with a long subtitle that wraps.
    </GalleryExampleTile>

    <GalleryExampleTile title="Subsections Example"
                        id="nx-tile-subsections-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileSubsectionCode}
                        codeExamples={NxTileSubsectionCode}>
      An example of an <NxCode>nx-tile</NxCode> containing mulitple subsections.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example of Subsections with Preceding Content"
                        id="nx-tile-subsections-preceding-content-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileSubsectionWithPrecedingCode}
                        codeExamples={NxTileSubsectionWithPrecedingCode}>
      An example of an <NxCode>nx-tile</NxCode> containing mulitple subsections, with some non-subsectioned content
      before the first subsection. Note the horizontal rule which appears before the first subsection, but not
      between subsections.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Subsections and Subtitle"
                        id="nx-tile-subsections-and-subtitle-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileSubsectionWithSubtitleCode}
                        codeExamples={NxTileSubsectionWithSubtitleCode}>
      An example of an <NxCode>nx-tile</NxCode> containing a tile header with subtitle, and also a subsection as
      its first content. This demonstrates the spacing between the subtitle and the subsection's subheader.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Multiple Top-Level Headers"
                        id="nx-tile-multi-header-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileMultiHeaderCode}
                        codeExamples={NxTileMultiHeaderCode}>
      An <NxCode>nx-tile</NxCode> containing multiple top-level headers.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Tile Example"
                        id="nx-tile-form-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileFormExample}
                        codeExamples={NxTileFormCode}>
      An example of an <NxCode>nx-tile</NxCode> which solely contains a form.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Tile Example with Error"
                        id="nx-tile-form-error-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileFormErrorExample}
                        codeExamples={NxTileFormErrorCode}>
      An example of an <NxCode>nx-tile</NxCode> which contains an <NxCode>NxForm</NxCode> that
      is in an error state.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example of Header Actions Including a Dropdown"
                        id="nx-tile-dropdown-actions-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileDropdownActionsExample}
                        codeExamples={NxTileDropdownActionsCode}>
      An example of a tile with an <NxCode>NxDropdown</NxCode> (or
      {' '}<NxCode>NxStatefulDropdown</NxCode>, as the case may be) in the actions area.
    </GalleryExampleTile>

    <GalleryExampleTile title="Accordions within a Tile Example"
                        id="nx-tile-accordion-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTileAccordionExample}
                        codeExamples={NxTileAccordionCode}>
      An example of a tile with <NxCode>NxAccordions</NxCode>{' '}
      (or <NxCode>NxStatefulAccordions</NxCode>) within.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example of NxPolicyViolationIndicator within a Tile Header"
                        id="nx-tile-policy-violation-indicator-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxTilePolicyViolationIndicatorExample}
                        codeExamples={NxTilePolicyViolationIndicatorCode}>
      An example of a tile with <NxCode>NxPolicyViolationIndicator</NxCode>{' '}
      in the header.
    </GalleryExampleTile>

    <GalleryExampleTile title="Grid Tile Example"
                        id="nx-tile-grid-example"
                        defaultCheckeredBackground={true}
                        htmlExample={NxTileGridCode}
                        codeExamples={NxTileGridCode}>
      An example of a tile with an <NxCode>nx-grid</NxCode> as the content, demonstrating that the spacing comes
      out as expected.
    </GalleryExampleTile>

    <GalleryExampleTile title="Simple Convenience Components Example"
                        id="nx-tile-simple-convenience-components-example"
                        liveExample={NxTileSimpleConvenienceComponentsExample}
                        codeExamples={NxTileSimpleConvenienceComponentsCode}
                        defaultCheckeredBackground={true}>
      An example of a tile built from convenience components, while also demonstrating the automatic inclusion of{' '}
      <NxCode>NxOverflowingTooltip</NxCode> inside <NxCode>NxTile.HeaderTitle</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTilesExamples;
