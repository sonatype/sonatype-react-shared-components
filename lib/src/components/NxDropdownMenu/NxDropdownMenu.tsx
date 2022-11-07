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
  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState<number>(0);
  const mergedRef = useMergedRef(menuRef, ref);

  const focusableItemsSelector = 'a:not([disabled]):not(.disabled), '
  + 'button:not([disabled]):not(disabled), '
  + 'input:not([disabled]):not(.disabled)';

  const { onClosing, className: classNameProp, children, disableMenuKeyNav, ...attrs } = props,
      className = classnames('nx-dropdown-menu', classNameProp);

  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  useEffect(() => {
    if (!disableMenuKeyNav && menuRef.current) {
      menuRef.current.focus();
    }
  }, [disableMenuKeyNav]);

  function setFocusToMenuItem(direction?: -1 | 0 | 1) {
    if (menuRef.current) {

      const elements = menuRef.current.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>(focusableItemsSelector);

      let updatedFocusedIndex = 0;

      if (typeof direction !== 'number' && direction !== 0) {
        if (!elements[focusedMenuItemIndex]) {
          menuRef.current.focus();
        }
        return;
      }
      else if (direction === -1) {
        updatedFocusedIndex = (focusedMenuItemIndex - 1 >= 0) ? focusedMenuItemIndex - 1 : elements.length - 1;
        if (document.activeElement === menuRef.current) {
          updatedFocusedIndex = elements.length - 1;
        }
      }
      else if (direction === 1) {
        updatedFocusedIndex = (focusedMenuItemIndex + 1 >= elements.length) ? 0 : focusedMenuItemIndex + 1;
        if (document.activeElement === menuRef.current) {
          updatedFocusedIndex = 0;
        }
      }

      setFocusedMenuItemIndex(updatedFocusedIndex);
      elements[updatedFocusedIndex].focus();
    }
  }

  function activateMenuItem(event: React.KeyboardEvent<HTMLElement>) {
    if (menuRef.current) {
      const elements = menuRef.current.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>(focusableItemsSelector);
      const focusedElement = elements[focusedMenuItemIndex];
      if (focusedElement.matches('a, button')) {
        event.preventDefault();
        focusedElement.click();
      }
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    if (!disableMenuKeyNav) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setFocusToMenuItem(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusToMenuItem(1);
          break;
        case ' ': case 'Enter':
          activateMenuItem(event);
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
