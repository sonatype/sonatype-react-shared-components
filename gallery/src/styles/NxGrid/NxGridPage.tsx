/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxInfoAlert, NxCode, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import NxGridExamples from './NxGridExamples';

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
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Convenience Component</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-row</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.Row</NxCode></NxTable.Cell>
            <NxTable.Cell>Top-Level</NxTable.Cell>
            <NxTable.Cell>
              Basic row class. These can be nested inside other rows or within grid cells to allow
              further subdivision of elements.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-col</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.Column</NxCode></NxTable.Cell>
            <NxTable.Cell>Element (<NxCode>&lt;div&gt;</NxCode> or <NxCode>&lt;section&gt;</NxCode>)</NxTable.Cell>
            <NxTable.Cell>
              A simple container, always placed inside <NxCode>.nx-grid-row</NxCode>.
              If this cell has a single header, it should be a <NxCode>&lt;section&gt;</NxCode>. Otherwise, it may
              be a <NxCode>&lt;div&gt;</NxCode> or a <NxCode>&lt;section&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-col--##</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Modifier of <NxCode>.nx-grid-col</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used when you want to give a column cell a specific width. Modifiers are provided for
              25%, 50%, 75%, 33%, and 66% widths.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-header</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.Header</NxCode></NxTable.Cell>
            <NxTable.Cell>Element (<NxCode>&lt;header&gt;</NxCode>)</NxTable.Cell>
            <NxTable.Cell>Container for title text and icons.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-header__title</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.Title</NxCode></NxTable.Cell>
            <NxTable.Cell>Element (<NxCode>&lt;h3&gt;</NxCode>)</NxTable.Cell>
            <NxTable.Cell>
              Applied to any <NxCode>h3</NxCode> element used as a header for a grid cell. Note that
              it's expected that the corresponding <NxCode>.nx-h3</NxCode> class will also be applied.
              Headers of higher rank are no longer explicitly supported.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-h-keyline</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.HorizontalKeyline</NxCode></NxTable.Cell>
            <NxTable.Cell>Element (<NxCode>&lt;hr&gt;</NxCode>)</NxTable.Cell>
            <NxTable.Cell>
              Horizontal keyline used between grid rows. Keylines should be placed between each row within the grid,
              but generally not before the first row or after the last. There may be cases however where it is
              desirable to place them before the first row or after the last, for instance when the grid cells are
              scroll containers.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-grid-col__section</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGrid.ColumnSection</NxCode></NxTable.Cell>
            <NxTable.Cell>Element within <NxCode>.nx-grid-col</NxCode> (<NxCode>&lt;section&gt;</NxCode>)</NxTable.Cell>
            <NxTable.Cell>
              When a single cell contains multiple groups of headers and content, each such group should be wrapped
              in a <NxCode>&lt;section&gt;</NxCode> with this class. The <NxCode>.nx-grid-col</NxCode> itself
              may be a <NxCode>&lt;div&gt;</NxCode> in this case.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>
    <NxGridExamples/>
  </>;

export default NxGridPage;
