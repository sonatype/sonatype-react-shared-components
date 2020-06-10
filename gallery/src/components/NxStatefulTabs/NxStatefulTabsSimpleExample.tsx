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
  NxTabLabel,
  NxTab
} from '@sonatype/react-shared-components';

const NxTableSimpleExample = () => {
  return (
    <NxStatefulTabs>
      <NxTabList>
        <NxTabLabel>Tab 1</NxTabLabel>
        <NxTabLabel>Tab 2</NxTabLabel>
        <NxTabLabel>Tab 3</NxTabLabel>
        <NxTabLabel>Tab 4</NxTabLabel>
      </NxTabList>
      <NxTab>Tab 1</NxTab>
      <NxTab>Tab 2</NxTab>
      <NxTab>Tab 3</NxTab>
      <NxTab>Tab 4</NxTab>
    </NxStatefulTabs>
  );
};

export default NxTableSimpleExample;
