/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  ReactNode,
  useLayoutEffect,
  forwardRef,
  useState,
  useEffect,
  useRef,
  KeyboardEventHandler,
  createContext,
  ReactElement,
  useContext
} from 'react';
import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';
import { always, dec, inc, move, reduce } from 'ramda';

import { Props, propTypes } from './types';

import './NxDropdownMenu.scss';

export { Props };

const FOCUSABLE_ELEMENTS = ['a', 'button', 'input'];
const FOCUSABLE_MENU_ITEMS_SELECTOR = FOCUSABLE_ELEMENTS.join(', ');
const ACTIVE_FOCUSABLE_MENU_ITEMS_SELECTOR = FOCUSABLE_ELEMENTS.join(':not([disabled], .disabled), ');

interface NxDropdownMenuValue {
  isOpen: boolean,
  focusNext: () => void,
  focusLast: () => void,
  focusFirst: () => void,
  focusPrev: () => void,
  setIsOpen: () => void,
}

const NxDropdownMenuContext = createContext<NxDropdownMenuValue | null>(null);

interface NxDropdownMenuRootProps {
  children: ReactNode;
}

const NxDropdownMenuRoot = (props: NxDropdownMenuRootProps) => {
  const {
    children
  } = props;

  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setMenuItemFocus = (adjust: (i: number) => number) => () => {
    if (menuRef.current) {
      const focusableElements = getFocusableMenuItems(ACTIVE_FOCUSABLE_MENU_ITEMS_SELECTOR);
      const adjustedMenuItemIndex = adjust(focusedMenuItemIndex ?? 0);

      let newMenuItemIndex = adjustedMenuItemIndex;

      if (adjustedMenuItemIndex < 0) {
        newMenuItemIndex = focusableElements.length - 1;
      }
      else if (adjustedMenuItemIndex >= focusableElements.length) {
        newMenuItemIndex = 0;
      }

      const elementToFocus = focusableElements[newMenuItemIndex];
      if (elementToFocus) {
        if (onMenuItemFocus) {
          onMenuItemFocus(newMenuItemIndex, focusableElements);
        }
        elementToFocus.focus();
        setFocusedMenuItemIndex(newMenuItemIndex);
        elementToFocus.scrollIntoView({ block: 'nearest' });
      }
    }
  };
  const focusNext = setMenuItemFocus(inc);
  const focusPrev = setMenuItemFocus(dec);
  const focusFirst = setMenuItemFocus(always(0));
  const focusLast = setMenuItemFocus(always(-1));

  return (
    <NxDropdownMenuContext.Provider value={{
      focusNext,
      focusLast,
      focusFirst,
      focusPrev,
      isOpen,
      setIsOpen
    }}>
      {children}
    </NxDropdownMenuContext.Provider>
  );
};

interface RenderTriggerElementObject {
  handleKeyDown: React.KeyboardEventHandler;
}

interface NxDropdownMenuTriggerProps {
  onToggleOpen: () => void;
  renderTriggerElement: (setup: RenderTriggerElementObject) => ReactElement;
}

const NxDropdownMenuTrigger = (props: NxDropdownMenuTriggerProps) => {
  const { renderTriggerElement, onToggleOpen } = props;
  const { isOpen, focusLast, focusFirst } = useContext(NxDropdownMenuContext);

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    const toggleOpen = () => {
      if (!isOpen && onToggleOpen) {
        onToggleOpen();
      }
    };

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        toggleOpen();
        focusLast();
        break;
      case 'ArrowDown':
        event.preventDefault();
        toggleOpen();
        focusFirst();
        break;
    }
  };

  return renderTriggerElement({ handleKeyDown });
};

/**
 * This component is not currently intended for public export. It is a helper for NxDropdown and NxSegmentedButton
 * so they can reset focus when they close
 */
/* eslint-disable-next-line react/prop-types */
const NxDropdownMenuContent = forwardRef<HTMLDivElement, Props>(function NxDropdownMenu(props, ref) {
  const {
    onClosing,
    onKeyDown: onKeyDownProp,
    className:
    classNameProp,
    children,
    disableMenuKeyNav,
    isOpen,
    onToggleCollapse,
    onMenuItemFocus,
    ...attrs
  } = props;

  const menuRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(menuRef, ref);

  const [focusedMenuItemIndex, setFocusedMenuItemIndex] = useState<number>(0);

  // Move this to NxDropdown...
  const getFocusableMenuItems = (selector: string) => {
    if (menuRef.current) {
      const focusableElements = Array.from(menuRef.current.querySelectorAll<HTMLElement>(selector));
      const isRightButton = (element: Element) => element.classList.contains('nx-dropdown-right-button');
      const indicesToSwap = focusableElements.reduce<number[]>((acc, element, i) =>
        isRightButton(element) ? [...acc, i] : acc, []);
      return reduce((els, i) => move(i, i + 1, els), focusableElements, indicesToSwap);
    }
    return [];
  };

  useEffect(() => {
    if (menuRef.current) {
      const focusableElements = getFocusableMenuItems(ACTIVE_FOCUSABLE_MENU_ITEMS_SELECTOR);
      const adjustedMenuItemIndex = adjust(focusedMenuItemIndex ?? 0);

      let newMenuItemIndex = adjustedMenuItemIndex;

      if (adjustedMenuItemIndex < 0) {
        newMenuItemIndex = focusableElements.length - 1;
      }
      else if (adjustedMenuItemIndex >= focusableElements.length) {
        newMenuItemIndex = 0;
      }

      const elementToFocus = focusableElements[newMenuItemIndex];
      if (elementToFocus) {
        if (onMenuItemFocus) {
          onMenuItemFocus(newMenuItemIndex, focusableElements);
        }
        elementToFocus.focus();
        setFocusedMenuItemIndex(newMenuItemIndex);
        elementToFocus.scrollIntoView({ block: 'nearest' });
      }
    }
  })

  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  useEffect(() => {
    if (menuRef.current) {
      const focusableElements = getFocusableMenuItems(FOCUSABLE_MENU_ITEMS_SELECTOR);
      focusableElements.forEach(menuItem => menuItem.tabIndex = -1);
    }
  }, [menuRef, children]);

  function activateMenuItem(event: React.<HTMLElement>) {
    if (menuRef.current) {
      const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(ACTIVE_FOCUSABLE_MENU_ITEMS_SELECTOR);
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
        case 'Home':
          focusFirst();
          event.preventDefault();
          break;
        case 'End':
          focusLast();
          event.preventDefault();
          break;
        case 'ArrowUp':
          focusPrev();
          event.preventDefault();
          break;
        case 'ArrowDown':
          focusNext();
          event.preventDefault();
          break;
        case ' ': case 'Enter':
          activateMenuItem(event);
          break;
      }
    }

    if (onKeyDownProp) {
      onKeyDownProp(event);
    }
  };

  const className = classnames('nx-dropdown-menu', classNameProp);

  return isOpen ? (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div ref={mergedRef}
         onKeyDown={handleKeyDown}
         role="menu"
         { ...{ className, ...attrs } }>
      { children }
    </div>
  ) : <></>;
});

NxDropdownMenuContent.propTypes = propTypes;

const NxDropdownMenu = Object.assign(
    NxDropdownMenuRoot,
    {
      Trigger: NxDropdownMenuTrigger,
      Content: NxDropdownMenuContent
    }
);

export default NxDropdownMenu;
