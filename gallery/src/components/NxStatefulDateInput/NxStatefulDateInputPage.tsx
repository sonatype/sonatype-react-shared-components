/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulDateInputSimpleExample from './NxStatefulDateInputSimpleExample';
import NxStatefulDateInputValidationExample from './NxStatefulDateInputValidationExample';
import NxStatefulDateInputDisabledExample from './NxStatefulDateInputDisabledExample';

const simpleSourceCode = require('./NxStatefulDateInputSimpleExample?raw');
const validationSourceCode = require('./NxStatefulDateInputValidationExample?raw');
const disabledSourceCode = require('./NxStatefulDateInputDisabledExample?raw');

const NxStatefulDateInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Standard date input with pristine state tracking and pluggable validation handling</NxP>
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
            <NxTable.Cell>defaultValue</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The initial value rendered in the date input.
              It should be a date string in <NxCode>YYYY-MM-DD</NxCode> format.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>validator</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; string | string[] | null)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A function that validates user-inputted changes to the date field value. Accepts the new value
              as a string and returns zero or more validation error messages
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>
              HTML Date <NxCode>&lt;input&gt;</NxCode> Attributes
            </NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxDateInput</NxCode> props
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Any attribute supported by <NxCode>NxDateInput</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulDateInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A simple example of an <NxCode>NxStatefulDateInput</NxCode>.
      Note that the content of the date input does not need to be tracked separately.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        liveExample={NxStatefulDateInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example including validation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        liveExample={NxStatefulDateInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      An example of a stateful date input which is disabled.
    </GalleryExampleTile>
  </>;

export default NxStatefulDateInputPage;
