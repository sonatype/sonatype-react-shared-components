/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, within } from '@testing-library/react';
import { rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDropdownMenu, { Props } from '../NxDropdownMenu';

describe('NxDropdownMenu', function() {
  const minimalProps = { onClosing: () => {} };
  const renderEl = rtlRenderElement<Props>(NxDropdownMenu, minimalProps);

  it('renders its children into the menu', function() {
    const dropdownMenu = renderEl({ children: <div data-testid="foo"/> })!;
    expect(within(dropdownMenu).getByTestId('foo')).toBeInTheDocument();
  });

  // NOTE: this test seems to be of limited usefulness because different behavior is observed here vs in
  // actual usage. In this test, using `useEffect` within the component apparently works. However in real
  // React it does not as it calls onClosing too late, which is why useLayoutEffect must be used. This is
  // one reason that we have a functional test for this behavior as well (in the NxModal functional tests)
  it('calls onClosing when being removed, before it is actually removed from DOM', function() {
    let attachedWhenOnClosing: boolean | undefined = undefined;

    const divContainer = document.createElement('div'),
        onClosing = jest.fn(() => {
          attachedWhenOnClosing = divContainer.contains(component);
        });

    function Fixture({ hasMenu }: { hasMenu: boolean }) {
      return hasMenu ? <NxDropdownMenu data-testid="menu" onClosing={onClosing} /> : null;
    }

    const { rerender, getByTestId } = render(<Fixture hasMenu={true} />, { container: divContainer });
    const component = getByTestId('menu');

    expect(component).toHaveClass('nx-dropdown-menu');
    expect(onClosing).not.toHaveBeenCalled();

    rerender(<Fixture hasMenu={false} />);

    expect(component).not.toBeInTheDocument();
    expect(onClosing).toHaveBeenCalledTimes(1);
    expect(attachedWhenOnClosing).toBe(true);
  });
});
