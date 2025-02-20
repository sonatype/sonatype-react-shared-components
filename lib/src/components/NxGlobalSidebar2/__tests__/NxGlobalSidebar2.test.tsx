/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { within } from '@testing-library/react';
import { faBiohazard, faCrow } from '@fortawesome/free-solid-svg-icons';

import NxGlobalSidebar2, { Props } from '../NxGlobalSidebar2';
import { rtlRender, runTimers, userEvent } from '../../../__testutils__/rtlUtils';

describe('NxGlobalSidebar2', function() {
  const minimalProps: Props = {
    isOpen: false,
    toggleOpenIcon: faCrow,
    toggleCloseIcon: faBiohazard,
    onToggleClick: () => {}
  };

  const quickRender = rtlRender<Props>(NxGlobalSidebar2, minimalProps);

  describe('when the isOpen is true', function() {
    it('renders a "Collapse Menu" button with aria-controls set to the sidebar id', async function() {
      const view = quickRender({ isOpen: true }),
          sidebarId = view.container.firstElementChild?.getAttribute('id');

      await runTimers();

      const toggleBtn = view.getByRole('button', { name: /collapse menu/i });

      expect(toggleBtn).toHaveAccessibleName('Collapse Menu');
      expect(toggleBtn).toHaveAttribute('aria-controls', sidebarId);
    });

    it('sets the Collapse Menu button\'s aria-expanded attribute to true', async function() {
      const view = quickRender({ isOpen: true });

      await runTimers();

      const toggleBtn = view.getByRole('button', { name: /Collapse Menu/i });

      expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('when the isOpen is false', function() {
    it('renders an "Expand Menu" button with aria-controls set to the sidebar id', async function() {
      const view = quickRender({ isOpen: false }),
          sidebarId = view.container.firstElementChild?.getAttribute('id');

      await runTimers();

      const toggleBtn = view.getByRole('button', { name: /expand menu/i });

      expect(toggleBtn).toHaveAccessibleName('Expand Menu');
      expect(toggleBtn).toHaveAttribute('aria-controls', sidebarId);
    });

    it('sets the Collapse Menu button\'s aria-expanded attribute to false', async function() {
      const view = quickRender({ isOpen: false });

      await runTimers();

      const toggleBtn = view.getByRole('button', { name: /Expand Menu/i });

      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('renders passed in children within a navigation element named "global sidebar"', function() {
    const children = (
      <React.Fragment key="1">
        <div className="child-1" data-testid="div1">
          <p data-testid="p1">I am children</p>
        </div>
        <div className="child-2" data-testid="div2"></div>
      </React.Fragment>
    );
    const view = quickRender({ children }),
        nav = view.getByRole('navigation', { name: 'global sidebar' });

    expect(within(nav).getByTestId('div1')).toBeInTheDocument();
    expect(within(nav).getByTestId('p1')).toBeInTheDocument();
    expect(within(nav).getByTestId('div2')).toBeInTheDocument();
  });

  it('calls onToggleClick when toggle button is pressed', async function() {
    const onToggleClick = jest.fn(),
        user = userEvent.setup(),
        view = quickRender({ ...minimalProps, onToggleClick }),
        btn = view.getByRole('button');

    await user.click(btn);

    expect(onToggleClick).toHaveBeenCalled();
  });
});
