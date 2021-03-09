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
        There are three default classes that can be used within an <NxCode>.nx-tile</NxCode>.
        It can also be paired with <NxCode>.nx-alert</NxCode> to create tiles with alert coloring.
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
            <td className="nx-cell"><NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">The parent tile class.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile__actions</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">Used for actions (buttons or dropdowns) that appear in a tile header.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile-header</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">Used for tile titles, it has title and optional sub-title elements.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile-header__title</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile-header</NxCode></td>
            <td className="nx-cell">
              Used for the main title inside an <NxCode>.nx-tile-header</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile-header__subtitle</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile-header</NxCode></td>
            <td className="nx-cell">
              Used for the subtitle inside an <NxCode>.nx-tile-header</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile-content</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">
              Used for the tile content. It is possible to have multiple of these in a row, particularly when one
              is an accordion container (see below).
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-tile-content--accordion-container</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-tile-content</NxCode></td>
            <td className="nx-cell">
              Creates a container for displaying one or more <NxCode>NxAccordion</NxCode>s
              within an <NxCode>.nx-tile</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-footer</NxCode></td>
            <td className="nx-cell">Nested inside <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">
              Used for footer contents (buttons for example). This class is not
              called <NxCode>nx-tile-footer</NxCode> because it is used across a number of different
              containers (e.g. forms and modals in addition to tiles) which have identical footer styles.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-alert</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-alert--info</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-alert--error</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-tile</NxCode></td>
            <td className="nx-cell">
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <NxTilesExamples />
  </>;

export default NxTilePage;
