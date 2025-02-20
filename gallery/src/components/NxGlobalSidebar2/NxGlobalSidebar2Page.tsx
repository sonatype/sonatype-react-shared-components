/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode, NxTable, NxTile, NxH2, NxH3, NxTextLink } from '@sonatype/react-shared-components';

const NxGlobalSidebar2Example = require('./NxGlobalSidebar2Example.tsx?raw');

export default function NxGlobalSidebar2Page() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxGlobalSidebar2</NxCode> is a collapsible page level sidebar which
          contains <NxCode>NxGlobalSidebar2NavigationLink</NxCode>s. It is intended as a more modern replacement
          for <NxCode>NxGlobalSidebar</NxCode>, though that component is also still supported.
        </NxP>
        <NxP>
          <NxCode>NxGlobalSidebar2</NxCode> should only be used with section scrolling (make sure
          that <NxCode>.nx-html--page-scrolling</NxCode> is <strong>not</strong> used) and in full-width mode (make sure
          that <NxCode>.nx-page-content--full-width</NxCode> <strong>is</strong> used, or
          that <NxCode>.nx-page-content</NxCode> is not used at all).  <NxCode>NxGlobalSidebar2</NxCode> is intended to
          always be used in conjunction with <NxCode>NxGlobalHeader</NxCode>, and never
          with <NxCode>NxPageHeader</NxCode>.  Additional custom content may be added below the navigation links if
          desired, care should be taken that such content can adapt to both the open and closed states.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxGlobalSidebar2</NxCode> Props</NxH3>
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
                  should make it clear that clicking it will close the sidebar. When FontAwesome Pro icons are
                  available, this icon <em>should</em> be <NxCode>faArrowLeftFromLine</NxCode> in
                  FontAwesome's <NxCode>regular</NxCode> style.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>toggleClosedIcon</NxTable.Cell>
                <NxTable.Cell>IconDefinition</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  An icon used by the sidebar's open/close toggle when the sidebar is in the closed state. This icon
                  should make it clear that clicking it will open the sidebar. When FontAwesome Pro icons are
                  available, this icon <em>should</em> be <NxCode>faArrowRightFromLine</NxCode> in
                  FontAwesome's <NxCode>regular</NxCode> style.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3><NxCode>NxGlobalSidebar2NavigationLink</NxCode> Props</NxH3>
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
                  <NxCode>NxGlobalSidebar2NavigationLink</NxCode> supports any HTML attribute that's
                  normally supported by <NxCode>&lt;a&gt;</NxCode>.
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
            <NxTextLink href="#/NxGlobalSidebar2Example">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxGlobalSidebar2Example} />
        </NxTile.Content>
      </NxTile>
    </>
  );
}
