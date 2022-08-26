/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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

import NxToastSimpleLayoutExample from './components/NxToast/NxToastSimpleLayoutExample';
import NxToastComplexLayoutExample from './components/NxToast/NxToastComplexLayoutExample';
import NxToastLegacySectionScrollingExample from './components/NxToast/NxToastLegacySectionScrollingExample';
import NxToastLegacyPageScrollingExample from './components/NxToast/NxToastLegacyPageScrollingExample';

const pageMappings = mergeAll(values(pageConfig));

function Page({ match, location }: RouteChildrenProps<{ pageName: string }>) {
  const pageName = match ? match.params.pageName : null,
      pageHeader = pageName || 'Home',
      Content = pageName ? pageMappings[pageName]?.content : Home;

  useEffect(function() {
    handleQueryParams(queryString.parse(location.search));
  }, [location.search]);

  if (Content) {
    // Put a key on <main> so that it re-renders entirely on route change, resetting scroll position
    return (
      <NxPageMain key={pageName || 'home'}>
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
    return <Redirect to="/" />;
  }
}

function Application() {
  return (
    <Router>
      <Switch>
        <Route path="/pageLayouts">
          <PageLayoutExamples />
        </Route>
        <Route exact path="/NxGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalSidebarScrollingExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarScrollingExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxStatefulGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxStatefulGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalHeaderFullExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderFullExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalHeaderNoBackButtonExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderNoBackButtonExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalHeaderNoActionsExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderNoActionsExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalHeaderEmptyExample">
          <SectionScrollingWrapper>
            <NxGlobalHeaderEmptyExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxToastSimpleLayoutExample">
          <SectionScrollingWrapper>
            <NxToastSimpleLayoutExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxToastComplexLayoutExample">
          <SectionScrollingWrapper>
            <NxToastComplexLayoutExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxToastLegacySectionScrollingExample">
          <SectionScrollingWrapper>
            <NxToastLegacySectionScrollingExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxToastLegacyPageScrollingExample">
          <NxToastLegacyPageScrollingExample />
        </Route>
        <Route exact path="/NxSystemNoticeGlobalSidebarExample">
          <SectionScrollingWrapper>
            <NxSystemNoticeGlobalSidebarExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxSystemNoticeTraditionalPageExample">
          <NxSystemNoticeTraditionalPageExample />
        </Route>
        <Route exact path="/NxSystemNoticeMultipleExample">
          <SectionScrollingWrapper>
            <NxSystemNoticeMultipleExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalSidebarFooterExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalSidebarFooterMinimalExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterMinimalExample />
          </SectionScrollingWrapper>
        </Route>
        <Route exact path="/NxGlobalSidebarFooterEmptyExample">
          <SectionScrollingWrapper>
            <NxGlobalSidebarFooterEmptyExample />
          </SectionScrollingWrapper>
        </Route>
        <Route>
          <PageHeader />
          <div className="nx-page-content">
            <aside className="nx-page-sidebar" id="gallery-sidebar">
              <GalleryNav />
            </aside>
            <Switch>
              <Route path="/pages/:pageName" component={Page} />
              <Route exact path="/" component={Page} />

              {/* Special cases, these examples need their own page separate from their documentation */}
              <Route exact path="/NxViewportSizedExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedExample />
                </SectionScrollingWrapper>
              </Route>
              <Route exact path="/NxViewportSizedExpandingExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedExpandingExample />
                </SectionScrollingWrapper>
              </Route>
              <Route exact path="/NxViewportSizedAdjacentExample">
                <SectionScrollingWrapper>
                  <NxViewportSizedAdjacentExample />
                </SectionScrollingWrapper>
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default Application;
