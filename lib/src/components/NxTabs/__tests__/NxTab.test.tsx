/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render } from '@testing-library/react';

import NxTab from '../NxTab';
import TabContext from '../TabContext';

describe('NxTab', function () {
  function testContext(testContext: { activeTab: number; index: number }) {
    return {
      rootId: 'nx-tabs-0',
      onTabSelect: jest.fn(),
      ...testContext
    };
  }

  it('renders an inactive tab with the expected attributes', function () {
    const { getByRole } = render(
      <TabContext.Provider value={testContext({ activeTab: -1, index: 0 })}>
        <NxTab>Tab</NxTab>
      </TabContext.Provider>
    );

    const tab = getByRole('tab');

    expect(tab).not.toHaveClass('active');
    expect(tab.id).toEqual('nx-tabs-0-tab-0');

    expect(tab).toHaveAttribute('aria-selected', 'false');
    expect(tab).toHaveAttribute('aria-controls', 'nx-tabs-0-tabpanel-0');
  });

  it('renders an active tab with the expected attributes', function () {
    const { getByRole } = render(
      <TabContext.Provider value={testContext({ activeTab: 1, index: 1 })}>
        <NxTab index={0}>Tab</NxTab>
      </TabContext.Provider>
    );

    const tab = getByRole('tab');

    expect(tab).toHaveClass('active');
    expect(tab.id).toEqual('nx-tabs-0-tab-1');

    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(tab).toHaveAttribute('aria-controls', 'nx-tabs-0-tabpanel-1');
  });
});
