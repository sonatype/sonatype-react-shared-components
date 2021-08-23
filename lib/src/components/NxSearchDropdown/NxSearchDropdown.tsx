/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames';

import './NxSearchDropdown.scss';

import { Props, propTypes } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import { partial } from 'ramda';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
export { Props, Match } from './types';

export const SEARCH_DEBOUNCE_TIME = 500;

const NxSearchDropdown = forwardRef<HTMLDivElement, Props>(function NxSearchDropdown(
  props: Props,
  ref
) {
  const {
        className: classNameProp,
        loading,
        error,
        matches,
        onSelect,
        searchText,
        onSearchTextChange,
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

  return (
    <div ref={ref} className={className} { ...attrs }>
      <NxFilterInput ref={filterRef}
                     className={filterClassName}
                     value={searchText}
                     onChange={onSearchTextChange}
                     disabled={disabled || undefined} />
      { searchText && !disabled &&
        <NxDropdownMenu key={error ? 'error' : 'no-error'}
                        ref={menuRef}
                        className={menuClassName}
                        onClosing={onMenuClosing}>
          <NxLoadWrapper { ...{ loading, error } } retryHandler={() => onSearchTextChange(searchText)}>
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
});

NxSearchDropdown.propTypes = propTypes;

export default NxSearchDropdown;

