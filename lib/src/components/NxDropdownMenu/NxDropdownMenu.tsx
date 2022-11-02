/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useLayoutEffect, forwardRef, useState, useEffect, useRef, KeyboardEventHandler } from 'react';
import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';

import { Props, propTypes } from './types';

import './NxDropdownMenu.scss';

export { Props };

/**
 * This component is not currently intended for public export. It is a helper for NxDropdown and NxSegmentedButton
 * so they can reset focus when they close
 */
/* eslint-disable-next-line react/prop-types */
const NxDropdownMenu = forwardRef<HTMLDivElement, Props>(function NxDropdownMenu(props, ref) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const mergedRef = useMergedRef(menuRef, ref);

  const { onClosing, className: classNameProp, children, ...attrs } = props,
      className = classnames('nx-dropdown-menu', classNameProp);

  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  useEffect(() => {
    // <a> or <button>
    if (menuRef.current) {
      menuRef.current.focus();
      // const elements = menuRef.current.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a, button');
    }
  }, [menuRef]);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (menuRef.current) {
      const elements = menuRef.current.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a, button');

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          if (document.activeElement === menuRef.current) {
            setFocusedIndex(0);
            elements[0].focus();
          }
          else {
            const updatedFocusedIndex = (focusedIndex - 1 >= 0) ? focusedIndex - 1 : elements.length - 1;
            setFocusedIndex(updatedFocusedIndex);
            elements[updatedFocusedIndex].focus();
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (document.activeElement === menuRef.current) {
            setFocusedIndex(0);
            elements[0].focus();
          }
          else {
            const updatedFocusedIndex = (focusedIndex + 1 >= elements.length) ? 0 : focusedIndex + 1;
            setFocusedIndex(updatedFocusedIndex);
            elements[updatedFocusedIndex].focus();
          }
          break;
      }
    }
  };

  return (
    <div ref={mergedRef}
         onKeyDown={handleKeyDown}
         tabIndex={0}
         role="menu"
         { ...{ className, ...attrs } }>
      { children }
    </div>
  );
});

NxDropdownMenu.propTypes = propTypes;

export default NxDropdownMenu;
