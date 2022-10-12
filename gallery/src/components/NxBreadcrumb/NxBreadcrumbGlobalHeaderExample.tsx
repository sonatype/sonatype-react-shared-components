/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxStatefulGlobalSidebar,
  NxPageMain,
  NxP,
  NxPageTitle,
  NxH1,
  NxGlobalHeader,
  NxBreadcrumb,
  useToggle
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';

const sidebarLogoPath = require('../../assets/images/logo-plaid-villain-text.png');

const crumbs = [
  { name: 'Colorado', href: 'https://www.mountainproject.com/area/105708956/colorado' },
  { name: 'San Luis', href: 'https://www.mountainproject.com/area/105800418/san-luis-valley' },
  { name: 'Penitente Canyon', href: 'https://www.mountainproject.com/area/105744316/penitente-canyon' }
];

export default function NxGlobalHeaderEmptyExample() {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return (
    <>
      <NxGlobalHeader>
        <NxBreadcrumb isDropdownOpen={isDropdownOpen} onToggleDropdown={toggleIsDropdownOpen} crumbs={crumbs} />
      </NxGlobalHeader>
      <NxStatefulGlobalSidebar isDefaultOpen={false}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}
                               logoImg={sidebarLogoPath}
                               logoAltText="RSC Plaid Villain"
                               logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
        </NxGlobalSidebarNavigation>
      </NxStatefulGlobalSidebar>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Lorem Ipsum</NxH1>
        </NxPageTitle>
        <NxP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
          varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
          rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
          pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
          maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
          praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
          dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
          pharetra convallis posuere morbi leo urna.
        </NxP>
      </NxPageMain>
    </>
  );
}
