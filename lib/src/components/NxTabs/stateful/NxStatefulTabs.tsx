/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { cloneElement, isValidElement, useState, Children } from 'react';

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
  const [originalTabList, ...tabPanels] = Children.toArray(children);

  if (!isValidElement(originalTabList)) {
    return null;
  }
  else if (originalTabList.props.children.length === 0) {
    return null;
  }

  const firstActiveTab = (Children.toArray(originalTabList.props.children)[0].props as NxTabProps).id;
  const [activeTab, setActiveTab] = useState(firstActiveTab);

  const tabList = cloneElement(originalTabList, {
    children: Children.map(originalTabList.props.children, (child) => cloneElement(child, {
      onKeyPress: function(event: React.KeyboardEvent<NxTabProps>) {
        if (event.key === ' ') {
          event.preventDefault();
          setActiveTab(child.props.id);
        }
        child.props.onKeyPress && child.props.onKeyPress.apply(null, arguments);
      },
      onClick: function() {
        setActiveTab(child.props.id);
        child.props.onClick && child.props.onClick.apply(null, arguments);
      }
    }))
  });

  return (
    <NxTabs activeTab={activeTab} {...attrs}>
      {tabList}
      {tabPanels}
    </NxTabs>
  );
};

NxStatefulTabs.propTypes = propTypes;

export default NxStatefulTabs;
