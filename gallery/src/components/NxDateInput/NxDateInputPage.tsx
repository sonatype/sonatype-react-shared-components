/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxList }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxDateInputSimpleExample from './NxDateInputSimpleExample';
import NxDateInputValidationExample from './NxDateInputValidationExample';
import NxDateInputDisabledExample from './NxDateInputDisabledExample';

const simpleSourceCode = require('./NxDateInputSimpleExample?raw');
const validationSourceCode = require('./NxDateInputValidationExample?raw');
const disabledSourceCode = require('./NxDateInputDisabledExample?raw');

const NxDateInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Standard date input with validation styling</NxP>
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
            <NxTable.Cell>value</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The value rendered in the date input.
              Must be a date string in the <NxCode>YYYY-MM-DD</NxCode> format.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isPristine</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Should be set to true when the user has not yet adjusted the value of the input
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>validatable</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If true, this NxDateInput is subject to validation, the result of which should be passed in via
              the <NxCode>validationErrors</NxCode> prop, resulting in validation CSS classes being
              applied (see below). If false, the NxDateInput is not considered to be subject to validation, the
              <NxCode>validationErrors</NxCode> prop is ignored, and validation-related CSS classes
              are never applied.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>validationErrors</NxTable.Cell>
            <NxTable.Cell>string | string[]</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Validation failure messages for components where <NxCode>validatable</NxCode> is
              true. Any strings contained by this prop's value are taken to be error messages describing a validation
              failure. These trigger the invalid styling on the component and the first such error message is
              displayed within the component. If this prop's value does not contain any strings (i.e. if it is null,
              undefined, or an empty array), the component value is taken to be valid, and corresponding styles
              are added. For non-validatable components, this prop is ignored.
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
            <NxTable.Cell>onKeyPress</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                A callback for when the user presses a key that doesn't necessarily change the input value
                (e.g. by hitting enter)
              </NxP>
              <NxP>
                The value given to the callback will be that of the key name, as described in the spec
                for{' '}
                <NxTextLink external href="https://www.w3.org/TR/uievents-key/#named-key-attribute-values">
                  named keys
                </NxTextLink>
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>
              HTML <NxCode>&lt;input&gt;</NxCode> Attributes |
              HTML <NxCode>&lt;textarea&gt;</NxCode> Attributes
            </NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date">
                Date Input Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxDateInput supports any html attribute that's normally supported by HTML
              date <NxCode>&lt;input&gt;</NxCode>. The only notable exceptions are:
              <NxList className="nx-list--bulleted">
                <NxList.Item>
                  <NxList.Text>
                    <NxCode>defaultValue</NxCode> which is left out because it creates what's commonly
                    known as{' '}
                    <NxTextLink external href="https://reactjs.org/docs/uncontrolled-components.html">
                      uncontrolled inputs
                    </NxTextLink>
                  </NxList.Text>
                </NxList.Item>
                <NxList.Item>
                  <NxList.Text>
                    The attributes specified above, whose types are as defined here and not as specified in the
                    react propTypes.
                  </NxList.Text>
                </NxList.Item>
              </NxList>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <h3>State Helpers</h3>
      <NxP>
        The <NxCode>NxDateInputStateHelpers</NxCode>{' '}
        includes the following recommended state helper functions, which each return an object containining the
        "stateful" parts of the NxDateInput props{' '}
        (<NxCode>value</NxCode>, <NxCode>isPristine</NxCode>, and{' '}
        <NxCode>validationErrors</NxCode>) as well as <NxCode>trimmedValue</NxCode>,
        which holds a whitespace-trimmed copy of the <NxCode>value</NxCode>:
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Arguments</NxTable.Cell>
            <NxTable.Cell>Description</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>initialState</NxTable.Cell>
            <NxTable.Cell>(initialValue: string)</NxTable.Cell>
            <NxTable.Cell>
              Returns an initialized state with the specified value and <NxCode>isPristine</NxCode>
              set to true.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>userInput</NxTable.Cell>
            <NxTable.Cell>(validator, newValue: string)</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                Meant to be used to handle user changes to the text input value. The first argument is an optional
                validator function that receives the new input value (trimmed) as a string and returns zero or more
                validation error messages. The next argument is the new (raw, untrimmed) value of the text box after
                the user's input.  Returns a state object that is not pristine, with the specified
                <NxCode>value</NxCode>, and with <NxCode>validationErrors</NxCode> as
                computed by the validator function.
              </NxP>
              <NxP>
                This function is curried, so that it can be partially applied over the
                <NxCode>validator</NxCode>.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-date-input-simple-example"
                        liveExample={NxDateInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A basic example of an <NxCode>NxDateInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        id="nx-date-input-validation-example"
                        liveExample={NxDateInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example of an <NxCode>NxDateInput</NxCode> that validates that its date value year is after 2020.
      Notice that once the user has entered the date. The input displays either the valid or invalid styles,
      depending on whether it has any content.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        id="nx-date-input-disabled-example"
                        liveExample={NxDateInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      Examples of disabled <NxCode>NxDateInput</NxCode>s. Notice that when
      disabled, <NxCode>NxDateInput</NxCode> never shows style variations for validation, hover, etc.
    </GalleryExampleTile>
  </>;

export default NxDateInputPage;
