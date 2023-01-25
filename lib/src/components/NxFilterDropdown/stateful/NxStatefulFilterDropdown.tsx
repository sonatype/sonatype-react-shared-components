/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxFilterDropdown from '../NxFilterDropdown';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

export { Props } from './types';

export default function NxStatefulFilterDropdown<T extends string | number = string>(props: Props<T>) {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return <NxFilterDropdown { ...{ isOpen, onToggleCollapse } } {...props} />;
}

NxStatefulFilterDropdown.propTypes = propTypes;
