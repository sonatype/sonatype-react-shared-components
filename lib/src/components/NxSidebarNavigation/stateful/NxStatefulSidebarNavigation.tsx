/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import NxSidebarNavigation from '../NxSidebarNavigation';
import { Props, propTypes } from './types';

const NxStatefulSidebarNavigation = function(props: Props) {
  const {
    isDefaultOpen,
    onToggleClick,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toggleHandler = function toggleHandler() {
    const newToggleState = !isOpen;

    setIsOpen(newToggleState);
    if (onToggleClick) {
      onToggleClick(newToggleState);
    }
  }

  return (
    <NxSidebarNavigation isOpen={isOpen}
                         onToggleClick={toggleHandler}
                         {...(otherProps)} />
  );
};

NxStatefulSidebarNavigation.propTypes = propTypes;
export default NxStatefulSidebarNavigation;

export { Props, propTypes } from './types';
