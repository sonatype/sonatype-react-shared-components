/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxGridExamples from './NxGridExamples';

const NxGridPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        Described below are some basic grid patterns. These patterns rely on Flexbox to form simple grid patterns.
        CSS Grid was examined but the lack of IE11 support forced us to pass it up.
      </p>
      <p>
        Grids consist of rows and cells. There are optional title containers, as well as a keylines that can be used
        for styling and spacing.
      </p>
      <p>
        When you are creating a custom column with a specific width you should use the provided
        <code className="nx-code">.nx-grid-col-width</code> mixin. The only required parameter is the width and unit.
        For example: <code className="nx-code">@include nx-grid-col-width(200px);</code> will generate
      </p>
      <pre className="nx-code">
        flex: 0 0 200px;<br/>
        max-width: 200px;
      </pre>
      <p>The <code className="nx-code">max-width</code> attribute is required by IE11.</p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-row</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Basic row class. These can be nested inside other rows or within grid cells to allow
              further subdivision of elements.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-col</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              A simple container, always placed inside <code className="nx-code">.nx-grid-row</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-col--##</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-grid-col</code></td>
            <td className="nx-cell">
              Used when you want to give a column cell a specific width. Modifiers are provided for
              25%, 50%, 75%, 33%, and 66% widths.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Container for title text and icons.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header__title</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to any <code className="nx-code">h#</code> element used as a header for a grid cell. Note that
              it's expected that the corresponding <code className="nx-code">.nx-h#</code> class will also be applied.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header__icon</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Applied to icons in grid headers.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header__hrule</code></td>
            <td className="nx-cell">&lt;hr&gt;</td>
            <td className="nx-cell">Horizontal keyline used below grid cell headers.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-h-keyline</code></td>
            <td className="nx-cell">&lt;hr&gt;</td>
            <td className="nx-cell">Horizontal keyline used between grid cells.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-h-keyline--white</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-grid-h-keyline</code></td>
            <td className="nx-cell">Used when you don't want a visual keyline but need one for spacing.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-col--noborder</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-grid-col</code></td>
            <td className="nx-cell">
              <code className="nx-code">.nx-grid-col</code> has a left border by default, this removes it.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>
    <NxGridExamples/>
  </>;

export default NxGridPage;
