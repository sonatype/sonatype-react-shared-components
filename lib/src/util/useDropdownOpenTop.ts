/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState, useEffect, RefObject } from 'react';

/**
 * Convenience hook that determins whether a dropdown menu should open on the top
 * instead of opening the menu on the bottom.
 * This custom hook basically checks the position of the dropdown based on where it is in the current page,
 * and determines if the dropdown menu should be placed on top or the bottom..
 * @param dropdownDivRef the ref to the div that holds the dropdown menu.
 * @param childrenCount the number of items the dropdown menu contains to dynamically allocate spacing.
 * @return a boolean if the dropdown menu should be placed on top.
 */

const DROPDOWN_ITEM_HEIGHT = 32; //32px is the height of an item in the dropdown
const useDropdownOpenTop = (
  dropdownDivRef: RefObject<HTMLDivElement>,
  childrenCount: number,
) => {
  const [openTop, setOpenTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', determineDropdownUp);
    window.addEventListener('resize', determineDropdownUp);
    return () => {
      window.removeEventListener('scroll', determineDropdownUp);
      window.removeEventListener('resize', determineDropdownUp);
    };
  }, [childrenCount]);

  const determineDropdownUp = () => {
    if (dropdownDivRef && dropdownDivRef.current) {
      const windowHeight = window.innerHeight;
      const menuHeight = Math.min(childrenCount * DROPDOWN_ITEM_HEIGHT, 320);
      const offset = dropdownDivRef.current.getBoundingClientRect().bottom + menuHeight;

      if (offset >= windowHeight) {
        setOpenTop(true);
      }
      else {
        setOpenTop(false);
      }
    }
  };
  return openTop;
};

export default useDropdownOpenTop;
