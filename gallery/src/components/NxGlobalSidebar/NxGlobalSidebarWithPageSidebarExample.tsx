/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebar,
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxPageMain,
  NxPageSidebar,
  useToggle }
  from '@sonatype/react-shared-components';
import { faCircle, faLink } from '@fortawesome/free-solid-svg-icons';
import GalleryNav from '../../GalleryNav';

export default function NxGlobalSidebarWithPageSidebarExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(false);
  return (
    <div className="nx-page-content">
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faCircle}
                       toggleCloseIcon={faCircle}
                       onToggleClick={onToggleCollapse}
                       logoImg="./assets/logo-plaid-villain2.svg"
                       logoAltText="RSC Plaid Villain"
                       logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/NxGlobalSidebar"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadError" href="#/pages/NxLoadError"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/NxLoadWrapper"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadingSpinner" href="#/pages/NxLoadingSpinner"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxModal" href="#/pages/NxModal"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxNexusPageHeader" href="#/pages/NxNexusPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPagination" href="#/pages/NxPagination"/>
        </NxGlobalSidebarNavigation>
      </NxGlobalSidebar>
      <NxPageSidebar>
        <GalleryNav />
      </NxPageSidebar>
      <NxPageMain>Page content</NxPageMain>
    </div>
  );
}
