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

const nxGlobalFooter2ExampleCode = require('./NxGlobalFooter2Example?raw');

const NxGlobalFooter2Page = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A page footer to be used along with the <NxCode>NxGlobalSidebar2</NxCode>. So named in order to make it clear
        that it should be used with that component.
      </NxP>
      <NxP>
        Like all parts of the <NxCode>NxGlobalSidebar2</NxCode> layout, this component is only to be
        used in full-width, section-scrolling layouts.
      </NxP>
      <NxTable className="gallery-documentation-table">
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
            <NxTable.Cell><NxCode>nx-global-footer-2</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGlobalFooter2</NxCode></NxTable.Cell>
            <NxTable.Cell>
              TODO
            </NxTable.Cell>
            <NxTable.Cell>
              The overall block element for the footer. Its children should consist of
              zero or more <NxCode>&lt;span&gt;</NxCode> or <NxCode>&lt;NxTextLink&gt;</NxCode> elements.
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
          A page using a <NxCode>NxGlobalFooter2</NxCode> with a text span and several links.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalFooter2Example">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxGlobalFooter2ExampleCode} />
      </NxTile.Content>
    </NxTile>
  </>;

export default NxGlobalFooter2Page;
