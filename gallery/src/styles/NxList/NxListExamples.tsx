/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

import NxListClickableExample from './NxListClickableExample';
import NxListClickableLinksExample from './NxListClickableLinksExample';
import NxListWithActionsExample from './NxListWithActionsExample';
import NxListErrorExample from './NxListErrorStateExample';
import NxListLoadingExample from './NxListLoadingExample';
import NxListDeprecatedClickableExample from './NxListDeprecatedClickableExample';

const NxListSimpleCode = require('./NxListDefaultExample.html'),
    NxListClickableCode = require('./NxListClickableExample?raw'),
    NxListClickableLinksCode = require('./NxListClickableLinksExample?raw'),
    NxListMultiLineCode = require('./NxListMultiLineExample.html'),
    NxListBulletedCode = require('./NxListBulletedExample.html'),
    NxListNumberedCode = require('./NxListNumberedExample.html'),
    NxListWithActionsCode = require('./NxListWithActionsExample.tsx?raw'),
    NxListEmptyCode = require('./NxListEmptyExample.html'),
    NxListErrorStateCode = require('./NxListErrorStateExample.tsx?raw'),
    NxListLoadingCode = require('./NxListLoadingExample.tsx?raw'),
    NxListDescriptionCode = require('./NxListDescriptionExample.html'),
    NxListDeprecatedClickableCode = require('./NxListDeprecatedClickableExample?raw');

const NxListsExamples = () =>
  <>
    <GalleryExampleTile title="NX Basic List Example"
                        id="nx-list-simple-example"
                        htmlExample={NxListSimpleCode}
                        codeExamples={NxListSimpleCode}>
      Basic <NxCode>nx-list</NxCode> with a heading.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Example"
                        id="nx-list-clickable-example"
                        liveExample={NxListClickableExample}
                        codeExamples={NxListClickableCode}>
      An <NxCode>nx-list</NxCode> demonstrating clickable, selection, and disabled styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Links Example"
                        id="nx-list-clickable-links-example"
                        liveExample={NxListClickableLinksExample}
                        codeExamples={NxListClickableLinksCode}>
      An <NxCode>nx-list</NxCode> demonstrating clickable and selection styles where the
      clickable aspects of the list items are defined using <NxCode>&lt;a&gt;</NxCode> tags.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Bulleted List Example"
                        id="nx-list-bulleted-example"
                        htmlExample={NxListBulletedCode}
                        codeExamples={NxListBulletedCode}>
      An <NxCode>nx-list</NxCode> demonstrating bulleted list styles more typical of
      default <NxCode>&lt;ul&gt;</NxCode> styling. These can be nested.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Numbered List Example"
                        id="nx-list-numbered-example"
                        htmlExample={NxListNumberedCode}
                        codeExamples={NxListNumberedCode}>
      An <NxCode>nx-list</NxCode> demonstrating ordered (numbered) list styles more typical of
      default <NxCode>&lt;ol&gt;</NxCode> styling. These can be nested.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Actions Example"
                        id="nx-list-actions-example"
                        liveExample={NxListWithActionsExample}
                        codeExamples={NxListWithActionsCode}>
      An <NxCode>nx-list</NxCode> with icon buttons for initiation actions.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Multi-line Example"
                        id="nx-list-multi-line-example"
                        htmlExample={NxListMultiLineCode}
                        codeExamples={NxListMultiLineCode}>
      Examples of list items that wrap and truncate, some examples demonstrating wrapping and truncation
      on <NxCode>nx-list-item__subtext</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List Empty Example"
                        id="nx-list-empty-example"
                        htmlExample={NxListEmptyCode}
                        codeExamples={NxListEmptyCode}>
      A demonstration of the expected styling and content for an empty <NxCode>nx-list</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Error Message Example"
                        id="nx-list-error-example"
                        liveExample={NxListErrorExample}
                        codeExamples={NxListErrorStateCode}>
      A demonstration of the expected styling and content for an <NxCode>nx-list</NxCode> whose content
      failed to load.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List demonstrating loading indicator"
                        id="nx-list-loading-example"
                        liveExample={NxListLoadingExample}
                        codeExamples={NxListLoadingCode}>
      A demonstration of the expected styling and placement for a loading indicator
      within <NxCode>nx-list</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxList description list example"
                        id="nx-list-description-example"
                        htmlExample={NxListDescriptionCode}
                        codeExamples={NxListDescriptionCode}>
      Basic <NxCode>nx-list--description</NxCode> with a heading. Wrapping is demonstrated in both
      the terms and the descriptions.
    </GalleryExampleTile>

    <GalleryExampleTile title="Deprecated NX Clickable List Example"
                        id="nx-list-deprecated-clickable-example"
                        liveExample={NxListDeprecatedClickableExample}
                        codeExamples={NxListDeprecatedClickableCode}>
      This method of creating clickable lists is deprecated. It is strongly recommended that one of the above clickable
      lists using <NxCode>&lt;button&gt;</NxCode> or <NxCode>&lt;a&gt;</NxCode> be
      used for accessibility reasons.
    </GalleryExampleTile>
  </>;

export default NxListsExamples;
