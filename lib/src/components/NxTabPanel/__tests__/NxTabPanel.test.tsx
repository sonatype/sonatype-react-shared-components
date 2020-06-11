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
  it('renders an NxTabPanel', function () {
    const component = shallow(<NxTabPanel labelledBy="tab" />);

    expect(component).toMatchSelector('div.nx-tab[role="tabpanel"][aria-expanded="true"][aria-labelledby="tab"]');
  });
});
