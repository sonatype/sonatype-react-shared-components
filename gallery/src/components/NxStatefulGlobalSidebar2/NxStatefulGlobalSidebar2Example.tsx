/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxStatefulGlobalSidebar2,
  NxGlobalSidebar2NavigationLink,
  NxPageMain,
  NxGlobalHeader2,
  NxPageTitle,
  NxH1
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

export default function NxStatefulGlobalSidebar2Example() {
  return (
    <>
      <NxGlobalHeader2 homeHref="#/" />
      <NxStatefulGlobalSidebar2 isDefaultOpen={true} toggleOpenIcon={faArrowLeft} toggleCloseIcon={faArrowRight}>
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
      </NxStatefulGlobalSidebar2>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Foo</NxH1>
        </NxPageTitle>
      </NxPageMain>
    </>
  );
}
