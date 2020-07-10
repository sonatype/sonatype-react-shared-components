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
          <NxTab id="tab">Tab</NxTab>
        </NxTabList>
        <NxTabPanel labelledBy="tab">Tab Content</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component).toContainExactlyOneMatchingElement('#tab.nx-tab.active');
    expect(component.find('[labelledBy="tab"]')).not.toBeEmptyRender();
  });

  it('selects the second tab on click', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab id="tab">Tab</NxTab>
          <NxTab id="tab-2">Tab 2</NxTab>
        </NxTabList>
        <NxTabPanel labelledBy="tab">Tab Content</NxTabPanel>
        <NxTabPanel labelledBy="tab-2">Tab 2 Content</NxTabPanel>
      </NxStatefulTabs>
    );

    component.find('#tab-2').first().simulate('click');

    // Ensure only the correct tab is set to active
    expect(component).toContainExactlyOneMatchingElement('.nx-tab.active');
    expect(component).toContainExactlyOneMatchingElement('#tab-2.nx-tab.active');

    // Ensure the correct tab panel is rendered
    expect(component.closest('[labelledBy="tab-2"]')).not.toBeEmptyRender();
  });

  it('selects the second tab on keypress', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxTab id="tab">Tab</NxTab>
          <NxTab id="tab-2">Tab 2</NxTab>
        </NxTabList>
        <NxTabPanel labelledBy="tab">Tab Content</NxTabPanel>
        <NxTabPanel labelledBy="tab-2">Tab 2 Content</NxTabPanel>
      </NxStatefulTabs>
    );

    component.find('#tab-2').first().simulate('keypress', {key: ' '});

    // Ensure only the correct tab is set to active
    expect(component).toContainExactlyOneMatchingElement('.nx-tab.active');
    expect(component).toContainExactlyOneMatchingElement('#tab-2.nx-tab.active');

    // Ensure the correct tab panel is rendered
    expect(component.closest('[labelledBy="tab-2"]')).not.toBeEmptyRender();
  });
});
