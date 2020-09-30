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
  const [activeTabId, setActiveTabId] = useState<number>(0);

  function handleTabSelect(index: number) {
    setActiveTabId(index);
  }

  return (
    <div className="nx-tile">
      <div className="nx-tile-content">
        <NxTabs activeTab={activeTabId} onTabSelect={handleTabSelect} id="test-tab-list">
          <NxTabList aria-label="Tabs in a tile with no header">
            <NxTab data-text="Tab">Tab</NxTab>
            <NxTab data-text="Tab with longer name">Tab with longer name</NxTab>
            <NxTab data-text="Another Tab 3">Another Tab 3</NxTab>
            <NxTab data-text="Forth Tab">Forth Tab</NxTab>
          </NxTabList>
          <NxTabPanel>Tab 1</NxTabPanel>
          <NxTabPanel>Tab 2</NxTabPanel>
          <NxTabPanel>Tab 3</NxTabPanel>
          <NxTabPanel>Tab 4</NxTabPanel>
        </NxTabs>
      </div>
    </div>
  );
};

export default NxTabsSimpleExample;
