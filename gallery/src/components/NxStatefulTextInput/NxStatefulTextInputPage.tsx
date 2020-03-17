/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import NxStatefulTextInputSimpleExample from './NxStatefulTextInputSimpleExample';
import NxStatefulTextInputValidationExample from './NxStatefulTextInputValidationExample';
import NxStatefulTextInputPasswordExample from './NxStatefulTextInputPasswordExample';
import NxStatefulTextInputTextAreaExample from './NxStatefulTextInputTextAreaExample';
import NxStatefulTextInputDisabledExample from './NxStatefulTextInputDisabledExample';
import CodeExample from '../../CodeExample';

const simpleSourceCode = require('!!raw-loader!./NxStatefulTextInputSimpleExample').default;
const validationSourceCode = require('!!raw-loader!./NxStatefulTextInputValidationExample').default;
const passwordSourceCode = require('!!raw-loader!./NxStatefulTextInputPasswordExample').default;
const textAreaSourceCode = require('!!raw-loader!./NxStatefulTextInputTextAreaExample').default;
const disabledSourceCode = require('!!raw-loader!./NxStatefulTextInputDisabledExample').default;

const NxStatefulTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Standard text input with pristine state tracking and pluggable validation handling</p>
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
            <td>defaultValue</td>
            <td>string</td>
            <td>Yes</td>
            <td>The initial value rendered in the text input</td>
          </tr>
          <tr>
            <td>validator</td>
            <td>Function ((string) => string | string[] | null)</td>
            <td>No</td>
            <td>
              A function that validates user-inputted changes to the text field value. Accepts the new value
              as a string and returns zero or more validation error messages
            </td>
          </tr>
          <tr>
            <td>Input HTML Attributes | Textarea HTML Attributes</td>
            <td>
              <code className="nx-code">NxTextInput</code> props
            </td>
            <td>No</td>
            <td>
              Any attribute supported by <code className="nx-code">NxTextInput</code>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Simple Example">
      <NxStatefulTextInputSimpleExample />
      <CodeExample content={simpleSourceCode} />
    </GalleryTile>
    <GalleryTile title="Example with non-emptiness validation">
      <NxStatefulTextInputValidationExample />
      <CodeExample content={validationSourceCode} />
    </GalleryTile>
    <GalleryTile title="Password input example">
      <NxStatefulTextInputPasswordExample />
      <CodeExample content={passwordSourceCode} />
    </GalleryTile>
    <GalleryTile title="TextArea input example">
      <NxStatefulTextInputTextAreaExample />
      <CodeExample content={textAreaSourceCode} />
    </GalleryTile>
    <GalleryTile title="Disabled example">
      <NxStatefulTextInputDisabledExample />
      <CodeExample content={disabledSourceCode} />
    </GalleryTile>
  </>;

export default NxStatefulTextInputPage;
