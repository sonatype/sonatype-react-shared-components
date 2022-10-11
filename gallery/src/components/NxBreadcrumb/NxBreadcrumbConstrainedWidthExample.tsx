/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb, useToggle } from '@sonatype/react-shared-components';

const crumbs = [{
  name: 'Colorado, the Centennial State',
  href: 'https://www.mountainproject.com/area/105708956/colorado'
}, {
  name: 'San Luis Valley, home of the UFO Watchtower',
  href: 'https://www.mountainproject.com/area/105800418/san-luis-valley'
}, {
  name: 'Penitente Canyon Rock Climbing Routes',
  href: 'https://www.mountainproject.com/area/105744316/penitente-canyon'
}];

export default function NxBreadcrumbConstrainedWidthExample() {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return (
    <div style={{ border: '1px solid red', width: '500px' }}>
      <NxBreadcrumb isDropdownOpen={isDropdownOpen} onToggleDropdown={toggleIsDropdownOpen} crumbs={crumbs} />
    </div>
  );
}
