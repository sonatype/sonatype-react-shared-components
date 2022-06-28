/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxList,
  NxTab,
  NxTabList,
  NxTabPanel,
  NxTabs,
  NxTextLink
} from '@sonatype/react-shared-components';

const NxTabsSimpleExample = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  return (
    <>
      <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
        <NxTabList>
          <NxTab>Tab 1</NxTab>
          <NxTab>Tab 2</NxTab>
          <NxTab>Tab 3</NxTab>
          <NxTab>Tab 4</NxTab>
        </NxTabList>
        <NxTabPanel>
          <NxList bulleted>
            <NxList.Item>
              <NxList.Text><NxTextLink href="https://google.ca">Google Canada</NxTextLink></NxList.Text>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>This is another item</NxList.Text>
            </NxList.Item>
          </NxList>
        </NxTabPanel>
        <NxTabPanel>
          <NxList bulleted>
            <NxList.Item>
              <NxList.Text><NxTextLink href="https://https://www.metmuseum.org/">Met Museum</NxTextLink></NxList.Text>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>This is another item</NxList.Text>
            </NxList.Item>
          </NxList>
        </NxTabPanel>
        <NxTabPanel>Tab 3</NxTabPanel>
        <NxTabPanel>Tab 4</NxTabPanel>
      </NxTabs>
    </>
  );
};

export default NxTabsSimpleExample;
