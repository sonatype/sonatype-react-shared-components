/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  faArrowLeft,
  faBiohazard,
  faCrow
} from '@fortawesome/free-solid-svg-icons';
import {
  NxStatefulNavigationSidebar,
  NxNavigationSidebarLinks,
  NxFontAwesomeIcon,
  NxOverflowTooltip,
  NxNavigationSidebarContent,
  NxTreeView,
  NxTreeViewChild,
  useToggle
} from '@sonatype/react-shared-components';

const logo = require('../src/resources/logos/lifecycle.svg');

function Application() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);
  const [toggleCheck2, onToggleCollapse2] = useToggle(false);

  return (
    <div id="temporary-navigation-sidebar-example" className="nx-page-content nx-page-content--full-width">
      <NxStatefulNavigationSidebar isDefaultOpen={true}
                                   toggleOpenIcon={faArrowLeft}
                                   toggleCloseIcon={faCrow}
                                   logoAltText="product name"
                                   logoLink="/home"
                                   logoImg={logo}>
        <NxNavigationSidebarLinks>
          <a href="#alpha" className="nx-sidebar-navigation__link selected nx-text-link">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#beta" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faBiohazard} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#gamma" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#delta" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faBiohazard} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#epsilon" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#Zeta" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faBiohazard} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#Etha" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
              Nav Item
            </span>
          </a>
          <a href="#Theta" className="nx-sidebar-navigation__link nx-text-link">
            <NxFontAwesomeIcon icon={faBiohazard} fixedWidth />
            <NxOverflowTooltip>
              <span className="nx-sidebar-navigation__text nx-page-sidebar-operable__expanded-content">
                Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.
              </span>
            </NxOverflowTooltip>
          </a>
        </NxNavigationSidebarLinks>
        <NxNavigationSidebarContent className="custom-tree-content nx-page-sidebar-operable__expanded-content">
          <NxTreeView onToggleCollapse={onToggleCollapse}
                      isOpen={toggleCheck}
                      triggerContent="TreeView Content">
            <NxTreeViewChild>
              <NxTreeView onToggleCollapse={onToggleCollapse2}
                          isOpen={toggleCheck2}
                          triggerContent="Tree View Child">
                <NxTreeViewChild>Tree View Item Nested</NxTreeViewChild>
                <NxTreeViewChild>Tree View Item Nested</NxTreeViewChild>
              </NxTreeView>
            </NxTreeViewChild>
            <NxTreeViewChild>Tree View Item</NxTreeViewChild>
            <NxTreeViewChild>Tree View Item</NxTreeViewChild>
            <NxTreeViewChild>Tree View Item</NxTreeViewChild>
          </NxTreeView>
        </NxNavigationSidebarContent>
      </NxStatefulNavigationSidebar>
      <div className="nx-page-main">
        <p>
          Cupidatat pariatur mollit sit pariatur mollit qui.{' '}
          Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.{' '}
          Ipsum nostrud do ipsum nisi occaecat reprehenderit aliquip in occaecat culpa consequat pariatur et.{' '}
          Non adipisicing qui officia nisi do aliquip.
        </p>
      </div>
    </div>
  );
}

export default Application;
