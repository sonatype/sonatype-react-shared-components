/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTable, NxTile, NxH2, NxH3, NxWarningAlert } from '@sonatype/react-shared-components';

const NxGlobalSidebarExample = require('./NxGlobalSidebarExample.tsx?raw');

export default function NxGlobalSidebarPage() {
  return (
    <>
      <GalleryDescriptionTile>
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
          <NxCode>NxGlobalSidebar</NxCode> should only be used with section scrolling (make sure that
          <NxCode>.nx-html--page-scrolling</NxCode> is <strong>not</strong> used) and in full-width mode (
          make sure that <NxCode>.nx-page-content--full-width</NxCode> <strong>is</strong> used).
        </NxP>
        <NxP>
          Because <NxCode>NxGlobalSidebar</NxCode> contains product branding it should not be used in conjunction
          with <NxCode>NxPageHeader</NxCode> or <NxCode>NxNexusPageHeader</NxCode>.
        </NxP>
        <NxP>
          Additional custom content may be added below the navigation links if desired, care should be taken that such
          content can adapt to both the open and closed states.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <h3 className="nx-h3"><NxCode>NxGlobalSidebar</NxCode> Props</h3>
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
                <NxTable.Cell>isOpen</NxTable.Cell>
                <NxTable.Cell>Boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>This value determines whether the sidebar is open or closed.</NxTable.Cell>
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
                  <NxWarningAlert>
                    Note: the image should not be larger than 145px wide and 32px tall. It should
                    display either a logo (apx 32px x 32px) and the product name, or just the product name.
                  </NxWarningAlert>
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
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigation</NxCode> Props</h3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxGlobalSidebarNavigation</NxCode> is a container for navigation links.
            It accepts all standard <NxCode>&lt;div&gt;</NxCode> HTML attributes.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigationLink</NxCode> Props</h3>
          </NxTile.SubsectionHeader>
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
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <h3 className="nx-h3"><NxCode>NxGlobalSidebarFooter</NxCode> Props</h3>
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
                <NxTable.Cell>showSupport</NxTable.Cell>
                <NxTable.Cell>Boolean</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  If true the support link is shown. At minimum <NxCode>supportLink</NxCode> below should be
                  provided.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>supportIcon</NxTable.Cell>
                <NxTable.Cell>IconDefinition</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  The support link has an icon to its left, by default it is a circle enclosing a question mark
                  (<NxCode>faQuestionCircle</NxCode>) this specifies an alternate icon to be used.
                </NxTable.Cell>
              </NxTable.Row>
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
                <NxTable.Cell>URL that points to the help or support documents for this product.</NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>releaseText</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>Text that appears before the release number.</NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>releaseNumber</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>A release number.</NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>productName</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  This text is meant to indicate when a product is part of a suite or family of products for
                  example: "Powered by Insight".
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>showCreatedBy</NxTable.Cell>
                <NxTable.Cell>Boolean</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  If true the "Created by Sonatype" tagline is displayed unless alternate text is provided below.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>createdByText</NxTable.Cell>
                <NxTable.Cell>String</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  Used to provide text that overrides the default "Created by Sonatype" tagline.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>CSS Classes</NxH3>
          </NxTile.SubsectionHeader>
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
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-global-sidebar__other-content</NxCode></NxTable.Cell>
                <NxTable.Cell>element</NxTable.Cell>
                <NxTable.Cell>
                  A simple container for content that will appears below the navigation and above the footer.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>
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
