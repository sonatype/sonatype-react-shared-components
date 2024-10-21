/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { mergeAll, values } from 'ramda';
import { NxPageMain } from '@sonatype/react-shared-components';

// polyfill Array.prototype.includes which is used in query-string
import 'core-js/features/array/includes';
import queryString from 'query-string';

import pageConfig from './pageConfig';
import PageHeader from './PageHeader/PageHeader';
import GalleryNav from './GalleryNav/GalleryNav';
import Home from './pages/Home';
import handleQueryParams from './handleQueryParams';

import PageLayoutExamples from './styles/PageLayout/PageLayoutExamples';
import NxGlobalSidebarExample from './components/NxGlobalSidebar/NxGlobalSidebarExample';
import NxGlobalSidebarScrollingExample from './components/NxGlobalSidebar/NxGlobalSidebarScrollingExample';
import NxStatefulGlobalSidebarExample from './components/NxStatefulGlobalSidebar/NxStatefulGlobalSidebarExample';
import NxStatefulGlobalSidebar2Example from './components/NxStatefulGlobalSidebar2/NxStatefulGlobalSidebar2Example';
import NxGlobalSidebar2Example from './components/NxGlobalSidebar2/NxGlobalSidebar2Example';
import NxGlobalFooter2Example from './styles/NxGlobalFooter2/NxGlobalFooter2Example';
import NxGlobalFooter2InnerSidebarExample from './styles/NxGlobalFooter2/NxGlobalFooter2InnerSidebarExample';
import NxGlobalFooter2ViewportSizedExample from './styles/NxGlobalFooter2/NxGlobalFooter2ViewportSizedExample';
import NxGlobalFooter2ViewportSizedExpandingExample from './styles/NxGlobalFooter2/NxGlobalFooter2ViewportSizedExpandingExample';
import NxViewportSizedExample from './styles/NxViewportSized/NxViewportSizedExample';
import NxViewportSizedExpandingExample
  from './styles/NxViewportSized/NxViewportSizedExpandingExample';
import NxViewportSizedAdjacentExample
  from './styles/NxViewportSized/NxViewportSizedAdjacentExample';
import SectionScrollingWrapper from './styles/NxViewportSized/SectionScrollingWrapper';
import NxGlobalHeaderFullExample from './styles/NxGlobalHeader/NxGlobalHeaderFullExample';
import NxGlobalHeaderNoBackButtonExample from './styles/NxGlobalHeader/NxGlobalHeaderNoBackButtonExample';
import NxGlobalHeaderNoActionsExample from './styles/NxGlobalHeader/NxGlobalHeaderNoActionsExample';
import NxGlobalHeaderEmptyExample from './styles/NxGlobalHeader/NxGlobalHeaderEmptyExample';

import NxSystemNoticeGlobalSidebarExample from './styles/NxSystemNotice/NxSystemNoticeGlobalSidebarExample';
import NxSystemNoticeTraditionalPageExample from './styles/NxSystemNotice/NxSystemNoticeTraditionalPageExample';
import NxSystemNoticeMultipleExample from './styles/NxSystemNotice/NxSystemNoticeMultipleExample';
import NxGlobalSidebarFooterExample from './components/NxGlobalSidebarFooter/NxGlobalSidebarFooterExample';
import NxGlobalSidebarFooterMinimalExample
  from './components/NxGlobalSidebarFooter/NxGlobalSidebarFooterMinimalExample';
import NxGlobalSidebarFooterEmptyExample
  from './components/NxGlobalSidebarFooter/NxGlobalSidebarFooterEmptyExample';

