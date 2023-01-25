/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render } from '@testing-library/react';

import NxTabPanel from '../NxTabPanel';
import TabContext from '../TabContext';

describe('NxTabPanel', function () {
  function testContext(testContext: { activeTab: number; index: number }) {
    return {
      rootId: 'nx-tabs-0',
      onTabSelect: jest.fn(),
      ...testContext
    };
  }

  it('renders nothing when inactive', () => {
    const { queryByRole } = render(
      <TabContext.Provider value={testContext({ activeTab: -1, index: 0 })}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    expect(queryByRole('tabpanel', { hidden: true })).not.toBeInTheDocument();
  });

  it('renders when active', () => {
    const { getByRole } = render(
      <TabContext.Provider value={testContext({ activeTab: 0, index: 0 })}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    expect(getByRole('tabpanel', { hidden: true })).toBeInTheDocument();
  });

  it('generates the correct attributes from the context', () => {
    const { getByRole } = render(
      <TabContext.Provider value={testContext({ activeTab: 1, index: 1 })}>
        <NxTabPanel>Content</NxTabPanel>
      </TabContext.Provider>
    );

    const tabpanel = getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('id', 'nx-tabs-0-tabpanel-1');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'nx-tabs-0-tab-1');
  });
});
