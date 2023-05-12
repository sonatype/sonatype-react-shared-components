/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxTextLink, NxP, NxWarningAlert } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxCheckboxExample from './NxCheckboxExample';
import NxCheckboxNowrapExample from './NxCheckboxNowrapExample';

const exampleCode = require('./NxCheckboxExample?raw');
const nowrapExampleCode = require('./NxCheckboxNowrapExample?raw');

const NxCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Custom checkbox input.</NxP>
      <NxP>Child VDOM will be used as a label following the checkbox button itself.</NxP>
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
            <NxTable.Cell>
              An id to identify the checkbox.

              <NxWarningAlert>
                Deprecated property: With the introduction of the <NxCode>inputAttributes</NxCode> prop,
                you can now pass in attributes directly into the input element, including <NxCode>id</NxCode>.
                Id passed through the <NxCode>inputAttributes</NxCode> prop will take precedence over
                <NxCode>checkboxId</NxCode>.
              </NxWarningAlert>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isChecked</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Whether the checkbox should be rendered as checked or unchecked</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((boolean) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A callback for when the checkbox is toggled. Receives the new value (i.e. the inverse of the
              current <NxCode>isChecked</NxCode> value) as a parameter.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the checkbox should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>overflowTooltip</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the checkbox label content should be wrapped in
              an <NxCode>NxOverflowTooltip</NxCode>. Defaults to true. Set this to false when
              the <NxCode>NxCheckbox</NxCode> is being wrapped in a tooltip externally, to prevent
              multiple overlapping tooltips from appearing.
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
              NxCheckbox supports any html attribute that's normally supported by the
              <NxCode>label</NxCode> element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>inputAttributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
                HTML Input Checkbox Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxCheckbox</NxCode> allows you to pass html attributes directly
              into the <NxCode>input</NxCode> element as an object with the <NxCode>inputAttributes</NxCode> prop.
              Some attributes will be omitted before being passed into the <NxCode>input</NxCode> element:
              <NxCode>disabled</NxCode>, <NxCode>checked</NxCode>, <NxCode>readonly</NxCode>,
              and <NxCode>onChange</NxCode>. These attributes are controlled by the component
              or can be set from the top-level props.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        id="nx-checkbox-example"
                        codeExamples={exampleCode}
                        liveExample={NxCheckboxExample}>
      This example shows a series of checkboxes in a typical vertical layout with
      different label content. Note that one of the checkboxes is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Checkbox label should not wrap"
                        liveExample={NxCheckboxNowrapExample}
                        codeExamples={nowrapExampleCode}>
      This example includes a container around the checkboxes. This container is deliberately narrow and has a
      red border. This makes it clear that the labels on checkboxes do not wrap, and truncate with an ellipsis.
    </GalleryExampleTile>
  </>;

export default NxCheckboxPage;
