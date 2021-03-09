/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFilterInputFullExample from './NxFilterInputFullExample';
import NxFilterInputDisabledExample from './NxFilterInputDisabledExample';
import NxFilterInputDataListExample from './NxFilterInputDataListExample';

import './NxFilterInputPage.scss';

const nxFilterInputFullExampleCode = require('./NxFilterInputFullExample?raw'),
    nxFilterInputDisabledExampleCode = require('./NxFilterInputDisabledExample?raw'),
    nxFilterInputDataListExampleCode = require('./NxFilterInputDataListExample?raw');

const NxFilterInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        An input to be used for filtering purposes
      </p>

      <h3>NxFilterInput Props</h3>
      <p className="nx-p">
        <NxCode>NxFilterInput</NxCode> receives a subset of the props that are valid on NxTextInput,
        as described below.
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
            <td className="nx-cell">value</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The value rendered in the text input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function ((string) =&gt; void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A callback for when the user changes the value of the text box (e.g. by typing a letter)
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onKeyPress</td>
            <td className="nx-cell">Function ((string) =&gt; void)</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              <p className="nx-p">
                A callback for when the user presses a key that doesn't necessarily change the input value
                (e.g. by hitting enter)
              </p>
              <p className="nx-p">
                The value given to the callback will be that of the key name, as described in the spec
                for{' '}
                <a target="_blank"
                   rel="noopener"
                   href="https://www.w3.org/TR/uievents-key/#named-key-attribute-values">
                  named keys
                </a>
              </p>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Input HTML Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                HTML Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              NxFilterInput supports any html attribute that's normally supported by HTML Inputs. The only notable
              exceptions are:
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <NxCode>defaultValue</NxCode> which is left out because it creates what's commonly
                  known as{' '}
                  <a target="_blank"
                     rel="noopener"
                     href="https://reactjs.org/docs/uncontrolled-components.html">
                    uncontrolled inputs
                  </a>
                </li>
                <li className="nx-list__item">
                  The attributes specified above, whose types are as defined here and not as specified in the
                  react propTypes.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxFilterInput Example"
                        id="nx-filter-input-simple-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputFullExample}
                        codeExamples={nxFilterInputFullExampleCode}>
      A simple <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Disabled Example"
                        id="nx-filter-input-disabled-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDisabledExample}
                        codeExamples={nxFilterInputDisabledExampleCode}>
      A disabled <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Datalist Example"
                        id="nx-filter-input-datalist-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDataListExample}
                        codeExamples={nxFilterInputDataListExampleCode}>
      An example using a <NxCode>datalist</NxCode> with
      <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxFilterInputPage;
