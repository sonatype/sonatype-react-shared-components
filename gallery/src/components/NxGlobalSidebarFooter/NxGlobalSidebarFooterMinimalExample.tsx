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
  NxPageTitle,
  NxH1
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxGlobalSidebarFooterMinimalExample() {
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
          <NxGlobalSidebarNavigationLink icon={faLink}
                                         text="NxGlobalSidebarFooter"
                                         href="#/pages/Global%20Sidebar%20Footer"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/Load%20Error"/>
        </NxGlobalSidebarNavigation>
        <NxGlobalSidebarFooter/>
      </NxGlobalSidebar>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Foo</NxH1>
        </NxPageTitle>
      </NxPageMain>
    </>
  );
}
