/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, useState, KeyboardEventHandler, useEffect } from 'react';

import NxDropdown from '../NxDropdown';
import { Props, propTypes } from './types';

const NxStatefulDropdown: FunctionComponent<Props> = function NxStatefulDropdown(props) {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); };

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Escape') {
      toggleOpen(false);
    }
  };

  const handleClick = () => {
    // Effects get re-executed after every render.
    // A consequence of this is that the `handleClick` function bound to
    // document.onclick will have values from the closure of the previous render.
    // So for instance, while handling the click that opens the menu
    // the value of `isOpen` will be that of the previous render: false.
    // Something that we're depending on to avoid closing the menu when
    // it is just opening.
    if (isOpen) {
      toggleOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return function cleanup() {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <NxDropdown isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}
                onKeyDown={handleKeyPress}
                {...props} />
  );
};
NxStatefulDropdown.propTypes = propTypes;
export default NxStatefulDropdown;

export { Props, propTypes } from './types';
