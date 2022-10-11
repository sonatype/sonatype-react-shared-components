/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb, useToggle } from '@sonatype/react-shared-components';

const crumbs = [{
  name: 'Bullet the Blue Sky - 5.12c/d',
  href: 'https://www.mountainproject.com/route/105753382/bullet-the-blue-sky'
}];

export default function NxBreadcrumbOneSegmentExample() {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return (
    <NxBreadcrumb isDropdownOpen={isDropdownOpen} onToggleDropdown={toggleIsDropdownOpen} crumbs={crumbs} />
  );
}
