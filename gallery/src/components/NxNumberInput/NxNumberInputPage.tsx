/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxNumberInputSimpleExample from './NxNumberInputSimpleExample';
import NxNumberInputComplexExample from './NxNumberInputComplexExample';
import NxNumberInputValidationExample from './NxNumberInputValidationExample';
import NxNumberInputDisabledExample from './NxNumberInputDisabledExample';

const simpleSourceCode = require('./NxNumberInputSimpleExample?raw');
const complexSourceCode = require('./NxNumberInputComplexExample?raw');
const validationSourceCode = require('./NxNumberInputValidationExample?raw');
const disabledSourceCode = require('./NxNumberInputDisabledExample?raw');

const NxNumberInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxNumberInput</NxCode> is a variation of <NxCode>NxTextInput</NxCode> whose
        {' '}<NxCode>type</NxCode> attribute is always set to <NxCode>number</NxCode>.
      </NxP>
      <NxP>
        Note: Safari and Firefox do not prevent the user from inputting non-numerical characters.
      </NxP>
      <NxH3>Props</NxH3>
      <NxP>
        Aside from the hard-coded <NxCode>type</NxCode> attribute <NxCode>NxNumberInput</NxCode> shares all
        other <NxCode>NxTextInput</NxCode> props.
      </NxP>
      <h3>State Helpers</h3>
      <NxP>
        <NxCode>NxNumberInput</NxCode> uses <NxCode>nxTextInputStateHelpers</NxCode>.
      </NxP>
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
                        id="nx-number-input-simple-example"
                        liveExample={NxNumberInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A basic example of an <NxCode>NxNumberInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Step/min/max Example"
                        id="nx-number-input-complex-example"
                        liveExample={NxNumberInputComplexExample}
                        codeExamples={complexSourceCode}>
      An example of <NxCode>NxNumberInput</NxCode> with a minimum value of 10, a maximum of 100, and a step of 5.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        id="nx-number-input-validation-example"
                        liveExample={NxNumberInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example of an <NxCode>NxNumberInput</NxCode> that validates that its contents are non-empty.
      Notice that once the user has entered some content, the input from then on displays either the valid or invalid
      styles, depending on whether it has any contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        id="nx-number-input-disabled-example"
                        liveExample={NxNumberInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      Examples of disabled <NxCode>NxNumberInput</NxCode>s. Notice that when
      disabled, <NxCode>NxNumberInput</NxCode> never shows style variations for validation, hover, etc.
    </GalleryExampleTile>
  </>;

export default NxNumberInputPage;
