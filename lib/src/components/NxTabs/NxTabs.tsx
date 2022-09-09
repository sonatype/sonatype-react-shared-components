/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Children, cloneElement, isValidElement } from 'react';
import classnames from 'classnames';

import { useUniqueId } from '../../util/idUtil';
import TabContext from './TabContext';
import { TabContextType, NxTabsProps, nxTabsPropTypes } from './types';

export { NxTabsProps } from './types';

import './NxTabs.scss';

const NxTabs = function NxTabsElement(props: NxTabsProps) {
  const {
    activeTab,
    onTabSelect,
    id,
    className,
    children,
    ...attrs
  } = props;

  const [tabList, ...tabPanels] = Children.toArray(children);

  if (!isValidElement(tabList)) {
    console.error('NxTabs must have an NxTabList');
    return null;
  }
  else if (tabList.props.children.length === 0) {
    console.error('NxTabs must have at least one NxTab');
    return null;
  }

  const rootId = useUniqueId('nx-tabs', id);

  const clonedTabList = cloneElement(tabList, {
    children: Children.toArray(tabList.props.children).map((tab, index) => {
      const activeTabContext: TabContextType = {
        activeTab,
        rootId,
        index,
        onTabSelect
      };
      return <TabContext.Provider key={index} value={activeTabContext}>{tab}</TabContext.Provider>;
    })
  });

  const clonedTabPanels = tabPanels.map((tabPanel, index) => {
    const activeTabContext: TabContextType = {
      activeTab,
      rootId,
      index,
      onTabSelect
    };
    return <TabContext.Provider key={index} value={activeTabContext}>{tabPanel}</TabContext.Provider>;
  });

  return (
    <div id={rootId} className={classnames('nx-tabs', className)} {...attrs}>
      {clonedTabList}
      {clonedTabPanels}
    </div>
  );
};

NxTabs.propTypes = nxTabsPropTypes;

export default NxTabs;
