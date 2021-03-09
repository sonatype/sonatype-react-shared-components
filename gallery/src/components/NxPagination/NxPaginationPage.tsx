/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

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
      <p className="nx-p">
        Pagination controls are used when there is a great deal of content that needs to be sorted into separate
        "pages" rather than scrolled. The controls offer multiple methods of navigating the paged content, forward and
        backward controls, specific page controls, and an ellipsis control.
        This component renders pagination buttons contained within an <NxCode>.nx-btn-bar</NxCode>.
        It is intended to be used within an <NxCode>.nx-footer</NxCode> element.
        There are essentially five different "types" of buttons which can appear within the pagination control:
      </p>
      <ul className="nx-list">
        <li className="nx-list__item">
          <span className="nx-list__text">Current page button</span>
          <span className="nx-list__subtext">
            A button for the current page will always be visible and is distinguished via a dark blue background.
            Clicking this button has no effect - the component's <NxCode>onChange</NxCode> handler
            does not get triggered.
          </span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Next/previous page buttons</span>
          <span className="nx-list__subtext">
            Whenever there are pages either above or below the current page, arrow buttons are rendered as
            applicable to navigate the pages sequentially.
          </span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Nearby page buttons</span>
          <span className="nx-list__subtext">
            Buttons for up to 4 additional pages that precede or follow the current page will be present as
            applicable. The lowest "nearby page" to get a rendered button always has a page index that is one
            higher than a multiple of 5.
          </span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">First/last page buttons</span>
          <span className="nx-list__subtext">
            If not already covered by one of the "nearby page buttons", buttons will always be visible to jump
            straight to the first and last possible pages. These buttons will be labeled with the applicable page
            number.
          </span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Next/previous page group buttons</span>
          <span className="nx-list__subtext">
            If there are additional pages before or after those directly accessible via the "nearby page buttons",
            aside from the first and last pages, additional buttons marked by ellipses will appear between the
            "first/last page buttons" and the "nearby page buttons". Clicking these ellipsis buttons navigates
            to the pages immediately outside of the "nearby page buttons" range.
          </span>
        </li>
      </ul>
      <p className="nx-p">
        In addition to all native attributes allowed on a <NxCode>div</NxCode>, the following props
        are supported.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>pageCount</NxCode></td>
            <td className="nx-cell">Non-negative integer</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">The total number of pages</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>currentPage</NxCode></td>
            <td className="nx-cell">Non-negative integer</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The currently selected page. Must be null or undefined if <NxCode>pageCount</NxCode>
              is 0, and must <em>not</em> be null or undefined if <NxCode>pageCount</NxCode> is
              greater than 0. Pages are counted in a zero-based manner - that is, the page numbers displayed in the
              UI are one higher than this property specifies.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>onChange</NxCode></td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Handler function which gets called whenever the user selects a different page. Receives the selected
              page as its first argument (using zero-based counting), and the button's click event as its
              second argument.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="nx-p">
        For an example of an <NxCode>NxPagination</NxCode> component within/connected to a table,
        see the <a className="nx-text-link" href="#/pages/NxTable"><NxCode>NxTable</NxCode></a> page.
      </p>
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
