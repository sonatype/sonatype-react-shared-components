/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const NxListSimpleCode = require('!!raw-loader!./NxListDefaultExample.html').default,
    NxListClickableCode = require('!!raw-loader!./NxListClickableExample.html').default,
    NxListMultiLineCode = require('!!raw-loader!./NxListMultiLineExample.html').default,
    NxListBulletedCode = require('!!raw-loader!./NxListBulletedExample.html').default,
    NxListWithActionsCode = require('!!raw-loader!./NxListWithActionsExample.html').default,
    NxListDefinitionListCode = require('!!raw-loader!./NxListDefinitionListExample.html').default,
    NxListEmptyCode = require('!!raw-loader!./NxListEmptyExample.html').default,
    NxListErrorStateCode = require('!!raw-loader!./NxListErrorStateExample.html').default;

const NxListsExamples = () =>
  <>
    <GalleryExampleTile title="NX Simple List Example"
                        htmlExample={NxListSimpleCode}
                        codeExamples={NxListSimpleCode}>
      Two simple <code className="nx-code">nx-list</code> variations. One is a
      bare <code className="nx-code">&lt;ul&gt;</code> while the other has
      a <code className="nx-code">&lt;div&gt;</code> wrapping the <code className="nx-code">&lt;ul&gt;</code> along
      with a <code className="nx-code">nx-list__title</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Clickable List Example"
                        htmlExample={NxListClickableCode}
                        codeExamples={NxListClickableCode}>
      A <code className="nx-code">nx-list</code> demonstrating clickable, selection, and disabled styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Bulleted List Example"
                        htmlExample={NxListBulletedCode}
                        codeExamples={NxListBulletedCode}>
      A <code className="nx-code">nx-list</code> demonstrating bulleted list styles more typical of
      default <code className="nx-code">&lt;ul&gt;</code> styling. These can be nested.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Definition List Example"
                        htmlExample={NxListDefinitionListCode}
                        codeExamples={NxListDefinitionListCode}>
      A <code className="nx-code">nx-list</code> style for definition lists
      {' '}(<code className="nx-code">&lt;dl&gt;</code>s)
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Actions Example"
                        htmlExample={NxListWithActionsCode}
                        codeExamples={NxListWithActionsCode}>
      A <code className="nx-code">nx-list</code> with icon buttons for initiation actions.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Multi-line Example"
                        htmlExample={NxListMultiLineCode}
                        codeExamples={NxListMultiLineCode}>
      A <code className="nx-code">nx-list</code> with subtext in each element. The subtext may optionally be multiple
      lines in which case it wraps.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List Empty Example"
                        htmlExample={NxListEmptyCode}
                        codeExamples={NxListEmptyCode}>
      A demonstration of the expected styling and content for an empty <code className="nx-code">nx-list</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX List with Error Message Example"
                        htmlExample={NxListErrorStateCode}
                        codeExamples={NxListErrorStateCode}>
      A demonstration of the expected styling and content for a <code className="nx-code">nx-list</code> whose content
      failed to load.
    </GalleryExampleTile>
  </>;

export default NxListsExamples;
