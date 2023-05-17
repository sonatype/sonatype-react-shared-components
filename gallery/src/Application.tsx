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
        <Route path="/pageLayouts">
          <PageLayoutExamples />
        </Route>
        <Route path="/NxGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalSidebarScrollingExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarScrollingExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxStatefulGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxStatefulGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalHeaderFullExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderFullExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalHeaderNoBackButtonExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderNoBackButtonExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalHeaderNoActionsExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderNoActionsExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalHeaderEmptyExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderEmptyExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxToastSimpleLayoutExample">
          <SectionScrollingWrapper>
            <NxToastSimpleLayoutExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxToastWithNxDrawerExample">
          <SectionScrollingWrapper>
            <NxToastWithNxDrawerExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxToastComplexLayoutExample">
          <SectionScrollingWrapper>
            <NxToastComplexLayoutExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxToastLegacySectionScrollingExample">
          <SectionScrollingWrapper>
            <NxToastLegacyLayoutExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxToastLegacyPageScrollingExample">
          <NxToastLegacyLayoutExample />
        </Route>
        <Route path="/NxSystemNoticeGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxSystemNoticeGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxSystemNoticeTraditionalPageExample">
          <NxSystemNoticeTraditionalPageExample />
        </Route>
        <Route path="/NxSystemNoticeMultipleExample">
          <SectionScrollingWrapper>
            <NxSystemNoticeMultipleExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalSidebarFooterExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalSidebarFooterMinimalExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterMinimalExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxGlobalSidebarFooterEmptyExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterEmptyExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerVariantExample">
          <SectionScrollingWrapper>
            <NxDrawerVariantExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerWithNxFormExample">
          <SectionScrollingWrapper>
            <NxDrawerWithNxFormExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerWithNxToastExample">
          <SectionScrollingWrapper>
            <NxDrawerWithNxToastExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerEscExample">
          <SectionScrollingWrapper>
            <NxDrawerEscExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerWithSubtitleOrDescriptionExample">
          <SectionScrollingWrapper>
            <NxDrawerWithSubtitleOrDescriptionExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerConditionalRenderingExample">
          <SectionScrollingWrapper>
            <NxDrawerConditionalRenderingExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxDrawerExample">
          <SectionScrollingWrapper>
            <NxDrawerExample />
          </SectionScrollingWrapper>
        </Route>
        <Route path="/NxBreadcrumbGlobalHeaderExample">
          <SectionScrollingWrapper>
            <NxBreadcrumbGlobalHeaderExample />
          </SectionScrollingWrapper>
        </Route>
        <Route>
          <PageHeader />
          <div className="nx-page-content">
            <aside className="nx-page-sidebar" id="gallery-sidebar">
              <GalleryNav />
            </aside>
            <Routes>
              <Route path="/pages/:pageName/:elementId?">
                <Page />
              </Route>
              <Route path="/">
                <Page />
              </Route>

              {/* Special cases, these examples need their own page separate from their documentation */}
              <Route path="/NxViewportSizedExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedExample />
                </SectionScrollingWrapper>
              </Route>
              <Route path="/NxViewportSizedExpandingExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedExpandingExample />
                </SectionScrollingWrapper>
              </Route>
              <Route path="/NxViewportSizedAdjacentExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedAdjacentExample />
                </SectionScrollingWrapper>
              </Route>
              <Route>
                <Navigate to="/" />
              </Route>
            </Routes>
          </div>
        </Route>
      </Routes>
    </Router>
  );
}

export default Application;
