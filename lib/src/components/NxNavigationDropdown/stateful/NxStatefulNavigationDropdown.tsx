/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import useToggle from '../../../util/useToggle';
import NxNavigationDropdown from '../NxNavigationDropdown';
import { Props, propTypes } from './types';
export { Props };

export default function NxStatefulNavigationDropdown(props: Props) {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return <NxNavigationDropdown { ...{ isOpen, onToggleCollapse } } {...props} />;
}

NxStatefulNavigationDropdown.propTypes = propTypes;
