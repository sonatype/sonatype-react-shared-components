/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb, useToggle } from '@sonatype/react-shared-components';

const crumbs = [
  { name: 'Colorado', href: 'https://www.mountainproject.com/area/105708956/colorado' },
  { name: 'San Luis', href: 'https://www.mountainproject.com/area/105800418/san-luis-valley' },
  { name: 'Penitente Canyon', href: 'https://www.mountainproject.com/area/105744316/penitente-canyon' },
  { name: 'Inner Canyon', href: 'https://www.mountainproject.com/area/105745468/penitente-inner-canyon' },
  { name: 'Bullet the Blue Sky', href: 'https://www.mountainproject.com/route/105753382/bullet-the-blue-sky' }
];

export default function NxBreadcrumbFiveSegmentsExample() {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return (
    <NxBreadcrumb aria-label="five segments breadcrumbs"
                  isDropdownOpen={isDropdownOpen}
                  onToggleDropdown={toggleIsDropdownOpen}
                  crumbs={crumbs} />
  );
}
