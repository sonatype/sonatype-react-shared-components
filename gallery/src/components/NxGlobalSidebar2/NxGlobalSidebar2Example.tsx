/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebar2,
  NxGlobalSidebar2NavigationLink,
  useToggle,
  NxPageMain,
  NxH1,
  NxPageTitle,
  NxGlobalHeader2,
  NxButton,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt, faQuestionCircle, faBell, faCog, faUserCircle }
  from '@fortawesome/free-solid-svg-icons';

const logoPath = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxGlobalSidebar2Example() {
  const [sidebarOpen, onToggleCollapse] = useToggle(true);

  return (
    <>
      <NxGlobalHeader2 logoImg={logoPath} logoAltText="RSC Plaid Villain" logoLink="#/">
        <NxButton title="Help" variant="icon-only"><NxFontAwesomeIcon icon={faQuestionCircle} /></NxButton>
        <NxButton title="Notifications" variant="icon-only"><NxFontAwesomeIcon icon={faBell} /></NxButton>
        <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
        <NxButton title="User" variant="icon-only"><NxFontAwesomeIcon icon={faUserCircle} /></NxButton>
      </NxGlobalHeader2>
      <NxGlobalSidebar2 isOpen={sidebarOpen}
                        toggleOpenIcon={faArrowLeft}
                        toggleCloseIcon={faArrowRight}
                        onToggleClick={onToggleCollapse}>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxGlobalSidebar2" href="#/pages/Global%20Sidebar%202"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/Load%20Error"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/Load%20Wrapper"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt}
                                        isSelected
                                        text="NxLoadingSpinner"
                                        href="#/pages/Loading%20Spinner"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxModal" href="#/pages/Modal"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
        <NxGlobalSidebar2NavigationLink icon={faLink}
                                        text={<>Nx<b>Page</b><i>Header</i></>}
                                        href="#/pages/Page%20Header"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt}
                                        text="NxPagination"
                                        href="#/pages/Pagination"/>
      </NxGlobalSidebar2>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Foo</NxH1>
        </NxPageTitle>
      </NxPageMain>
    </>
  );
}
