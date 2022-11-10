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

const FOCUSABLE_MENU_ITEMS_SELECTOR = ':is(a, button, input):not([disabled], .disabled])';

/**
 * This component is not currently intended for public export. It is a helper for NxDropdown and NxSegmentedButton
 * so they can reset focus when they close
 */
/* eslint-disable-next-line react/prop-types */
const NxDropdownMenu = forwardRef<HTMLDivElement, Props>(function NxDropdownMenu(props, ref) {
  const { onClosing, className: classNameProp, children, disableMenuKeyNav, ...attrs } = props;

  const menuRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(menuRef, ref);

  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState<number>(0);

  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  useEffect(() => {
    if (!disableMenuKeyNav && menuRef.current) {
      menuRef.current.focus();
    }
  }, [disableMenuKeyNav]);

  function setFocusToMenuItem(direction: -1 | 1) {
    if (menuRef.current) {
      const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_MENU_ITEMS_SELECTOR);

      let newFocusedMenuItemIndex = 0;

      if (direction === -1) {
        newFocusedMenuItemIndex = (focusedMenuItemIndex - 1 >= 0) ? focusedMenuItemIndex - 1 : focusableEls.length - 1;

        if (document.activeElement === menuRef.current) {
          newFocusedMenuItemIndex = focusableEls.length - 1;
        }
      }
      else if (direction === 1) {
        newFocusedMenuItemIndex = (focusedMenuItemIndex + 1 >= focusableEls.length) ? 0 : focusedMenuItemIndex + 1;

        if (document.activeElement === menuRef.current) {
          newFocusedMenuItemIndex = 0;
        }
      }

      setFocusedMenuItemIndex(newFocusedMenuItemIndex);
      focusableEls[newFocusedMenuItemIndex].focus();
    }
  }

  function activateMenuItem(event: React.KeyboardEvent<HTMLElement>) {
    if (menuRef.current) {
      const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_MENU_ITEMS_SELECTOR);
      const currentFocusedEl = focusableEls[focusedMenuItemIndex];
      if (currentFocusedEl.matches('a, button')) {
        event.preventDefault();
        currentFocusedEl.click();
      }
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
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

  const className = classnames('nx-dropdown-menu', classNameProp);

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
