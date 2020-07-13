/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import NxTabPanel from '../NxTabPanel';
import { ActiveTabContext } from '../../NxTabs/NxTabs';

describe('NxTabPanel', function () {
  it('renders nothing when inactive', () => {
    const component = mount(
      <ActiveTabContext.Provider value={{activeTab: -1, onTabSelect: jest.fn() }}>
        <NxTabPanel index={0}>Content</NxTabPanel>
      </ActiveTabContext.Provider>
    );

    expect(component).toBeEmptyRender();
  });

  it('renders when active', function () {
    const component = mount(
      <ActiveTabContext.Provider value={{ activeTab: -1, onTabSelect: jest.fn() }}>
        <NxTabPanel index={0}>Content</NxTabPanel>
      </ActiveTabContext.Provider>
    );

    expect(component.find('[role="tabpanel"]')).not.toBeEmptyRender();
  });
});
