/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxStatefulGlobalSidebar, { Props } from '../NxStatefulGlobalSidebar';
import { faBiohazard, faCrow } from '@fortawesome/free-solid-svg-icons';
import { rtlRender, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import { screen, within } from '@testing-library/react';
import NxGlobalSidebarNavigation from '../../NxGlobalSidebarNavigation';
import NxGlobalSidebarNavigationLink from '../../NxGlobalSidebarNavigationLink';
import NxGlobalSidebarFooter from '../../NxGlobalSidebarFooter';

describe('NxStatefulGlobalSidebar', function() {
  const minimalProps: Props = {
    isDefaultOpen: true,
    toggleOpenIcon: faCrow,
    toggleCloseIcon: faBiohazard,
    logoImg: 'logoImg',
    logoAltText: 'alt text',
    logoLink: '/ref'
  };

  const quickRender = rtlRender<Props>(NxStatefulGlobalSidebar, minimalProps);

  describe('children', function() {
    describe('when only the NxGlobalSidebarNavigation is a provided as a child', function () {
      it('renders an element with role="navigation" within an element with role="complementary"', function() {
        const children =
          <NxGlobalSidebarNavigation key="1">
            <NxGlobalSidebarNavigationLink icon={faCrow} text="testLink" href="testLink"/>
          </NxGlobalSidebarNavigation>,
            view = quickRender({ ...minimalProps, children }),
            complementary = view.getByRole('complementary'),
            nav = within(complementary).getByRole('navigation');

        expect(complementary).toBeInTheDocument();
        expect(nav).toBeInTheDocument();
      });
    });

    describe('when only the NxGlobalSidebarFooter is a provided as a child', function () {
      it('renders a footer with role="contentinfo"', function() {
        const children =
          <NxGlobalSidebarFooter key="1"
                                 supportText="Support for RSC"
                                 supportLink="https://github.com/sonatype/sonatype-react-shared-components"
                                 releaseText="Release 3.1.4"
                                 productTagLine="Powered by PLAID VILLAIN" />,
            view = quickRender({ ...minimalProps, children }),
            complementary = view.getByRole('complementary'),
            footer = view.getByRole('contentinfo');

        expect(footer).toBeInTheDocument();
        expect(complementary).not.toContainElement(footer);
      });
    });

    describe('when only extra content is a provided as a child', function () {
      it('renders the extra content within an element with role="complementary"', function() {
        const children =
          <section key="1" className="gallery-custom-sidebar-content nx-global-sidebar__other-content nx-scrollable">
            <div className="nx-global-sidebar__expanded-content">
              <span data-testid="testspan">myspan</span>
            </div>
          </section>,
            view = quickRender({ ...minimalProps, children }),
            complementary = view.getByRole('complementary'),
            extraContent = within(complementary).getByTestId('testspan');

        expect(complementary).toBeInTheDocument();
        expect(extraContent).toBeInTheDocument();
      });
    });

    describe('when NxGlobalSidebarNavigation, NxGlobalSidebarFooter, and extra content ' +
    'are provided as children', function () {
      it('renders an element with role="navigation" within an element with role="complementary" ' +
       'and a footer with role="contentinfo"', function() {
        const children =
          <React.Fragment key="1">
            <NxGlobalSidebarNavigation>
              <NxGlobalSidebarNavigationLink icon={faCrow} text="testLink" href="testLink"/>
            </NxGlobalSidebarNavigation>
            <section key="2" className="gallery-custom-sidebar-content nx-global-sidebar__other-content nx-scrollable">
              <div className="nx-global-sidebar__expanded-content">
                <span data-testid="testspan">myspan</span>
              </div>
            </section>
            <NxGlobalSidebarFooter supportText="Support for RSC"
                                   supportLink="https://github.com/sonatype/sonatype-react-shared-components"
                                   releaseText="Release 3.1.4"
                                   productTagLine="Powered by PLAID VILLAIN" />
          </React.Fragment>,
            view = quickRender({ ...minimalProps, children }),
            complementary = view.getByRole('complementary'),
            nav = within(complementary).getByRole('navigation'),
            extraContent = within(complementary).getByTestId('testspan'),
            footer = view.getByRole('contentinfo');

        expect(complementary).toBeInTheDocument();
        expect(nav).toBeInTheDocument();
        expect(extraContent).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
      });
    });
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
    const view = quickRender({ isDefaultOpen: true }),
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
    const view = quickRender({ isDefaultOpen: false }),
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
      <React.Fragment key="1">
        <div className="child-1" data-testid="div1">
          <p data-testid="p1">I am children</p>
        </div>
        <div className="child-2" data-testid="div2"></div>
      </React.Fragment>
    );
    const view = quickRender({ children });
    expect(view.getByTestId('div1')).toBeInTheDocument();
    expect(view.getByTestId('p1')).toBeInTheDocument();
    expect(view.getByTestId('div2')).toBeInTheDocument();
  });
});
