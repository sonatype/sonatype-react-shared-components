/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTab from '../NxTab';

describe('NxTab', function () {
  it('renders a tab with the expected class names', function () {
    const component = shallow(<NxTab id="tab"/>);

    expect(component).toHaveProp('aria-selected', 'false');
    expect(component).not.toHaveClassName('active');
  });

  it('renders a tab with the expected class names when active={false}', function () {
    jest.spyOn(React, 'useContext').mockImplementation(() => ({activeTab: 'tab'}));
    const component = shallow(<NxTab id="tab"/>);

    expect(component).toHaveProp('aria-selected', 'true');
    expect(component).toHaveClassName('active');
  });
});
