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

const nxSystemNoticeGlobalSidebarExampleCode = require('./NxSystemNoticeGlobalSidebarExample?raw'),
    nxSystemNoticeTraditionalPageExampleCode = require('./NxSystemNoticeTraditionalPageExample?raw'),
    nxSystemNoticeMultipleExampleCode = require('./NxSystemNoticeMultipleExample?raw');

const NxSystemNoticePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        System notices are brief, non-interactive textual content that should be shown in a banner
        across the top of the page. They come in informational and alert flavors.
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
            <NxTable.Cell><NxCode>nx-system-notice</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxSystemNotice</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Immediate child of <NxCode>.nx-page</NxCode> or <NxCode>.nx-system-notice-container</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              The system notice. In global-sidebar-based layouts this will appear at the top of the viewport,
              to the right of the global sidebar. In traditional layouts it will span the width of the viewport
              underneath of the page header.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-system-notice--alert</NxCode></NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              Modifier of <NxCode>.nx-system-notice</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              This modifier class styles the system notice to be appear more urgent.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-system-notice-container</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxSystemNotice.Container</NxCode></NxTable.Cell>
            <NxTable.Cell> Immediate child of <NxCode>.nx-page</NxCode></NxTable.Cell>
            <NxTable.Cell>
              When more than one system notice is present, they must be wrapped in this element.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Simple Example in Global Sidebar Layout</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          This example demonstrates a single system notice within a page that uses the global sidebar layout.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxSystemNoticeGlobalSidebarExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxSystemNoticeGlobalSidebarExampleCode} />
      </NxTile.Content>
    </NxTile>
    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Simple Example in Traditional Page Layout</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          This example demonstrates a single system notice within a page that uses the
          traditional <NxCode>.nx-page-header</NxCode>-based page layout.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxSystemNoticeTraditionalPageExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxSystemNoticeTraditionalPageExampleCode} />
      </NxTile.Content>
    </NxTile>
    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Multiple System Notice Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          This example demonstrates multiple system notices in a page that uses the global sidebar layout.
          One of the notices uses the alert modifier class. This example also demonstrates that when the
          text in a system notice is long enough, it truncates with an ellipsis.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxSystemNoticeMultipleExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxSystemNoticeMultipleExampleCode} />
      </NxTile.Content>
    </NxTile>
  </>;

export default NxSystemNoticePage;
