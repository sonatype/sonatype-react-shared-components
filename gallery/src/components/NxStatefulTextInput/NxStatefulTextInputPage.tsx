/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulTextInputSimpleExample from './NxStatefulTextInputSimpleExample';
import NxStatefulTextInputValidationExample from './NxStatefulTextInputValidationExample';
import NxStatefulTextInputPasswordExample from './NxStatefulTextInputPasswordExample';
import NxStatefulTextInputTextAreaExample from './NxStatefulTextInputTextAreaExample';
import NxStatefulTextInputDisabledExample from './NxStatefulTextInputDisabledExample';

const simpleSourceCode = require('./NxStatefulTextInputSimpleExample?raw');
const validationSourceCode = require('./NxStatefulTextInputValidationExample?raw');
const passwordSourceCode = require('./NxStatefulTextInputPasswordExample?raw');
const textAreaSourceCode = require('./NxStatefulTextInputTextAreaExample?raw');
const disabledSourceCode = require('./NxStatefulTextInputDisabledExample?raw');

const NxStatefulTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Standard text input with pristine state tracking and pluggable validation handling</NxP>
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
            <NxTable.Cell>type</NxTable.Cell>
            <NxTable.Cell>"textarea" | "text" | "password"</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>What type of text input to render.  Defaults to "text"</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>defaultValue</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The initial value rendered in the text input</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>validator</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; string | string[] | null)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A function that validates user-inputted changes to the text field value. Accepts the new value
              as a string and returns zero or more validation error messages
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A callback for when the user changes the value of the text box (e.g. by typing a letter)
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>
              HTML <NxCode>&lt;input&gt;</NxCode> Attributes |
              HTML <NxCode>&lt;textarea&gt;</NxCode> Attributes
            </NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxTextInput</NxCode> props
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Any attribute supported by <NxCode>NxTextInput</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulTextInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A simple example of an <NxCode>NxStatefulTextInput</NxCode>. Note that the content of the text
      input does not need to be tracked separately.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        liveExample={NxStatefulTextInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example including validation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Password input example"
                        liveExample={NxStatefulTextInputPasswordExample}
                        codeExamples={passwordSourceCode}>
      An example of a stateful password input.
    </GalleryExampleTile>

    <GalleryExampleTile title="TextArea input example"
                        liveExample={NxStatefulTextInputTextAreaExample}
                        codeExamples={textAreaSourceCode}>
      An example of a stateful textarea input.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        liveExample={NxStatefulTextInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      An example of a stateful input which is disabled.
    </GalleryExampleTile>
  </>;

export default NxStatefulTextInputPage;
