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
  NxH3,
  NxTile
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
                the <NxCode>NxModal</NxCode> element will be added to
                the <NxCode>nx-modal</NxCode> class on the modal div.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCancel</NxTable.Cell>
              <NxTable.Cell>Function ((Event) =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  A callback to be called when the browser's native <NxCode>cancel</NxCode> event for the
                  modal's <NxCode>HTMLDialogElement</NxCode> is fired. The circumstances which will fire this event
                  depend on the user agent, but typically include when the user presses ESC within the modal.
                </NxP>
                <NxP>
                  It is expected that the handler passed for this prop will typically remove the NxModal from the
                  JSX rendered to the page. If for whatever reason the handler wants to keep the modal open,
                  it <strong>must</strong> call <NxCode>preventDefault</NxCode> on the event argument. This prevents
                  the browser's native dialog closing logic, such as the removal of the <NxCode>open</NxCode> attribute
                  from the dialog element.
                </NxP>
                <NxP>
                  Note that at the time of writing, proper support for <NxCode>HTMLDialogElement</NxCode>, including
                  its <NxCode>cancel</NxCode> event, is limited to Chromium-based browsers. In other
                  browsers, <NxCode>NxModal</NxCode> itself listens for the ESC keypress and synthesizes the event
                  passed to this callback.
                </NxP>
                <NxP>
                  Also note that any components within the modal that have their own ESC handling should
                  call <NxCode>preventDefault</NxCode> on any ESC keydowns that they handle in order to prevent the
                  modal from also handling them. <NxCode>NxDropdown</NxCode> does this automatically.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onClose</NxTable.Cell>
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
        <NxTile.Content>
          <NxP>
            <NxTextLink href="#/NxPopOverFullExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>

      </GalleryExampleTile>
    </>
  );
}
