/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './NxCardPageExamples.scss';

import NxCardLayoutExample from './NxCardLayoutExample';

const nxCardLayoutCode = require('./NxCardLayoutExample?raw'),
    NxCardCustomSCSSCode = require('./NxCardPageExamples.scss?raw');

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        At its most basic a card is simply a container like a smaller version of
        {' '}<NxCode>nx-tile</NxCode> with header, content, and footer content areas. Because it's
        expected that cards will have many uses the examples below do not represent an exhaustive list, instead the
        intent is to display some common patterns that we have seen to date, and provide a starting off point for
        future implementations.
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
            <NxTable.Cell><NxCode>.nx-card-container</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.Container</NxCode></NxTable.Cell>
            <NxTable.Cell>Top-Level</NxTable.Cell>
            <NxTable.Cell>
              Container for <NxCode>.nx-card</NxCode>s
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card-container--no-wrap</NxCode></NxTable.Cell>
            <NxTable.Row/>
            <NxTable.Cell>Modifier of <NxCode>.nx-card-container</NxCode></NxTable.Cell>
            <NxTable.Cell>
              By default if you put more cards into a container than can fit horizontally the cards will wrap into a
              new row. This modifier is used when you do not want the cards to wrap. Use with care as this can break
              layouts.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Basic card element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card--equal</NxCode></NxTable.Cell>
            <NxTable.Row/>
            <NxTable.Cell>Modifier of <NxCode>.nx-card</NxCode></NxTable.Cell>
            <NxTable.Cell>
              <NxCode>.nx-card</NxCode>s have a default <NxCode>max-width</NxCode>.
              This modifer will override the <NxCode>max-width</NxCode> and force all cards to share
              the available space equally. It should be applied to all cards within an
              <NxCode>.nx-card-container</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__header</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.Header</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Card header element, typically wraps an <NxCode>&lt;h3&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__footer</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.Footer</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Card footer, typically provides a link to more information or an action button.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__content</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.Content</NxCode></NxTable.Cell>
            <NxTable.Cell>Wrapping element</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>.nx-card__content</NxCode> applied to a
              {' '}<NxCode>&lt;div&gt;</NxCode> wraps card contents. In the layouts below it wraps
              {' '}<NxCode>.nx-card__call-out</NxCode> and
              {' '}<NxCode>.nx-card__text</NxCode> as well as other card content.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__content--columns</NxCode></NxTable.Cell>
            <NxTable.Row/>
            <NxTable.Cell>Modifier of <NxCode>.nx-card__content</NxCode></NxTable.Cell>
            <NxTable.Cell>
              <NxCode>.nx-card__content--columns</NxCode> applied to
              {' '}<NxCode>.nx-card__content</NxCode> creates a two column layout within
              {' '}<NxCode>.nx-card__content</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__call-out</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.CallOut</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Element, typically a child of <NxCode>.nx-card__content</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              Wraps the card call out (if any). The call out typically consists of a number, sparkline, icon, or
              other small graphic. It should not be free form text.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-card__text</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxCard.Text</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Element, typically a child of <NxCode>.nx-card__content</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>Free-form text. Should be concise.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-card__call-out-icon</NxCode></NxTable.Cell>
            <NxTable.Row/>
            <NxTable.Cell>Modifier of <NxCode>.nx-icon</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Changes the size of <NxCode>.nx-icon</NxCode> to <NxCode>48px</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-card__call-out-icon--xl</NxCode></NxTable.Cell>
            <NxTable.Row/>
            <NxTable.Cell>Modifier of <NxCode>.nx-icon</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Changes the size of <NxCode>.nx-icon</NxCode> to <NxCode>64px</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Accessibility Considerations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The <NxCode>NxCard</NxCode> convenience component renders a <NxCode>&lt;section&gt;</NxCode> element.
          A <NxCode>&lt;section&gt;</NxCode> element will have a role of <NxCode>region</NxCode> if an accessible
          name is provided. If an accessible name is not provided, no role will be assigned. Since the
          {' '}<NxCode>region</NxCode> role is a landmark, and landmarks need to be unique, the accessible name
          provided to <NxCode>NxCard</NxCode> therefore needs to be unique as well. In layouts that contain
          multiple <NxCode>NxCard</NxCode> components that have accessible names, it is important to make sure that
          each <NxCode>NxCard</NxCode> has a unique accessible name.
        </NxP>
      </NxTile.Subsection>
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
