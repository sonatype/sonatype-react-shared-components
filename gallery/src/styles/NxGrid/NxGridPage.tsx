/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxGridExamples from './NxGridExamples';
import { NxP, NxInfoAlert, NxCode } from '@sonatype/react-shared-components';

const NxGridPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        These styles facilitate the creation of adjacent content areas separated by visible borders. Multiple
        rows are supported and are also typically separated by a visible border. The cells in each row do not
        necessarily align with other rows, though they can be made to by sizing them in the same way.
      </NxP>
      <NxInfoAlert>
        The <em>only</em> current purpose of <NxCode>nx-grid</NxCode> is to facilitate the specific border and padding
        styling shown in these examples, and not to create more general adjacent-content layouts. More general needs for
        content that lays out in an adjacent or grid-like manner should be handled using custom CSS, typically via
        CSS flexbox and CSS grid layouts. These CSS layouts are more powerful and flexible than what nx-grid provides.
      </NxInfoAlert>
      <NxP>
        For creating a class for a custom-sized grid cell with a static width,
        the <NxCode>nx-grid-col-width</NxCode> mixin is provided which sets the necessary width and flexbox properties.
      </NxP>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Convenience Component</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-row</code></td>
            <td className="nx-cell"><code className="nx-code">NxGrid.Row</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Basic row class. These can be nested inside other rows or within grid cells to allow
              further subdivision of elements.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-col</code></td>
            <td className="nx-cell"><code className="nx-code">NxGrid.Column</code></td>
            <td className="nx-cell">Element (<NxCode>&lt;div&gt;</NxCode> or <NxCode>&lt;section&gt;</NxCode>)</td>
            <td className="nx-cell">
              A simple container, always placed inside <code className="nx-code">.nx-grid-row</code>.
              If this cell has a header, it should be a <NxCode>&lt;section&gt;</NxCode>. Otherwise, it should
              be a <NxCode>&lt;div&gt;</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-col--##</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-grid-col</code></td>
            <td className="nx-cell">
              Used when you want to give a column cell a specific width. Modifiers are provided for
              25%, 50%, 75%, 33%, and 66% widths.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header</code></td>
            <td className="nx-cell"><code className="nx-code">NxGrid.Header</code></td>
            <td className="nx-cell">Element (<NxCode>&lt;header&gt;</NxCode>)</td>
            <td className="nx-cell">Container for title text and icons.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-header__title</code></td>
            <td className="nx-cell"><code className="nx-code">NxGrid.Title</code></td>
            <td className="nx-cell">Element (<NxCode>&lt;h3&gt;</NxCode>)</td>
            <td className="nx-cell">
              Applied to any <code className="nx-code">h3</code> element used as a header for a grid cell. Note that
              it's expected that the corresponding <code className="nx-code">.nx-h3</code> class will also be applied.
              Headers of higher rank are no longer explicitly supported.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-grid-h-keyline</code></td>
            <td className="nx-cell"><code className="nx-code">NxGrid.HorizontalKeyline</code></td>
            <td className="nx-cell">Element (<NxCode>&lt;hr&gt;</NxCode>)</td>
            <td className="nx-cell">
              Horizontal keyline used between grid rows. Keylines should be placed between each row within the grid,
              but generally not before the first row or after the last. There may be cases however where it is
              desirable to place them before the first row or after the last, for instance when the grid cells are
              scroll containers.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>
    <NxGridExamples/>
  </>;

export default NxGridPage;
