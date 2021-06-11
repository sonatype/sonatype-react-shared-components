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
  NxTableRow,
  NxTable,
  NxTableCell,
  NxTableHead,
  NxTableBody
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
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile 1</h2></div>
          </header>
          <div className="nx-tile-content">
            Foo
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile 2</h2></div>
          </header>
          <div className="nx-tile-content">
            Bar
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <section className="nx-tile">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title"><h2 className="nx-h2">Tile 3</h2></div>
          </header>
          <div className="nx-tile-content">
            Baz
          </div>
        </section>
      </NxTabPanel>
      <NxTabPanel>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Oct</NxTableCell>
              <NxTableCell>Dev</NxTableCell>
              <NxTableCell>Hex</NxTableCell>
              <NxTableCell>Char</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>040</NxTableCell>
              <NxTableCell>32</NxTableCell>
              <NxTableCell>20</NxTableCell>
              <NxTableCell>(space)</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>041</NxTableCell>
              <NxTableCell>33</NxTableCell>
              <NxTableCell>21</NxTableCell>
              <NxTableCell>!</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>042</NxTableCell>
              <NxTableCell>34</NxTableCell>
              <NxTableCell>22</NxTableCell>
              <NxTableCell>{'"'}</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>043</NxTableCell>
              <NxTableCell>35</NxTableCell>
              <NxTableCell>23</NxTableCell>
              <NxTableCell>#</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>044</NxTableCell>
              <NxTableCell>36</NxTableCell>
              <NxTableCell>24</NxTableCell>
              <NxTableCell>$</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </NxTabPanel>
    </NxTabs>
  );
};

export default NxTabsTileHeaderExample;
