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
      <p className="nx-p">The base building block of our pages.</p>
      <p className="nx-p">
        There are three default classes that can be used within an <code className="nx-code">.nx-tile</code>.
        It can also be paired with <code className="nx-code">.nx-alert</code> to create tiles with alert coloring.
      </p>
      <p className="nx-p">They're all showcased in the table below:</p>
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
            <td className="nx-cell"><code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">The parent tile class.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile__actions</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">Used for actions (buttons or dropdowns) that appear in a tile header.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile-header</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">Used for tile titles, it has title and optional sub-title elements.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile-header__title</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile-header</code></td>
            <td className="nx-cell">
              Used for the main title inside an <code className="nx-code">.nx-tile-header</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile-header__subtitle</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile-header</code></td>
            <td className="nx-cell">
              Used for the subtitle inside an <code className="nx-code">.nx-tile-header</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile-header--hrule</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-tile-header</code></td>
            <td className="nx-cell">Used for displaying an horizontal rule between the header and the content.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-tile-content</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">Used for the tile content.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-footer</code></td>
            <td className="nx-cell">Nested inside <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">
              Used for footer contents (buttons for example). This class is not
              called <code className="nx-code">nx-tile-footer</code> because it is used across a number of different
              containers (e.g. forms and modals in addition to tiles) which have identical footer styles.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-alert</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">
              Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-alert--info</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">
              Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-alert--error</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-tile</code></td>
            <td className="nx-cell">
              Class for providing alert colorings to <code className="nx-code">.nx-tile</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <NxTilesExamples />
  </>;

export default NxTilePage;
