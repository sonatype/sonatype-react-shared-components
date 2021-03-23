/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';

import useToggle from '../../../util/useToggle';
import NxGlobalSidebar from '../NxGlobalSidebar';
import { Props, propTypes } from './types';

const NxStatefulGlobalSidebar: FunctionComponent<Props> = function(props) {
  const {
    isDefaultOpen,
    children,
    ...otherProps
  } = props;

  const [isOpen, toggleOpen] = useToggle(isDefaultOpen);

  return (
    <NxGlobalSidebar isOpen={isOpen}
                     onToggleClick={toggleOpen}
                     {...otherProps}>
      { children }
    </NxGlobalSidebar>
  );
};

NxStatefulGlobalSidebar.propTypes = propTypes;
export default NxStatefulGlobalSidebar;

export { Props, propTypes } from './types';
