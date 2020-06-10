/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { cloneElement, isValidElement, useState, Children, FunctionComponent, ReactElement } from 'react';

import NxTabs from '../NxTabs';
import { Props, propTypes } from '../types';

/**
 * A stateful component for rendering clickable tabs.
 * Clicking on a NxTabLabel will show the associated Tab (determined by using an index number for each).
 * This assumes the following:
 * * The first child is an NxTabList.
 * * There is at least one NxTab child for each NxTabLabel in the NxTabList.
 * * The NxTabList only contains NxTabLabel components for children.
 */
const NxStatefulTabs: FunctionComponent<Props> = function NxStatefulTabsElement(props: Props): ReactElement<Props> {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { children, ...attrs } = props;
  const [originalTabList, ...tabs] = Children.toArray(children);

  if (!isValidElement(originalTabList)) {
    throw 'tab list was not a valid ReactElement';
  }

  const tabList = cloneElement(originalTabList, {
    children: Children.map(originalTabList.props.children, (child, index) => cloneElement(child, {
      active: index === activeTabIndex,
      onClick: () => setActiveTabIndex(index)
    }))
  });
  const activeTab = tabs[activeTabIndex];

  return (
    <NxTabs {...attrs}>
      {tabList}
      {activeTab}
    </NxTabs>
  );
};

NxStatefulTabs.propTypes = propTypes;
export default NxStatefulTabs;
