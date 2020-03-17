/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulCheckboxExample from './NxStatefulCheckboxExample';
import CodeExample from '../../CodeExample';

const exampleCode = require('!!raw-loader!./NxStatefulCheckboxExample').default;

const NxStatefulCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Custom stateful checkbox input.</p>
      <p>Child VDOM will be used as a label following the stateful checkbox button itself.</p>
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
            <td>checkboxId</td>
            <td>string</td>
            <td>No</td>
            <td>An id to identify the stateful checkbox</td>
          </tr>
          <tr>
            <td>defaultChecked</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Whether the stateful checkbox should initially be rendered as checked (true) or unchecked (false)</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function ((boolean) => void)</td>
            <td>No</td>
            <td>A callback for when the stateful checkbox is toggled</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>No</td>
            <td>
              Whether the stateful checkbox should be rendered as disabled or not.
              When disabled, the onChange callback will not fire.  Defaults to false
            </td>
          </tr>
          <tr>
            <td>children</td>
            <td>Virtual DOM</td>
            <td>No</td>
            <td>
              VDOM rendered as a label. Should be
              {' '}
              <a href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content"
                 className="nx-text-link">
                phrasing content
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile>
      <NxStatefulCheckboxExample />
      <CodeExample content={exampleCode} />
    </GalleryExampleTile>
  </>;

export default NxStatefulCheckboxPage;
