/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTable from '../NxTable';

describe('NxTable', function() {
  it('renders a table with the expected class names', function() {
    const component = shallow(<NxTable className="test" />);

    expect(component).toMatchSelector('table.nx-table.test');
  });
});
