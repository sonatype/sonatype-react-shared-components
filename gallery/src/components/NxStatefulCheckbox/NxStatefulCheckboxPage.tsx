/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulCheckboxExample from './NxStatefulCheckboxExample';

const exampleCode = require('!!raw-loader!./NxStatefulCheckboxExample').default;

const NxStatefulCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Custom stateful checkbox input.</p>
      <p>Child VDOM will be used as a label following the stateful checkbox button itself.</p>
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
            <td className="nx-cell">An id to identify the stateful checkbox</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">defaultChecked</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Whether the stateful checkbox should initially be rendered as checked (true) or unchecked (false)
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function ((boolean) => void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A callback for when the stateful checkbox is toggled</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the stateful checkbox should be rendered as disabled or not.
              When disabled, the onChange callback will not fire.  Defaults to false
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

    <GalleryExampleTile title="Example" codeExamples={exampleCode}>
      <NxStatefulCheckboxExample />
    </GalleryExampleTile>
  </>;

export default NxStatefulCheckboxPage;
