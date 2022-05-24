/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';
import { always, clamp, dec, inc, partial } from 'ramda';

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
      className = classnames('nx-search-dropdown', classNameProp, {
        'nx-search-dropdown--dropdown-showable': showDropdown
      }),
      filterClassName = classnames('nx-search-dropdown__input', { 'nx-text-input--long': long }),
      dropdownMenuId = useUniqueId('nx-search-dropdown-menu'),
      dropdownMenuRole =
          error || loading || isEmpty ? 'alert' :
          'menu',
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

  function doSearch(value: string) {
    onSearch(value.trim());
  }

  function focusTextInput() {
    filterRef.current?.querySelector('input')?.focus();
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
      case 'Escape':
        focusTextInput();
        onSearchTextChange('');
        break;
    }
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    if (evt.key === 'Escape') {
      onSearchTextChange('');
    }
  }

  // in case a button gets focused some way besides tab, update the focusableBtnIndex to that button
  function onBtnFocus(index: number) {
    setFocusableBtnIndex(index);
  }

  useEffect(function() {
    if (matches.length) {
      setFocusableBtnIndex(clamp(0, matches.length - 1, focusableBtnIndex ?? 0));
    }
    else {
      setFocusableBtnIndex(null);
    }
  }, [matches]);

  useEffect(function() {
    // if searchText has been cleared, the menu disappears. If focus was in the menu when that happened, move
    // it to the text input
    if (!searchText) {
      const focusedEl = document.activeElement,
          menuEl = menuRef.current;

      if (menuEl?.contains(focusedEl)) {
        focusTextInput();
      }
    }
  }, [searchText]);

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
      <NxDropdownMenu key={error ? 'error' : 'no-error'}
                      id={dropdownMenuId}
                      role={dropdownMenuRole}
                      ref={menuRef}
                      className={menuClassName}
                      onClosing={() => {}}
                      onKeyDown={handleButtonKeyDown}
                      aria-busy={!!loading}
                      aria-live="polite"
                      aria-hidden={!showDropdown}>
        <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
          {
            matches.length ? matches.map((match, i) =>
              <button role="menuitem"
                      className="nx-dropdown-button"
                      disabled={disabled || undefined}
                      key={match.id}
                      tabIndex={i === focusableBtnIndex ? 0 : -1}
                      onClick={partial(onSelect, [match])}
                      onFocus={() => onBtnFocus(i)}>
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
