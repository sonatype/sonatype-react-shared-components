/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import NxPageTitleExample from './NxPageTitleExample';

const nxPageTitleCode = require('!!raw-loader!./NxPageTitleExample').default;

const NxPageTitlePage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        nx-page-title is used at the top of a page, it always has a title, and can also have an icon
        and descriptive text.
      </p>
      <p>
        Note: <code className="nx-code">.nx-page-title</code> replaces
        <code className="nx-code">.nx-tile--top-tile</code> and <code className="nx-code">.nx-tile--title-only</code>.
      </p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="nx-code">.nx-page-title</code></td>
            <td>Top level</td>
            <td>
              This is the basic wrapper class. The title text is almost always contained in an
              <code className="nx-code">&lt;h1&gt;</code>.
            </td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-page-title__page-icon</code></td>
            <td>Element</td>
            <td>
              Class for an icon that appears to the left of the page title.
            </td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-page-title__description</code></td>
            <td>Element</td>
            <td>
              If there is page level descriptive text it should be wrapped in a containing
              <code className="nx-code">&lt;div&gt;</code> with this class.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <NxPageTitleExample/>
    <CodeExample content={nxPageTitleCode}/>
  </>;

export default NxPageTitlePage;
