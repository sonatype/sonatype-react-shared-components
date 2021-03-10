/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  faAtom,
  faBiohazard,
  faBolt,
  faCrow,
  faPlaceOfWorship,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  NxStatefulNavigationSidebar,
  NxNavigationSidebarContent,
  NxNavigationSidebarLinks,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

function Application() {
  return (
    <div id="temporary-navigation-sidebar-example" className="nx-page-content nx-page-content--full-width">
      <NxStatefulNavigationSidebar isDefaultOpen={true}
                                   toggleOpenIcon={faBiohazard}
                                   toggleCloseIcon={faCrow}
                                   logoText="nexus lifecycle"
                                   logoLink="/home">
        <NxNavigationSidebarLinks>
          <a href="/alpha" className="nx-sidebar__navigation__link selected nx-text-link">
            <NxFontAwesomeIcon icon={faAtom} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Alpha</span>
          </a>
          <a href="/beta" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faBiohazard} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Beta</span>
          </a>
          <a href="/gamma" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faPlaceOfWorship} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Gamma</span>
          </a>
          <a href="/delta" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name delta</span>
          </a>
          <a href="/epsilon" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faBolt} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Epsilon</span>
          </a>
          <a href="/Zeta" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faAtom} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Zeta</span>
          </a>
          <a href="/Etha" className="nx-sidebar__navigation__link">
            <NxFontAwesomeIcon icon={faPlaceOfWorship} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Etha</span>
          </a>
          <a href="/Theta" className="nx-sidebar__navigation__link ">
            <NxFontAwesomeIcon icon={faCrow} fixedWidth />
            <span className="nx-sidebar__navigation__text nx-sidebar__expanded-content">Link Name Theta</span>
          </a>
        </NxNavigationSidebarLinks>
        <NxNavigationSidebarContent className="navigation-sidebar-custom-content-1">
          <a rel="noreferrer"
             target="_blank"
             href="www.google.com">
            <NxFontAwesomeIcon fixedWidth icon={faQuestionCircle}/>
            <span className="nx-sidebar__expanded-content">Help and Support</span>
          </a>
        </NxNavigationSidebarContent>
        <NxNavigationSidebarContent className="navigation-sidebar-custom-content-2">
          <div className="nx-sidebar__expanded-content">
            <p className="example-release-note">Lifecycle Release 105</p>
            <p className="example-attribution">Powered by Nexux IQ Server</p>
            <p className="example-attribution">Created by Sonatype</p>
          </div>
          <p className="nx-sidebar__collapsed-content">release 105</p>
        </NxNavigationSidebarContent>
      </NxStatefulNavigationSidebar>
      <div className="nx-page-main">
        <p>
          Cupidatat pariatur mollit sit pariatur mollit qui.{' '}
          Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.{' '}
          Ipsum nostrud do ipsum nisi occaecat reprehenderit aliquip in occaecat culpa consequat pariatur et.{' '}
          Non adipisicing qui officia nisi do aliquip.
        </p>
      </div>
    </div>
  );
}

export default Application;
