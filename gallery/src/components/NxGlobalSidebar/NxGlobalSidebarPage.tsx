/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTable, NxTile, NxH2, NxH3, NxWarningAlert, NxTextLink, NxList }
  from '@sonatype/react-shared-components';

const NxGlobalSidebarExample = require('./NxGlobalSidebarExample.tsx?raw'),
    NxGlobalSidebarScrollingExample = require('./NxGlobalSidebarScrollingExample.tsx?raw');

export default function NxGlobalSidebarPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxGlobalSidebar</NxCode> is a collapsible page level sidebar. It has three main sections:
        </NxP>
        <NxList className="nx-list--bulleted">
          <NxList.Item>
            <NxList.Text>A header which contains branding as well as the open/close toggle</NxList.Text>
          </NxList.Item>
          <NxList.Item>
            <NxList.Text>
              A navigation link section which display an icon plus text in the open state and an icon in the closed
              state
            </NxList.Text>
          </NxList.Item>
          <NxList.Item>
            <NxList.Text>
              A footer which contains meta-information about the application. Refer to the
              {' '}<a className="nx-text-link" href="#/pages/Global%20Sidebar%20Footer">Global Sidebar Footer</a> page
              for its documentation.
            </NxList.Text>
          </NxList.Item>
        </NxList>
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
            <NxH3><NxCode>NxGlobalSidebar</NxCode> Props</NxH3>
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
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>This value determines whether the sidebar is open or closed.</NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onToggleClick</NxTable.Cell>
                <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell> A callback that fires when the sidebar's open/close toggle is clicked.</NxTable.Cell>
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
                  The path to an image placed in the top left corner which displays branding and product name. Note that
                  the image will be rendered at a size no greater than 158px x 43px.
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
              <NxTable.Row>
                <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                    HTML div Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxGlobalSidebar</NxCode> supports any HTML attribute that's normally
                  supported by <NxCode>&lt;div&gt;</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxGlobalSidebarNavigation</NxCode> Props</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxGlobalSidebarNavigation</NxCode> is a container for navigation links.
          </NxP>
          <NxWarningAlert>
            Note that the number of navigation links must be kept to 10 or less in order to ensure that there is enough
            space for both the navigation and footer areas in smaller viewports.
          </NxWarningAlert>
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
                <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                    HTML div Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxGlobalSidebar</NxCode> supports any HTML attribute that's normally
                  supported by <NxCode>&lt;div&gt;</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxGlobalSidebarNavigationLink</NxCode> Props</NxH3>
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
                <NxTable.Cell>ReactNode</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  The text/content that should appear in the navigation link. May be a string or JSX.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>href</NxTable.Cell>
                <NxTable.Cell>string</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>URL</NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>HTML <NxCode>&lt;a&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/a">
                    HTML a Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxGlobalSidebarNavigationLink</NxCode> supports any HTML attribute that's
                  normally supported by <NxCode>&lt;a&gt;</NxCode>.
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
                  A simple container for content that will appears below the navigation and above the footer. If you
                  want this content area to be scrollable (which is very strongly suggested) you should also apply
                  {' '}<NxCode>.nx-scrollable</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Basic Global Sidebar Example with Nav and Footer</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            <NxTextLink href="#/NxGlobalSidebarExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxGlobalSidebarExample} />
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Global Sidebar Example with Nav, Extra Content, and Footer</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            This example shows 10 nav items (the maximum), a middle content area with enough content to trigger
            scrolling, and all footer options enabled.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxGlobalSidebarScrollingExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxGlobalSidebarScrollingExample} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
