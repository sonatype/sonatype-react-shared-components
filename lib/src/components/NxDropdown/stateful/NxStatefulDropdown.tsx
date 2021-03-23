/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';

import NxDropdown from '../NxDropdown';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

const NxStatefulDropdown: FunctionComponent<Props> = function NxStatefulDropdown(props) {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return <NxDropdown { ...{ isOpen, onToggleCollapse } } {...props} />;
};
NxStatefulDropdown.propTypes = propTypes;
export default NxStatefulDropdown;

export { Props, propTypes } from './types';
