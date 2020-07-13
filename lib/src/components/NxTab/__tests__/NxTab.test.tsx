/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import NxTab from '../NxTab';

import {ActiveTabContext} from '../../NxTabs/NxTabs';

describe('NxTab', function () {
  it('renders a tab with the expected class names', function () {
    const component = mount(
      <ActiveTabContext.Provider value={{ activeTab: -1, onTabSelect: jest.fn() }}>
        <NxTab index={0}>Tab</NxTab>
      </ActiveTabContext.Provider>
    );

    expect(component.find('[role="tab"]')).toHaveProp('aria-selected', 'false');
    expect(component.find('[role="tab"]')).not.toHaveClassName('active');
  });

  it('renders a tab with the expected class names when active={false}', function () {
    const component = mount(
      <ActiveTabContext.Provider value={{ activeTab: 0, onTabSelect: jest.fn() }}>
        <NxTab index={0}>Tab</NxTab>
      </ActiveTabContext.Provider>
    );

    expect(component.find('[role="tab"]')).toHaveProp('aria-selected', 'true');
    expect(component.find('[role="tab"]')).toHaveClassName('active');
  });
});
