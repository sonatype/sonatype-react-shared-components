/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router';
import { NxTab, NxTabList, NxTabsProps } from '@sonatype/react-shared-components';

export interface TabRouting {
  tabList: ReactElement;
  activeTab: NxTabsProps['activeTab'];
  onTabSelect: NxTabsProps['onTabSelect'];
}

export default function useTabRouting(pageName: string, tabList: readonly string[]) {
  const encodedPageName = encodeURIComponent(pageName),
      match = useRouteMatch<{ tab: string }>(`/pages/${encodedPageName}/:tab`),
      tab = match?.params.tab,
      activeTab = tab && tabList.indexOf(tab) || 0;

  function onTabSelect(tabIndex: number) {
    const tabName = tabList[tabIndex];

    window.location.href = `#/pages/${encodedPageName}/${encodeURIComponent(tabName)}`;
  }

  return {
    tabList: <NxTabList>{ tabList.map(tab => <NxTab key={tab}>{tab}</NxTab>) }</NxTabList>,
    activeTab,
    onTabSelect
  };
}
