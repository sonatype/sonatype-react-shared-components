/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

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
      <p className="nx-p">Standard text input with pristine state tracking and pluggable validation handling</p>
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
            <td className="nx-cell">defaultValue</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The initial value rendered in the text input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">validator</td>
            <td className="nx-cell">Function ((string) =&gt; string | string[] | null)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A function that validates user-inputted changes to the text field value. Accepts the new value
              as a string and returns zero or more validation error messages
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Input HTML Attributes | Textarea HTML Attributes</td>
            <td className="nx-cell">
              <code className="nx-code">NxTextInput</code> props
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Any attribute supported by <code className="nx-code">NxTextInput</code>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxStatefulTextInputSimpleExample}
                        codeExamples={simpleSourceCode}>
      A simple example of an <code className="nx-code">NxStatefileTextInput</code>. Note that the content of the text
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
