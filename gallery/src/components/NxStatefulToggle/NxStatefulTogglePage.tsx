/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulToggleExample from './NxStatefulToggleExample';

const exampleCode = require('./NxStatefulToggleExample?raw');

const NxStatefulTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Custom toggle control, which uses a hidden checkbox input for its on/checked &amp; off/unselected states.
      </NxP>
      <NxP>Child VDOM will be used as a label preceeding the stateful toggle control.</NxP>
      <NxP>Props:</NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>inputId</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>An id to identify the stateful toggle</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>defaultChecked</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Whether the stateful toggle should initially be rendered as checked (true) or unchecked (false)
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((boolean) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>A callback for when the stateful toggle is toggled</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the stateful toggle should be rendered as disabled or not.
              When disabled, the onChange callback will not fire.  Defaults to false
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>Virtual DOM</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              VDOM rendered as a label. Should be
              {' '}
              <NxTextLink href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content">
                phrasing content
              </NxTextLink>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={exampleCode}
                        liveExample={NxStatefulToggleExample}>
      This example shows the usage of an NxStatefulToggle which tracks its own state,
      along with a callback for initiating a side-effect - in this case, the opening of an alert
      dialog.
    </GalleryExampleTile>
  </>;

export default NxStatefulTogglePage;
