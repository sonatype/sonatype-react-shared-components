/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { KeyboardEventHandler, useEffect, useRef } from 'react';
import useToggle from './useToggle';

/**
 * Stateful dropdown handling, abstracted into a hook for use in various dropdown-like stateful
 * components (e.g. NxStatefulDropdown and NxStatefulSegmentedButton)
 * @return an object containing the following:
 *   isOpen: the current isOpen state of the dropdown
 *   onToggleOpen: Function to set as the dropdown's toggle callback
 *   onKeyDown: Function to set on the dropdown to handle ESC keypresses within it
 */
export default function useDropdownState() {
  const [isOpen, toggleOpen, setOpen] = useToggle(false),
      isToggling = useRef(false);

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleClick = () => {
    if (!isToggling.current) {
      setOpen(false);
    }

    isToggling.current = false;
  };

  function onToggleOpen() {
    isToggling.current = true;
    toggleOpen();
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return function cleanup() {
      document.removeEventListener('click', handleClick);
    };
  });

  return { isOpen, onToggleOpen, handleKeyPress };
}
