/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxGlobalSidebar, { Props } from '../NxGlobalSidebar';
import { faBiohazard, faCrow } from '@fortawesome/free-solid-svg-icons';
import { rtlRender, runTimers, userEvent } from '../../../__testutils__/rtlUtils';
import { screen } from '@testing-library/react';

describe('NxGlobalSidebar', function() {
  const minimalProps: Props = {
    isOpen: false,
    toggleOpenIcon: faCrow,
    toggleCloseIcon: faBiohazard,
    onToggleClick: () => {},
    logoImg: 'logoImg',
    logoAltText: 'alt text',
    logoLink: '/ref'
  };

  const quickRender = rtlRender<Props>(NxGlobalSidebar, minimalProps);

  it('renders a top-level element with role="complementary"', function() {
    const view = quickRender(),
        complementary = view.getByRole('complementary');

    expect(complementary).toHaveAccessibleName('global sidebar');
    expect(complementary).toBe(view.container.firstElementChild);
  });

  it('renders a link to `logoLink` with the `logoImg` and the `altLogoText`', function() {
    const view = quickRender(),
        link = view.getByRole('link'),
        logo = view.getByRole('img');

    expect(link).toHaveAttribute('href', '/ref');
    expect(logo).toHaveAttribute('src', 'logoImg');
    expect(logo).toHaveAccessibleName('alt text');
  });

  it('renders an icon-only button with tooltip "Collapse Sidebar" if isOpen is true', async function() {
    const view = quickRender({ isOpen: true }),
        sidebarId = view.container.firstElementChild?.getAttribute('id'),
        user = userEvent.setup();

    await runTimers();

    const toggleBtn = view.getByRole('button', { name: /collapse sidebar/i });

    expect(toggleBtn).toHaveAccessibleName('Collapse Sidebar');
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    expect(toggleBtn).toHaveAttribute('aria-controls', sidebarId);

    await user.hover(toggleBtn);

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Collapse Sidebar');
  });

  it('renders an icon-only button with tooltip "Expand Sidebar" if isOpen is false', async function() {
    const view = quickRender({ isOpen: false }),
        sidebarId = view.container.firstElementChild?.getAttribute('id'),
        user = userEvent.setup();

    await runTimers();

    const toggleBtn = view.getByRole('button', { name: /expand sidebar/i });

    expect(toggleBtn).toHaveAccessibleName('Expand Sidebar');
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    expect(toggleBtn).toHaveAttribute('aria-controls', sidebarId);

    await user.hover(toggleBtn);

    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Expand Sidebar');
  });

  it('renders passed in children', function() {
    const children = (
      <>
        <div className="child-1" data-testid="div1">
          <p data-testid="p1">I am children</p>
        </div>
        <div className="child-2" data-testid="div2"></div>
      </>
    );
    const view = quickRender({ children });
    expect(view.getByTestId('div1')).toBeInTheDocument();
    expect(view.getByTestId('p1')).toBeInTheDocument();
    expect(view.getByTestId('div2')).toBeInTheDocument();
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
