/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxIndeterminatePaginationExample from './NxIndeterminatePaginationExample';

const nxIndeterminatePaginationCode = require('!!raw-loader!./NxIndeterminatePaginationExample').default;

const NxIndeterminatePaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A pagination control for use in cases where the current page number and total number of pages is indeterminate.
        This component simply allows the user to navigate to the next and previous pages.
      </p>
      <p className="nx-p">
        In addition to all native attributes allowed on a <code className="nx-code">div</code>, the following props
        are supported.
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
            <td className="nx-cell"><code className="nx-code">onPrevPageSelect</code></td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              The callback handler for when the previous page button is clicked. The mouse event is passed as
              an argument.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">onNextPageSelect</code></td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              The callback handler for when the next page button is clicked. The mouse event is passed as
              an argument.
            </td>
          </tr>
        </tbody>
      </table>

    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default Example"
                        id="nx-indeterminate-pagination-example"
                        liveExample={NxIndeterminatePaginationExample}
                        codeExamples={nxIndeterminatePaginationCode}>
      An <code className="nx-code">NxIndeterminatePagination</code> component.
    </GalleryExampleTile>
  </>;

export default NxIndeterminatePaginationPage;