import NxDrawerEscExample from './components/NxDrawer/NxDrawerEscExample';
import NxDrawerExample from './components/NxDrawer/NxDrawerExample';
import NxDrawerVariantExample from './components/NxDrawer/NxDrawerVariantExample';
import NxDrawerWithNxFormExample from './components/NxDrawer/NxDrawerWithNxFormExample';
import NxDrawerWithNxToastExample from './components/NxDrawer/NxDrawerWithNxToastExample';
import NxDrawerWithSubtitleOrDescriptionExample from './components/NxDrawer/NxDrawerWithSubtitleOrDescriptionExample';
import NxDrawerConditionalRenderingExample from './components/NxDrawer/NxDrawerConditionalRenderingExample';
import NxDrawerDisabledFunctionalityExample from './components/NxDrawer/NxDrawerDisabledFunctionalityExample';

import NxToastSimpleLayoutExample from './components/NxToast/NxToastSimpleLayoutExample';
import NxToastComplexLayoutExample from './components/NxToast/NxToastComplexLayoutExample';
import NxToastLegacyLayoutExample from './components/NxToast/NxToastLegacyLayoutExample';
import NxToastWithNxDrawerExample from './components/NxToast/NxToastWithNxDrawerExample';
import NxBreadcrumbGlobalHeaderExample from './components/NxBreadcrumb/NxBreadcrumbGlobalHeaderExample';

// number of pixels below the page header that deep links should scroll to
const SCROLL_PAGE_HEADER_PAD = 8;

const pageMappings = mergeAll(values(pageConfig));

function scrollTo(elementId: string | undefined): (() => void) | void {
  const el = elementId ? document.getElementById(elementId) : null;

  if (el) {
    function doElementScroll() {
      // This function is only used within `if (el)` so it's not going to be null
      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      const { y: elCurrentY } = el!.getBoundingClientRect(),
          { scrollY } = window,
          elDistanceFromTopOfDocument = scrollY + elCurrentY,
          pageHeader = document.getElementById('gallery-page-header'),
          pageHeaderHeight = pageHeader?.getBoundingClientRect()?.height ?? 0;

      window.scrollTo(0, elDistanceFromTopOfDocument - (pageHeaderHeight + SCROLL_PAGE_HEADER_PAD));

      // re-enable scrollRestoration for future page loads
      window.history.scrollRestoration = 'auto';
    }

    if (document.readyState === 'complete') {
      doElementScroll();
    }
    else {
      // disable the browser's automatic behavior of scrolling the user to their last known scroll position. This
      // happens _after_ the onload event and interferes with the programmatic scrolling in doElementScroll
      window.history.scrollRestoration = 'manual';

      // wait for fonts and things to load before scrolling
      window.addEventListener('load', doElementScroll, { once: true });
      return () => { window.removeEventListener('load', doElementScroll); };
    }
  }
  else {
    window.scrollTo(0, 0);
  }
}

function Page() {
  const { pageName, elementId } = useParams(),
      location = useLocation(),
      pageHeader = pageName || 'Home',
      Content = pageName ? pageMappings[pageName]?.content : Home;

  useEffect(function() {
    handleQueryParams(queryString.parse(location.search));
  }, [location.search]);

  // reset scroll position
  useEffect(function() {
    const tearDownScroll = scrollTo(elementId);
    return tearDownScroll;
  }, [elementId]);

  if (Content) {
    return (
      <NxPageMain>
        <div className="nx-page-title">
          <h1 className="nx-h1">
            {pageHeader}
          </h1>
        </div>
        <Content/>
      </NxPageMain>
    );
  }
  else {
    // unknown page
    return <Navigate to="/" />;
  }
}

