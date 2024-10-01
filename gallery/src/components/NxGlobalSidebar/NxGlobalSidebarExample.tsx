/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebar,
  NxGlobalSidebarNavigationLink,
  useToggle,
  NxPageMain,
  NxH1,
  NxPageTitle,
  NxGlobalHeader
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

export default function NxGlobalSidebarExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(true);

  return (
    <>
      <NxGlobalHeader />
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faArrowLeft}
                       toggleCloseIcon={faArrowRight}
                       onToggleClick={onToggleCollapse}>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
        <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/Load%20Error"/>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/Load%20Wrapper"/>
        <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                       isSelected
                                       text="NxLoadingSpinner"
                                       href="#/pages/Loading%20Spinner"/>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxModal" href="#/pages/Modal"/>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
        <NxGlobalSidebarNavigationLink icon={faLink}
                                       text={<>Nx<b>Page</b><i>Header</i></>}
                                       href="#/pages/Page%20Header"/>
        <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                       text="NxPagination"
                                       href="#/pages/Pagination"/>
      </NxGlobalSidebar>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Foo</NxH1>
        </NxPageTitle>
      </NxPageMain>
    </>
  );
}
