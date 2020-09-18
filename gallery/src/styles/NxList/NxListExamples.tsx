/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxListClickableExample from './NxListClickableExample';
import NxListWithActionsExample from './NxListWithActionsExample';
import NxListErrorExample from './NxListErrorStateExample';

const NxListSimpleCode = require('!!raw-loader!./NxListDefaultExample.html').default,
    NxListClickableCode = require('!!raw-loader!./NxListClickableExample').default,
    NxListMultiLineCode = require('!!raw-loader!./NxListMultiLineExample.html').default,
    NxListBulletedCode = require('!!raw-loader!./NxListBulletedExample.html').default,
    NxListWithActionsCode = require('!!raw-loader!./NxListWithActionsExample.tsx').default,
    NxListEmptyCode = require('!!raw-loader!./NxListEmptyExample.html').default,
    NxListErrorStateCode = require('!!raw-loader!./NxListErrorStateExample.tsx').default;

const NxListsExamples = () =>
  <>
    <GalleryExampleTile title="NX Basic List Example"
                        id="nx-list-simple-example"
                        htmlExample={NxListSimpleCode}
                        codeExamples={NxListSimpleCode}>
      Two simple <code className="nx-code">nx-list</code> variations. One is a
      bare <code className="nx-code">&lt;ul&gt;</code> while the other has
      a <code className="nx-code">&lt;div&gt;</code> wrapping the <code className="nx-code">&lt;ul&gt;</code> along
      with a <code className="nx-code">nx-list__title</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Example"
                        id="nx-list-clickable-example"
                        liveExample={NxListClickableExample}
                        codeExamples={NxListClickableCode}>
      An <code className="nx-code">nx-list</code> demonstrating clickable, selection, and disabled styles.
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
      Examples of list items that wrap and truncate, some examples demonstrating wrapping and truncation on
      <code className="nx-code">nx-list-item__subtext</code>.
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
  </>;

export default NxListsExamples;
