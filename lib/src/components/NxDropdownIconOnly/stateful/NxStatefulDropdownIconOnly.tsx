/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';

import NxDropdownIconOnly from '../NxDropdownIconOnly';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

const NxStatefulDropdownIconOnly: FunctionComponent<Props> = function NxStatefulDropdownIconOnly(props) {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return <NxDropdownIconOnly { ...{ isOpen, onToggleCollapse } } {...props} />;
};
NxStatefulDropdownIconOnly.propTypes = propTypes;
export default NxStatefulDropdownIconOnly;

export { Props, propTypes } from './types';
