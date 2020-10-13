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

const nxFilterInputFullExampleCode = require('!!raw-loader!./NxFilterInputFullExample').default,
nxFilterInputDisabledExampleCode = require('!!raw-loader!./NxFilterInputDisabledExample').default,
nxFilterInputDataListExampleCode = require('!!raw-loader!./NxFilterInputDataListExample').default;

const NxFilterInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        An input to be used for filtering purposes
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
            <td className="nx-cell">Value to render in the input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">placeholder</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Placeholder to render in the input</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">className</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Classes to apply to the element</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">inputId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Id to assign to the input part of this component</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Function that will be called whenever a change occurs; it will receive the
              updated value (<code className="nx-code">string</code>) of the input.
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
      A simple <code className="nx-code">NxFilterInput</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Disabled Example"
                        id="nx-filter-input-disabled-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDisabledExample}
                        codeExamples={nxFilterInputDisabledExampleCode}>
      A disabled <code className="nx-code">NxFilterInput</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput DataList Example"
                        id="nx-filter-input-datalist-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDataListExample}
                        codeExamples={nxFilterInputDataListExampleCode}>
      A disabled <code className="nx-code">NxFilterInput</code>.
    </GalleryExampleTile>
  </>;

export default NxFilterInputPage;
