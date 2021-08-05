/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import NxStatefulCheckboxExample from './NxStatefulCheckboxExample';

const exampleCode = require('./NxStatefulCheckboxExample?raw');

const NxStatefulCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Custom stateful checkbox input.</NxP>
      <NxP>Child VDOM will be used as a label following the stateful checkbox button itself.</NxP>
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
            <NxTable.Cell>checkboxId</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>An id to identify the stateful checkbox</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>defaultChecked</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Whether the stateful checkbox should initially be rendered as checked (true) or unchecked (false)
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((boolean) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>A callback for when the stateful checkbox is toggled</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the stateful checkbox should be rendered as disabled or not.
              When disabled, the onChange callback will not fire.  Defaults to false
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>overflowTooltip</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the checkbox label content should be wrapped in
              an <NxCode>NxOverflowTooltip</NxCode>. Defaults to true. Set this to false when
              the <NxCode>NxStatefulCheckbox</NxCode> is being wrapped in a tooltip externally, to
              prevent multiple overlapping tooltips from appearing.
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
                        liveExample={NxStatefulCheckboxExample}>
      This example shows the usage of an NxStatefulCheckbox which tracks its own state,
      along with a callback for initiating a side-effect - in this case, the opening of an alert
      dialog.
    </GalleryExampleTile>
  </>;

export default NxStatefulCheckboxPage;
