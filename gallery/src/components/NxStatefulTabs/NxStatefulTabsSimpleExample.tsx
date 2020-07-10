/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxStatefulTabs,
  NxTabList,
  NxTab,
  NxTabPanel
} from '@sonatype/react-shared-components';

const NxStatefulTabsSimpleExample = () => (
  <NxStatefulTabs onTabSelect={(id: string) => alert(`selected tab ${id}`)}>
    <NxTabList>
      <NxTab id="tab-1">Tab 1</NxTab>
      <NxTab id="tab-2">Tab 2</NxTab>
      <NxTab id="tab-3">Tab 3</NxTab>
      <NxTab id="tab-4">Tab 4</NxTab>
    </NxTabList>
    <NxTabPanel labelledBy="tab-1">Tab 1</NxTabPanel>
    <NxTabPanel labelledBy="tab-2">Tab 2</NxTabPanel>
    <NxTabPanel labelledBy="tab-3">Tab 3</NxTabPanel>
    <NxTabPanel labelledBy="tab-4">Tab 4</NxTabPanel>
  </NxStatefulTabs>
);

export default NxStatefulTabsSimpleExample;
