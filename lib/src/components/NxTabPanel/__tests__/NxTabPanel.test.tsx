/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import NxTabPanel from '../NxTabPanel';
import { TabContext } from '../../NxTabs/NxTabs';

describe('NxTabPanel', function () {
  function testContext(testContext: { activeTab: number; index: number }) {
    return {
      rootId: 'nx-tabs-0',
      onTabSelect: jest.fn(),
      ...testContext
    };
  }

  it('renders nothing when inactive', () => {
    const component = mount(
      <TabContext.Provider value={testContext({activeTab: -1, index: 0})}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    expect(component).toBeEmptyRender();
  });

  it('renders when active', () => {
    const component = mount(
      <TabContext.Provider value={testContext({ activeTab: 0, index: 0})}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    expect(component.find('[role="tabpanel"]')).not.toBeEmptyRender();
  });

  it('generates the correct props from the context', () => {
    const component = mount(
      <TabContext.Provider value={testContext({ activeTab: 1, index: 1 })}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    const tabpanel = component.find('[role="tabpanel"]');
    expect(tabpanel).toHaveProp('id', 'nx-tabs-0-tabpanel-1');
    expect(tabpanel).toHaveProp('aria-labelledby', 'nx-tabs-0-tab-1');
  });
});
