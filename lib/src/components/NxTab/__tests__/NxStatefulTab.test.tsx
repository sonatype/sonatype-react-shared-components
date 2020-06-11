/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxStatefulTab from '../stateful/NxStatefulTab';
import NxTab from '../NxTab';

describe('NxStatefulTab', function () {
  it('renders an NxTab with a default active prop', function () {
    const component = shallow(<NxStatefulTab id="tab" />);

    expect(component).toContainReact(<NxTab id="tab" active={false} />);
  });

  it('renders an NxTab with the passed active prop', function () {
    const component = shallow(<NxStatefulTab id="tab" active={true} />);

    expect(component).toContainReact(<NxTab id="tab" active={true} />);
  });
});
