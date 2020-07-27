/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Children, cloneElement, isValidElement, useMemo } from 'react';
import classnames from 'classnames';

import { Props as NxTabProps } from '../NxTab/types';
import { Props as NxTabPanelProps } from '../NxTabPanel/types';

import { Props, propTypes } from './types';
export { Props } from './types';

interface TabContextType {
  activeTab?: number | null;
  rootId: string;
  index: number;
  onTabSelect: (index: number) => void;
};

export const TabContext = React.createContext<TabContextType>({
  activeTab: null,
  rootId: '',
  index: -1,
  onTabSelect: () => {}
});

let tabId = 0;

const NxTabs = function NxTabsElement(props: Props) {
  const { activeTab, onTabSelect, id, className, children, ...attrs } = props;

  const [tabList, ...tabPanels] = Children.toArray(children);

  if (!isValidElement(tabList)) {
    console.error('NxTabs must have an NxTabList');
    return null;
  }
  else if (tabList.props.children.length === 0) {
    console.error('NxTabs must have at least one NxTab');
    return null;
  }

  const rootId = id || 'nx-tabs-' + useMemo(() => tabId++, []);

  const clonedTabList = cloneElement(tabList, {
    children: Children.toArray(tabList.props.children).map((tab, index) => {
      if (isValidElement<NxTabProps>(tab)) {
        const activeTabContext: TabContextType = {
          activeTab,
          rootId,
          index,
          onTabSelect: onTabSelect || (() => { })
        };
        return <TabContext.Provider key={index} value={activeTabContext}>{tab}</TabContext.Provider>;
      }
      return tab;
    })
  });

  const clonedTabPanels = tabPanels.map((tabPanel, index) => {
    if (isValidElement<NxTabPanelProps>(tabPanel)) {
      const activeTabContext: TabContextType = {
        activeTab,
        rootId,
        index,
        onTabSelect: onTabSelect || (() => { })
      };
      return <TabContext.Provider key={index} value={activeTabContext}>{tabPanel}</TabContext.Provider>;
    }
    return tabPanel;
  });

  return (
    <div id={rootId} className={classnames('nx-tabs', className)} {...attrs}>
      {clonedTabList}
      {clonedTabPanels}
    </div>
  );
};

NxTabs.propTypes = propTypes;

export default NxTabs;
