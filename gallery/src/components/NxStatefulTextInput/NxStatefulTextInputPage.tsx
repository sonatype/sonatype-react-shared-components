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
            <td className="nx-cell">Function ((string) => string | string[] | null)</td>
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
