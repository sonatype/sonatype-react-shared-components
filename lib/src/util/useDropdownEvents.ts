/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { KeyboardEventHandler, useEffect, useRef } from 'react';

/**
 * Dropdown global event handling, abstracted into a hook for use in various dropdown-like
 * components (e.g. NxDropdown and NxSegmentedButton)
 * @param externalOnToggleCollapse - The onToggleCollapse function that was provided from outside of the component
 * @param externalOnCloseClick - A callback provided from outside the component that should fire when a click
 *    is detected that would result in the dropdown getting closed. The Mouse event is passed to this handler,
 *    and if the handler calls `preventDefault` on it, the close is cancelled
 * @param externalOnCloseKeyDown - A callback provided from outside the component that should fire when a key press
 *    is detected that would result in the dropdown getting closed. The Keyboard event is passed to this handler,
 *    and if the handler calls `preventDefault` on it, the close is cancelled
 * @param externalOnToggleCollapse - The onToggleCollapse function that was provided from outside of the component
 * @param externalOnKeyDown - Any onKeyDown function that might have been provided from outside of the component.
 *    Note that this fires after the close processing occurs
 * @return Object containing the following:
 * onKeyDown function to set on the dropdown to handle ESC keypresses within it
 * onToggleCollapse function to set as the click handler on the dropdown toggle
 * menuRef A ref that should be attached to the NxDropdownMenu
 * toggleRef A ref that should be attached to the dropdown toggle button
 * onMenuClosing A callback that should be executed when the dropdown menu is closing but before it is removed
 * from DOM. e.g. to be attached to NxDropdownMenu.onClosing.
 */
export default function useDropdownEvents(
  isOpen: boolean,
  disabled: boolean | undefined | null,
  externalOnToggleCollapse?: (() => void) | null,
  externalOnCloseClick?: ((e: MouseEvent) => void) | null,
  externalOnCloseKeyDown?: KeyboardEventHandler | null,
  externalOnKeyDown?: KeyboardEventHandler
) {
  const menuRef = useRef<HTMLDivElement>(null),
      toggleRef = useRef<HTMLButtonElement>(null);

  const onKeyDown: KeyboardEventHandler = event => {
    if (isOpen && !disabled && event.key === 'Escape' && externalOnToggleCollapse) {
      if (externalOnCloseKeyDown) {
        externalOnCloseKeyDown(event);
      }

      if (!event.defaultPrevented) {
        externalOnToggleCollapse();

        // try to prevent the ESC from triggering multiple things, for instance closing a surrounding modal
        // in addition to the dropdown
        event.preventDefault();
      }
    }

    if (externalOnKeyDown) {
      externalOnKeyDown(event);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && externalOnToggleCollapse) {
      let defaultPrevented = false;

      if (externalOnCloseClick) {
        /* when consuming code calls preventDefault on the event, we only want that to affect this dropdown.
         * Since the mouse clicks are captured at the document level, calling preventDefault on the actual
         * native event could have a wide variety of other effects, so we proxy the event object overriding
         * preventDefault with our own impl that only affects a locally-scoped variable
         */
        const proxiedClickEvent = new Proxy(event, {
          get(target, prop, receiver) {
            if (prop === 'preventDefault') {
              return () => { defaultPrevented = true };
            }
            else {
              return Reflect.get(target, prop, receiver);
            }
          }
        });

        externalOnCloseClick(proxiedClickEvent);
      }

      if (!defaultPrevented) {
        externalOnToggleCollapse();
      }
    }
  };

  function onToggleCollapse() {
    // When closing, this is handled by handlDocumentClick. So only do it here when opening
    // (i.e. when not already open)
    if (externalOnToggleCollapse && !isOpen) {
      externalOnToggleCollapse();
    }
  }

  useEffect(() => {
    if (!disabled) {
      document.addEventListener('click', handleDocumentClick);
      return function cleanup() {
        document.removeEventListener('click', handleDocumentClick);
      };
    }
    else {
      return undefined;
    }
  }, [disabled, isOpen]);

  // When the dropdown is closed while focus is within it, set focus back to the dropdown toggle. Otherwise
  // it goes back to the <body> which is less helpful especially when within a modal
  function onMenuClosing() {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const focusedEl = document.activeElement,
        menuEl = menuRef.current,
        toggleEl = toggleRef.current;

    if (menuEl && menuEl.contains(focusedEl)) {
      toggleEl!.focus();
    }
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  }

  return { onKeyDown, onToggleCollapse, menuRef, toggleRef, onMenuClosing };
}
