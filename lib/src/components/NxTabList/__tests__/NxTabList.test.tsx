/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTabList from '../NxTabList';

describe('NxTabList', function () {
  it('renders an NxTabList', function () {
    const component = shallow(<NxTabList />);

    expect(component).toMatchSelector('ul.nx-tab-list[role="tablist"]');
  });
});
