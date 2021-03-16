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
  NxStatefulGlobalSidebar,
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxTreeView,
  NxTreeViewChild,
  useToggle
} from '@sonatype/react-shared-components';

const logo = require('../src/resources/logos/lifecycle.svg');

function Application() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);
  const [toggleCheck2, onToggleCollapse2] = useToggle(false);

  const longText = 'Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.';

  return (
    <div id="temporary-navigation-sidebar-example" className="nx-page-content nx-page-content--full-width">
      <NxStatefulGlobalSidebar isDefaultOpen={true}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faCrow}
                               logoAltText="product name"
                               logoLink="/home"
                               logoImg={logo}>
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink isSelected={true}
                                         href="#alpha"
                                         icon={faCrow}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#beta"
                                         icon={faBiohazard}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#gamma"
                                         icon={faCrow}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#delta"
                                         icon={faBiohazard}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#epsilon"
                                         icon={faCrow}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#zeta"
                                         icon={faBiohazard}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#etha"
                                         icon={faCrow}
                                         text="Nav Item" />
          <NxGlobalSidebarNavigationLink href="#theta"
                                         icon={faBiohazard}
                                         text={longText} />
        </NxGlobalSidebarNavigation>
        <section className="custom-tree-content nx-page-sidebar-operable__expanded-content">
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
        </section>
      </NxStatefulGlobalSidebar>
      <main className="nx-page-main">
        <p>
          Cupidatat pariatur mollit sit pariatur mollit qui.{' '}
          Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.{' '}
          Ipsum nostrud do ipsum nisi occaecat reprehenderit aliquip in occaecat culpa consequat pariatur et.{' '}
          Non adipisicing qui officia nisi do aliquip.
        </p>
      </main>
    </div>
  );
}

export default Application;
