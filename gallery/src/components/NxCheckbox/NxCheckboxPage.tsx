/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxCheckboxExample from './NxCheckboxExample';
import NxCheckboxInlineExample from './NxCheckboxInlineExample';
import NxCheckboxNowrapExample from './NxCheckboxNowrapExample';
import CodeExample from '../../CodeExample';

const exampleCode = require('!!raw-loader!./NxCheckboxExample').default;
const inlineExampleCode = require('!!raw-loader!./NxCheckboxInlineExample').default;
const nowrapExampleCode = require('!!raw-loader!./NxCheckboxNowrapExample').default;

const NxCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Custom checkbox input.</p>
      <p>Child VDOM will be used as a label following the checkbox button itself.</p>
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
            <td>An id to identify the checkbox</td>
          </tr>
          <tr>
            <td>isChecked</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Whether the checkbox should be rendered as checked or unchecked</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function (() => void)</td>
            <td>No</td>
            <td>A callback for when the checkbox is toggled</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>No</td>
            <td>
              Whether the checkbox should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
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
      <NxCheckboxExample />
      <CodeExample content={exampleCode} />
    </GalleryExampleTile>

    <GalleryTile title='Inline Checkbox'>
      <NxCheckboxInlineExample />
      <CodeExample content={inlineExampleCode} />
    </GalleryTile>

    <GalleryTile title='Checkbox label should not wrap'>
      <NxCheckboxNowrapExample />
      <CodeExample content={nowrapExampleCode} />
    </GalleryTile>
  </>;

export default NxCheckboxPage;
