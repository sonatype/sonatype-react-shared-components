/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxStatefulAccordion, NxAccordion, NxList, NxH3, NxTile }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextInputSimpleExample from './NxTextInputSimpleExample';
import NxTextInputValidationExample from './NxTextInputValidationExample';
import NxTextInputPasswordExample from './NxTextInputPasswordExample';
import NxTextInputTextAreaExample from './NxTextInputTextAreaExample';
import NxTextInputTextAreaValidationExample from './NxTextInputTextAreaValidationExample';
import NxTextInputLongExample from './NxTextInputLongExample';
import NxTextInputShortExample from './NxTextInputShortExample';
import NxTextInputDisabledExample from './NxTextInputDisabledExample';

const simpleSourceCode = require('./NxTextInputSimpleExample?raw');
const validationSourceCode = require('./NxTextInputValidationExample?raw');
const passwordSourceCode = require('./NxTextInputPasswordExample?raw');
const textAreaSourceCode = require('./NxTextInputTextAreaExample?raw');
const textAreaValidationSourceCode = require('./NxTextInputTextAreaValidationExample?raw');
const longSourceCode = require('./NxTextInputLongExample?raw');
const shortSourceCode = require('./NxTextInputShortExample?raw');
const disabledSourceCode = require('./NxTextInputDisabledExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Standard text input with validation styling</NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props:</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>value</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The value rendered in the text input</NxTable.Cell>
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
                If true, this NxTextInput is subject to validation, the result of which should be passed in via
                the <NxCode>validationErrors</NxCode> prop, resulting in validation CSS classes being
                applied (see below). If false, the NxTextInput is not considered to be subject to validation, the
                {' '}<NxCode>validationErrors</NxCode> prop is ignored, and validation-related CSS classes
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
                id
              </NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                An HTML id, which will be applied to the underlying <NxCode>&lt;input&gt;</NxCode> and not the top-level
                div rendered by this component.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                disabled
              </NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Whether the input is disabled
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                placeholder
              </NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                The placeholder for the input
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                aria-required
              </NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Whether the <NxCode>&lt;input&gt;</NxCode> will be marked as aria-required.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                aria-describedby
              </NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                An HTML id reference which refers to the element(s) whose content should be used as the accessible
                description of the <NxCode>&lt;input&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                HTML <NxCode>&lt;div&gt;</NxCode> Attributes
              </NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  Div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                NxTextInput supports any html attribute/React prop that's normally supported by HTML
                <NxCode>&lt;div&gt;</NxCode> elements. The only notable exceptions are:
                <NxList bulleted>
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
            <NxTable.Row>
              <NxTable.Cell>inputAttributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/input">
                  Input Attributes
                </NxTextLink>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea">
                  Textarea Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Additional attributes to be passed to the
                underlying <NxCode>&lt;input&gt;</NxCode> or <NxCode>&lt;textarea&gt;</NxCode>.
                The only notable exceptions are:
                <NxList bulleted>
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
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>State Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The <NxCode>nxTextInputStateHelpers</NxCode>{' '}
          includes the following recommended state helper functions, which each return an object containining the
          "stateful" parts of the NxTextInput props{' '}
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
              <NxTable.Cell>(initialValue: string, validator)</NxTable.Cell>
              <NxTable.Cell>
                Returns an initialized state with the specified value and <NxCode>isPristine</NxCode>{' '}
                set to true with validationErrors object set to null if validator is not specified.
                The second argument is an optional validator function that receives the new input value (trimmed)
                as a string and returns zero or more validation error messages.
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
                  {' '}<NxCode>value</NxCode>, and with <NxCode>validationErrors</NxCode> as
                  computed by the validator function.
                </NxP>
                <NxP>
                  This function is curried, so that it can be partially applied over the{' '}
                  <NxCode>validator</NxCode>.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTextInput CSS Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-text-input--short</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxTextInput</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Short variant of the <NxCode>NxTextInput</NxCode>.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-text-input--long</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxTextInput</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Long variant of the <NxCode>NxTextInput</NxCode>.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <div className="nx-tile-content--accordion-container">
        <NxStatefulAccordion defaultOpen={false}>
          <NxAccordion.Header>
            <NxAccordion.Title>Regarding &lt;input type="number"&gt;</NxAccordion.Title>
          </NxAccordion.Header>
          <NxP>
            <NxCode>NxTextInput</NxCode> using <NxCode>type="number"</NxCode> has been an oft requested addition to the
            RSC but there are problems with its implementation at the browser level that make its use within RSC
            too complicated to justify further development at this time.
          </NxP>
          <NxP>
            In Chrome it works mostly as expected, however Safari and Firefox allow the user to input non-number
            characters but do not recognize those characters as values. If a user inputs "aaaa" or 123a"
            , <NxCode>onChange</NxCode> receives "" as the value in both of those invalid cases. It should be
            setting that as the value stored in the state, which goes in as the value of the &lt;input&gt; in the next
            render, which should clear the input. Normally you'd expect that as soon as you enter an invalid character
            after the number, the input should have cleared. But for some reason that doesn't happen. We have traced
            through the code and all of the state handling in our examples and components is correct. But for some
            reason, when that empty string gets passed back into the &lt;input&gt; in <NxCode>NxTextInput</NxCode>,
            it just ignores it. The whole React workflow around <NxCode>type="number"</NxCode> seems to be broken,
            not to mention our RSC validation workflow.
          </NxP>
          <NxP>
            At this point if an input that only accepts numbers is required, it is strongly suggested that the developer
            create a custom validation rule. Here is a simple Regex that will detect only digits to get you
            started: <NxCode>/^\d+$/</NxCode>.
          </NxP>
        </NxStatefulAccordion>
      </div>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-text-input-simple-example"
                        liveExample={NxTextInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A basic example of an <NxCode>NxTextInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        id="nx-text-input-validation-example"
                        liveExample={NxTextInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example of an <NxCode>NxTextInput</NxCode> that validates that its contents are non-empty.
      Notice that once the user has entered some content, the input from then on displays either the valid or invalid
      styles, depending on whether it has any contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="Password input example"
                        id="nx-text-input-password-example"
                        liveExample={NxTextInputPasswordExample}
                        codeExamples={passwordSourceCode}>
      An example of an <NxCode>NxTextInput</NxCode> for password entry.
    </GalleryExampleTile>

    <GalleryExampleTile title="TextArea input example"
                        id="nx-text-input-textarea-example"
                        liveExample={NxTextInputTextAreaExample}
                        codeExamples={textAreaSourceCode}>
      An example of an <NxCode>NxTextInput</NxCode> set up to be a multi-line text area.
    </GalleryExampleTile>

    <GalleryExampleTile title="TextArea input example with validation"
                        id="nx-text-input-textarea-validation-example"
                        liveExample={NxTextInputTextAreaValidationExample}
                        codeExamples={textAreaValidationSourceCode}>
      An example of an <NxCode>NxTextInput</NxCode> set up to be a multi-line text area with validation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Long example"
                        id="nx-text-input-long-example"
                        liveExample={NxTextInputLongExample}
                        codeExamples={longSourceCode}>
      Examples of <NxCode>NxTextInput</NxCode>s using
      the <NxCode>long</NxCode> modifier, which makes them wider. Additionally, the second input demonstrates that
      the <NxCode>id</NxCode>, <NxCode>aria-required</NxCode>, and <NxCode>aria-describedby</NxCode> props are
      passed down directly to the <NxCode>&lt;input&gt;</NxCode>/<NxCode>&lt;textarea&gt;</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Short example"
                        id="nx-text-input-short-example"
                        liveExample={NxTextInputShortExample}
                        codeExamples={shortSourceCode}>
      Examples of <NxCode>NxTextInput</NxCode>s using
      the <NxCode>short</NxCode> modifier, which makes them wider.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        id="nx-text-input-disabled-example"
                        liveExample={NxTextInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      Examples of disabled <NxCode>NxTextInput</NxCode>s. Notice that when
      disabled, <NxCode>NxTextInput</NxCode> never shows style variations for validation, hover, etc.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
