/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
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

const crumbs = [{
  name: 'Universe - Everything everywhere that we can observe',
  href: 'https://en.wikipedia.org/wiki/Universe'
}, {
  name: 'Pisces–Cetus Supercluster Complex',
  href: 'https://en.wikipedia.org/wiki/Pisces%E2%80%93Cetus_Supercluster_Complex'
}, {
  name: 'Laniakea Supercluster',
  href: 'https://en.wikipedia.org/wiki/Laniakea_Supercluster'
}, {
  name: 'Virgo Supercluster',
  href: 'https://en.wikipedia.org/wiki/Virgo_Supercluster'
}, {
  name: 'Local Group',
  href: 'https://en.wikipedia.org/wiki/Local_Group'
}, {
  name: 'Milky Way, Our Home Galaxy',
  href: 'https://en.wikipedia.org/wiki/Milky_Way'
}, {
  name: 'Solar System, The Star System centered on the Sun',
  href: 'https://en.wikipedia.org/wiki/Solar_System'
}, {
  name: 'Earth, The Only Planet Regularly Inhabited by Humans',
  href: 'https://en.wikipedia.org/wiki/Earth'
}, {
  name: 'North America, The Continent North of South America',
  href: 'https://en.wikipedia.org/wiki/North_America'
}, {
  name: 'United States, The Third or Fourth Largest Country',
  href: 'https://en.wikipedia.org/wiki/United_States'
}, {
  name: 'Colorado, the Centennial State',
  href: 'https://www.mountainproject.com/area/105708956/colorado'
}, {
  name: 'San Luis Valley, home of the UFO Watchtower',
  href: 'https://www.mountainproject.com/area/105800418/san-luis-valley'
}, {
  name: 'Penitente Canyon Rock Climbing Routes',
  href: 'https://www.mountainproject.com/area/105744316/penitente-canyon'
}, {
  name: 'Penitente Canyon - Inner Canyon',
  href: 'https://www.mountainproject.com/area/105745468/penitente-inner-canyon'
}, {
  name: 'Bullet the Blue Sky - 5.12c/d',
  href: 'https://www.mountainproject.com/route/105753382/bullet-the-blue-sky'
}
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
                               toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
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
