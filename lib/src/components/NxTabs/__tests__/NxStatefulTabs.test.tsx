/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxStatefulTabs from '../stateful/NxStatefulTabs';
import NxTabList from '../../NxTabList/NxTabList';
import NxTab from '../../NxTab/NxTab';
import NxTabPanel from '../../NxTabPanel/NxTabPanel';

describe('NxStatefulTabs', function () {
  it('selects the first tab automatically', function () {
    const component = shallow(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab>Tab</NxTab>
        </NxTabList>
        <NxTabPanel>Tab Content</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component).toHaveProp('activeTab', 0);
  });

  it('selects the default tab initially', function () {
    const component = shallow(
      <NxStatefulTabs defaultActiveTab={1}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component).toHaveProp('activeTab', 1);
  });

  it('selects the second tab on tab select', function () {
    const component = shallow(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxStatefulTabs>
    );

    component.simulate('tabSelect', 1);
    expect(component).toHaveProp('activeTab', 1);
  });

  it('allows for a custom onTabSelect', function () {
    const selectHandler = jest.fn();
    const component = shallow(
      <NxStatefulTabs onTabSelect={selectHandler}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxStatefulTabs>
    );

    component.simulate('tabSelect', 1);
    expect(selectHandler).toHaveBeenCalledWith(1);
  });
});
