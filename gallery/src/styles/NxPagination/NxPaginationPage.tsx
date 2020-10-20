/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPaginationExample from './NxPaginationExample';

const nxPaginationCode = require('!!raw-loader!./NxPaginationExample').default;

const NxPaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Pagination controls are used when there is a great deal of content that needs to be sorted into separate
        "pages" rather than scrolled. The controls offer multiple methods of navigating the paged content, forward and
        backward controls, specific page controls, and an ellipsis control.
      </p>
      <p className="nx-p">
        The pagination controls are contained within an <code className="nx-code">.nx-btn-bar</code> with a modifier
        class applied. The specific buttons shown will be dependent upon the content (number of pages) and design.
      </p>
      <p className="nx-p">
        Note that the left and right caret buttons are standard <code className="nx-code">.nx-btn</code> with
        {' '}<code className="nx-code">variant="tertiary"</code> applied. The number and ellipsis buttons (if
        necessary) are <code className="nx-code">.nx-btn</code> with a modifier class - documented below.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-btn-bar--pagination</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">nx-btn-bar</code></td>
            <td className="nx-cell">
              This is the standard container for the pagination controls.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-btn--pagination</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-btn</code></td>
            <td className="nx-cell">
              Modifer class for the number and ellipsis buttons in the pagination controls.
            </td>
          </tr>
        </tbody>
      </table>

    </GalleryDescriptionTile>

    <GalleryExampleTile title="Error alert"
                        liveExample={NxPaginationExample}
                        codeExamples={nxPaginationCode}>
      HTML/SCSS for pagination controls.
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
