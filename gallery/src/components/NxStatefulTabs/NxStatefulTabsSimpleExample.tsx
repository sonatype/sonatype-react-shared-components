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
  <NxStatefulTabs defaultActiveTab={0} onTabSelect={(id) => alert(`selected tab ${id}`)}>
    <NxTabList>
      <NxTab>Tab 1</NxTab>
      <NxTab>Tab 2</NxTab>
      <NxTab>Tab 3</NxTab>
      <NxTab>Tab 4</NxTab>
    </NxTabList>
    <NxTabPanel>Tab 1</NxTabPanel>
    <NxTabPanel>Tab 2</NxTabPanel>
    <NxTabPanel>Tab 3</NxTabPanel>
    <NxTabPanel>Tab 4</NxTabPanel>
  </NxStatefulTabs>
);

export default NxStatefulTabsSimpleExample;
