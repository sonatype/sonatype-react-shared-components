/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { cloneElement, isValidElement, useState, Children } from 'react';

import NxTabs from '../NxTabs';
import { Props as NxTabProps } from '../../NxTab/types';

import { Props, propTypes } from '../types';

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
  const [originalTabList, ...tabPanels] = Children.toArray(children);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  if (!isValidElement(originalTabList)) {
    throw 'tab list was not a valid ReactElement';
  }

  const firstTab = originalTabList.props.children[0];
  if (activeTabId == null && isValidElement(firstTab)) {
    const props = firstTab.props as NxTabProps;
    setActiveTabId(props.id);
  }

  const tabList = cloneElement(originalTabList, {
    children: Children.map(originalTabList.props.children, (child) => cloneElement(child, {
      active: child.props.id === activeTabId,
      onClick: function() {
        setActiveTabId(child.props.id);
        child.props.onClick && child.props.onClick.apply(null, arguments);
      }
    }))
  });
  const activeTab = tabPanels.find(tabPanel => isValidElement(tabPanel) && tabPanel.props.labelledBy === activeTabId);

  return (
    <NxTabs {...attrs}>
      {tabList}
      {activeTab}
    </NxTabs>
  );
};

NxStatefulTabs.propTypes = propTypes;

export default NxStatefulTabs;
