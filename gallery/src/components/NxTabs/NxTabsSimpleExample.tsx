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

const NxTableSimpleExample = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  return (
    <NxTabs>
      <NxTabList aria-label="Simple Tabs">
        <NxTab id="tab-1" active={activeTabId === 'tab-1'} onClick={() => setActiveTabId('tab-1')}>Tab 1</NxTab>
        <NxTab id="tab-2" active={activeTabId === 'tab-2'} onClick={() => setActiveTabId('tab-2')}>Tab 2</NxTab>
        <NxTab id="tab-3" active={activeTabId === 'tab-3'} onClick={() => setActiveTabId('tab-3')}>Tab 3</NxTab>
        <NxTab id="tab-4" active={activeTabId === 'tab-4'} onClick={() => setActiveTabId('tab-4')}>Tab 4</NxTab>
      </NxTabList>
      {activeTabId === 'tab-1' && <NxTabPanel labelledBy="tab-1">Tab 1</NxTabPanel>}
      {activeTabId === 'tab-2' && <NxTabPanel labelledBy="tab-2">Tab 2</NxTabPanel>}
      {activeTabId === 'tab-3' && <NxTabPanel labelledBy="tab-3">Tab 3</NxTabPanel>}
      {activeTabId === 'tab-4' && <NxTabPanel labelledBy="tab-4">Tab 4</NxTabPanel>}
    </NxTabs>
  );
};

export default NxTableSimpleExample;
