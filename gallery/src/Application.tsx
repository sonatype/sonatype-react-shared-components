/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect } from 'react';
import classnames from 'classnames';
import { RouteChildrenProps } from 'react-router';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { mergeAll, values } from 'ramda';

// polyfill Array.prototype.includes which is used in query-string
import 'core-js/features/array/includes';
import queryString from 'query-string';

import { PageMapping, PageMappingValue } from './pageConfigTypes';
import pageConfig from './pageConfig';
import PageHeader from './PageHeader';
import GalleryNav from './GalleryNav';
import Home from './pages/Home';
import handleQueryParams from './handleQueryParams';

const pageMappings: PageMapping = mergeAll(values(pageConfig));

function Page({ match, location }: RouteChildrenProps<{ pageName: string }>) {
  const pageName = match ? match.params.pageName : null,
      pageHeader = pageName || 'Home',
      pageMapping: PageMappingValue = pageName ? pageMappings[pageName] : Home,
      pageMappingObj = 'Component' in pageMapping ? pageMapping : { Component: pageMapping },
      { Component: Content, disablePageScrolling, pageMainClassName } = pageMappingObj;

  useEffect(function() {
    handleQueryParams(queryString.parse(location.search), disablePageScrolling);
  }, [location.search, location.pathname]);

  if (Content) {
    // Put a key on <main> so that it re-renders entirely on route change, resetting scroll position
    return (
      <main key={pageName || 'home'} className={classnames('nx-page-main', pageMainClassName)}>
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
        <aside className="nx-page-sidebar" id="gallery-sidebar">
          <GalleryNav />
        </aside>
        <Switch>
          <Route path="/pages/:pageName" component={Page} />
          <Route exact path="/" component={Page} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Application;
