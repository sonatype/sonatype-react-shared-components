/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTile, NxCode, NxH2, NxTable, NxTextLink, NxH3, NxInfoAlert, NxWarningAlert }
  from '@sonatype/react-shared-components';

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
        Live examples of each possibility are provided.
      </NxP>
      <NxP>
        All RSC page layouts are designed to operate in a minimum viewport size of 1366px x 768px. If the viewport
        is shrunk smaller than 1366px wide, a horizontal viewport-level scrollbar appears such that the render area
        remains 1366px wide.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Page Layout Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable className="gallery-documentation-table">
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class Name</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Convenience Component</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-html</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;html&gt;</NxCode> element</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                When using RSC page layout styles, this class must always be applied to
                the <NxCode>&lt;html&gt;</NxCode> element. Note that it is however possible to use individual RSC
                components on pages that do not use an RSC page layout/that do not use this class.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-html--page-scrolling</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier of <NxCode>.nx-html</NxCode></NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                By default, RSC page layouts operate in "section scrolling" mode. The legacy RSC page layouts
                can be switched into "page scrolling" mode by including this modifier on
                the <NxCode>&lt;html&gt;</NxCode> element (see below for a more detailed explanation of the scrolling
                modes). This is not supported on global sidebar page layouts.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-body</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;body&gt;</NxCode> element</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                When using RSC page layout styles, this class must always be applied to
                the <NxCode>&lt;body&gt;</NxCode> element. Note that it is however possible to use individual RSC
                components on pages that do not use an RSC page layout/that do not use this class.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-page</NxCode></NxTable.Cell>
              <NxTable.Cell>Sole statically positioned child of <NxCode>&lt;body&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                When using RSC page layout styles, this class must always be applied to
                an element that is the immediate descendant of the <NxCode>&lt;body&gt;</NxCode>. The element bearing
                this class should be the only statically positioned child of the <NxCode>&lt;body&gt;</NxCode>, though
                it may have absolutely-positioned siblings. This is typically the element where the root of the React
                application is established via a call to <NxCode>ReactDOM.render</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-page-content</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Child of <NxCode>.nx-page</NxCode>, following the page header and/or system notices
              </NxTable.Cell>
              <NxTable.Cell>In legacy layouts</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                In legacy RSC page layouts, the sidebar and main content area are wrapped by this element which enforces
                the 1600px maximum width and content centering.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-page-content--full-width</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Modifier of <NxCode>.nx-page-content</NxCode>
              </NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxWarningAlert>
                  Deprecated: in Global Sidebar page layouts, the <NxCode>.nx-page-main</NxCode>{' '}
                  and <NxCode>.nx-page-sidebar</NxCode> elements <em>may</em> be wrapped in an element bearing both
                  the <NxCode>nx-page-content</NxCode> and <NxCode>nx-page-content--full-width</NxCode> classes.
                  However, the preferred approach in those layouts is simply to omit
                  the <NxCode>.nx-page-content</NxCode> element entirely.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-page-sidebar</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  In legacy page layouts: First child of <NxCode>.nx-page-content</NxCode>.
                </NxP>
                <NxP>
                  In Global Sidebar page layouts: child of <NxCode>.nx-page</NxCode>.
                </NxP>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell><NxCode>NxPageSidebar</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  In legacy page layouts, this optional sidebar sits adjacent to the main content area within the 1600px
                  maximum width. It may contain content such as filter controls, feature-specific navigation, or global
                  application navigation as it does here in the RSC Gallery.
                </NxP>
                <NxP>
                  This element is also supported in Global Sidebar page layouts, primarily to aid in migration of
                  applications that are transitioning from the legacy layouts. Note that it should be used
                  sparingly/temporarily in Global Sidebar page layouts due to the fact that it
                  is <em>in addition</em> to the actual global sidebar, and thus results in there being two sidebars
                  visible simultaneously.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-page-main</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  In legacy page layouts: Only child or second child of <NxCode>.nx-page-content</NxCode>.
                </NxP>
                <NxP>
                  In Global Sidebar page layouts: child of <NxCode>.nx-page</NxCode>.
                </NxP>
              </NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell><NxCode>NxPageMain</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The main content area of the page which takes up the majority of the viewport space and which typically
                contains an <NxCode>.nx-page-title</NxCode>, <NxCode>.nx-tile</NxCode>s, etc.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxInfoAlert>
          In all of the examples linked below, the DOM structure represented in the JSX is rendered as immediate
          children of the <NxCode>.nx-page</NxCode> element.
        </NxInfoAlert>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Related Components and Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          These components and classes which are documented elsewhere in the Gallery are intended to be used as direct
          children of <NxCode>.nx-page</NxCode>.
        </NxP>
        <NxTable className="gallery-documentation-table">
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Item</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Layout Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>
                <NxCode><NxTextLink href="#/pages/Page%20Header">NxPageHeader</NxTextLink></NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Component</NxTable.Cell>
              <NxTable.Cell>Legacy</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The page header in legacy page layouts</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/System%20Notice"><NxCode>.nx-system-notice</NxCode></NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Any</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                A globally-visible system notice. Anchored to the viewport, this element appears below the page
                header in legacy page layouts, and adjacent to the global sidebar along the top of the viewport in
                Global Sidebar layouts.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/System%20Notice"><NxCode>.nx-system-notice-container</NxCode></NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Any</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                When multiple system notices are desired, wrap them in this class. See the{' '}
                <NxTextLink href="#/pages/System%20Notice">
                  System Notice documentation
                </NxTextLink>
                {' '}for details
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/Global%20Sidebar"><NxCode>NxGlobalSidebar</NxCode></NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Component</NxTable.Cell>
              <NxTable.Cell>Global Sidebar</NxTable.Cell>
              <NxTable.Cell>Yes or use alternate</NxTable.Cell>
              <NxTable.Cell>The global sidebar of "Global Sidebar layouts"</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/Stateful%20Global%20Sidebar"><NxCode>NxStatefulGlobalSidebar</NxCode>
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Component</NxTable.Cell>
              <NxTable.Cell>Global Sidebar</NxTable.Cell>
              <NxTable.Cell>Yes or use alternate</NxTable.Cell>
              <NxTable.Cell>
                A wrapper for <NxCode>NxGlobalSidebar</NxCode> that automatically handles the collapse/expand state.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/Global%20Header"><NxCode>.nx-global-header</NxCode></NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Global Sidebar</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>The page header for use alongside the global sidebar</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxTextLink href="#/pages/Load%20Wrapper"><NxCode>NxLoadWrapper</NxCode></NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>Component</NxTable.Cell>
              <NxTable.Cell>Any</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                On pages which include both an <NxCode>.nx-page-sidebar</NxCode> and an <NxCode>.nx-page-main</NxCode>,
                it is sometimes desired to control the display of both of those components with a wrapping
                <NxCode>NxLoadWrapper</NxCode> – that is, to show neither the sidebar nor the main content until/unless
                the loading managed by the wrapper completes successfully. One consequence of this is that the
                <NxCode>.nx-alert</NxCode> and <NxCode>NxLoadingSpinner</NxCode> that the <NxCode>NxLoadWrapper</NxCode>
                can display end up rendered as direct children of <NxCode>.nx-page</NxCode>{' '}
                or <NxCode>.nx-page-content</NxCode>. Thus special considerations have to be made to ensure that they
                lay out correctly.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Accessibility Considerations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          There is an accessibility rule that every scrollable region on a page must either contain a focusable element,
          or be focusable itself. Notice in the examples below that some of the elements are given
          a <NxCode>tabIndex</NxCode> in order to meet this requirement. This only needs to be done explictly if
          the scrolling element contains no naturally interactive content whatsoever, which is often the case in these
          contrived examples. In actual development, if the scrolling region of the page contains even a single link,
          text input, or other interactive element, it will automatically satisfy this requirement. If on the other hand
          an element which is/may be scrollable contains only static content, it should be given
          a <NxCode>tabIndex</NxCode> of zero as seen in these examples.
        </NxP>

        <NxP>
          Additionally, many of the RSC page layout components provide ARIA roles which are designated
          as <NxTextLink external href="https://www.w3.org/TR/wai-aria/#landmark_roles">Landmark Roles</NxTextLink>.
          In pages which contain multiple elements using the same landmark role, each one must be given a distinct
          label. RSC attempts to assist with this by providing default labels for
          the <NxCode>NxGlobalSidebar</NxCode> and <NxCode>NxSystemNotice</NxCode> components, both of which provide the
          <NxCode>complementary</NxCode> role. Additionally, <NxCode>NxPageSidebar</NxCode> provides that same role but
          <em>does not</em> have a default label, since its content is completely variable. In most situations this is
          fine, as the lack of a label still makes it distinct from other <NxCode>complementary</NxCode> elements which
          do have a label. However, in the event that a page is constructed which contains any <em>additional</em>
          complementary elements beyond one instance each of those three, then
          additional <NxCode>aria-label</NxCode>s should be added in order to keep the complementary elements
          distinguishable.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Legacy Page Layouts</NxH2>
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
          application will only use one of these modes or the other, globally. Section scrolling (the default) causes
          the application overall to size to the viewport with the page header and system notices statically at the
          top, and the content area and sidebar scrolling if necessary independently of each other. Page scrolling
          on the other hand sizes the application overall based on its content, overflowing the viewport if necessary
          and allowing the viewport-level scrollbar to activate in order to scroll the content. In this mode, the page
          header and system notices are "sticky" and remain in their positions relative to the viewport while the
          rest of the content scrolls underneath them. Note that page scrolling is activated via a modifier class on
          the <NxCode>&lt;html&gt;</NxCode> element: <NxCode>nx-html--page-scrolling</NxCode>. In the examples below
          you will notice that each page scrolling example is identical to its section scrolling counterpart. Only
          the addition of this class name (which is outside of the example proper, unfortunately) distinguishes them.
        </NxP>
        <NxP>
          Between the two optional elements (the sidebar and the system notices) and the scrolling option, there are
          eight different legacy page layouts. They are each demonstrated below. Note that in all cases the main
          content and the sidebar are wrapped in an <NxCode>.nx-page-content</NxCode> element. This facilitates the
          max-width behavior.
        </NxP>
        <NxTable className="gallery-documentation-table">
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell />
              <NxTable.Cell>With Sidebar</NxTable.Cell>
              <NxTable.Cell>Without Sidebar</NxTable.Cell>
              <NxTable.Cell>NxLoadWrapper special states</NxTable.Cell>
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
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacySystemNoticeLoadWrapperLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/pageScrolling/LegacyLoadWrapperLayout">
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
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/LegacySystemNoticeLoadWrapperLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/LegacyLoadWrapperLayout">
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
          to 1600px. The global sidebar spans the full height of the viewport. Adjacent to the global sidebar a
          simpler page header typically runs along the top of the viewport, though it is optional in order to ease
          migration of existing apps. If system notices are present they appear above this header (though still
          adjacent to the global sidebar). Beneath the header is the main content area and optionally an additional
          sidebar analogous to the sidebar from the legacy layouts. New pages should generally avoid using this sidebar
          (since it is in addition to the global sidebar) however it is allowed for the sake of migration of existing
          apps.
        </NxP>
        <NxP>
          The global sidebar page layouts only support "section scrolling". Specifically the main content area and
          the non-global sidebar may scroll independently of each other while all other parts of the layout stay static
          to the viewport.
        </NxP>
        <NxP>
          Between the three optional elements – the header, system notices, and inner sidebar – there are
          eight different global sidebar page layouts. They are each demonstrated below.
        </NxP>
        <NxTable className="gallery-documentation-table">
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell />
              <NxTable.Cell>With Inner Sidebar</NxTable.Cell>
              <NxTable.Cell>Without Inner Sidebar</NxTable.Cell>
              <NxTable.Cell>NxLoadWrapper special states</NxTable.Cell>
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
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderSystemNoticeLoadWrapperLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarHeaderLoadWrapperLayout">
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
              <NxTable.Cell>
                <NxTextLink href="#/pageLayouts/GlobalSidebarSystemNoticeLoadWrapperLayout">
                  With System Notice
                </NxTextLink>
                <br/>
                <NxTextLink href="#/pageLayouts/GlobalSidebarLoadWrapperLayout">
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
