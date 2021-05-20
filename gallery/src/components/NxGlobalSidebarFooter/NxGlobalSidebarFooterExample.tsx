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
  NxGlobalSidebarFooter,
  useToggle,
  NxPageMain }
  from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxGlobalSidebarFooterExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(true);

  return (
    <>
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faArrowLeft}
                       toggleCloseIcon={faArrowRight}
                       onToggleClick={onToggleCollapse}
                       logoImg={logoImg}
                       logoAltText="RSC Plaid Villain"
                       logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/NxGlobalSidebar"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/NxLoadError"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/NxLoadWrapper"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxLoadingSpinner"
                                         href="#/pages/NxLoadingSpinner"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxModal" href="#/pages/NxModal"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxNexusPageHeader"
                                         href="#/pages/NxNexusPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxPagination"
                                         href="#/pages/NxPagination"/>
        </NxGlobalSidebarNavigation>
        <NxGlobalSidebarFooter supportText="Support for RSC"
                               supportLink="https://github.com/sonatype/sonatype-react-shared-components"
                               releaseText="Release 3.1.4"
                               productTagLine="Powered by PLAID VILLAIN">
        </NxGlobalSidebarFooter>
      </NxGlobalSidebar>
      <NxPageMain>Page content</NxPageMain>
    </>
  );
}
