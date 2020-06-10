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
  NxTabLabel,
  NxTab
} from '@sonatype/react-shared-components';

const NxTableSimpleExample = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  return (
    <NxTabs>
      <NxTabList>
        <NxTabLabel active={activeTabId === 'tab-1'} onClick={() => setActiveTabId('tab-1')}>Tab 1</NxTabLabel>
        <NxTabLabel active={activeTabId === 'tab-2'} onClick={() => setActiveTabId('tab-2')}>Tab 2</NxTabLabel>
        <NxTabLabel active={activeTabId === 'tab-3'} onClick={() => setActiveTabId('tab-3')}>Tab 3</NxTabLabel>
        <NxTabLabel active={activeTabId === 'tab-4'} onClick={() => setActiveTabId('tab-4')}>Tab 4</NxTabLabel>
      </NxTabList>
      {activeTabId === 'tab-1' && <NxTab>Tab 1</NxTab>}
      {activeTabId === 'tab-2' && <NxTab>Tab 2</NxTab>}
      {activeTabId === 'tab-3' && <NxTab>Tab 3</NxTab>}
      {activeTabId === 'tab-4' && <NxTab>Tab 4</NxTab>}
    </NxTabs>
  );
};

export default NxTableSimpleExample;
