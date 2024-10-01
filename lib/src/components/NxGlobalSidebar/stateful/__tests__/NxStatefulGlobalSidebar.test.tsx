/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { within } from '@testing-library/react';
import { faBiohazard, faCrow } from '@fortawesome/free-solid-svg-icons';

import NxStatefulGlobalSidebar, { Props } from '../NxStatefulGlobalSidebar';
import { rtlRender, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';

describe('NxStatefulGlobalSidebar', function() {
  const minimalProps: Props = {
    isDefaultOpen: false,
    toggleOpenIcon: faCrow,
    toggleCloseIcon: faBiohazard
  };

  const quickRender = rtlRender<Props>(NxStatefulGlobalSidebar, minimalProps);

  it('renders a "Collapse Menu" button with aria-controls set to the sidebar id', async function() {
    const view = quickRender(),
        sidebarId = view.container.firstElementChild?.getAttribute('id');

    await runTimers();

    const toggleBtn = view.getByRole('button', { name: /collapse menu/i });

    expect(toggleBtn).toHaveAccessibleName('Collapse Menu');
    expect(toggleBtn).toHaveAttribute('aria-controls', sidebarId);
  });

  it('sets the Collapse Menu button\'s initial aria-expanded attribute to the isDefaultOpen prop', async function() {
    const closedView = quickRender(),
        openView = quickRender({ isDefaultOpen: true });

    await runTimers();

    const closedToggleBtn = closedView.getByRole('button', { name: /Collapse Menu/i }),
        openToggleBtn = openView.getByRole('button', { name: /Collapse Menu/i });

    expect(closedToggleBtn).toHaveAttribute('aria-expanded', 'false');
    expect(openToggleBtn).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles the aria-expanded attribute of the Collapse Menu button when clicked', async function() {
    const view = quickRender(),
        user = userEvent.setup();

    await runTimers();

    const toggleBtn = view.getByRole('button', { name: /Collapse Menu/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
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
});
