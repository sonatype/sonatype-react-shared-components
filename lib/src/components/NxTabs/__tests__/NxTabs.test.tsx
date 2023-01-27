/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render } from '@testing-library/react';
import { rtlRenderElement, rtlRender, userEvent } from '../../../__testutils__/rtlUtils';

import NxTabs, { NxTabsProps } from '../NxTabs';
import NxTabList from '../NxTabList';
import NxTab from '../NxTab';
import NxTabPanel from '../NxTabPanel';

describe('NxTabs', function() {
  const minimumProps = {
    onTabSelect: () => {},
    children: (
      <NxTabList>
        <NxTab>Tabs 0</NxTab>
      </NxTabList>
    )
  };

  const quickRender = rtlRender<NxTabsProps>(NxTabs, minimumProps);
  const renderEl = rtlRenderElement<NxTabsProps>(NxTabs, minimumProps);

  it('merges any passed in className', function() {
    const tabsWithAddedClassName = renderEl({ className: 'foo' });
    const tabs = renderEl()!;

    expect(tabsWithAddedClassName).toHaveClass('foo');

    for (const cls of Array.from(tabs.classList)) {
      expect(tabsWithAddedClassName).toHaveClass(cls);
    }
  });

  it('renders with a unique id each time', function() {
    const firstTabs = renderEl({ activeTab: 0 })!;
    const secondTabs = renderEl({ activeTab: 0 })!;

    expect(firstTabs.id).not.toEqual(secondTabs.id);
  });

  it('renders a generated id', function() {
    const component = renderEl({ activeTab: -1 })!;
    expect(component.id).toMatch(/^nx-tabs-\d+$/);
  });

  it('renders using as specific id', function() {
    const commponent = renderEl({
      id: 'my-tabs',
      activeTab: -1
    })!;
    expect(commponent.id).toMatch('my-tabs');
  });

  it('renders no tab contents when none are active', function() {
    const { queryByRole } = quickRender({ activeTab: -1 });

    expect(queryByRole('tab', { selected: true })).not.toBeInTheDocument();
    expect(queryByRole('tabpanel')).not.toBeInTheDocument();
  });

  it('renders no tab contents when no active tab is specified', function() {
    const { queryByRole } = quickRender();

    expect(queryByRole('tab', { selected: true })).not.toBeInTheDocument();
    expect(queryByRole('tabpanel')).not.toBeInTheDocument();
  });

  it('activates the active tab', function() {
    const { getAllByRole, getByRole } = render(
      <NxTabs activeTab={1} onTabSelect={() => {}}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxTabs>
    );

    const selectedTabs = getAllByRole('tab', { selected: true });
    expect(selectedTabs.length).toBe(1);
    expect(selectedTabs[0]).toHaveTextContent('Tab 1');
    expect(getByRole('tabpanel')).toHaveTextContent('Content 1');
  });

  it('calls onTabSelect when a tab is clicked', async function() {
    const user = userEvent.setup();
    const onTabSelect = jest.fn();

    const { getByRole } = quickRender({
      activeTab: 0,
      onTabSelect
    });

    await user.click(getByRole('tab'));

    expect(onTabSelect).toHaveBeenCalledWith(0);
  });

  it('calls onTabSelect when a tab is selected via keyboard', async function() {
    const user = userEvent.setup();
    const onTabSelect = jest.fn();

    const { getAllByRole } = quickRender({
      activeTab: 0,
      onTabSelect,
      children: (
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
      )
    });

    const firstTab = getAllByRole('tab')[0];

    firstTab.focus();
    await user.keyboard('{ArrowRight}{Enter}');

    expect(onTabSelect).toHaveBeenCalledWith(1);
  });
});
