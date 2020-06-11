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
  NxStatefulTab,
  NxTabPanel
} from '@sonatype/react-shared-components';

const NxStatefulTabsSimpleExample = () => {
  return (
    <NxStatefulTabs>
      <NxTabList>
        <NxStatefulTab id="tab-1">Tab 1</NxStatefulTab>
        <NxStatefulTab id="tab-2">Tab 2</NxStatefulTab>
        <NxStatefulTab id="tab-3">Tab 3</NxStatefulTab>
        <NxStatefulTab id="tab-4" onClick={() => alert('click')}>Tab 4</NxStatefulTab>
      </NxTabList>
      <NxTabPanel labelledBy="tab-1">Tab 1</NxTabPanel>
      <NxTabPanel labelledBy="tab-2">Tab 2</NxTabPanel>
      <NxTabPanel labelledBy="tab-3">Tab 3</NxTabPanel>
      <NxTabPanel labelledBy="tab-4">Tab 4</NxTabPanel>
    </NxStatefulTabs>
  );
};

export default NxStatefulTabsSimpleExample;
