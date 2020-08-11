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
import queryString from 'query-string';

import { PageMapping } from './pageConfigTypes';
import pageConfig from './pageConfig';
import PageHeader from './PageHeader';
import GalleryNav from './GalleryNav';
import Home from './pages/Home';

const pageMappings: PageMapping = mergeAll(values(pageConfig));

function Page({ match, location }: RouteChildrenProps<{ pageName: string }>) {
  const pageName = match ? match.params.pageName : null,
      pageHeader = pageName || 'Home',
      Content = pageName ? pageMappings[pageName] : Home;

  // Different page layout modes can be triggered via query params.  These page layout modes are
  // implemented via classes on the <html> element. This feature exists so that visual tests
  // of all page layout modes can be done
  useEffect(function() {
    const queryParams = queryString.parse(location.search),
        htmlEl = document.documentElement;

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    htmlEl!.classList.toggle('nx-html--page-scrolling', queryParams.disablePageScrolling !== 'true');
    htmlEl!.classList.toggle('gallery-hide-sidebar', queryParams.hideSidebar === 'true');
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
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
