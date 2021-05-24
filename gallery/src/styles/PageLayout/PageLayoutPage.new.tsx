/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTile, NxCode, NxH2, NxTable, NxTextLink, NxH3, NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const PageLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        The React Shared Components provide a number of different high-level page skeleton layouts tailored to
        the design needs of the applications intended to use RSC throughout its history. These layouts can be
        broadly separated into two categories: the older page-header based layouts, and the new global-sidebar
        based layouts. Within these two categories there are a fairly wide variety of options and optional sections
        of the UI which make for a confusingly high number of possibilities. The purpose of this documentation
        page is to describe all supported combinations, highlighting which are deprecated and which are up-to-date.
        Live examples of each possiblity are provided.
      </NxP>
      <NxP>
        All RSC page layouts are designed to operate in a minimum viewport size of 1366px x 768px. If the viewport
        is shrunk smaller than 1366px wide, a horizontal viewport-level scrollbar appears such that the render area
        remains 1366px wide.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Highest-level elements</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          All RSC page layouts start with certain common elements and classes. First, the
          ever-present <NxCode>&lt;html&gt;</NxCode> and <NxCode>&lt;body&gt;</NxCode> elements should be given class
          names of <NxCode>nx-html</NxCode> and <NxCode>nx-body</NxCode> respectively. In addition,
          the <NxCode>&lt;body&gt;</NxCode> should have a single statically-positioned child element, typically
          a <NxCode>&lt;div&gt;</NxCode>, with a class name of <NxCode>nx-page</NxCode>.
          This <NxCode>.nx-page</NxCode> element is typically the root of the React application - the element
          written directly into the HTML file served from the server, upon which <NxCode>ReactDOM.render</NxCode> is
          called in order to insert the dynamic application UI. It is permissible for
          the <NxCode>&lt;body&gt;</NxCode> to include other, absolutely-positioned content
          alongside <NxCode>.nx-page</NxCode>, as is often inserted by third-party libraries for modals, tooltips, etc.
        </NxP>
        <NxInfoAlert>
          In all of the examples linked below, the DOM structure represented in the JSX is rendered as immediate
          children of the <NxCode>.nx-page</NxCode> element.
        </NxInfoAlert>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Legacy Page Header Layouts</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          The original flavor of page layouts supported by the RSC, these layouts consist of a header which
          spans across the viewport followed by a content area and an optional sidebar which have a maximum width of
          1600px and which are centered horizontally within the viewport. The page header is either
          an <NxCode>NxPageHeader</NxCode> or <NxCode>NxNexusPageHeader</NxCode>. System notices, when present, appear
          beneath the page header and also span across the viewport.
        </NxP>
        <NxP>
          These legacy layouts support two types of scrolling: page scroll and section scrolling. Typically, a given
          application will only use one of these modes or the other, globally. Section scrolling, the default, causes
          the application overall to size to the viewport, with the page header and system notices statically at the
          top, and the content area and sidebar scrolling if necessary, independently of each other. Page scrolling
          on the other hand sizes the application overall based on its content, overflowing the viewport if necessary
          and allowing the viewport-level scrollbar to activate in order to scroll the content. In this mode, the page
          header and system notices are "sticky" and remain in their positions relative to the viewport while the
          rest of the content scrolls underneath them. Note that page scrolling is activated via a modifier class on
          the <NxCode>&lt;html&gt;</NxCode> element: <NxCode>nx-html--page-scrolling</NxCode>. In the examples below
          you will notice that the page scrolling and section scrolling pairs are identical within the example itself;
          only the addition of this class name (which is outside of the example proper, unfortunately) distinguishes
          them.
        </NxP>
        <NxP>
          Between the two optional elements (the sidebar and the system notices) and the scrolling option, there are
          eight different legacy page layouts. They are each demonstrated below. Note that in all cases, the main
          content (<NxCode>.nx-page-main</NxCode>) and the sidebar are wrapped in an <NxCode>.nx-page-content</NxCode>)
          element.
          This facilitates the max width behavior.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell />
              <NxTable.Cell>With Sidebar</NxTable.Cell>
              <NxTable.Cell>Without Sidebar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>Page Scrolling</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacySidebarSystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacySidebarLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacySystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacyLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>Section Scrolling</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/LegacySidebarSystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/LegacySidebarLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/LegacySystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/LegacyLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Global Sidebar Page Layouts</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          Recent Sonatype application designs have moved from having a global page header to having a global sidebar.
          This calls for a completely separate set of layouts using some of the same components as the legacy layouts.
          In the global sidebar layouts, page content spans the full width of the viewport rather than being constrained
          to 1600px. The global sidebar spans the full height of the viewport. Adjacent to the global sidebar, a
          simpler page header typically runs along the top of the viewport, though it is optional in order to ease
          migration of existing apps. If system notices are present, they appear above this header (though still adjacent
          to the global sidebar). Beneath the header is the main content area, and optionally an additional sidebar
          analogous to the sidebar from the legacy layouts. New pages should generally avoid using this sidebar (since
          it is in addition to the global sidebar) however it is allowed for the sake of migration of existing apps.
        </NxP>
        <NxP>
          The global sidebar page layouts only support "section scrolling". Specifically, the main content area and
          the non-global sidebar may scroll independently of each other while all other parts of the layout stay static
          to the viewport.
        </NxP>
        <NxP>
          Between the three optional elements – the header, system notices, and inner sidebar, there are
          eight different global sidebar page layouts. They are each demonstrated below. Note that
          the <NxCode>.nx-page-content</NxCode> element present in the legacy layouts is <em>not</em> present in these
          layouts since the content width does not need to be constrained aside from the limitations imposed by the
          viewport. Note that as another option, instead of removing
          the <NxCode>.nx-page-content</NxCode> element, that element can be given
          an <NxCode>.nx-page-content--full-width</NxCode> class which will have the same effect. That class is deprecated
          and only available in order to ease migration.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell />
              <NxTable.Cell>With Inner Sidebar</NxTable.Cell>
              <NxTable.Cell>Without Inner Sidebar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>With Header</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderSystemNoticeSidebarLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderSidebarLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderSystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>Without Header</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarSystemNoticeSidebarLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarSidebarLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarSystemNoticeLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarLayout">
                  Without System Notice
                </NxTextLink>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Content>
    </NxTile>
  </>;

export default PageLayoutPage;
