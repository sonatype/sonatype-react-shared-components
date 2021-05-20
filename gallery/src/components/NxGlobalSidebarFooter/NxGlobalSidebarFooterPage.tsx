/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTable, NxTile, NxH2, NxH3 } from '@sonatype/react-shared-components';

const NxGlobalSidebarFooterExample = require('./NxGlobalSidebarFooterExample.tsx?raw'),
    NxGlobalSidebarFooterScrollingExample = require('./NxGlobalSidebarFooterScrollingExample.tsx?raw'),
    NxGlobalSidebarFooterMinimalExample = require('./NxGlobalSidebarFooterMinimalExample.tsx?raw');

export default function NxGlobalSidebarFooterPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxGlobalSidebarFooter</NxCode> is a component intended to be used in conjunction with
          {' '}<NxCode>NxGlobalSidebar</NxCode>. It appears at the bottom of the sidebar and displays meta-information
          about the application such as links to documentation, versions, and branding.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxGlobalSidebarFooter</NxCode> Props</NxH3>
          </NxTile.SubsectionHeader>
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
                <NxTable.Cell>supportText</NxTable.Cell>
                <NxTable.Cell>string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  Alternate text that should appear in the support link, by default the text reads "Help and Support".
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>supportLink</NxTable.Cell>
                <NxTable.Cell>string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  URL that points to the help or support documents for this product. This prop is required for the
                  support text to appear.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>releaseText</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  Text that indicates what version of the software is currently being used. You may use just a version
                  number or a mix of text and a number, e.g. "Release 3.1.4".
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>productTagLine</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  This text is meant to indicate when a product is part of a suite or family of products, for
                  example: "Powered by Insight".
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>showCreatedBy</NxTable.Cell>
                <NxTable.Cell>Boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  The "Created by Sonatype" tagline is displayed unless this value is set to "false".
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>HTML <code className="nx-code">&lt;div&gt;</code> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <a target="_blank"
                     rel="noopener"
                     href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                    HTML div Attributes
                  </a>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>N/A</NxTable.Cell>
                <NxTable.Cell>
                  NxGlobalSidebarFooter supports any HTML attribute that's normally supported
                  by <code className="nx-code">&lt;div&gt;</code>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Basic Global Sidebar Footer Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarFooterExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarFooterExample} />
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Global Sidebar Example with Nav, Extra Content, and a Footer</NxH2>
            <NxP>
              This examples shows 10 nav items (the maximum), a middle content area with enough content to trigger
              scrolling, and all footer options enabled.
            </NxP>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarFooterScrollingExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarFooterScrollingExample} />
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Minimal Global Sidebar Example</NxH2>
            <NxP>In it's most minimal layout the footer shows only the "Created by Sonatype" text.</NxP>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarFooterMinimalExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarFooterMinimalExample} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
