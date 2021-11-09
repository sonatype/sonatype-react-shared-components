/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import useDropdownEvents from '../../util/useDropdownEvents';

import { AbstractDropdownProps } from './types';
export {
  AbstractDropdownToggleElementProps,
  AbstractDropdownToggleElement
} from './types';

const AbstractDropdown = function NxDropdown(props: AbstractDropdownProps) {
  const {
    className,
    isOpen,
    disabled,
    toggleElement,
    children,
    onToggleCollapse: externalOnToggleCollapse,
    onKeyDown: externalOnKeyDown,
    onCloseClick,
    onCloseKeyDown,
    ...attrs
  } = props;

  const {
    onKeyDown,
    onToggleCollapse,
    menuRef,
    toggleRef,
    onMenuClosing
  } = useDropdownEvents(
      isOpen,
      disabled,
      externalOnToggleCollapse,
      onCloseClick,
      onCloseKeyDown,
      externalOnKeyDown
  );

  return (
    <div className={className}
         onKeyDown={onKeyDown}
         {...attrs}
    >
      { toggleElement({ toggleRef, onToggleCollapse }) }
      { isOpen &&
        <NxDropdownMenu ref={menuRef} onClosing={onMenuClosing}>
          { children }
        </NxDropdownMenu>
      }
    </div>
  );
};

export default AbstractDropdown;
