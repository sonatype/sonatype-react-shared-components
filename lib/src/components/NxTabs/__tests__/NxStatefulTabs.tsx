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
import NxStatefulTab from '../../NxTab/stateful/NxStatefulTab';
import NxTabPanel from '../../NxTabPanel/NxTabPanel';

describe('NxStatefulTabs', function () {
  it('selects the first tab automatically', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxStatefulTab id="tab">Tab</NxStatefulTab>
        </NxTabList>
        <NxTabPanel labelledBy="tab">Tab Content</NxTabPanel>
      </NxStatefulTabs>
    );

    expect(component.find(NxTab)).toHaveProp('active', true);
    expect(component.find('[labelledBy="tab"]')).not.toBeEmptyRender();
  });

  it('selects the second tab on click', function () {
    const component = mount(
      <NxStatefulTabs>
        <NxTabList>
          <NxStatefulTab id="tab">Tab</NxStatefulTab>
          <NxStatefulTab id="tab-2">Tab 2</NxStatefulTab>
        </NxTabList>
        <NxTabPanel labelledBy="tab">Tab Content</NxTabPanel>
        <NxTabPanel labelledBy="tab-2">Tab 2 Content</NxTabPanel>
      </NxStatefulTabs>
    );

    component.find('#tab-2').first().simulate('click');

    expect(component.find('#tab').first()).toHaveProp('active', false);
    expect(component.find('#tab-2').first()).toHaveProp('active', true);
    expect(component.find('[labelledBy="tab-2"]')).not.toBeEmptyRender();
  });
});
