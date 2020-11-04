/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormSelectExample from './NxFormSelectExample';

const sourceCode = require('!!raw-loader!./NxFormSelectExample').default;

const NxFormSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Base styles for Sonatype text inputs.  Only the styles intended for "static" usage are shown
        here. For styles that involve business logic, such as validation, see
        the <a href="#pages/NxTextInput">NxTextInput React Component</a>.
      </p>
      <p className="nx-p">Classes:</p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-text-input</code></td>
            <td className="nx-cell">
              Any text-oriented <code className="nx-code">{'<input>'}</code> type or
              <code className="nx-code">{'<textarea>'}</code>
            </td>
            <td className="nx-cell">
              Gives the input typical Sonatype input styling with 1px grey borders on the top, right, and bottom,
              and a 3px grey border on the left
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-text-input--long</code></td>
            <td className="nx-cell">Any <code className="nx-code">.nx-text-input</code> element</td>
            <td className="nx-cell">
              Use this class to make the text input particularly wide (395px vs the default 219px)
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={sourceCode}
                        liveExample={NxFormSelectExample}>
      This example demonstrates the fundamental look of various elements styled with
      nx-text-input. Note that these styles are not typically used alone, and so elements looking
      exactly like these will not typically be seen. Rather, these styles would typically be
      used in conjunction with the validation styles provided by the NxTextInput react component,
      which add border colors and other signifiers.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
