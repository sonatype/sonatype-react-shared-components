/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useCallback, useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { any, partial, pipe, prop } from 'ramda';

import './NxSearchDropdown.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import { useUniqueId } from '../../util/idUtil';
import useMutationObserver from '@rooks/use-mutation-observer';
export { Props } from './types';

export const SEARCH_DEBOUNCE_TIME = 500;

function NxSearchDropdownRender<T extends string | number = string>(
  props: Props<T>,
  externalRef: Ref<HTMLDivElement>
) {
  const {
        className: classNameProp,
        loading,
        error,
        matches,
        onSelect,
        searchText,
        onSearchTextChange,
        onSearch,
        long,
        disabled,
        emptyMessage,
        ...attrs
      } = props,

      isEmpty = !matches.length,
      showDropdown = !!(searchText && !disabled),

      ref = useRef<HTMLDivElement>(null),
      mergedRef = useMergedRef(externalRef, ref),
      menuRef = useRef<HTMLDivElement>(null),
      filterRef = useRef<HTMLDivElement>(null),
      elFocusedOnMostRecentRender = useRef<Element | null>(null),

      // [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),

      dropdownMenuId = useUniqueId('nx-search-dropdown-menu'),
      dropdownMenuRole = error || loading || isEmpty ? 'alert' : 'menu',

      filterClassName = classnames('nx-search-dropdown__input', { 'nx-text-input--long': long }),
      className = classnames('nx-search-dropdown', classNameProp, {
        'nx-search-dropdown--dropdown-showable': showDropdown
      }),
      menuClassName = classnames('nx-search-dropdown__menu', {
        'nx-search-dropdown__menu--error': !!error
      });

  // There is a requirement that when there is an error querying the data, if the user navigates away from
  // the component and then comes back to it the search should be retried automatically
  function handleComponentFocus(evt: FocusEvent<HTMLDivElement>) {
    // check if this is focus coming into the component from somewhere else on the page, not just moving between
    // children of this component and not from focus coming into the browser from some other window
    const comingFromOutsidePage = evt.relatedTarget === null,
        comingFromChildNode = evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget);

    if (!(comingFromOutsidePage || comingFromChildNode) && error) {
      doSearch(searchText);
    }
  }

  function handleFilterChange(value: string) {
    onSearchTextChange(value);

    if (value.trim() !== searchText.trim()) {
      doSearch(value);
    }
  }

  // // helper for focusing different buttons in the dropdown menu
  // const adjustBtnFocus = (adjust: (i: number) => number) => () => {
  //       const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
  //           elToFocus = menuRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;

  //       if (elToFocus) {
  //         elToFocus.focus();
  //         setFocusableBtnIndex(newFocusableBtnIndex);
  //       }
  //     },
  //     focusNext = adjustBtnFocus(inc),
  //     focusPrev = adjustBtnFocus(dec),
  //     focusFirst = adjustBtnFocus(always(0)),
  //     focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleButtonKeyDown(evt: KeyboardEvent<HTMLElement>) {
    switch (evt.key) {
      case 'Escape':
        focusTextInput();
        handleFilterChange('');
        break;
    }
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    if (evt.key === 'Escape') {
      handleFilterChange('');
    }
  }

  function doSearch(value: string) {
    onSearch(value.trim());
  }

  function focusTextInput() {
    filterRef.current?.querySelector('input')?.focus();
  }

  // // Clamp or nullify focusableBtnIndex whenever the number of matches changes
  // useEffect(function() {
  //   if (matches.length) {
  //     setFocusableBtnIndex(clamp(0, matches.length - 1, focusableBtnIndex ?? 0));
  //   }
  //   else {
  //     setFocusableBtnIndex(null);
  //   }
  // }, [matches]);

  /*
   * Horrible Hack: When an element within the dropdown is removed from the DOM while it is focused, we want
   * to move focus to the text input.  It turns out that this is very difficult to track in React, since
   * useEffect and useLayoutEffect generally fire too late - after the element has already been removed and
   * lost whatever focus it might've had. The only other way to get this info is with a useLayoutEffect handler
   * _in the component that was unmounted_, e.g. in NxButton. That would require adding new props for a special use
   * case to not only NxButton, but also NxLoadWrapper and NxLoadError. Just querying who has focus on every render
   * seemed like the less bad option.
   */
  elFocusedOnMostRecentRender.current = typeof document === 'undefined' ? null : document.activeElement;

  const checkForRemovedFocusedEl = useCallback(function checkForRemovedFocusedEl(mutations: MutationRecord[]) {
    const nodeContainedFocus = (el: Node) => el.contains(elFocusedOnMostRecentRender.current),
        nodeListContainedFocus =
            pipe<[NodeList], Node[], boolean>(Array.from, any(nodeContainedFocus)),
        focusedChildWasRemoved =
            any(pipe(prop('removedNodes'), nodeListContainedFocus), mutations);

    if (focusedChildWasRemoved) {
      focusTextInput();
    }
  }, []);

  useMutationObserver(menuRef, checkForRemovedFocusedEl, { childList: true });

  return (
    <div ref={mergedRef} className={className} onFocus={handleComponentFocus} { ...attrs }>
      <NxFilterInput role="searchbox"
                     ref={filterRef}
                     className={filterClassName}
                     value={searchText}
                     onChange={handleFilterChange}
                     disabled={disabled || undefined}
                     placeholder="Search"
                     searchIcon
                     onKeyDown={handleKeyDown}
                     aria-controls={dropdownMenuId}
                     aria-haspopup="menu" />
      <NxDropdownMenu id={dropdownMenuId}
                      role={dropdownMenuRole}
                      ref={menuRef}
                      className={menuClassName}
                      onClosing={() => {}}
                      onKeyDown={handleButtonKeyDown}
                      isOpen={true}
                      toggleElementRef={filterRef}
                      aria-busy={!!loading}
                      aria-live="polite"
                      aria-hidden={!showDropdown}
                      tabIndex={-1}>
        <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
          {
            matches.length ? matches.map((match) =>
              <button role="menuitem"
                      type="button"
                      className="nx-dropdown-button"
                      disabled={disabled || undefined}
                      key={match.id}
                      // tabIndex={i === focusableBtnIndex ? 0 : -1}
                      onClick={partial(onSelect, [match])}
                      // onFocus={() => setFocusableBtnIndex(i)}>
                      >
                {match.displayName}
              </button>
            ) :
            <div className="nx-search-dropdown__empty-message">{emptyMessage || 'No Results Found'}</div>
          }
        </NxLoadWrapper>
      </NxDropdownMenu>
    </div>
  );
}

const NxSearchDropdown = Object.assign(forwardRef(NxSearchDropdownRender), { propTypes });

export default NxSearchDropdown;
