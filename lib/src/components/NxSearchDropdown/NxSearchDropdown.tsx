/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, Ref, useRef } from 'react';
import classnames from 'classnames';
import { partial } from 'ramda';

import './NxSearchDropdown.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
export { Props } from './types';

export const SEARCH_DEBOUNCE_TIME = 500;

function NxSearchDropdownRender<T extends string | number = string>(
  props: Props<T>,
  ref: Ref<HTMLDivElement>
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
      menuRef = useRef<HTMLDivElement>(null),
      filterRef = useRef<HTMLDivElement>(null),
      className = classnames('nx-search-dropdown', classNameProp),
      filterClassName = classnames('nx-search-dropdown__input', { 'nx-text-input--long': long }),
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

    if (menuEl && menuEl.contains(focusedEl)) {
      const inputEl = filterRef.current!.querySelector(':scope input')! as HTMLElement;
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

  return (
    <div ref={ref} className={className} onFocus={handleComponentFocus} { ...attrs }>
      <NxFilterInput ref={filterRef}
                     className={filterClassName}
                     value={searchText}
                     onChange={handleFilterChange}
                     disabled={disabled || undefined} />
      { searchText && !disabled &&
        <NxDropdownMenu key={error ? 'error' : 'no-error'}
                        ref={menuRef}
                        className={menuClassName}
                        onClosing={onMenuClosing}>
          <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
            {
              matches.length ? matches.map(match =>
                <button className="nx-dropdown-button" key={match.id} onClick={partial(onSelect, [match])}>
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

