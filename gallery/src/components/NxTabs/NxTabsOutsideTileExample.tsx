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
  NxTabPanel
} from '@sonatype/react-shared-components';

const NxTabsTileHeaderExample = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
      <NxTabList aria-label="Tabs outside of tiles">
        <NxTab>Tab</NxTab>
        <NxTab>Tab with longer name</NxTab>
        <NxTab>Another Tab 3</NxTab>
        <NxTab>Fourth Tab</NxTab>
      </NxTabList>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
          </header>
          <div className="nx-tile-content">
            Foo
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
          </header>
          <div className="nx-tile-content">
            Bar
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
          </header>
          <div className="nx-tile-content">
            Baz
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
          </header>
          <div className="nx-tile-content">
            Qwerty
          </div>
        </section>
      </NxTabPanel>
    </NxTabs>
  );
};

export default NxTabsTileHeaderExample;
