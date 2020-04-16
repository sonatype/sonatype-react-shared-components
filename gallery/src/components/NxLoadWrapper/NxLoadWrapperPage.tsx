/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import NxLoadWrapperErrorExample from './NxLoadWrapperErrorExample';
import NxLoadWrapperErrorRetryExample from './NxLoadWrapperErrorRetryExample';
import NxLoadWrapperLoadingExample from './NxLoadWrapperLoadingExample';
import NxLoadWrapperChildrenExample from './NxLoadWrapperChildrenExample';
import CodeExample from '../../CodeExample';

const childrenSourceCode = require('!!raw-loader!./NxLoadWrapperChildrenExample').default;
const loadingSourceCode = require('!!raw-loader!./NxLoadWrapperLoadingExample').default;
const errorSourceCode = require('!!raw-loader!./NxLoadWrapperErrorExample').default;
const errorRetrySourceCode = require('!!raw-loader!./NxLoadWrapperErrorRetryExample').default;

const NxLoadWrapperPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>A component that will display either a loading spinner, an error message, or the specified child VDOM</p>
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
            <td className="nx-cell">error</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A message that represents an error that occurred.  If defined, will be rendered via NxLoadError
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">loading</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If true, and error is unset, a loading spinner will be rendered via NxLoadingSpinner
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">VDOM</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">VDOM to render if loading is false and error is not set</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">retryHandler</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If this is defined, a Retry button will be rendered in the NxLoadError which executes this function
              when clicked
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryTile title="Renders children when not loading or in error">
      <NxLoadWrapperChildrenExample />
      <CodeExample content={childrenSourceCode} />
    </GalleryTile>
    <GalleryTile title="Loading">
      <NxLoadWrapperLoadingExample />
      <CodeExample content={loadingSourceCode} />
    </GalleryTile>
    <GalleryTile title="Error">
      <NxLoadWrapperErrorExample />
      <CodeExample content={errorSourceCode} />
    </GalleryTile>
    <GalleryTile title="Error with retry button">
      <NxLoadWrapperErrorRetryExample />
      <CodeExample content={errorRetrySourceCode} />
    </GalleryTile>
  </>;

export default NxLoadWrapperPage;
