/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxRadioExample from './NxRadioExample';
import NxRadioInlineExample from './NxRadioInlineExample';
import NxRadioNowrapExample from './NxRadioNowrapExample';

const exampleCode = require('!!raw-loader!./NxRadioExample').default;
const inlineExampleCode = require('!!raw-loader!./NxRadioInlineExample').default;
const nowrapExampleCode = require('!!raw-loader!./NxRadioNowrapExample').default;

const NxRadioPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Custom Radio input.</p>
      <p className="nx-p">Child VDOM will be used as a label following the radio button itself.</p>
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
            <td className="nx-cell">name</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The name of the radio group</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">value</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The value attribute for radio input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isChecked</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">Whether the radio button should be rendered as on or off</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function ((currentValue: string) => void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A callback for when the radio is selected. The value is passed as an argument.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the radio should be rendered as disabled or not.  When disabled, the onChange callback will
              not fire.  Defaults to false
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">Virtual DOM</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Additional VDOM that will be rendered as label. Should be
              {' '}
              <a href="https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content"
                 className="nx-text-link">
                phrasing content
              </a>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">radioId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">An id attribute to be added to the radio input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Label HTML Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                HTML Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">NxRadio supports any html attribute that's normally supported by Label element</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={exampleCode}
                        liveExample={NxRadioExample}>
      This example shows a series of radios in a typical vertical layout with
      different label content. Note that one of the radios is disabled. Another has no label
      at all but is adjacent to other content, demonstrating its lack of inherent margin.
      These radios together operate as a single form control: only one value within the group
      can be selected at a time.
    </GalleryExampleTile>

    <GalleryExampleTile title="Inline Radio"
                        liveExample={NxRadioInlineExample}
                        codeExamples={inlineExampleCode}>
      This examples shows a series of radios laid out inline amongst other inline text.
    </GalleryExampleTile>

    <GalleryExampleTile title="Radio label does not wrap"
                        liveExample={NxRadioNowrapExample}
                        codeExamples={nowrapExampleCode}>
      This example includes a container around the radio buttons. This container is deliberately narrow and has a
      red border. This makes it clear that the labels on radio buttons do not wrap.
    </GalleryExampleTile>
  </>;

export default NxRadioPage;
