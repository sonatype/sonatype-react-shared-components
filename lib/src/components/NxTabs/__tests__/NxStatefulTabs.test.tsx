/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import NxStatefulTabs from '../stateful/NxStatefulTabs';
import NxTabList from '../../NxTabList/NxTabList';
import NxTab from '../../NxTab/NxTab';
import NxTabPanel from '../../NxTabPanel/NxTabPanel';

describe('NxStatefulTabs', function () {
  it('selects the first tab automatically', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab>Tab</NxTab>
        </NxTabList>
        <NxTabPanel>Tab Content</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component.find('[role="tab"].active')).toHaveText('Tab');
    expect(component.find('[role="tabpanel"]')).toHaveText('Tab Content');
  });

  it('selects the default tab initially', function () {
    const component = mount(
      <NxStatefulTabs defaultActiveTab={1}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component.find('[role="tabpanel"]')).not.toHaveText('Content 0');
    expect(component.find('[role="tabpanel"]')).toHaveText('Content 1');
  });

  it('selects the second tab on click', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxStatefulTabs>
    );

    component.find('[role="tab"]').last().simulate('click');

    expect(component.find('[role="tab"].active')).toHaveText('Tab 1');
    expect(component.find('[role="tabpanel"]')).toHaveText('Content 1');
  });
});
