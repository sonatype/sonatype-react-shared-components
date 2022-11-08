/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDropdownMenu, { Props } from '../NxDropdownMenu';

describe('NxDropdownMenu', function() {
  const minimalProps = { onClosing: () => {} },
      quickRender = rtlRender<Props>(NxDropdownMenu, minimalProps),
      renderEl = rtlRenderElement<Props>(NxDropdownMenu, minimalProps);

  it('renders its children into the menu', function() {
    const dropdownMenu = renderEl({ children: <div data-testid="foo"/> })!;
    expect(within(dropdownMenu).getByTestId('foo')).toBeInTheDocument();
  });

  describe('Enabled Keyboard Navigation', function() {
    const menuItems = (
      <>
        <button type="button" className="nx-dropdown-button" role="menuitem">button</button>
        <a href="#" className="nx-dropdown-button" role="menuitem">link</a>
        <div>divider</div>
        <input type="checkbox" role="menuitemcheckbox"/>
      </>
    );

    it('focuses on the menu when first open', function() {
      const dropdownMenu = quickRender().getByRole('menu');
      expect(document.activeElement).toBe(dropdownMenu);
    });

    it('does not focus on the menu when first open if disableKeyNav is true', function() {
      const dropdownMenu = quickRender({ disableMenuKeyNav: true }).getByRole('menu');
      expect(document.activeElement).not.toBe(dropdownMenu);
    });

    it('does not focus on any menuitems when arrow keys are pressed if disableKeyNav is true', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems, disableMenuKeyNav: true });
      await user.keyboard('[ArrowDown]');
      await user.keyboard('[ArrowUp]');

      const menu = getByRole('menu');
      expect(menu.contains(document.activeElement)).toBe(false);
    });

    it('focuses on first item when arrow down is pressed after first open', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems });
      await user.keyboard('[ArrowDown]');
      const firstItem = getByRole('menuitem', { name: 'button' });
      expect(document.activeElement).toBe(firstItem);
    });

    it('focuses on last item when arrow up is pressed after first open', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems });

      await user.keyboard('[ArrowUp]');

      const lastItem = getByRole('menuitemcheckbox');
      expect(document.activeElement).toBe(lastItem);
    });

    it('loops to the last item when arrow up is pressed at the top item', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems });

      await user.keyboard('[ArrowDown]');
      await user.keyboard('[ArrowUp]');

      const lastItem = getByRole('menuitemcheckbox');
      expect(document.activeElement).toBe(lastItem);
    });

    it('skip focus on element that is not focusable', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems });

      await user.keyboard('[ArrowDown]'); // first
      await user.keyboard('[ArrowDown]'); // second
      await user.keyboard('[ArrowDown]'); // skiped divider and should select last

      const lastItem = getByRole('menuitemcheckbox');
      expect(document.activeElement).toBe(lastItem);
    });

    it('loops to the first item when arrow down is pressed at the last item', async function() {
      const user = userEvent.setup();
      const { getByRole } = quickRender({ children: menuItems });

      await user.keyboard('[ArrowDown]');
      await user.keyboard('[ArrowDown]');
      await user.keyboard('[ArrowDown]');
      await user.keyboard('[ArrowDown]');

      const firstItem = getByRole('menuitem', { name: 'button' });
      expect(document.activeElement).toBe(firstItem);
    });
  });

  // NOTE: this test seems to be of limited usefulness because different behavior is observed here vs in
  // actual usage. In this test, using `useEffect` within the component apparently works. However in real
  // React it does not as it calls onClosing too late, which is why useLayoutEffect must be used. This is
  // one reason that we have a functional test for this behavior as well (in the NxModal functional tests)
  it('calls onClosing when being removed, before it is actually removed from DOM', function() {
    let attachedWhenOnClosing: boolean | undefined = undefined;

    const container = document.createElement('div'),
        onClosing = jest.fn(() => {
          attachedWhenOnClosing = container.contains(component);
        });

    function Fixture({ hasMenu }: { hasMenu: boolean }) {
      return hasMenu ? <NxDropdownMenu onClosing={onClosing} /> : null;
    }

    const { getByRole, rerender } = render(<Fixture hasMenu={true} />, { container: container });
    const component = getByRole('menu', { hidden: true });

    expect(component).toHaveClass('nx-dropdown-menu');
    expect(onClosing).not.toHaveBeenCalled();

    rerender(<Fixture hasMenu={false} />);

    expect(component).not.toBeInTheDocument();
    expect(onClosing).toHaveBeenCalledTimes(1);
    expect(attachedWhenOnClosing).toBe(true);
  });
});
