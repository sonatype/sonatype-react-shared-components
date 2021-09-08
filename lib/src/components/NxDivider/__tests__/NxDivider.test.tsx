/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxDivider } from '../NxDivider';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxDivider', function() {
  const getShallow = getShallowComponent(NxDivider, {});

  it('renders a divider', function() {
    const wrapper = getShallow();
    expect(wrapper).toExist();
    expect(wrapper).toContainExactlyOneMatchingElement('hr');
    expect(wrapper).toMatchSelector('hr.nx-divider');
  });

  it('renders the classNames given to it', function() {
    const wrapper = getShallow({className: 'test-classname'});
    expect(wrapper).toExist();
    expect(wrapper).toContainExactlyOneMatchingElement('hr');
    expect(wrapper).toMatchSelector('hr.nx-divider.test-classname');
  });
});
