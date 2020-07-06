/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTabPanel from '../NxTabPanel';

describe('NxTabPanel', function () {
  it('renders nothing when inactive', () => {
    jest.spyOn(React, 'useContext').mockImplementation(() => 'anotherTab');
    const component = shallow(<NxTabPanel labelledBy="tab" />);

    expect(component).toBeEmptyRender();
  });

  it('renders when active', function () {
    jest.spyOn(React, 'useContext').mockImplementation(() => 'tab');
    const component = shallow(<NxTabPanel labelledBy="tab" />);

    expect(component).toHaveProp('aria-expanded', 'true');
    expect(component).toHaveProp('aria-labelledby', 'tab');
    expect(component).toHaveClassName('nx-tab-panel');
    expect(component).toHaveProp('role', 'tabpanel');
  });
});
