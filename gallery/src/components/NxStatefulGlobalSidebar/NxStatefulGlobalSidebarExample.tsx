/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxStatefulGlobalSidebar,
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxP,
  NxH3,
  NxPageMain }
  from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxStatefulGlobalSidebarExample() {
  return (
    <div className="nx-page-content nx-page-content--full-width">
      <NxStatefulGlobalSidebar isDefaultOpen={true}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}
                               logoImg={logoImg}
                               logoAltText="RSC Plaid Villain"
                               logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink}
                                         text="NxStatefulGlobalSidebar"
                                         href="#/pages/NxStatefulGlobalSidebar"/>
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
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxPagination"
                                         href="#/pages/NxPagination"/>
        </NxGlobalSidebarNavigation>
        <section className="gallery-custom-sidebar-content nx-global-sidebar__expanded-content">
          <NxH3>
            Custom Content
          </NxH3>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
        </section>
      </NxStatefulGlobalSidebar>
      <NxPageMain>Page content</NxPageMain>
    </div>
  );
}
