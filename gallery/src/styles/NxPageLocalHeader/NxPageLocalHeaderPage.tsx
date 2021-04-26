/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH2, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import CodeExample from '../../CodeExample';

const nxPageLocalHeaderFullExampleCode = require('./NxPageLocalHeaderFullExample?raw'),
    nxPageLocalHeaderNoBackButtonExampleCode = require('./NxPageLocalHeaderNoBackButtonExample?raw'),
    nxPageLocalHeaderNoActionsExampleCode = require('./NxPageLocalHeaderNoActionsExample?raw'),
    nxPageLocalHeaderEmptyExampleCode = require('./NxPageLocalHeaderEmptyExample?raw');

const NxPageLocalHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A page header to be used along with the <NxCode>NxGlobalSidebar</NxCode>. So named in order to distinguish
        it from the <NxCode>nx-page-header</NxCode> used within the legacy page layouts. That older header spans
        across the entire viewport and therefore must be considered the more "global" of the two, while this header is
        considered to be "local" to a particular page, both in positioning and content.
      </NxP>
      <NxP>
        Like all parts of the <NxCode>NxGlobalSidebar</NxCode> layout, this component is only to be
        used in full-width, section-scrolling layouts.
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
            <NxTable.Cell><NxCode>nx-page-local-header</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageLocalHeader</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Immediate child of <NxCode>.nx-page</NxCode> or <NxCode>.nx-page-content--full-width</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              The overall block element for the header. Its children should consist of
              an <NxCode>NxBackButton</NxCode> and/or a <NxCode>.nx-page-local-header__actions</NxCode>, both of which
              are optional, in that order.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-page-local-header__actions</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageLocalHeader.Actions</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Immediate child of <NxCode>.nx-page-local-header__actions</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              Container for buttons, dropdowns, and other action content at the right-hand end of the header.
              These actions would typically be the same across every page within a given app.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Typical Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          In the most common case, demonstrated here, the header contains both a back button on the left
          side and a collection of action buttons on the right side. The actions area can contain both icon-only
          buttons, which are styled in their smaller size, and regular buttons. This example includes both.
        </NxP>
        <NxP>
          Notice that when the <NxCode>nx-page-sidebar</NxCode> and/or <NxCode>nx-page-main</NxCode> have enough
          content to trigger scrolling, they scroll independently while the header stays in its position at the
          top of the viewport.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxPageLocalHeaderFullExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxPageLocalHeaderFullExampleCode} />
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>No Back Button Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          The Back Button within the header is optional as seen here. This example also shows that when the
          actions area contains only icon-only buttons and not a regular button, the entire header height decreases
          to fit.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxPageLocalHeaderNoBackButtonExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxPageLocalHeaderNoBackButtonExampleCode} />
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>No Actions Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          The actions collection within the header is optional as seen here.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxPageLocalHeaderNoActionsExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxPageLocalHeaderNoActionsExampleCode} />
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Empty Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          When the header has no content, it disappears entirely. This is a convenience for applications which
          do not have actions and which need a back button on some pages but not others, and which want to use
          a common template that always includes the <NxCode>nx-page-local-header</NxCode>.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxPageLocalHeaderEmptyExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxPageLocalHeaderEmptyExampleCode} />
      </NxTile.Content>
    </NxTile>
  </>;

export default NxPageLocalHeaderPage;
