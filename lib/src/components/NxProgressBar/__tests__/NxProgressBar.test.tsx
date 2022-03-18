/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxProgressBar from '../NxProgressBar';

describe('NxProgressBar', function() {
  it('renders a progress element',
      function() {
        const component = shallow(<NxProgressBar value={50} />);
        const progressElement = component.find('progress.nx-progress-bar__progress');
        expect(progressElement).toExist();
      }
  );
});
