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
  const { children, isDefaultOpen, helpLink } = props,
      [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <NxSidebarNavigation isOpen={isOpen}
                         helpLink={helpLink}
                         onToggleOpen={() => setIsOpen(!isOpen)}>
      { children }
    </NxSidebarNavigation>
  );
}

NxStatefulSidebarNavigation.propTypes = propTypes;
export default NxStatefulSidebarNavigation;

export { Props, propTypes } from './types';
