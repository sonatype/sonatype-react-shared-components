/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulNumberInputSimpleExample from './NxStatefulNumberInputSimpleExample';
import NxStatefulNumberInputValidationExample from './NxStatefulNumberInputValidationExample';
import NxStatefulNumberInputDisabledExample from './NxStatefulNumberInputDisabledExample';

const simpleSourceCode = require('./NxStatefulNumberInputSimpleExample?raw');
const validationSourceCode = require('./NxStatefulNumberInputValidationExample?raw');
const disabledSourceCode = require('./NxStatefulNumberInputDisabledExample?raw');

const NxStatefulNumberInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxCode>NxStatefulNumberInput</NxCode> is a variation of <NxCode>NxStatefulTextInput</NxCode> whose
      {' '}<NxCode>type</NxCode> attribute is always set to <NxCode>number</NxCode>.
      <NxP>
        Like <NxCode>NxStatefulTextInput</NxCode> it has pristine state tracking and pluggable validation handling.
      </NxP>
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
      <NxH3>Special attributes</NxH3>
      <NxP>
        A number input has three special HTML attibutes which are described briefly below and{' '}
        <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number">
          in detail on MDN.
        </NxTextLink>
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Attribute</NxTable.Cell>
            <NxTable.Cell>Description</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>step</NxTable.Cell>
            <NxTable.Cell>
              Use the <NxCode>step</NxCode> attribute to change the incrementation value of the up and down arrows of
              the input.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>min</NxTable.Cell>
            <NxTable.Cell>
              The <NxCode>min</NxCode> attribute defines a minimum value for the input. Note that the component does
              not provide validation of this value, that's up to the consuming project.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>max</NxTable.Cell>
            <NxTable.Cell>
              The <NxCode>max</NxCode> attribute defines a maximum value for the input. Note that the component does
              not provide validation of this value, that's up to the consuming project.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulNumberInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A simple example of an <NxCode>NxStatefulNumberInput</NxCode>. Note that the content of the
      input does not need to be tracked separately.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        liveExample={NxStatefulNumberInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example including validation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        liveExample={NxStatefulNumberInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      An example of a stateful input which is disabled.
    </GalleryExampleTile>
  </>;

export default NxStatefulNumberInputPage;
