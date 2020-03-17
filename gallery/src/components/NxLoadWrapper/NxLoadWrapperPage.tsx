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
            <td>error</td>
            <td>string</td>
            <td>No</td>
            <td>
              A message that represents an error that occurred.  If defined, will be rendered via NxLoadError
            </td>
          </tr>
          <tr>
            <td>loading</td>
            <td>boolean</td>
            <td>No</td>
            <td>If true, and error is unset, a loading spinner will be rendered via NxLoadingSpinner</td>
          </tr>
          <tr>
            <td>children</td>
            <td>VDOM</td>
            <td>Yes</td>
            <td>VDOM to render if loading is false and error is not set</td>
          </tr>
          <tr>
            <td>retryHandler</td>
            <td>Function</td>
            <td>No</td>
            <td>
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
