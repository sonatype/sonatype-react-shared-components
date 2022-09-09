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
  NxPageMain,
  NxH1,
  NxPageTitle
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxGlobalSidebarExample() {
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
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/Load%20Error"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/Load%20Wrapper"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxLoadingSpinner"
                                         href="#/pages/Loading%20Spinner"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxModal" href="#/pages/Modal"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxPagination"
                                         href="#/pages/Pagination"/>
        </NxGlobalSidebarNavigation>
        <NxGlobalSidebarFooter supportText="Support for RSC"
                               supportLink="https://github.com/sonatype/sonatype-react-shared-components"
                               releaseText="Release 3.1.4"
                               productTagLine="Powered by PLAID VILLAIN" />
      </NxGlobalSidebar>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Foo</NxH1>
        </NxPageTitle>
      </NxPageMain>
    </>
  );
}
