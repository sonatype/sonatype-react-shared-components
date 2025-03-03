/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';

import NxIconDropdown from '../NxIconDropdown';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

const NxStatefulIconDropdown: FunctionComponent<Props> = function NxStatefulIconDropdown(props) {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return <NxIconDropdown { ...{ isOpen, onToggleCollapse } } {...props} />;
};

NxStatefulIconDropdown.propTypes = propTypes;
export default NxStatefulIconDropdown;

export { Props, propTypes } from './types';
