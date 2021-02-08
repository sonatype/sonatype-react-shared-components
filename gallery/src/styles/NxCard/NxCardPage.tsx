/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './NxCardPageExamples.scss';

import NxCardVerticalLayoutExample from './NxCardVerticalLayoutExample';
import NxCardHorizontalLayoutExample from './NxCardHorizontalLayoutExample';

const nxCardVerticalLayoutCode = require('!!raw-loader!./NxCardVerticalLayoutExample').default,
    nxCardHorizontalLayoutCode = require('!!raw-loader!./NxCardHorizontalLayoutExample').default;

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Cards can be displayed in two orientations: vertically or horizontally. At its most basic a card is simply a
        container like a smaller version of <code className="nx-code">nx-tile</code> meant to display some relevant
        data. Because it's expected that cards will have many unanticipated uses the examples below are mant to be
        representative of some common patterns we anticipate, or as examples of solutions to some design problems. The
        examples below do not represent an exhasutive list.
      </p>
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
            <td className="nx-cell"><code className="nx-code">.nx-card-container</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Basic card container class.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card-container--row</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-card-container</code></td>
            <td className="nx-cell">
              Container for cards that are displayed in row(s), both normal and variant layouts. Rows can be
              transformed into columns by replacing this style with
              <code className="nx-code">.nx-card-container--column</code> below.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card-container--column</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-card-container</code></td>
            <td className="nx-cell">
              Container for cards that are displayed in a column. Cards displayed in a column can be transformed
              into rows by replacing this style with <code className="nx-code">.nx-card-container--row</code> above.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Basic card element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__header</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Card header element, typically wraps an <code className="nx-code">&lt;h3&gt;</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__call-out</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Wraps the card call out (if any). The call out typically consists of a number, sparkline, icon, or
              other small graphic. It should not be free form text.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__text</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Free-form text. Should be concise.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__footer</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              In a vertically oriented card the footer. Typically provides a link to more information.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__actions</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">In a horizontally oriented card where links and buttons are typically located.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__content</code></td>
            <td className="nx-cell">Wrapping element</td>
            <td className="nx-cell">
              <code className="nx-code">.nx-card__content</code> applied to a
              {' '}<code className="nx-code">&lt;div&gt;</code> wraps
              {' '}<code className="nx-code">.nx-card__call-out</code> and
              {' '}<code className="nx-code">.nx-card__call-out-text</code> in the alternate row card layout.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-icon--card-call-out</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-icon</code></td>
            <td className="nx-cell">
              Changes the size of <code className="nx-code">.nx-icon</code> to <code className="nx-code">48px</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-icon--card-call-out-xl</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-icon</code></td>
            <td className="nx-cell">
              Changes the size of <code className="nx-code">.nx-icon</code> to <code className="nx-code">64px</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Card Row Layout"
                        id="nx-card-row-example"
                        liveExample={NxCardVerticalLayoutExample}
                        codeExamples={nxCardVerticalLayoutCode}
                        defaultCheckeredBackground={true}>
      Cards shown in a row layout. While we have shown some content heavy examples it is recomended to keep the
      content as minimal as possible.
    </GalleryExampleTile>

    <GalleryExampleTile title="Card Column Layout"
                        id="nx-card-column-example"
                        liveExample={NxCardHorizontalLayoutExample}
                        codeExamples={nxCardHorizontalLayoutCode}
                        defaultCheckeredBackground={true}>
      Cards shown in column layout.
    </GalleryExampleTile>
  </>;

export default NxCardPage;
