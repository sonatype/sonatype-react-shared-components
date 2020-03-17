/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextInputStylesExample from './NxTextInputStylesExample';
import CodeExample from '../../CodeExample';

const sourceCode = require('!!raw-loader!./NxTextInputStylesExample').default;

const NxTextInputStylesPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        Base styles for Sonatype text inputs.  Only the styles intended for "static" usage are shown
        here. For styles that involve business logic, such as validation, see
        the <a href="#pages/NxTextInput">NxTextInput React Component</a>.
      </p>
      <p>Classes:</p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="nx-code">.nx-text-input</code></td>
            <td>
              Any text-oriented <code className="nx-code">{'<input>'}</code> type or
              <code className="nx-code">{'<textarea>'}</code>
            </td>
            <td>
              Gives the input typical Sonatype input styling with 1px grey borders on the top, right, and bottom,
              and a 3px grey border on the left
            </td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-text-input--long</code></td>
            <td>Any <code className="nx-code">.nx-text-input</code> element</td>
            <td>Use this class to make the text input particularly wide (395px vs the default 219px)</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile>
      <NxTextInputStylesExample />
      <CodeExample content={sourceCode} />
    </GalleryExampleTile>
  </>;

export default NxTextInputStylesPage;
