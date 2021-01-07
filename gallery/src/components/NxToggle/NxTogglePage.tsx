/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxToggleExample from './NxToggleExample';

const exampleCode = require('!!raw-loader!./NxToggleExample').default;

const NxTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Custom toggle control, which uses a hidden checkbox input for its on/checked &amp; off/unselected states.
      </p>
      <p className="nx-p">Child VDOM will be used as a label preceeding the toggle control.</p>
      <p className="nx-p">Props:</p>
      <table className="nx-table">
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
            <td className="nx-cell">inputId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">An id to identify the toggle</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isChecked</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">Whether the toggle should be rendered as on/checked or off/unchecked</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function (() =&gt; void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A callback for when the toggle control is toggled</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the toggle should be rendered as disabled or not. When disabled, the onChange callback will
              not fire. Defaults to false.
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

    <GalleryExampleTile title="General NxToggle Example"
                        id="nx-toggle-example"
                        codeExamples={exampleCode}
                        liveExample={NxToggleExample}>
      This example shows a series of toggle controls in a typical vertical layout with
      different label content. Note that one of the toggle controls is disabled.
    </GalleryExampleTile>
  </>;

export default NxTogglePage;
