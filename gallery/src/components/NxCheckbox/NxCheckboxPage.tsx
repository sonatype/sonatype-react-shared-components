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
            <td className="nx-cell">checkboxId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">An id to identify the checkbox</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isChecked</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">Whether the checkbox should be rendered as checked or unchecked</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function (() => void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A callback for when the checkbox is toggled</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the checkbox should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">Virtual DOM</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
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
