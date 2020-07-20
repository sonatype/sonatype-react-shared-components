/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import NxTabs from '../NxTabs';

import { Props, propTypes } from './types';

/**
 * A stateful component for rendering clickable tabs.
 * Clicking on a NxTabLabel will show the associated Tab (determined by using an index number for each).
 * This assumes the following:
 * * The first child must be a NxTabList component.
 * * There is at least one NxTabPanel component for each NxTab in the NxTabList component.
 * * The NxTabPanel must have a labelledBy prop that matches the id of an NxTab.
 */
const NxStatefulTabs = function NxStatefulTabsElement(props: Props) {
  const { defaultActiveTab, children, onTabSelect, ...attrs } = props;

  const [activeTab, setActiveTab] = useState<number | null | undefined>(defaultActiveTab);

  function handleTabSelect(index: number | null | undefined) {
    if (onTabSelect) {
      onTabSelect(index);
    }
    setActiveTab(index);
  }

  return (
    <NxTabs activeTab={activeTab} onTabSelect={handleTabSelect} {...attrs}>{children}</NxTabs>
  );
};

NxStatefulTabs.propTypes = propTypes;

export default NxStatefulTabs;
