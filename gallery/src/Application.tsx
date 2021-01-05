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

// polyfill Array.prototype.includes which is used in query-string
import 'core-js/features/array/includes';
import queryString from 'query-string';

import { PageMapping } from './pageConfigTypes';
import pageConfig from './pageConfig';
import PageHeader from './PageHeader';
import GalleryNav from './GalleryNav';
import Home from './pages/Home';
import handleQueryParams from './handleQueryParams';

import NxViewportSizedExample from './styles/NxViewportSized/NxViewportSizedExample';
import NxViewportSizedExpandingExample
  from './styles/NxViewportSized/NxViewportSizedExpandingExample';
import SectionScrollingWrapper from './styles/NxViewportSized/SectionScrollingWrapper';
import { NxErrorAlert } from '@sonatype/react-shared-components';

const pageMappings: PageMapping = mergeAll(values(pageConfig));

function Page({ match, location }: RouteChildrenProps<{ pageName: string }>) {
  const pageName = match ? match.params.pageName : null,
      pageHeader = pageName || 'Home',
      Content = pageName ? pageMappings[pageName] : Home;

  useEffect(function() {
    handleQueryParams(queryString.parse(location.search));
  }, [location.search]);

  if (Content) {
    // Put a key on <main> so that it re-renders entirely on route change, resetting scroll position
    return (
      <main key={pageName || 'home'} className="nx-page-main">
        <div className="nx-page-title">
          <h1 className="nx-h1">
            {pageHeader}
          </h1>
        </div>
        <Content/>
      </main>
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
      <PageHeader />
      <div className="nx-page-content">
        <Switch>
          <Route exact path="/PageLevelAlertExample">
            <NxErrorAlert>
              This is an example of a page-level alert. Use your browser's back button to return to
              another page of the RSC gallery.
            </NxErrorAlert>
          </Route>
          <Route>
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
              <Redirect to="/" />
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Application;
