/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { isValidElement, useState, Children } from 'react';

import NxTabs from '../NxTabs';
import { Props as NxTabProps } from '../../NxTab/types';

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
  const { children, ...attrs } = props;
  const [tabList, ...tabPanels] = Children.toArray(children);

  if (!isValidElement(tabList)) {
    console.error('NxStatefulTabs must have an NxTabList')
    return null;
  }
  else if (tabList.props.children.length === 0) {
    console.error('NxStatefulTabs must have at least one NxTab');
    return null;
  }

  const firstActiveTab = (Children.toArray(tabList.props.children)[0].props as NxTabProps).id;
  const [activeTab, setActiveTab] = useState(firstActiveTab);

  return (
    <NxTabs activeTab={activeTab} onTabSelect={(id) => setActiveTab(id)} {...attrs}>
      {tabList}
      {tabPanels}
    </NxTabs>
  );
};

NxStatefulTabs.propTypes = propTypes;

export default NxStatefulTabs;
