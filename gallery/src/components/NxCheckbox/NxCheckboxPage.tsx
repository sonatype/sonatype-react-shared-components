/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxCheckboxExample from './NxCheckboxExample';
import NxCheckboxNowrapExample from './NxCheckboxNowrapExample';

const exampleCode = require('!!raw-loader!./NxCheckboxExample').default;
const nowrapExampleCode = require('!!raw-loader!./NxCheckboxNowrapExample').default;

const NxCheckboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Custom checkbox input.</p>
      <p className="nx-p">Child VDOM will be used as a label following the checkbox button itself.</p>
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
            <td className="nx-cell">overflowTooltip</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the checkbox label content should be wrapped in
              an <code className="nx-code">NxOverflowTooltip</code>. Defaults to true. Set this to false when
              the <code className="nx-code">NxCheckbox</code> is being wrapped in a tooltip externally, to prevent
              multiple overlapping tooltips from appearing.
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

    <GalleryExampleTile title="General Example"
                        id="nx-checkbox-example"
                        codeExamples={exampleCode}
                        liveExample={NxCheckboxExample}>
      This example shows a series of checkboxes in a typical vertical layout with
      different label content. Note that one of the checkboxes is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Checkbox label should not wrap"
                        liveExample={NxCheckboxNowrapExample}
                        codeExamples={nowrapExampleCode}>
      This example includes a container around the checkboxes. This container is deliberately narrow and has a
      red border. This makes it clear that the labels on checkboxes do not wrap, and truncate with an ellipsis.
    </GalleryExampleTile>
  </>;

export default NxCheckboxPage;
