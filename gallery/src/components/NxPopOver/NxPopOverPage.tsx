/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import {
  NxTable,
  NxCode,
  NxP,
  NxTextLink,
  NxWarningAlert,
  NxH3
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPopOverExample from './NxPopOverExample';

const NxPopOverSourceCode = require('./NxPopOverExample?raw');

import './NxPopOverExample.scss';

export default function NxPopOverPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxPopOver</NxCode>
        </NxP>
        <NxH3>Props</NxH3>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Any <NxCode>className</NxCode> attributes passed in on
                the <NxCode>NxPopOver</NxCode> will be added to
                the dialog element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCancel</NxTable.Cell>
              <NxTable.Cell>Function ((Event) =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxP>

                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCancel</NxTable.Cell>
              <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxWarningAlert>
                  Deprecated. Old alias for <NxCode>onCancel</NxCode>. Using both at the same time is not supported.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>variant</NxTable.Cell>
              <NxTable.Cell>"wide" | "narrow" | "normal"</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"normal"</NxTable.Cell>
              <NxTable.Cell>
                This prop specifies a style variant for the modal. Currently, variants only differ in width.
                "wide" modals are 1000px wide, "normal" modals are 800px wide, and "narrow" modals are 600px wide.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                  HTML Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                NxModal supports any html attribute that's normally supported by
                {' '}<NxCode>&lt;div&gt;</NxCode> elements.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxPopOver Example"
                          id="nx-pop-over-example"
                          liveExample={NxPopOverExample}
                          codeExamples={NxPopOverSourceCode}>
        A basic example of an <NxCode>NxPopOver</NxCode>.
        <br></br>
        <NxTextLink href="#/NxPopOverFullExample">
          Click here to navigate to the live example.
        </NxTextLink>
      </GalleryExampleTile>
    </>
  );
}
