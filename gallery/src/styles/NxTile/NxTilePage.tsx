/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxTilesExamples from './NxTilesExamples';

const NxTilePage = () =>
  <>
    <GalleryDescriptionTile>
      <p>The base building block of our pages.</p>
      <p>
        There are three default classes that can be used within an <code className="nx-code">.nx-tile</code>.
        It can also be paired with <code className="nx-code">.nx-alert</code> to create tiles with alert coloring.
      </p>
      <p>They're all showcased in the table below:</p>
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
            <td><code className="nx-code">.nx-tile</code></td>
            <td>Top-Level</td>
            <td>The parent tile class.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile__actions</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile</code></td>
            <td>Used for actions (buttons or dropdowns) that appear in a tile header.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-header</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile</code></td>
            <td>Used for tile titles, it has title and optional sub-title elements.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-header__title</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile-header</code></td>
            <td>Used for the main title inside an <code className="nx-code">.nx-tile-header</code>.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-header__subtitle</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile-header</code></td>
            <td>Used for the subtitle inside an <code className="nx-code">.nx-tile-header</code>.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-header--hrule</code></td>
            <td>Modifier of <code className="nx-code">.nx-tile-header</code></td>
            <td>Used for displaying an horizontal rule between the header and the content.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-content</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile</code></td>
            <td>Used for the tile content.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-tile-footer</code></td>
            <td>Nested inside <code className="nx-code">.nx-tile</code></td>
            <td>Used for footer contents (buttons for example)</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-alert</code></td>
            <td>Modifier of <code className="nx-code">.nx-tile</code></td>
            <td>Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-alert--info</code></td>
            <td>Modifier of <code className="nx-code">.nx-tile</code></td>
            <td>Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-alert--error</code></td>
            <td>Modifier of <code className="nx-code">.nx-tile</code></td>
            <td>Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <NxTilesExamples />
  </>;

export default NxTilePage;
