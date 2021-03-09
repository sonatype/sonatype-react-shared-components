/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';

import useToggle from '../../../util/useToggle';
import NxNavigationSidebar from '../NxNavigationSidebar';
import { Props, propTypes } from './types';

const NxStatefulNavigationSidebar: FunctionComponent<Props> = function(props) {
  const {
    isDefaultOpen,
    children,
    ...otherProps
  } = props;

  const [isOpen, toggleOpen] = useToggle(isDefaultOpen);

  return (
    <NxNavigationSidebar isOpen={isOpen}
                         onToggleClick={toggleOpen}
                         {...otherProps}>
      { children }
    </NxNavigationSidebar>
  );
};

NxStatefulNavigationSidebar.propTypes = propTypes;
export default NxStatefulNavigationSidebar;

export { Props, propTypes } from './types';
