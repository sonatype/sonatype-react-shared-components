/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxTable, NxP, NxCode, NxTile, NxH3, NxH4, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import NxTilesExamples from './NxTilesExamples';

const NxTilePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        The base building block of our pages. <NxCode>nx-tile</NxCode> creates a white rectangular container which
        spans the full width of its own container (in contrast to <NxCode>nx-card</NxCode>). Tiles usually have
        headers, and are often analogous to HTML <NxCode>section</NxCode>s.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Classes</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>Top-Level <NxCode>&lt;div&gt;</NxCode> or <NxCode>&lt;section&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The parent tile class. Note that the convenience component will construct
                a <NxCode>&lt;section&gt;</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-header</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.Header</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Used for tile titles, it has title and optional sub-title elements.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-header__headings</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.Headings</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile-header</NxCode></NxTable.Cell>
              <NxTable.Cell>
                If there is a sub-title then the <NxCode>h2.nx-tile-header__title</NxCode> &amp;
                {' '}<NxCode>h3.nx-tile-header__subtitle</NxCode> should both be wrapped in a containing
                {' '}<NxCode>&lt;hgroup&gt;</NxCode> with this class. If there
                is only an <NxCode>.nx-tile-header__title</NxCode> then this element and its class are
                optional.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-header__title</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.HeaderTitle</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile-header</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  Used for the main title inside an <NxCode>.nx-tile-header</NxCode>.
                  In the event there's a <NxCode>.nx-tile-header__subtitle</NxCode> this should be
                  wrapped within an <NxCode>.nx-tile-header__headings</NxCode> (see above).
                </NxP>
                <NxInfoAlert>
                  If the <NxCode>NxTile.HeaderTitle</NxCode> convenience component is used and{' '}
                  the title text is too long to be fully seen, it will be truncated and{' '}
                  a tooltip will be visible when hovering over the title to read the full title.
                </NxInfoAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-header__subtitle</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.HeaderSubtitle</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile-header__headings</NxCode></NxTable.Cell>
              <NxTable.Cell>
                If there is sub-title text it should be wrapped in a containing
                {' '}<NxCode>&lt;H3&gt;</NxCode> with this class. It should be used inside of
                an <NxCode>.nx-tile-header__headings</NxCode> (see above).
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile__actions</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.HeaderActions</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile-header</NxCode></NxTable.Cell>
              <NxTable.Cell>Used for actions (buttons or dropdowns) that appear in a tile header.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-content</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.Content</NxCode></NxTable.Cell>
              <NxTable.Cell>Nested inside <NxCode>.nx-tile</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Used for the tile content. It is possible to have multiple of these sequentially, particularly when
                one is an accordion container (see below).
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-content--<br/>accordion-container</NxCode></NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>Modifier of <NxCode>.nx-tile-content</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Creates a container for displaying one or more <NxCode>NxAccordion</NxCode>s
                within an <NxCode>.nx-tile</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-subsection</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.Subsection</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;section&gt;</NxCode> within <NxCode>.nx-tile-content</NxCode> or
                within another <NxCode>.nx-tile-subsection</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                Tile contents may contain subsections in three cases:
                <NxList className="nx-list--numbered">
                  <NxList.Item>
                    <NxList.Text>
                      When the tile itself has a header (an <NxCode>h2</NxCode>), the{' '}
                      <NxCode>.nx-tile-content</NxCode> may contain <NxCode>.nx-tile-subsection</NxCode>s as
                      immediate children. These subsections should have <NxCode>h3</NxCode> level headers.
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      When the tile has no single <NxCode>h2</NxCode>-level header, the tile contents may be made
                      up of <NxCode>.nx-tile-subsection</NxCode>s that each have an <NxCode>h2</NxCode> level header.
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      When a tile is using <NxCode>.nx-tile-subsection</NxCode>s for multiple <NxCode>h2</NxCode>
                      -level sections, each of those sections may have further <NxCode>h3</NxCode>-level subsections
                      also implemented using <NxCode>.nx-tile-subsection</NxCode>
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-tile-subsection__header</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxTile.SubsectionHeader</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;header&gt;</NxCode> within <NxCode>.nx-tile__subsection</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                This element contains the header of a tile subsection. Its contents should be
                an <NxCode>&lt;h2&gt;</NxCode> or <NxCode>&lt;h3&gt;</NxCode> as described in
                the <NxCode>.nx-tile-subsection</NxCode> documentation above.
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
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Headers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          There are a number of header elements which come into play when using <NxCode>.nx-tile</NxCode>.
          The tile itself may have a header which pertains to the entire tile – this should be
          implemented using the <NxCode>.nx-tile-header</NxCode> family of classes. Alternatively, a single tile
          might represent multiple equal-level sections which each have their own header. In this
          scenario, <NxCode>.nx-tile-header</NxCode> should be omitted and the separate sections should be implemented
          as <NxCode>.nx-tile-subsection</NxCode>s within the <NxCode>.nx-tile-content</NxCode>,
          using <NxCode>.nx-h2</NxCode> headers.  In some cases a tile may not have headers at all, particularly
          when that tile is the sole content on the page and falls under the <NxCode>.nx-page-title</NxCode>.
        </NxP>
        <section>
          <NxH4>Subtitles and Subheaders</NxH4>
          <NxP>
            <NxCode>.nx-tile</NxCode> supports both a subtitle to its main header and also separate subheaders, both
            consisting of <NxCode>&lt;h3&gt;</NxCode> elements with their typical RSC styling. The subtitle
            is included within the <NxCode>.nx-tile-header</NxCode> using the appropriate classes as documented above.
            Subheaders are included within subsections (<NxCode>.nx-tile-subsection</NxCode>) also using
            classes documented above.
          </NxP>
        </section>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTilesExamples />
  </>;

export default NxTilePage;
