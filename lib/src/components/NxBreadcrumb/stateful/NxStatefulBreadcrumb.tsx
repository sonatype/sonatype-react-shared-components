/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxBreadcrumb } from '../../..';
import useToggle from '../../../util/useToggle';

import { StatefulProps } from '../types';
export { StatefulProps as Props };

export default function NxStatefulBreadcrumb(props: StatefulProps) {
  const [isDropdownOpen, toggleIsDropdownOpen] = useToggle(false);

  return <NxBreadcrumb isDropdownOpen={isDropdownOpen} onToggleDropdown={toggleIsDropdownOpen} { ...props } />;
}
