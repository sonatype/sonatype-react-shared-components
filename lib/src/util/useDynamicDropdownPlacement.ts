/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState, useEffect, RefObject } from 'react';

/**
 * Convenience hook that determines whether a dropdown menu should open on the top or on the right
 * instead of opening the menu on the bottom or on the left respectively.
 * This custom hook basically checks the position of the dropdown based on where it is in the current page,
 * and determines if the dropdown menu should be placed on the top or on the right based on scroll or resize.
 * @param dropdownDivRef the ref to the div that holds the dropdown menu.
 * @param childrenCount the number of items the dropdown menu contains to dynamically allocate spacing.
 * @return a [boolean, boolean] if the dropdown menu should be placed on top and on the right respectively.
 */

const DROPDOWN_ITEM_HEIGHT = 32; //32px is the height of an item in the dropdown
const ICON_ONLY_DROPDOWN_WIDTH = 250; //250px is the width of the dropdown

const useDynamicDropdownPlacement = (
  dropdownDivRef: RefObject<HTMLDivElement>,
  childrenCount: number,
) => {
  const [openTop, setOpenTop] = useState<boolean>(false);
  const [openRight, setOpenRight] = useState<boolean>(false);

  // The event listeners look for changes to be made to the dropdown position if the user
  // changes the window size by either scrolling the page or resizing the page.
  // childrenCount is added as a dependency because in components like NxSearchDropdown, the height of the
  // menu depends on the number of results/menu items shown in the component.
  useEffect(() => {
    window.addEventListener('scroll', determinePlacement);
    window.addEventListener('resize', determinePlacement);
    return () => {
      window.removeEventListener('scroll', determinePlacement);
      window.removeEventListener('resize', determinePlacement);
    };
  }, [childrenCount]);

  const determinePlacement = () => {
    if (dropdownDivRef && dropdownDivRef.current) {
      const windowHeight = window.innerHeight;
      const menuHeight = Math.min(childrenCount * DROPDOWN_ITEM_HEIGHT, 320);
      const rect = dropdownDivRef.current.getBoundingClientRect();
      const offsetHeight = rect.bottom + menuHeight;

      // The menu is rendered on the bottom by default.
      // If the bottom of the dropdown goes beyond the window height, open the menu on top,
      // i.e. setOpenTop(true), which adds the class 'nx-dropdown-menu__open-top' to 'nx-dropdown-menu'
      offsetHeight >= windowHeight ? setOpenTop(true) : setOpenTop(false);

      // The menu is rendered on the left by default.
      // If the x position goes beyond the viewport, render the menu on the right,
      // i.e. setOpenRight(true), which adds the class 'nx-dropdown-menu__open-right' to 'nx-dropdown-menu'
      rect.x - ICON_ONLY_DROPDOWN_WIDTH < 0 ? setOpenRight(true) : setOpenRight(false);
    }
  };
  return [openTop, openRight];
};

export default useDynamicDropdownPlacement;
