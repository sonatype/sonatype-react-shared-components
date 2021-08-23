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
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import { partial } from 'ramda';
export { Props, Match } from './types';

export const SEARCH_DEBOUNCE_TIME = 500;

const NxSearchDropdown = forwardRef<HTMLDivElement, Props>(function NxSearchDropdown(
  props: Props,
  ref
) {
  const {
        className: classNameProp,
        loading,
        matches,
        onSelect,
        searchText,
        onSearchTextChange,
        long,
        disabled,
        ...attrs
      } = props,
      menuRef = useRef<HTMLDivElement>(null),
      filterRef = useRef<HTMLDivElement>(null),
      className = classnames('nx-search-dropdown', classNameProp),
      filterClassName = classnames('nx-search-dropdown__input', { 'nx-text-input--long': long });

  // When the dropdown is closed while focus is within it, set focus back to the text input. Otherwise
  // it goes back to the <body> which is less helpful especially when within a modal
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
        <NxDropdownMenu ref={menuRef} className="nx-search-dropdown__menu" onClosing={onMenuClosing}>
          {
            loading ? <NxLoadingSpinner /> :
            matches.map(match =>
              <button className="nx-dropdown-button" key={match.id} onClick={partial(onSelect, [match])}>
                {match.displayName}
              </button>
            )
          }
        </NxDropdownMenu>
      }
    </div>
  );
});

NxSearchDropdown.propTypes = propTypes;

export default NxSearchDropdown;

