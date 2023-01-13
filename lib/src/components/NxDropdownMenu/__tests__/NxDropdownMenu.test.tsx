/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxDropdownMenu, { Props } from '../NxDropdownMenu';

describe('NxDropdownMenu', function() {
  const minimalProps = { onClosing: () => {} },
      getShallow = getShallowComponent<Props>(NxDropdownMenu, minimalProps);

  it('renders a div with the nx-dropdown-menu class name', function() {
    expect(getShallow()).toMatchSelector('div.nx-dropdown-menu');
  });

  it('renders its children into the div', function() {
    const children = <div className="foo" />;

    expect(getShallow({ children }).children()).toMatchSelector('div.foo');
  });

  // NOTE: this test seems to be of limited usefulness because different behavior is observed here vs in
  // actual usage. In this test, using `useEffect` within the component apparently works. However in real
  // React it does not as it calls onClosing too late, which is why useLayoutEffect must be used. This is
  // one reason that we have a functional test for this behavior as well (in the NxModal functional tests)
  it('calls onClosing when being removed, before it is actually removed from DOM', function() {
    let attachedWhenOnClosing: boolean | undefined = undefined;

    const container = document.createElement('div'),
        onClosing = jest.fn(() => {
          attachedWhenOnClosing = container.contains(component.getDOMNode());
        });

    function Fixture({ hasMenu }: { hasMenu: boolean }) {
      return hasMenu ? <NxDropdownMenu onClosing={onClosing} /> : null;
    }

    const component = mount(<Fixture hasMenu={true} />, { attachTo: container });

    expect(component).toContainMatchingElement('.nx-dropdown-menu');
    expect(onClosing).not.toHaveBeenCalled();

    component.setProps({ hasMenu: false });

    expect(component).toBeEmptyRender();
    expect(onClosing).toHaveBeenCalledTimes(1);
    expect(attachedWhenOnClosing).toBe(true);
  });
});
