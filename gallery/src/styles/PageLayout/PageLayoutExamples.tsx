/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SectionScrollingWrapper from '../NxViewportSized/SectionScrollingWrapper';

import LegacySidebarSystemNoticeLayout from './LegacySidebarSystemNoticeLayout';
import LegacySidebarLayout from './LegacySidebarLayout';
import LegacySystemNoticeLayout from './LegacySystemNoticeLayout';
import LegacyLayout from './LegacyLayout';
import GlobalSidebarHeaderSystemNoticeSidebarLayout from './GlobalSidebarHeaderSystemNoticeSidebarLayout';
import GlobalSidebarHeaderSidebarLayout from './GlobalSidebarHeaderSidebarLayout';
import GlobalSidebarHeaderSystemNoticeLayout from './GlobalSidebarHeaderSystemNoticeLayout';
import GlobalSidebarHeaderLayout from './GlobalSidebarHeaderLayout';
import GlobalSidebarSystemNoticeSidebarLayout from './GlobalSidebarSystemNoticeSidebarLayout';
import GlobalSidebarSidebarLayout from './GlobalSidebarSidebarLayout';
import GlobalSidebarSystemNoticeLayout from './GlobalSidebarSystemNoticeLayout';
import GlobalSidebarLayout from './GlobalSidebarLayout';

const pageScrollingPages = [
      LegacySidebarSystemNoticeLayout,
      LegacySidebarLayout,
      LegacySystemNoticeLayout,
      LegacyLayout
    ],
    sectionScrollingPages = [
      LegacySidebarSystemNoticeLayout,
      LegacySidebarLayout,
      LegacySystemNoticeLayout,
      LegacyLayout,
      GlobalSidebarHeaderSystemNoticeSidebarLayout,
      GlobalSidebarHeaderSidebarLayout,
      GlobalSidebarHeaderSystemNoticeLayout,
      GlobalSidebarHeaderLayout,
      GlobalSidebarSystemNoticeSidebarLayout,
      GlobalSidebarSidebarLayout,
      GlobalSidebarSystemNoticeLayout,
      GlobalSidebarLayout
    ];

const PageLayoutExamples = () =>
  <Switch>
    {pageScrollingPages.map(PageComponent =>
      <Route key={PageComponent.name} exact path={`/pageLayouts/pageScrolling/${PageComponent.name}`}>
        <PageComponent />
      </Route>
    )}
    {sectionScrollingPages.map(PageComponent =>
      <Route key={PageComponent.name} exact path={`/pageLayouts/${PageComponent.name}`}>
        <SectionScrollingWrapper>
          <PageComponent />
        </SectionScrollingWrapper>
      </Route>
    )}
  </Switch>;

export default PageLayoutExamples;
