/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import NxStatefulTabs from '../stateful/NxStatefulTabs';
import { Props } from '../stateful/types';
import NxTabList from '../NxTabList';
import NxTab from '../NxTab';
import NxTabPanel from '../NxTabPanel';

describe('NxStatefulTabs', function() {
  const minimumProps = {
    defaultActiveTab: -1,
    children: (
      <NxTabList>
        <NxTab>Tabs 0</NxTab>
      </NxTabList>
    )
  };

  const quickRender = rtlRender<Props>(NxStatefulTabs, minimumProps);
  const renderEl = rtlRenderElement<Props>(NxStatefulTabs, minimumProps);

  it('merges any passed in className', function() {
    const tabsWithAddedClassName = renderEl({ className: 'foo' });
    const tabs = renderEl()!;

    expect(tabsWithAddedClassName).toHaveClass('foo');

    for (const cls of Array.from(tabs.classList)) {
      expect(tabsWithAddedClassName).toHaveClass(cls);
    }
  });

  it('renders with a unique id each time', function() {
    const firstTabs = renderEl({ defaultActiveTab: 0 })!;
    const secondTabs = renderEl({ defaultActiveTab: 0 })!;

    expect(firstTabs.id).not.toEqual(secondTabs.id);
  });

  it('renders a generated id', function() {
    const component = renderEl({ defaultActiveTab: -1 })!;
    expect(component.id).toMatch(/^nx-tabs-\d+$/);
  });

  it('renders tab elements with unique id based on the parent id', function() {
    const { container, getByRole } = render(
        <NxStatefulTabs defaultActiveTab={0} id="my-tabs" onTabSelect={() => {}}>
          <NxTabList>
            <NxTab>Tab 0</NxTab>
          </NxTabList>
          <NxTabPanel>Content 0</NxTabPanel>
        </NxStatefulTabs>
    );

    expect(container.firstElementChild!.id).toEqual('my-tabs');
    expect(getByRole('tab')!.id).toMatch(/^my-tabs/);
    expect(getByRole('tabpanel')!.id).toMatch(/^my-tabs/);

    expect(new Set([
      container.firstElementChild!.id,
      getByRole('tab')!.id,
      getByRole('tabpanel')!.id
    ]).size).toBe(3);
  });

  it('renders no tab contents when none are active', function() {
    const { queryByRole } = quickRender({ defaultActiveTab: -1 });

    expect(queryByRole('tab', { selected: true })).not.toBeInTheDocument();
    expect(queryByRole('tabpanel')).not.toBeInTheDocument();
  });

  it('selects the default tab initially', function() {
    const { getByRole } = render(
        <NxStatefulTabs defaultActiveTab={1}>
          <NxTabList>
            <NxTab>Tab 0</NxTab>
            <NxTab>Tab 1</NxTab>
          </NxTabList>
          <NxTabPanel>Content 0</NxTabPanel>
          <NxTabPanel>Content 1</NxTabPanel>
        </NxStatefulTabs>
    );

    const activeTab = getByRole('tab', { selected: true });
    expect(activeTab).toHaveAccessibleName(/^Tab 1/);
  });

  it('selects the second tab on click', async function() {
    const user = userEvent.setup();

    const { getAllByRole, getByRole, queryByRole } = render(
        <NxStatefulTabs>
          <NxTabList>
            <NxTab>Tab 0</NxTab>
            <NxTab>Tab 1</NxTab>
          </NxTabList>
          <NxTabPanel>Content 0</NxTabPanel>
          <NxTabPanel>Content 1</NxTabPanel>
        </NxStatefulTabs>
    );

    expect(queryByRole('tab', { selected: true })).not.toBeInTheDocument();
    await user.click(getAllByRole('tab')[1]);

    expect(getByRole('tab', { selected: true })).toHaveAccessibleName(/^Tab 1/);
  });

  it('calls custom onTabSelect when a tab is selected', async function() {
    const user = userEvent.setup();
    const selectHandler = jest.fn();

    const { getAllByRole } = render(
        <NxStatefulTabs onTabSelect={selectHandler}>
          <NxTabList>
            <NxTab>Tab 0</NxTab>
            <NxTab>Tab 1</NxTab>
          </NxTabList>
          <NxTabPanel>Content 0</NxTabPanel>
          <NxTabPanel>Content 1</NxTabPanel>
        </NxStatefulTabs>
    );

    const secondTab = getAllByRole('tab')[1];
    await user.click(secondTab);

    expect(selectHandler).toHaveBeenCalledWith(1);
  });

  it('calls onTabSelect when a tab is selected via keyboard', async function() {
    const user = userEvent.setup();
    const onTabSelect = jest.fn();

    const { getAllByRole } = quickRender({
      defaultActiveTab: 0,
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

  it('sets id and aria labelledby to panel to reference active tab aria-controls', async function() {
    const user = userEvent.setup();

    const { getByRole } = render(
        <NxStatefulTabs defaultActiveTab={0}>
          <NxTabList>
            <NxTab>Tab 0</NxTab>
            <NxTab>Tab 1</NxTab>
          </NxTabList>
          <NxTabPanel>Content 0</NxTabPanel>
          <NxTabPanel>Content 1</NxTabPanel>
        </NxStatefulTabs>
    );
    const getActiveTabControls = () => getByRole('tab', { selected: true }).getAttribute('aria-controls');

    expect(getByRole('tabpanel').id).toEqual(getActiveTabControls());
    expect(getByRole('tabpanel')).toHaveAccessibleName(/^Tab 0/);

    await user.click(getByRole('tab', { selected: false }));

    expect(getByRole('tabpanel').id).toEqual(getActiveTabControls());
    expect(getByRole('tabpanel')).toHaveAccessibleName(/^Tab 1/);
  });
});
