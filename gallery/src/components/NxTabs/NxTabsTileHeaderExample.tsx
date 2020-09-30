/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTabs,
  NxTabList,
  NxTab,
  NxTabPanel,
  NxButton
} from '@sonatype/react-shared-components';

const NxTabsTileHeaderExample = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  function handleTabSelect(index: number) {
    setActiveTabId(index);
  }

  return (
    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
      </header>
      <div className="nx-tile-content">
        <NxTabs activeTab={activeTabId} onTabSelect={handleTabSelect}>
          <NxTabList aria-label="Tabs in a tile">
            <NxTab>Tab</NxTab>
            <NxTab>Tab with longer name</NxTab>
            <NxTab>Another Tab 3</NxTab>
            <NxTab>Forth Tab</NxTab>
          </NxTabList>
          <NxTabPanel>Tab 1</NxTabPanel>
          <NxTabPanel>Tab 2</NxTabPanel>
          <NxTabPanel>Tab 3</NxTabPanel>
          <NxTabPanel>Tab 4</NxTabPanel>
        </NxTabs>
      </div>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton variant="primary">Button</NxButton>
        </div>
      </footer>
    </section>
  );
};

export default NxTabsTileHeaderExample;
