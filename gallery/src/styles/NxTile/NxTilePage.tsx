/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import NxTilesExamples from './NxTilesExamples';

const NxTilePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>The base building block of our pages.</NxP>
      <NxP>
        There are three default classes that can be used within an <NxCode>.nx-tile</NxCode>.
        It can also be paired with <NxCode>.nx-alert</NxCode> to create tiles with alert coloring.
      </NxP>
      <NxP>They're all showcased in the table below:</NxP>
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
            <NxTable.Cell><NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile</NxCode></NxTable.Cell>
            <NxTable.Cell>Top-Level</NxTable.Cell>
            <NxTable.Cell>The parent tile class.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile__actions</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile.HeaderActions</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>Used for actions (buttons or dropdowns) that appear in a tile header.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile-header</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile.Header</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>Used for tile titles, it has title and optional sub-title elements.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile-header__title</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile.HeaderTitle</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile-header</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used for the main title inside an <NxCode>.nx-tile-header</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile-header__subtitle</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile.HeaderSubtitle</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile-header</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used for the subtitle inside an <NxCode>.nx-tile-header</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile-content</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTile.Content</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used for the tile content. It is possible to have multiple of these in a row, particularly when one
              is an accordion container (see below).
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-tile-content--accordion-container</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Modifier of <NxCode>.nx-tile-content</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Creates a container for displaying one or more <NxCode>NxAccordion</NxCode>s
              within an <NxCode>.nx-tile</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-footer</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxFooter</NxCode></NxTable.Cell>
            <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used for footer contents (buttons for example). This class is not
              called <NxCode>nx-tile-footer</NxCode> because it is used across a number of different
              containers (e.g. forms and modals in addition to tiles) which have identical footer styles.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-alert</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Modifier of <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-alert--info</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Modifier of <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-alert--error</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Modifier of <NxCode>.nx-tile</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Class for providing alert colorings to <NxCode>.nx-tile</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <NxTilesExamples />
  </>;

export default NxTilePage;
