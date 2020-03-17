/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import NxTextInputSimpleExample from './NxTextInputSimpleExample';
import NxTextInputValidationExample from './NxTextInputValidationExample';
import NxTextInputPasswordExample from './NxTextInputPasswordExample';
import NxTextInputTextAreaExample from './NxTextInputTextAreaExample';
import NxTextInputDisabledExample from './NxTextInputDisabledExample';
import CodeExample from '../../CodeExample';

const simpleSourceCode = require('!!raw-loader!./NxTextInputSimpleExample').default;
const validationSourceCode = require('!!raw-loader!./NxTextInputValidationExample').default;
const passwordSourceCode = require('!!raw-loader!./NxTextInputPasswordExample').default;
const textAreaSourceCode = require('!!raw-loader!./NxTextInputTextAreaExample').default;
const disabledSourceCode = require('!!raw-loader!./NxTextInputDisabledExample').default;

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Standard text input with validation styling</p>
      <p>Props:</p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>"textarea" | "text" | "password"</td>
            <td>No</td>
            <td>What type of text input to render.  Defaults to "text"</td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>Yes</td>
            <td>The value rendered in the text input</td>
          </tr>
          <tr>
            <td>isPristine</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Should be set to true when the user has not yet adjusted the value of the input</td>
          </tr>
          <tr>
            <td>validationErrors</td>
            <td>string[]</td>
            <td>No</td>
            <td>
              Zero or more validation error messages.  If empty or not defined, the field is considered to be valid
            </td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function ((string) => void)</td>
            <td>No</td>
            <td>A callback for when the user changes the value of the text box (e.g. by typing a letter)</td>
          </tr>
          <tr>
            <td>onKeyPress</td>
            <td>Function ((string) => void)</td>
            <td>No</td>
            <td>
              A callback for when the user presses a key that doesn't necessarily change the input value
              (e.g. by hitting enter)
              <p>
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
          <tr>
            <td>Input HTML Attributes | Textarea HTML Attributes</td>
            <td>
              <a target="_blank"
                 rel="noopener"
                 href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                HTML Attributes
              </a>
            </td>
            <td>No</td>
            <td>
              NxTextInput supports any html attribute that's normally supported by either HTML Inputs or HTML Textareas.
              The only notable exceptions are:
              <ul>
                <li>
                  <code className="nx-code">defaultValue</code> which is left out because it creates what's commonly
                  known as{' '}
                  <a target="_blank"
                     rel="noopener"
                     href="https://reactjs.org/docs/uncontrolled-components.html">
                    uncontrolled inputs
                  </a>
                </li>
                <li>
                  The attributes specified above, whose types are as defined here and not as specified in the
                  react propTypes.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>State Helpers</h3>
      <p>
        '@sonatype/react-shared-components/components/NxTextInput/stateHelpers.ts' includes the following recommended
        state helper functions, which each return an object containining the "stateful" parts of the NxTextInput props
        (<code className="nx-code">value</code>, <code className="nx-code">isPristine</code>, and
        <code className="nx-code">validationErrors</code>) as well as <code className="nx-code">trimmedValue</code>,
        which holds a whitespace-trimmed copy of the <code className="nx-code">value</code>:
      </p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Function</th>
            <th>Arguments</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>initialState</td>
            <td>(initialValue: string)</td>
            <td>
              Returns an initialized state with the specified value and <code className="nx-code">isPristine</code>
              set to true.
            </td>
          </tr>
          <tr>
            <td>userInput</td>
            <td>(validator, newValue: string)</td>
            <td>
              <p>
                Meant to be used to handle user changes to the text input value. The first argument is an optional
                validator function that receives the new input value (trimmed) as a string and returns zero or more
                validation error messages. The next argument is the new (raw, untrimmed) value of the text box after
                the user's input.  Returns a state object that is not pristine, with the specified
                <code className="nx-code">value</code>, and with <code className="nx-code">validationErrors</code> as
                computed by the validator function.
              </p>
              <p>
                This function is curried, so that it can be partially applied over the
                <code className="nx-code">validator</code>.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Simple Example">
      <NxTextInputSimpleExample />
      <CodeExample content={simpleSourceCode} />
    </GalleryTile>
    <GalleryTile title="Example with non-emptiness validation">
      <NxTextInputValidationExample />
      <CodeExample content={validationSourceCode} />
    </GalleryTile>
    <GalleryTile title="Password input example">
      <NxTextInputPasswordExample />
      <CodeExample content={passwordSourceCode} />
    </GalleryTile>
    <GalleryTile title="TextArea input example">
      <NxTextInputTextAreaExample />
      <CodeExample content={textAreaSourceCode} />
    </GalleryTile>
    <GalleryTile title="Disabled example">
      <NxTextInputDisabledExample />
      <CodeExample content={disabledSourceCode} />
    </GalleryTile>
  </>;

export default NxTextInputPage;
