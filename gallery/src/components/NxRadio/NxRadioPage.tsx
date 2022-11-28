/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxTextLink, NxP, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxRadioExample from './NxRadioExample';
import NxRadioNowrapExample from './NxRadioNowrapExample';
import NxRadioDisabledExample from './NxRadioDisabledExample';

const exampleCode = require('./NxRadioExample?raw');
const nowrapExampleCode = require('./NxRadioNowrapExample?raw');
const disabledExampleCode = require('./NxRadioDisabledExample?raw');

const NxRadioPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Custom Radio input.</NxP>
      <NxP>Child VDOM will be used as a label following the radio button itself.</NxP>
      <NxP>
        NxRadio can receive any attribute that would be valid on an
        HTML <NxCode>&lt;label&gt;</NxCode> as well as the following props:
      </NxP>
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
            <NxTable.Cell>name</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The name of the radio group</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>value</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The value attribute for radio input</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isChecked</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Whether the radio button should be rendered as on or off</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((currentValue: string) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>A callback for when the radio is selected. The value is passed as an argument.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the radio should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>Virtual DOM</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Additional VDOM that will be rendered as label. Should be
              {' '}
              <NxTextLink href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content">
                phrasing content
              </NxTextLink>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>radioId</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              An id attribute to be added to the radio input.

              <NxWarningAlert>
                Deprecated property: With the introduction of the <NxCode>inputAttributes</NxCode> prop,
                you can now pass in attributes directly into the input element, including <NxCode>id</NxCode>.
                Id passed through the <NxCode>inputAttributes</NxCode> prop will take precedence over
                <NxCode>radioId</NxCode>.
              </NxWarningAlert>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>overflowTooltip</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether the radio label content should be wrapped in
              an <NxCode>NxOverflowTooltip</NxCode>. Defaults to true. Set this to false when
              the <NxCode>NxRadio</NxCode> is being wrapped in a tooltip externally, to prevent
              multiple overlapping tooltips from appearing.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;label&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/label">
                HTML Label Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxRadio supports any html attribute that's normally supported by
              {' '}<NxCode>&lt;label&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>inputAttributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">
                HTML Input Radio Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxRadio</NxCode> allows you to pass html attributes directly
              into the <NxCode>input</NxCode> element as an object with the <NxCode>inputAttributes</NxCode> prop.
              Some attributes will be omitted before being passed into the <NxCode>input</NxCode> element:
              <NxCode>name</NxCode>, <NxCode>disabled</NxCode>, <NxCode>checked</NxCode>, <NxCode>readonly</NxCode>,
              and <NxCode>onChange</NxCode>. These attributes are controlled by the component
              or can be set from the top-level props.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        id="nx-radio-example"
                        codeExamples={exampleCode}
                        liveExample={NxRadioExample}>
      This example shows a series of radios in a typical vertical layout with
      different label content.
      These radios together operate as a single form control: only one value within the group
      can be selected at a time.
    </GalleryExampleTile>

    <GalleryExampleTile title="Radio Disabled Example"
                        id="nx-radio-disabled-example"
                        codeExamples={disabledExampleCode}
                        liveExample={NxRadioDisabledExample}>
      This example shows radios that are disabled.
      Disabled radios can either be checked or unchecked.
    </GalleryExampleTile>

    <GalleryExampleTile title="Radio label does not wrap"
                        id="nx-radio-no-wrap-example"
                        liveExample={NxRadioNowrapExample}
                        codeExamples={nowrapExampleCode}>
      This example includes a container around the radio buttons. This container is deliberately narrow and has a
      red border. This makes it clear that the labels on radio buttons do not wrap, and truncates with an ellipsis.
    </GalleryExampleTile>
  </>;

export default NxRadioPage;
