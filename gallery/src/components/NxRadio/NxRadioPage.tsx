/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTextLink } from '@sonatype/react-shared-components';

import NxRadioExample from './NxRadioExample';
import NxRadioNowrapExample from './NxRadioNowrapExample';
import NxRadioDisabledExample from './NxRadioDisabledExample';

const exampleCode = require('./NxRadioExample?raw');
const nowrapExampleCode = require('./NxRadioNowrapExample?raw');
const disabledExampleCode = require('./NxRadioDisabledExample?raw');

const NxRadioPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Custom Radio input.</p>
      <p className="nx-p">Child VDOM will be used as a label following the radio button itself.</p>
      <p className="nx-p">
        NxRadio can receive any attribute that would be valid on an
        HTML <code className="nx-code">&lt;label&gt;</code> as well as the following props:
      </p>
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
            <td className="nx-cell">Function ((currentValue: string) =&gt; void)</td>
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
            <td className="nx-cell">overflowTooltip</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the radio label content should be wrapped in
              an <code className="nx-code">NxOverflowTooltip</code>. Defaults to true. Set this to false when
              the <code className="nx-code">NxRadio</code> is being wrapped in a tooltip externally, to prevent
              multiple overlapping tooltips from appearing.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">HTML <code className="nx-code">&lt;label&gt;</code> Attributes</td>
            <td className="nx-cell">
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/label">
                HTML Label Attributes
              </NxTextLink>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              NxRadio supports any html attribute that's normally supported by
              {' '}<code className="nx-code">&lt;label&gt;</code> elements.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        id="nx-radio-example"
                        codeExamples={exampleCode}
                        liveExample={NxRadioExample}>
      This example shows a series of radios in a typical vertical layout with
      different label content.
      These radios together operate as a single form control: only one value within the group
      can be selected at a time.
    </GalleryExampleTile>

    <GalleryExampleTile title="Radio Disabled Example"
                        id="nx-radio-disabled-example"
                        codeExamples={disabledExampleCode}
                        liveExample={NxRadioDisabledExample}>
      This example shows radios that are disabled.
      Disabled radios can either be checked or unchecked.
    </GalleryExampleTile>

    <GalleryExampleTile title="Radio label does not wrap"
                        liveExample={NxRadioNowrapExample}
                        codeExamples={nowrapExampleCode}>
      This example includes a container around the radio buttons. This container is deliberately narrow and has a
      red border. This makes it clear that the labels on radio buttons do not wrap, and truncates with an ellipsis.
    </GalleryExampleTile>
  </>;

export default NxRadioPage;
