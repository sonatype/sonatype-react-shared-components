/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextInputSimpleExample from './NxTextInputSimpleExample';
import NxTextInputValidationExample from './NxTextInputValidationExample';
import NxTextInputPasswordExample from './NxTextInputPasswordExample';
import NxTextInputTextAreaExample from './NxTextInputTextAreaExample';
import NxTextInputTextAreaValidationExample from './NxTextInputTextAreaValidationExample';
import NxTextInputLongExample from './NxTextInputLongExample';
import NxTextInputDisabledExample from './NxTextInputDisabledExample';

const simpleSourceCode = require('!!raw-loader!./NxTextInputSimpleExample').default;
const validationSourceCode = require('!!raw-loader!./NxTextInputValidationExample').default;
const passwordSourceCode = require('!!raw-loader!./NxTextInputPasswordExample').default;
const textAreaSourceCode = require('!!raw-loader!./NxTextInputTextAreaExample').default;
const textAreaValidationSourceCode = require('!!raw-loader!./NxTextInputTextAreaValidationExample').default;
const longSourceCode = require('!!raw-loader!./NxTextInputLongExample').default;
const disabledSourceCode = require('!!raw-loader!./NxTextInputDisabledExample').default;

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Standard text input with validation styling</p>
      <p className="nx-p">Props:</p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">type</td>
            <td className="nx-cell">"textarea" | "text" | "password"</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">What type of text input to render.  Defaults to "text"</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">value</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The value rendered in the text input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isPristine</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Should be set to true when the user has not yet adjusted the value of the input
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">validatable</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If true, this NxTextInput is subject to validation, the result of which should be passed in via
              the <code className="nx-code">validationErrors</code> prop, resulting in validation CSS classes being
              applied (see below). If false, the NxTextInput is not considered to be subject to validation, the
              <code className="nx-code">validationErrors</code> prop is ignored, and validation-related CSS classes
              are never applied.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">validationErrors</td>
            <td className="nx-cell">string | string[]</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Validation failure messages for components where <code className="nx-code">validatable</code> is
              true. Any strings contained by this prop's value are taken to be error messages describing a validation
              failure. These trigger the invalid styling on the component and the first such error message is
              displayed within the component. If this prop's value does not contain any strings (i.e. if it is null,
              undefined, or an empty array), the component value is taken to be valid, and corresponding styles
              are added. For non-validatable components, this prop is ignored.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function ((string) => void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A callback for when the user changes the value of the text box (e.g. by typing a letter)
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onKeyPress</td>
            <td className="nx-cell">Function ((string) => void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              <p className="nx-p">
                A callback for when the user presses a key that doesn't necessarily change the input value
                (e.g. by hitting enter)
              </p>
              <p className="nx-p">
                The value given to the callback will be that of the key name, as described in the spec
                for{' '}
                <a target="_blank"
                   rel="noopener"
                   href="https://www.w3.org/TR/uievents-key/#named-key-attribute-values">
                  named keys
                </a>
              </p>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Input HTML Attributes | Textarea HTML Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                HTML Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              NxTextInput supports any html attribute that's normally supported by either HTML Inputs or HTML
              Textareas. The only notable exceptions are:
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <code className="nx-code">defaultValue</code> which is left out because it creates what's commonly
                  known as{' '}
                  <a target="_blank"
                     rel="noopener"
                     href="https://reactjs.org/docs/uncontrolled-components.html">
                    uncontrolled inputs
                  </a>
                </li>
                <li className="nx-list__item">
                  The attributes specified above, whose types are as defined here and not as specified in the
                  react propTypes.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>State Helpers</h3>
      <p className="nx-p">
        <code className="nx-code">@sonatype/react-shared-components/components/NxTextInput/stateHelpers.ts</code>{' '}
        includes the following recommended state helper functions, which each return an object containining the
        "stateful" parts of the NxTextInput props{' '}
        (<code className="nx-code">value</code>, <code className="nx-code">isPristine</code>, and{' '}
        <code className="nx-code">validationErrors</code>) as well as <code className="nx-code">trimmedValue</code>,
        which holds a whitespace-trimmed copy of the <code className="nx-code">value</code>:
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Function</th>
            <th className="nx-cell nx-cell--header">Arguments</th>
            <th className="nx-cell nx-cell--header">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">initialState</td>
            <td className="nx-cell">(initialValue: string)</td>
            <td className="nx-cell">
              Returns an initialized state with the specified value and <code className="nx-code">isPristine</code>
              set to true.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">userInput</td>
            <td className="nx-cell">(validator, newValue: string)</td>
            <td className="nx-cell">
              <p className="nx-p">
                Meant to be used to handle user changes to the text input value. The first argument is an optional
                validator function that receives the new input value (trimmed) as a string and returns zero or more
                validation error messages. The next argument is the new (raw, untrimmed) value of the text box after
                the user's input.  Returns a state object that is not pristine, with the specified
                <code className="nx-code">value</code>, and with <code className="nx-code">validationErrors</code> as
                computed by the validator function.
              </p>
              <p className="nx-p">
                This function is curried, so that it can be partially applied over the
                <code className="nx-code">validator</code>.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-text-input-simple-example"
                        liveExample={NxTextInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A basic example of an <code className="nx-code">NxTextInput</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with non-emptiness validation"
                        id="nx-text-input-validation-example"
                        liveExample={NxTextInputValidationExample}
                        codeExamples={validationSourceCode}>
      An example of an <code className="nx-code">NxTextInput</code> that validates that its contents are non-empty.
      Notice that once the user has entered some content, the input from then on displays either the valid or invalid
      styles, depending on whether it has any contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="Password input example"
                        id="nx-text-input-password-example"
                        liveExample={NxTextInputPasswordExample}
                        codeExamples={passwordSourceCode}>
      An example of an <code className="nx-code">NxTextInput</code> for password entry.
    </GalleryExampleTile>

    <GalleryExampleTile title="TextArea input example"
                        id="nx-text-input-textarea-example"
                        liveExample={NxTextInputTextAreaExample}
                        codeExamples={textAreaSourceCode}>
      An example of an <code className="nx-code">NxTextInput</code> set up to be a multi-line text area.
    </GalleryExampleTile>

    <GalleryExampleTile title="TextArea input example with validation"
                        id="nx-text-input-textarea-validation-example"
                        liveExample={NxTextInputTextAreaValidationExample}
                        codeExamples={textAreaValidationSourceCode}>
      An example of an <code className="nx-code">NxTextInput</code> set up to be a multi-line text area with validation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Long example"
                        id="nx-text-input-long-example"
                        liveExample={NxTextInputLongExample}
                        codeExamples={longSourceCode}>
      Examples of <code className="nx-code">NxTextInput</code>s using
      the <code className="nx-code">long</code> modifier, which makes them wider.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled example"
                        id="nx-text-input-disabled-example"
                        liveExample={NxTextInputDisabledExample}
                        codeExamples={disabledSourceCode}>
      Examples of disabled <code className="nx-code">NxTextInput</code>s. Notice that when
      disabled, <code className="nx-code">NxTextInput</code> never shows style variations for validation, hover, etc.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
