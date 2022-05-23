/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { always, clamp, dec, defaultTo, inc, partial, pipe } from 'ramda';

import './NxSearchDropdown.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import { useUniqueId } from '../../util/idUtil';
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
      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      className = classnames('nx-search-dropdown', classNameProp),
      filterClassName = classnames('nx-search-dropdown__input', { 'nx-text-input--long': long }),
      dropdownMenuId = useUniqueId('nx-search-dropdown-menu'),
      dropdownMenuRole =
          !showDropdown ? 'presentation' :
          error || loading || isEmpty ? 'dialog' :
          'menu',
      filterHasPopup = dropdownMenuRole === 'presentation' ? false : dropdownMenuRole,
      menuClassName = classnames('nx-search-dropdown__menu', {
        'nx-search-dropdown__menu--error': !!error
      });

  /*
   * When the dropdown is closed while focus is within it, set focus back to the text input. Otherwise
   * it goes back to the <body> which is less helpful especially when within a modal. Note that we also use
   * a distinct react `key` on the dropdown when it is in error state to get it to re-render entirely when
   * switching to and from that state - thereby triggering this logic when the error state is cleared which would
   * result in the Retry button (which may have focus) being removed from DOM
   */
  function onMenuClosing() {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const focusedEl = document.activeElement,
        menuEl = menuRef.current;

    if (menuEl && menuEl.contains(focusedEl) && filterRef.current) {
      const inputEl = filterRef.current.querySelector(':scope input')! as HTMLElement;
      inputEl!.focus();
    }
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  }

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

  function doSearch(value: string) {
    onSearch(value.trim());
  }

  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = menuRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;

        if (elToFocus) {
          elToFocus.focus();
          setFocusableBtnIndex(newFocusableBtnIndex);
        }
      },
      focusNext = adjustBtnFocus(inc),
      focusPrev = adjustBtnFocus(dec),
      focusFirst = adjustBtnFocus(always(0)),
      focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleButtonKeyDown(evt: KeyboardEvent<HTMLElement>) {
    switch (evt.key) {
      case 'Home':
        focusFirst();
        evt.preventDefault();
        break;
      case 'End':
        focusLast();
        evt.preventDefault();
        break;
      case 'ArrowDown':
        focusNext();
        evt.preventDefault();
        break;
      case 'ArrowUp':
        focusPrev();
        evt.preventDefault();
        break;
    }
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    switch (evt.key) {
      case 'Escape':
        onSearchTextChange('');
        evt.preventDefault();
        break;
    }
  }

  useEffect(function() {
    if (matches.length) {
      setFocusableBtnIndex(pipe(defaultTo(0), clamp(0, matches.length - 1)));
    }
    else {
      setFocusableBtnIndex(null);
    }
  }, [matches]);

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
                     aria-haspopup={filterHasPopup} />
      { showDropdown &&
        <NxDropdownMenu key={error ? 'error' : 'no-error'}
                        id={dropdownMenuId}
                        role={dropdownMenuRole}
                        ref={menuRef}
                        className={menuClassName}
                        onClosing={onMenuClosing}
                        onKeyDown={handleButtonKeyDown}
                        aria-busy={!!loading}
                        aria-live="polite">
          <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
            {
              matches.length ? matches.map((match, i) =>
                <button role="menuitem"
                        className="nx-dropdown-button"
                        key={match.id}
                        tabIndex={i === focusableBtnIndex ? 0 : -1}
                        onClick={partial(onSelect, [match])}>
                  {match.displayName}
                </button>
              ) :
              <div className="nx-search-dropdown__empty-message">{emptyMessage || 'No Results Found'}</div>
            }
          </NxLoadWrapper>
        </NxDropdownMenu>
      }
    </div>
  );
}

const NxSearchDropdown = Object.assign(forwardRef(NxSearchDropdownRender), { propTypes });

export default NxSearchDropdown;
