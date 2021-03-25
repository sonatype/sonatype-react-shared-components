/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxListClickableExample from './NxListClickableExample';
import NxListClickableLinksExample from './NxListClickableLinksExample';
import NxListWithActionsExample from './NxListWithActionsExample';
import NxListErrorExample from './NxListErrorStateExample';
import NxListLoadingExample from './NxListLoadingExample';

const NxListSimpleCode = require('./NxListDefaultExample.html'),
    NxListClickableCode = require('./NxListClickableExample?raw'),
    NxListClickableLinksCode = require('./NxListClickableLinksExample?raw'),
    NxListMultiLineCode = require('./NxListMultiLineExample.html'),
    NxListBulletedCode = require('./NxListBulletedExample.html'),
    NxListWithActionsCode = require('./NxListWithActionsExample.tsx?raw'),
    NxListEmptyCode = require('./NxListEmptyExample.html'),
    NxListErrorStateCode = require('./NxListErrorStateExample.tsx?raw'),
    NxListLoadingCode = require('./NxListLoadingExample.tsx?raw'),
    NxListDescriptionCode = require('./NxListDescriptionExample.html');

const NxListsExamples = () =>
  <>
    <GalleryExampleTile title="NX Basic List Example"
                        id="nx-list-simple-example"
                        htmlExample={NxListSimpleCode}
                        codeExamples={NxListSimpleCode}>
      Basic <code className="nx-code">nx-list</code> with a heading.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Example"
                        id="nx-list-clickable-example"
                        liveExample={NxListClickableExample}
                        codeExamples={NxListClickableCode}>
      An <code className="nx-code">nx-list</code> demonstrating clickable, selection, and disabled styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Links Example"
                        id="nx-list-clickable-links-example"
                        liveExample={NxListClickableLinksExample}
                        codeExamples={NxListClickableLinksCode}>
      An <code className="nx-code">nx-list</code> demonstrating clickable and selection styles where the
      clickable aspects of the list items are defined using <code className="nx-code">&lta&gt;</code> tags.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Bulleted List Example"
                        id="nx-list-bulleted-example"
                        htmlExample={NxListBulletedCode}
                        codeExamples={NxListBulletedCode}>
      An <code className="nx-code">nx-list</code> demonstrating bulleted list styles more typical of
      default <code className="nx-code">&lt;ul&gt;</code> styling. These can be nested.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Actions Example"
                        id="nx-list-actions-example"
                        liveExample={NxListWithActionsExample}
                        codeExamples={NxListWithActionsCode}>
      An <code className="nx-code">nx-list</code> with icon buttons for initiation actions.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Multi-line Example"
                        id="nx-list-multi-line-example"
                        htmlExample={NxListMultiLineCode}
                        codeExamples={NxListMultiLineCode}>
      Examples of list items that wrap and truncate, some examples demonstrating wrapping and truncation
      on <code className="nx-code">nx-list-item__subtext</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List Empty Example"
                        id="nx-list-empty-example"
                        htmlExample={NxListEmptyCode}
                        codeExamples={NxListEmptyCode}>
      A demonstration of the expected styling and content for an empty <code className="nx-code">nx-list</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Error Message Example"
                        id="nx-list-error-example"
                        liveExample={NxListErrorExample}
                        codeExamples={NxListErrorStateCode}>
      A demonstration of the expected styling and content for an <code className="nx-code">nx-list</code> whose content
      failed to load.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List demonstrating loading indicator"
                        id="nx-list-loading-example"
                        liveExample={NxListLoadingExample}
                        codeExamples={NxListLoadingCode}>
      A demonstration of the expected styling and placement for a loading indicator
      within <code className="nx-code">nx-list</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxList description list example"
                        id="nx-list-description-example"
                        htmlExample={NxListDescriptionCode}
                        codeExamples={NxListDescriptionCode}>
      Basic <code className="nx-code">nx-list--description</code> with a heading. Wrapping is demonstrated in both
      the terms and the descriptions.
    </GalleryExampleTile>
  </>;

export default NxListsExamples;
