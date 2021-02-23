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

const nxCardLayoutCode = require('!!raw-loader!./NxCardLayoutExample').default,
    NxCardCustomSCSSCode = require('!!raw-loader!./NxCardPageExamples.scss').default;

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        At its most basic a card is simply a container like a smaller version of
        {' '}<code className="nx-code">nx-tile</code> with header, content, and footer content areas. Because it's
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
            <td className="nx-cell"><code className="nx-code">.nx-card-container</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Container for <code className="nx-code">.nx-card</code>s
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card-container--no-wrap</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-card-container</code></td>
            <td className="nx-cell">
              By default if you put more cards into a container than can fit horizontally the cards will wrap into a
              new row. This modifier is used when you do not want the cards to wrap. Use with care as this can break
              layouts.
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
            <td className="nx-cell"><code className="nx-code">.nx-card--equal</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-card</code></td>
            <td className="nx-cell">
              <code className="nx-code">.nx-card</code>s have a default <code className="nx-code">max-width</code>.
              This modifer will override the <code className="nx-code">max-width</code> and force all cards to share
              the available space equally. It should be applied to all cards within an
              <code className="nx-code">.nx-card-container</code>.
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
            <td className="nx-cell"><code className="nx-code">.nx-card__footer</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Card footer, typically provides a link to more information or an action button.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__content</code></td>
            <td className="nx-cell">Wrapping element</td>
            <td className="nx-cell">
              <code className="nx-code">.nx-card__content</code> applied to a
              {' '}<code className="nx-code">&lt;div&gt;</code> wraps card contents. In the layouts below it wraps
              {' '}<code className="nx-code">.nx-card__call-out</code> and
              {' '}<code className="nx-code">.nx-card__text</code> as well as other card content.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__content--columns</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-card__content</code></td>
            <td className="nx-cell">
              <code className="nx-code">.nx-card__content--columns</code> applied to
              {' '}<code className="nx-code">.nx-card__content</code> creates a two column layout within
              {' '}<code className="nx-code">.nx-card__content</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__call-out</code></td>
            <td className="nx-cell">
              Element, typically a child of <code className="nx-code">.nx-card__content</code>
            </td>
            <td className="nx-cell">
              Wraps the card call out (if any). The call out typically consists of a number, sparkline, icon, or
              other small graphic. It should not be free form text.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-card__text</code></td>
            <td className="nx-cell">
              Element, typically a child of <code className="nx-code">.nx-card__content</code>
            </td>
            <td className="nx-cell">Free-form text. Should be concise.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-card__call-out-icon</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-icon</code></td>
            <td className="nx-cell">
              Changes the size of <code className="nx-code">.nx-icon</code> to <code className="nx-code">48px</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-card__call-out-icon--xl</code></td>
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
                        liveExample={NxCardLayoutExample}
                        codeExamples={[nxCardLayoutCode, NxCardCustomSCSSCode]}
                        defaultCheckeredBackground={true}>
      Samples of some common layouts, it's expected that many layouts will be custom. While we have shown some content
      heavy examples it is recomended to keep the content as minimal as possible. There is some custom SCSS used in
      these examples, it is shown below.
    </GalleryExampleTile>
  </>;

export default NxCardPage;
