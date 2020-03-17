/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import NxRadioExample from './NxRadioExample';
import NxRadioInlineExample from './NxRadioInlineExample';
import NxRadioNowrapExample from './NxRadioNowrapExample';
import CodeExample from '../../CodeExample';

const exampleCode = require('!!raw-loader!./NxRadioExample').default;
const inlineExampleCode = require('!!raw-loader!./NxRadioInlineExample').default;
const nowrapExampleCode = require('!!raw-loader!./NxRadioNowrapExample').default;

const NxRadioPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Custom Radio input.</p>
      <p>Child VDOM will be used as a label following the radio button itself.</p>
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
            <td>name</td>
            <td>string</td>
            <td>Yes</td>
            <td>The name of the radio group</td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>Yes</td>
            <td>The value attribute for radio input</td>
          </tr>
          <tr>
            <td>isChecked</td>
            <td>boolean</td>
            <td>Yes</td>
            <td>Whether the radio button should be rendered as on or off</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function ((currentValue: string) => void)</td>
            <td>No</td>
            <td>A callback for when the radio is selected. The value is passed as an argument.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>No</td>
            <td>
              Whether the radio should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
            </td>
          </tr>
          <tr>
            <td>children</td>
            <td>Virtual DOM</td>
            <td>No</td>
            <td>
              Additional VDOM that will be rendered as label. Should be
              {' '}
              <a href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content"
                 className="nx-text-link">
                phrasing content
              </a>
            </td>
          </tr>
          <tr>
            <td>radioId</td>
            <td>string</td>
            <td>No</td>
            <td>An id attribute to be added to the radio input</td>
          </tr>
          <tr>
            <td>Label HTML Attributes</td>
            <td>
              <a target="_blank"
                 rel="noopener"
                 href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                HTML Attributes
              </a>
            </td>
            <td>No</td>
            <td>NxRadio supports any html attribute that's normally supported by Label element</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile>
      <NxRadioExample />
      <CodeExample content={exampleCode} />
    </GalleryExampleTile>

    <GalleryTile title="Inline Radio">
      <NxRadioInlineExample />
      <CodeExample content={inlineExampleCode} />
    </GalleryTile>

    <GalleryTile title="Radio label does not wrap">
      <NxRadioNowrapExample />
      <CodeExample content={nowrapExampleCode} />
    </GalleryTile>
  </>;

export default NxRadioPage;
