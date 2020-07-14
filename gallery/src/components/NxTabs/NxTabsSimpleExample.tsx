/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTabs,
  NxTabList,
  NxTab,
  NxTabPanel
} from '@sonatype/react-shared-components';

const NxTabsSimpleExample = () => {
  const [activeTabId, setActiveTabId] = useState<number | null | undefined>(0);

  function handleTabSelect(index: number | null | undefined) {
    setActiveTabId(index);
  }

  return (
    <NxTabs activeTab={activeTabId} onTabSelect={handleTabSelect}>
      <NxTabList aria-label="Simple Tabs">
        <NxTab>Tab 1</NxTab>
        <NxTab>Tab 2</NxTab>
        <NxTab>Tab 3</NxTab>
        <NxTab>Tab 4</NxTab>
      </NxTabList>
      <NxTabPanel>Tab 1</NxTabPanel>
      <NxTabPanel>Tab 2</NxTabPanel>
      <NxTabPanel>Tab 3</NxTabPanel>
      <NxTabPanel>Tab 4</NxTabPanel>
    </NxTabs>
  );
};

export default NxTabsSimpleExample;
