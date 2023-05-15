/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxTextLink, NxP, NxWarningAlert } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxToggleExample from './NxToggleExample';

const exampleCode = require('./NxToggleExample?raw');

const NxTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Custom toggle control, which uses a hidden checkbox input for its on/checked &amp; off/unselected states.
      </NxP>
      <NxP>Child VDOM will be used as a label with the text following the toggle control.</NxP>
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
            <NxTable.Cell>
              An id to identify the toggle

              <NxWarningAlert>
                Deprecated property: With the introduction of the <NxCode>inputAttributes</NxCode> prop,
                you can now pass in attributes directly into the input element, including <NxCode>id</NxCode>.
                Id passed through the <NxCode>inputAttributes</NxCode> prop will take precedence over
                <NxCode>inputId</NxCode>.
              </NxWarningAlert>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isChecked</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Whether the toggle should be rendered as on/checked or off/unchecked</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((boolean) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A callback for when the toggle control  is toggled. Receives the new value (i.e. the inverse of the
              current <NxCode>isChecked</NxCode> value) as a parameter
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the toggle should be rendered as disabled or not. When disabled, the onChange callback will
              not fire. Defaults to false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>Virtual DOM</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              VDOM rendered as a label. Should be
              {' '}
              <NxTextLink external
                          href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content">
                phrasing content
              </NxTextLink>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;label&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/label">
                HTML label Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxToggle</NxCode> supports any HTML attribute that's normally
              supported by <NxCode>&lt;label&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>checkboxAttributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
                HTML Input Checkbox Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxToggle</NxCode> allows you to pass html attributes as an object directly into the
              <NxCode>input</NxCode> element with the <NxCode>inputAttributes</NxCode> prop.
              Some attributes will be omitted before being passed into
              the <NxCode>input</NxCode> element: <NxCode>disabled</NxCode>,
              <NxCode>checked</NxCode>, <NxCode>readonly</NxCode>, and <NxCode>onChange</NxCode>.
              These attributes are controlled by the component or can be set from the top-level props.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General NxToggle Example"
                        id="nx-toggle-example"
                        codeExamples={exampleCode}
                        liveExample={NxToggleExample}>
      This example shows a series of toggle controls in a typical vertical layout with
      different label content. Note that one of the toggle controls is disabled.
    </GalleryExampleTile>
  </>;

export default NxTogglePage;
