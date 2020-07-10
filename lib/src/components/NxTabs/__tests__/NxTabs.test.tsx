/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTabs from '../NxTabs';

describe('NxTabs', function () {
  it('renders', function () {
    const component = shallow(<NxTabs activeTab="activeTabId"/>);

    expect(component.props().value.activeTab).toBe('activeTabId');
    expect(component.props().value.onTabSelect.toString()).toBe((() => {}).toString());
    expect(component.dive()).toHaveClassName('nx-tabs');
  });

  it('passes onTabSelect', function () {
    const onTabSelect = (id: string) => id;
    const component = shallow(<NxTabs activeTab="activeTabId" onTabSelect={onTabSelect}/>);

    expect(component.props().value.onTabSelect).toBe(onTabSelect);
    expect(component.dive()).toHaveClassName('nx-tabs');
  });
});
