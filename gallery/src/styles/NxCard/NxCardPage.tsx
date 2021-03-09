/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './NxCardPageExamples.scss';

import NxCardLayoutExample from './NxCardLayoutExample';

const nxCardLayoutCode = require('./NxCardLayoutExample?raw'),
    NxCardCustomSCSSCode = require('./NxCardPageExamples.scss?raw');

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        At its most basic a card is simply a container like a smaller version of
        {' '}<NxCode>nx-tile</NxCode> with header, content, and footer content areas. Because it's
        expected that cards will have many uses the examples below do not represent an exhaustive list, instead the
        intent is to display some common patterns that we have seen to date, and provide a starting off point for
        future implementations.
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
            <td className="nx-cell"><NxCode>.nx-card-container</NxCode></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Container for <NxCode>.nx-card</NxCode>s
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card-container--no-wrap</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-card-container</NxCode></td>
            <td className="nx-cell">
              By default if you put more cards into a container than can fit horizontally the cards will wrap into a
              new row. This modifier is used when you do not want the cards to wrap. Use with care as this can break
              layouts.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Basic card element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card--equal</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-card</NxCode></td>
            <td className="nx-cell">
              <NxCode>.nx-card</NxCode>s have a default <NxCode>max-width</NxCode>.
              This modifer will override the <NxCode>max-width</NxCode> and force all cards to share
              the available space equally. It should be applied to all cards within an
              <NxCode>.nx-card-container</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__header</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Card header element, typically wraps an <NxCode>&lt;h3&gt;</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__footer</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Card footer, typically provides a link to more information or an action button.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__content</NxCode></td>
            <td className="nx-cell">Wrapping element</td>
            <td className="nx-cell">
              <NxCode>.nx-card__content</NxCode> applied to a
              {' '}<NxCode>&lt;div&gt;</NxCode> wraps card contents. In the layouts below it wraps
              {' '}<NxCode>.nx-card__call-out</NxCode> and
              {' '}<NxCode>.nx-card__text</NxCode> as well as other card content.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__content--columns</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-card__content</NxCode></td>
            <td className="nx-cell">
              <NxCode>.nx-card__content--columns</NxCode> applied to
              {' '}<NxCode>.nx-card__content</NxCode> creates a two column layout within
              {' '}<NxCode>.nx-card__content</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__call-out</NxCode></td>
            <td className="nx-cell">
              Element, typically a child of <NxCode>.nx-card__content</NxCode>
            </td>
            <td className="nx-cell">
              Wraps the card call out (if any). The call out typically consists of a number, sparkline, icon, or
              other small graphic. It should not be free form text.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-card__text</NxCode></td>
            <td className="nx-cell">
              Element, typically a child of <NxCode>.nx-card__content</NxCode>
            </td>
            <td className="nx-cell">Free-form text. Should be concise.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>nx-card__call-out-icon</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-icon</NxCode></td>
            <td className="nx-cell">
              Changes the size of <NxCode>.nx-icon</NxCode> to <NxCode>48px</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>nx-card__call-out-icon--xl</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-icon</NxCode></td>
            <td className="nx-cell">
              Changes the size of <NxCode>.nx-icon</NxCode> to <NxCode>64px</NxCode>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Card Row Layout"
                        id="nx-card-row-example"
                        liveExample={NxCardLayoutExample}
                        codeExamples={[nxCardLayoutCode, NxCardCustomSCSSCode]}
                        defaultCheckeredBackground={true}>
      Samples of some common layouts, it's expected that many layouts will be custom. While we have shown some content
      heavy examples it is recomended to keep the content as minimal as possible. There is some custom SCSS used in
      these examples, it is shown below.
    </GalleryExampleTile>
  </>;

export default NxCardPage;
