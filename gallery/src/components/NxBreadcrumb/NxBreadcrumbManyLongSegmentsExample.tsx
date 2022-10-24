/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb, useToggle } from '@sonatype/react-shared-components';

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
}];

export default function NxBreadcrumbManLongSegmentsExample() {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return (
    <NxBreadcrumb aria-label="many long segments breadcrumbs"
                  isDropdownOpen={isDropdownOpen}
                  onToggleDropdown={toggleIsDropdownOpen}
                  crumbs={crumbs} />
  );
}
