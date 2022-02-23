/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxListSimpleExample from './examples/NxListSimple';
import NxListClickableExample from './examples/NxListClickable';
import NxListClickableLinkExample from './examples/NxListClickableLink';
import NxListBulletedExample from './examples/NxListBulleted';
import NxListActionsExample from './examples/NxListActions';
import NxListEmptyExample from './examples/NxListEmpty';
import NxListErrorExample from './examples/NxListError';
import NxListLoadingExample from './examples/NxListLoading';
import { NxCode } from '@sonatype/react-shared-components';

const NxListSimpleExampleCode = require('./examples/NxListSimple?raw'),
    NxListClickableExampleCode = require('./examples/NxListClickable?raw'),
    NxListClickableLinkExampleCode = require('./examples/NxListClickableLink?raw'),
    NxListBulletedExampleCode = require('./examples/NxListBulleted?raw'),
    NxListActionsExampleCode = require('./examples/NxListActions?raw'),
    NxListEmptyExampleCode = require('./examples/NxListEmpty?raw'),
    NxListErrorExampleCode = require('./examples/NxListError?raw'),
    NxListLoadingExampleCode = require('./examples/NxListLoading?raw');

const NxListsExamples = () =>
  <>
    <GalleryExampleTile title="Simple Example"
                        id="nx-list-simple-example"
                        liveExample={NxListSimpleExample}
                        codeExamples={NxListSimpleExampleCode}>
      Basic <NxCode>NxList</NxCode> with a heading.
    </GalleryExampleTile>

    <GalleryExampleTile title="Clickable List Example"
                        id="nx-list-clickable-example"
                        liveExample={NxListClickableExample}
                        codeExamples={NxListClickableExampleCode}>
      An <NxCode>NxList</NxCode> demonstrating clickable, selection, and disabled styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Clickable Link Example"
                        id="nx-list-clickable-links-example"
                        liveExample={NxListClickableLinkExample}
                        codeExamples={NxListClickableLinkExampleCode}>
      An <NxCode>NxList</NxCode> demonstrating clickable and selection styles where the
      clickable aspects of the list items are links to a URL.
    </GalleryExampleTile>

    <GalleryExampleTile title="Bulleted Example"
                        id="nx-list-bulleted-example"
                        liveExample={NxListBulletedExample}
                        codeExamples={NxListBulletedExampleCode}>
      An <NxCode>NxList</NxCode> demonstrating bulleted list styles more typical of
      default <NxCode>&lt;ul&gt;</NxCode> styling. These can be nested.
    </GalleryExampleTile>

    <GalleryExampleTile title="Actions Example"
                        id="nx-list-actions-example"
                        liveExample={NxListActionsExample}
                        codeExamples={NxListActionsExampleCode}>
      An <NxCode>NxList</NxCode> with icon buttons for initiation actions.
    </GalleryExampleTile>

    <GalleryExampleTile title="Empty Example"
                        id="nx-list-empty-example"
                        liveExample={NxListEmptyExample}
                        codeExamples={NxListEmptyExampleCode}>
      A demonstration of the usage and display of an empty <NxCode>NxList</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Message Example"
                        id="nx-list-error-example"
                        liveExample={NxListErrorExample}
                        codeExamples={NxListErrorExampleCode}>
      A demonstration of the usage and display of an <NxCode>NxList</NxCode> whose content
      failed to load.
    </GalleryExampleTile>

    <GalleryExampleTile title="Loading Indicator Example"
                        id="nx-list-loading-example"
                        liveExample={NxListLoadingExample}
                        codeExamples={NxListLoadingExampleCode}>
      A demonstration of the usage and display of an <NxCode>NxList</NxCode> whose list items are loading.
    </GalleryExampleTile>
  </>;

export default NxListsExamples;
