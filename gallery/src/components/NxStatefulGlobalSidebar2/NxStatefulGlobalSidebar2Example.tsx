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
  NxP,
  NxH3,
  NxPageMain
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

export default function NxStatefulGlobalSidebar2Example() {
  return (
    <div className="nx-page-content nx-page-content--full-width">
      <NxStatefulGlobalSidebar2 isDefaultOpen={true}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebar2NavigationLink icon={faLink}
                                        text="NxStatefulGlobalSidebar2"
                                        href="#/pages/Stateful%20Global%20Sidebar%202"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/Load%20Error"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/Load%20Wrapper"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt}
                                        text="NxLoadingSpinner"
                                        href="#/pages/Loading%20Spinner"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxModal" href="#/pages/Modal"/>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxPageHeader" href="#/pages/Page%20Header"/>
        <NxGlobalSidebar2NavigationLink icon={faExternalLinkSquareAlt}
                                        text="NxPagination"
                                        href="#/pages/Pagination"/>
        <section className="gallery-custom-sidebar-content nx-global-sidebar__expanded-content">
          <NxH3>
            Custom Content
          </NxH3>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
        </section>
      </NxStatefulGlobalSidebar2>
      <NxPageMain>Page content</NxPageMain>
    </div>
  );
}