function Application() {
  return (
    <Router>
      <Routes>
        <Route path="/pageLayouts/*"
               element={
                 <PageLayoutExamples />
               }>
        </Route>
        <Route path="/NxGlobalSidebarExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebarExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalSidebarScrollingExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebarScrollingExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxStatefulGlobalSidebarExample"
               element={
                 <SectionScrollingWrapper>
                   <NxStatefulGlobalSidebarExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalSidebar2Example"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebar2Example />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalFooter2Example"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalFooter2Example />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalFooter2InnerSidebarExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalFooter2InnerSidebarExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalFooter2ViewportSizedExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalFooter2ViewportSizedExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalFooter2ViewportSizedExpandingExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalFooter2ViewportSizedExpandingExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxStatefulGlobalSidebar2Example"
               element={
                 <SectionScrollingWrapper>
                   <NxStatefulGlobalSidebar2Example />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalHeaderFullExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalHeaderFullExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalHeaderNoBackButtonExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalHeaderNoBackButtonExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalHeaderNoActionsExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalHeaderNoActionsExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalHeaderEmptyExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalHeaderEmptyExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxToastSimpleLayoutExample"
               element={
                 <SectionScrollingWrapper>
                   <NxToastSimpleLayoutExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxToastWithNxDrawerExample"
               element={
                 <SectionScrollingWrapper>
                   <NxToastWithNxDrawerExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxToastComplexLayoutExample"
               element={
                 <SectionScrollingWrapper>
                   <NxToastComplexLayoutExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxToastLegacySectionScrollingExample"
               element={
                 <SectionScrollingWrapper>
                   <NxToastLegacyLayoutExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxToastLegacyPageScrollingExample"
               element={
                 <NxToastLegacyLayoutExample />
               }>
        </Route>
        <Route path="/NxSystemNoticeGlobalSidebarExample"
               element={
                 <SectionScrollingWrapper>
                   <NxSystemNoticeGlobalSidebarExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxSystemNoticeTraditionalPageExample"
               element={
                 <NxSystemNoticeTraditionalPageExample />
               }>
        </Route>
        <Route path="/NxSystemNoticeMultipleExample"
               element={
                 <SectionScrollingWrapper>
                   <NxSystemNoticeMultipleExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalSidebarFooterExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebarFooterExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalSidebarFooterMinimalExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebarFooterMinimalExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxGlobalSidebarFooterEmptyExample"
               element={
                 <SectionScrollingWrapper>
                   <NxGlobalSidebarFooterEmptyExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerVariantExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerVariantExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerWithNxFormExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerWithNxFormExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerWithNxToastExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerWithNxToastExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerEscExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerEscExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerWithSubtitleOrDescriptionExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerWithSubtitleOrDescriptionExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerConditionalRenderingExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerConditionalRenderingExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxDrawerDisabledFunctionalityExample"
               element={
                 <SectionScrollingWrapper>
                   <NxDrawerDisabledFunctionalityExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="/NxBreadcrumbGlobalHeaderExample"
               element={
                 <SectionScrollingWrapper>
                   <NxBreadcrumbGlobalHeaderExample />
                 </SectionScrollingWrapper>
               }>
        </Route>
        <Route path="*"
               element={
                 <>
                   <PageHeader />
                   <div className="nx-page-content">
                     <aside className="nx-page-sidebar" id="gallery-sidebar">
                       <GalleryNav />
                     </aside>
                     <Routes>
                       <Route path="/pages/:pageName/:elementId?"
                              element={
                                <Page />
                              }>
                       </Route>
                       <Route path="/"
                              element={
                                <Page />
                              }>
                       </Route>

                       {/* Special cases, these examples need their own page separate from their documentation */}
                       <Route path="/NxViewportSizedExample"
                              element={
                                <SectionScrollingWrapper>
                                  <NxViewportSizedExample />
                                </SectionScrollingWrapper>
                              }>
                       </Route>
                       <Route path="/NxViewportSizedExpandingExample"
                              element={
                                <SectionScrollingWrapper>
                                  <NxViewportSizedExpandingExample />
                                </SectionScrollingWrapper>
                              }>
                       </Route>
                       <Route path="/NxViewportSizedAdjacentExample"
                              element={
                                <SectionScrollingWrapper>
                                  <NxViewportSizedAdjacentExample />
                                </SectionScrollingWrapper>
                              }>
                       </Route>
                       <Route path="*"
                              element={
                                <Navigate to="/" />
                              }>
                       </Route>
                     </Routes>
                   </div>
                 </>
               }>
        </Route>
      </Routes>
    </Router>
  );
}

export default Application;
