/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxList, NxH3, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPaginationExample from './NxPaginationExample';
import NxPaginationEmptyExample from './NxPaginationEmptyExample';
import NxPaginationSinglePageExample from './NxPaginationSinglePageExample';

const nxPaginationCode = require('./NxPaginationExample?raw'),
    nxPaginationEmptyCode = require('./NxPaginationEmptyExample?raw'),
    nxPaginationSinglePageCode = require('./NxPaginationSinglePageExample?raw');

const NxPaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Pagination controls are used when there is a great deal of content that needs to be sorted into separate
        "pages" rather than scrolled. The controls offer multiple methods of navigating the paged content, forward and
        backward controls, specific page controls, and an ellipsis control.
        This component renders pagination buttons contained within an <NxCode>.nx-btn-bar</NxCode>.
        It is intended to be used within an <NxCode>.nx-footer</NxCode> element.
        There are essentially five different "types" of buttons which can appear within the pagination control:
      </NxP>
      <NxList>
        <NxList.Item>
          <NxList.Text>Current page button</NxList.Text>
          <NxList.Subtext>
            A button for the current page will always be visible and is distinguished via a dark blue background.
            Clicking this button has no effect - the component's <NxCode>onChange</NxCode> handler
            does not get triggered.
          </NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Next/previous page buttons</NxList.Text>
          <NxList.Subtext>
            Whenever there are pages either above or below the current page, arrow buttons are rendered as
            applicable to navigate the pages sequentially.
          </NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Nearby page buttons</NxList.Text>
          <NxList.Subtext>
            Buttons for up to 4 additional pages that precede or follow the current page will be present as
            applicable. The lowest "nearby page" to get a rendered button always has a page index that is one
            higher than a multiple of 5.
          </NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>First/last page buttons</NxList.Text>
          <NxList.Subtext>
            If not already covered by one of the "nearby page buttons", buttons will always be visible to jump
            straight to the first and last possible pages. These buttons will be labeled with the applicable page
            number.
          </NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Next/previous page group buttons</NxList.Text>
          <NxList.Subtext>
            If there are additional pages before or after those directly accessible via the "nearby page buttons",
            aside from the first and last pages, additional buttons marked by ellipses will appear between the
            "first/last page buttons" and the "nearby page buttons". Clicking these ellipsis buttons navigates
            to the pages immediately outside of the "nearby page buttons" range.
          </NxList.Subtext>
        </NxList.Item>
      </NxList>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>pageCount</NxCode></NxTable.Cell>
            <NxTable.Cell>Non-negative integer</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The total number of pages</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>currentPage</NxCode></NxTable.Cell>
            <NxTable.Cell>Non-negative integer</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The currently selected page. Must be null or undefined if <NxCode>pageCount</NxCode>
              is 0, and must <em>not</em> be null or undefined if <NxCode>pageCount</NxCode> is
              greater than 0. Pages are counted in a zero-based manner - that is, the page numbers displayed in the
              UI are one higher than this property specifies.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>onChange</NxCode></NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Handler function which gets called whenever the user selects a different page. Receives the selected
              page as its first argument (using zero-based counting), and the button's click event as its
              second argument.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxPagination</NxCode> supports any HTML attribute that's normally
              supported by <NxCode>&lt;div&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        For an example of an <NxCode>NxPagination</NxCode> component within/connected to a table,
        see the <NxTextLink className="nx-text-link" href="#/pages/Table"><NxCode>NxTable</NxCode></NxTextLink> page.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Accessibility Considerations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          By default, each <NxCode>NxPagination</NxCode> component renders a <NxCode>{'<nav>'}</NxCode> element
          with <NxCode>aria-label="pagination"</NxCode>. Since <NxCode>{'<nav>'}</NxCode> elements are considered
          landmarks, they should be unique. Therefore, in instances where there are multiple occurrences
          of <NxCode>NxPagination</NxCode> within the same page, it is important to assign a
          unique <NxCode>aria-label</NxCode> to each <NxCode>NxPagination</NxCode> component.
          Since <NxCode>NxPagination</NxCode> fully supports all attributes that are normally supported
          by <NxCode>{'<nav>'}</NxCode>, the <NxCode>aria-label</NxCode> can be simply overridden as
          follows: <NxCode>{'<NxPagination aria-label="uniqueLabel">'}</NxCode>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxPagination Example"
                        id="nx-pagination-example"
                        liveExample={NxPaginationExample}
                        codeExamples={nxPaginationCode}>
      An interactive example showing all possible types of buttons that can appear within
      an <NxCode>NxPagination</NxCode> component. Take special note of what happens when within
      the page 36 - 40 range: Since there are no additional pages between that range and the final page (41), no
      ellipsis button is rendered in between.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxPagination Empty Example"
                        liveExample={NxPaginationEmptyExample}
                        codeExamples={nxPaginationEmptyCode}>
      An example demonstrating that when there are no pages, <NxCode>NxPagination</NxCode> renders
      an empty <NxCode>nx-btn-bar</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxPagination Single Page Example"
                        liveExample={NxPaginationSinglePageExample}
                        codeExamples={nxPaginationSinglePageCode}>
      An example demonstrating that when there is only one page, the only rendered button is the first page button.
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
