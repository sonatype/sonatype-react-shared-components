/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb } from '@sonatype/react-shared-components';

const crumbs = [
  { name: 'Foo', href: 'foo' },
  { name: 'Foo', href: 'foo' },
  { name: 'Bar', href: 'bar' },
  { name: 'Baz', href: 'baz' }
];

export default function NxBreadcrumbExample() {
  return (
    <NxBreadcrumb isDropdownOpen={false} crumbs={crumbs} />
  );
}
