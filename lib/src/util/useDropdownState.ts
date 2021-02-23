/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { KeyboardEventHandler, useEffect } from 'react';
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
  const [isOpen, onToggleOpen, setOpen] = useToggle(false);

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleClick: EventListener = () => {
    // Effects get re-executed after every render.
    // A consequence of this is that the `handleClick` function bound to
    // document.onclick will have values from the closure of the previous render.
    // So for instance, while handling the click that opens the menu
    // the value of `isOpen` will be that of the previous render: false.
    // Something that we're depending on to avoid closing the menu when
    // it is just opening.
    if (isOpen) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return function cleanup() {
      document.removeEventListener('click', handleClick);
    };
  });

  return { isOpen, onToggleOpen, handleKeyPress };
}
