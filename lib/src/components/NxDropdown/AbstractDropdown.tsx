/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Children, forwardRef, useState } from 'react';
import useMergedRef from '@react-hook/merged-ref';

import { KeyboardEventHandler, useEffect, useRef } from 'react';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';

import { AbstractDropdownProps } from './types';
export {
  AbstractDropdownProps,
  AbstractDropdownRenderToggleElement
} from './types';

/**
 * Abstracted Dropdown global event handling.
 * @param isOpen - a boolean to indicate if the dropdown is open or not.
 * @param className - a classname string for the div containing the toggle and dropdown.
 * @param disabled - If true disables toggling of dropdown.
 * @param onToggleCollapse - The onToggleCollapse function that was provided from outside of the component
 * @param onCloseClick - A callback that should fire when a click
 *    is detected that would result in the dropdown getting closed. The Mouse event is passed to this handler,
 *    and if the handler calls `preventDefault` on it, the close is cancelled
 * @param onCloseKeyDown - A callback provided that should fire when a key press
 *    is detected that would result in the dropdown getting closed. The Keyboard event is passed to this handler,
 *    and if the handler calls `preventDefault` on it, the close is cancelled
 * @param onToggleCollapse - The onToggleCollapse function that was provided from outside of the component
 * @param onKeyDown - Any onKeyDown function that might have been provided from outside of the component.
 *    Note that this fires after the close processing occurs
 * @return - A div with the toggle element and dropdown menu.
 */

const AbstractDropdown = forwardRef<HTMLDivElement, AbstractDropdownProps>((props: AbstractDropdownProps, ref) => {
  const {
    className,
    isOpen,
    disabled,
    renderToggleElement,
    children,
    onToggleCollapse: onToggleCollapseProp,
    onKeyDown: onKeyDownProp,
    onCloseClick,
    onCloseKeyDown: onCloseKeyDownProp,
    ...attrs
  } = props;

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
    if (isOpen && !disabled && event.key === 'Escape' && onToggleCollapseProp) {
      if (onCloseKeyDownProp) {
        onCloseKeyDownProp(event);
      }

      if (!event.defaultPrevented) {
        onToggleCollapseProp();

        // try to prevent the ESC from triggering multiple things, for instance closing a surrounding modal
        // in addition to the dropdown
        event.preventDefault();
      }
    }

    if (onKeyDownProp) {
      onKeyDownProp(event);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && onToggleCollapseProp) {
      let defaultPrevented = false;

      if (onCloseClick) {
        /* when consuming code calls preventDefault on the event, we only want that to affect this dropdown.
        * Since the mouse clicks are captured at the document level, calling preventDefault on the actual
        * native event could have a wide variety of other effects, so we proxy the event object overriding
        * preventDefault with our own impl that only affects a locally-scoped variable
        */
        const proxiedClickEvent = new Proxy(event, {
          get(target, prop) {
            if (prop === 'preventDefault') {
              return () => { defaultPrevented = true; };
            }
            else {
              return Reflect.get(target, prop);
            }
          }
        });

        onCloseClick(proxiedClickEvent);
      }

      if (!defaultPrevented) {
        onToggleCollapseProp();
      }
    }
  };

  function onToggleCollapse() {
    // When closing, this is handled by handlDocumentClick. So only do it here when opening
    // (i.e. when not already open)
    if (!isOpen && onToggleCollapseProp) {
      onToggleCollapseProp();
    }
  }

  useEffect(() => {
    if (disabled) {
      return;
    }

    document.addEventListener('click', handleDocumentClick);

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [disabled, isOpen]);

  // When the dropdown is closed while focus is within it, set focus back to the dropdown toggle. Otherwise
  // it goes back to the <body> which is less helpful especially when within a modal
  function onMenuClosing() {
    const focusedEl = document.activeElement,
        menuEl = menuRef.current,
        toggleEl = toggleRef.current;

    if (menuEl && menuEl.contains(focusedEl)) {
      toggleEl?.focus();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', determineDropdownUp);
    window.addEventListener('resize', determineDropdownUp);
    return () => {
      window.removeEventListener('scroll', determineDropdownUp);
      window.removeEventListener('resize', determineDropdownUp);
    };
  }, []);

  const divRef = useRef<HTMLDivElement>(null);
  const newRef = useMergedRef(divRef, ref);
  const [openTop, setOpenTop] = useState<boolean>(false);

  const determineDropdownUp = () => {
    if (divRef && divRef.current) {
      const windowHeight = window.innerHeight;
      const menuHeight = Children.count(children) * 32; //32px is the height of an item in the dropdown

      const offset = divRef.current.getBoundingClientRect().bottom + menuHeight;

      if (offset >= windowHeight) {
        setOpenTop(true);
      }
      else {
        setOpenTop(false);
      }
    }
  };

  return (
    <div ref={newRef} className={className} onKeyDown={onKeyDown} {...attrs}>
      { renderToggleElement(toggleRef, onToggleCollapse) }
      { isOpen &&
        <NxDropdownMenu ref={menuRef} onClosing={onMenuClosing} openTop={openTop}>
          { children }
        </NxDropdownMenu>
      }
    </div>
  );
});

export default AbstractDropdown;
