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
 * @param externalOnKeyDown - Any onKeyDown function that might have been provided from outside of the component
 * @return Object containing the following:
 * onKeyDown function to set on the dropdown to handle ESC keypresses within it
 * onToggleCollapse function to set as the click handler on the dropdown toggle
 */
export default function useDropdownEvents(
  isOpen: boolean,
  disabled: boolean | undefined | null,
  externalOnToggleCollapse?: (() => void) | null,
  externalOnKeyDown?: KeyboardEventHandler
) {
  const isToggling = useRef(false);

  const onKeyDown: KeyboardEventHandler = event => {
    if (isOpen && !disabled && event.key === 'Escape' && externalOnToggleCollapse) {
      externalOnToggleCollapse();
    }

    if (externalOnKeyDown) {
      externalOnKeyDown(event);
    }
  };

  const handleDocumentClick = () => {
    if (isOpen && !isToggling.current && externalOnToggleCollapse) {
      externalOnToggleCollapse();
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
