/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { NxP, NxCode, NxTable, NxTile, NxH2, NxH3 } from '@sonatype/react-shared-components';

import './NxGlobalSidebarPage.scss';

const NxGlobalSidebarExample = require('./NxGlobalSidebarExample.tsx?raw');

export default function NxGlobalSidebarPage() {
  return (
    <>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Description</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <NxCode>NxGlobalSidebar</NxCode> is a collapsible page level sidebar. It has two main sections:
          </NxP>
          <ul className="nx-list nx-list--bulleted">
            <li className="nx-list__item">A header which contains branding as well as the open/close toggle</li>
            <li className="nx-list__item">
              A navigation link section which display an icon plus text in the open state and an icon in the closed
              state
            </li>
          </ul>
          <NxP>
            Because <NxCode>NxGlobalSidebar</NxCode> contains product branding it should not be used in conjunction
            with <NxCode>NxPageHeader</NxCode> or <NxCode>NxNexusPageHeader</NxCode>. Instead it should be paired with
            <NxCode>NxSystemHeader</NxCode> (not yet added to the gallery).
          </NxP>
          <NxP>
            Additional custom content may be added below the navigation links if desired, care should be taken that such
            content can adapt to both the open and closed states.
          </NxP>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebar</NxCode> Props</h3>
            </header>
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
                  <NxTable.Cell>isOpen</NxTable.Cell>
                  <NxTable.Cell>Boolean</NxTable.Cell>
                  <NxTable.Cell>No</NxTable.Cell>
                  <NxTable.Cell>This value determines whether the side starts in an open or closed state.</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>toggleOpenIcon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    An icon used by the sidebar's open/close toggle when the sidebar is in the open state. The icon
                    should make it clear that clicking it will close the sidebar.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>toggleClosedIcon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    An icon used by the sidebar's open/close toggle when the sidebar is in the closed state. This icon
                    should make it clear that clicking it will open the sidebar.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoImg</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    The path to an image placed in the top left corner which displays branding and product name.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoAltText</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>Alt text for the logo</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoLink</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    When the logo is clicked it navigates to a page (typically Home) specified here.
                  </NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigation</NxCode> Props</h3>
            </header>
            <NxP>
              <NxCode>NxGlobalSidebarNavigation</NxCode> is a container for navigation links.
              It accepts all standard <NxCode>&lt;div&gt;</NxCode> HTML attributes.
            </NxP>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigationLink</NxCode> Props</h3>
            </header>
            <NxP>
              In addition to all standard <NxCode>&lt;a&gt;</NxCode> HTML attributes,
              <NxCode>NxGlobalSidebarNavigationLink</NxCode> can receive the following props:
            </NxP>
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
                  <NxTable.Cell>isSelected</NxTable.Cell>
                  <NxTable.Cell>Boolean</NxTable.Cell>
                  <NxTable.Cell>Optional</NxTable.Cell>
                  <NxTable.Cell>Toggle for the selected state of the currently clicked link</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>icon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    Navigation links have icons to their left, this specifies the icon to be used.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>text</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>The text that should appear in the navigation link</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>href</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>URL</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <NxH3>CSS Classes</NxH3>
            </header>
            <NxP>The following CSS classes are available for use on child elements.</NxP>
            <NxTable>
              <NxTable.Head>
                <NxTable.Row>
                  <NxTable.Cell>Name</NxTable.Cell>
                  <NxTable.Cell>Location</NxTable.Cell>
                  <NxTable.Cell>Description</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Head>
              <NxTable.Body>
                <NxTable.Row>
                  <NxTable.Cell><NxCode>nx-global-sidebar__expanded-content</NxCode></NxTable.Cell>
                  <NxTable.Cell>element</NxTable.Cell>
                  <NxTable.Cell>
                    Content wrapped with <NxCode>nx-global-sidebar__expanded-content</NxCode> will appear in the
                    expanded view, but will not be displayed in the collapsed view.
                  </NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Basic Global Sidebar Example with Nav</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarExample} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
