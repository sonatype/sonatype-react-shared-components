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
 */
export default function useDropdownEvents(
  isOpen: boolean,
  disabled: boolean | undefined | null,
  externalOnToggleCollapse?: (() => void) | null,
  externalOnCloseClick?: ((e: MouseEvent) => void) | null,
  externalOnCloseKeyDown?: KeyboardEventHandler | null,
  externalOnKeyDown?: KeyboardEventHandler
) {
  const isToggling = useRef(false);

  const onKeyDown: KeyboardEventHandler = event => {
    if (isOpen && !disabled && event.key === 'Escape' && externalOnToggleCollapse) {
      if (externalOnCloseKeyDown) {
        externalOnCloseKeyDown(event);
      }

      if (!event.defaultPrevented) {
        externalOnToggleCollapse();
      }
    }

    if (externalOnKeyDown) {
      externalOnKeyDown(event);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !isToggling.current && externalOnToggleCollapse) {
      let defaultPrevented = false;

      if (externalOnCloseClick) {
        /* when consuming code calls preventDefault on the event, we only want that to affect this dropdown.
         * Since the mouse clicks are captured at the document level, calling preventDefault on the actual
         * native event could have a wide variety of other effects, so we proxy the event object overriding
         * preventDefault with our own impl that only affects a locally-scoped variable
         */
        const proxiedClickEvent = Object.create(event, {
          preventDefault: {
            value: () => { defaultPrevented = true; }
          }
        });

        externalOnCloseClick(proxiedClickEvent);
      }

      if (!defaultPrevented) {
        externalOnToggleCollapse();
      }
    }

    isToggling.current = false;
  };

  function onToggleCollapse() {
    if (!disabled) {
      isToggling.current = true;
    }

    if (externalOnToggleCollapse) {
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

  return { onKeyDown, onToggleCollapse };
}
