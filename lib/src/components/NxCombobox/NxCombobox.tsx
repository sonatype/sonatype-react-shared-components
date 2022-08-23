/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, MouseEvent, Ref, useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { always, any, dec, inc, pipe, prop } from 'ramda';

import './NxCombobox.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import { useUniqueId } from '../../util/idUtil';
import useMutationObserver from '@rooks/use-mutation-observer';
import DataItem from '../../util/DataItem';
export { Props } from './types';

function NxComboboxRender<T extends string | number = string>(
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
        short,
        disabled,
        emptyMessage,
        autoComplete,
        inputProps,
        id,
        'aria-required': ariaRequired,
        'aria-describedby': ariaDescribedBy,
        ...attrs
      } = props,

      isEmpty = !matches.length,

      dropdownRef = useRef<HTMLDivElement>(null),
      inputRef = useRef<HTMLDivElement>(null),
      elFocusedOnMostRecentRender = useRef<Element | null>(null),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [prevSearchText, setPrevSearchText] = useState(''),
      [showDropdown, setShowDropdown] = useState(false),

      inputId = useUniqueId('nx-combobox-input', id),
      dropdownId = useUniqueId('nx-combobox-dropdown'),
      dropdownRole = error || loading || isEmpty ? 'alert' : 'listbox',
      dropdownBtnId = useUniqueId('nx-dropdown-button'),

      inputClassName = classnames('nx-combobox__input', { 'nx-text-input--long': long,
        'nx-text-input--short': short
      }),
      className = classnames('nx-combobox', classNameProp, {
        'nx-combobox--dropdown-showable': showDropdown
      }),
      dropdownClassName = classnames('nx-combobox__menu', {
        'nx-combobox__menu--error': !!error
      });

  // There is a requirement that when there is an error querying the data, if the user navigates away from
  // the component and then comes back to it the search should be retried automatically
  function handleComponentFocus(evt: FocusEvent<HTMLDivElement>) {
    if (error) {
      // check if this is focus coming into the component from somewhere else on the page, not just moving between
      // children of this component and not from focus coming into the browser from some other window
      const comingFromOutsidePage = evt.relatedTarget === null,
          comingFromChildNode = evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget);

      if (!(comingFromOutsidePage || comingFromChildNode)) {
        doSearch(searchText);
      }
      else {
        setShowDropdown(true);
      }
    }
  }

  // In the blur event, we use the relatedTarget to check if the focused element is a child of the parent
  // to show/hide dropdown, however, clicking the button in Safari does not focus it, which means the
  // relatedTarget will be null, this is to stop the mouse down event being fired for the element that
  // is listening to the blur event, in this case, the show/hide dropdown is handled by the click event
  function handleMouseDown(evt: MouseEvent) { evt.preventDefault(); }

  function handleComponentBlur(evt: FocusEvent<HTMLDivElement>) {
    setFocusableBtnIndex(null);

    // Check if the new focused element is a child of the parent, if not, then close the dropdown menu
    if (!(evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget))) {
      setShowDropdown(false);
    }
  }

  function handleFilterChange(value: string) {
    setFocusableBtnIndex(null);
    onSearchTextChange(value);

    if (value && value.trim() !== searchText.trim()) {
      doSearch(value);
      setPrevSearchText('');
    }
    else if (!value) {
      setShowDropdown(false);
    }
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;
        if (elToFocus) {

          setFocusableBtnIndex(newFocusableBtnIndex);
          elToFocus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          if (autoComplete && elToFocus.textContent) {
            onSearchTextChange(elToFocus.textContent);
          }
        }
      },
      focusNext = adjustBtnFocus(inc),
      focusPrev = adjustBtnFocus(dec),
      focusFirst = adjustBtnFocus(always(0)),
      focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    const inputEle = evt.currentTarget as HTMLInputElement;
    switch (evt.key) {
      case 'Enter':
        if (focusableBtnIndex !== null) {
          handleOnClick(matches[focusableBtnIndex]);
        }
        evt.preventDefault();
        break;
      case 'Home':
        inputEle.setSelectionRange(0, 0);
        evt.preventDefault();
        break;
      case 'End':
        inputEle.setSelectionRange(searchText.length, searchText.length);
        evt.preventDefault();
        break;
      case 'ArrowDown':
        if (!isEmpty) {
          setShowDropdown(true);
        }

        focusableBtnIndex !== null
          ? (focusableBtnIndex === matches.length - 1 ? focusFirst() : focusNext())
          : focusFirst();

        evt.preventDefault();
        break;
      case 'ArrowUp':
        if (!isEmpty) {
          setShowDropdown(true);
        }

        focusableBtnIndex !== null
          ? (focusableBtnIndex === 0 ? focusLast() : focusPrev())
          : focusLast();

        evt.preventDefault();
        break;
      case 'Escape':
        setShowDropdown(false);
        setFocusableBtnIndex(null);
        if (!showDropdown) {
          handleFilterChange('');
        }
        break;
    }
  }

  function doSearch(value: string) {
    onSearch(value.trim());
    setShowDropdown(true);
  }

  function focusTextInput() {
    inputRef.current?.querySelector('input')?.focus();
  }

  function setInlineOption() {
    if (typeof matches[0].displayName === 'string' &&
    matches[0].displayName.toLowerCase().indexOf(searchText.toLowerCase()) === 0) {
      setPrevSearchText(searchText);
      onSearchTextChange(matches[0].displayName);
    }
  }

  // Nullify focusableBtnIndex whenever the number of matches changes
  useEffect(function() {
    if (matches.length && autoComplete) {
      setInlineOption();
    }
    else {
      setFocusableBtnIndex(null);
    }
  }, [matches]);

  useEffect(function() {
    if (prevSearchText && autoComplete && showDropdown) {
      inputRef.current?.querySelector('input')?.setSelectionRange(prevSearchText.length, searchText.length);
      focusFirst();
    }
  }, [prevSearchText]);

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

  useMutationObserver(dropdownRef, checkForRemovedFocusedEl, { childList: true });

  function handleOnClick(match: DataItem<T>) {
    onSelect(match);
    focusTextInput();
    setFocusableBtnIndex(null);
    setShowDropdown(false);
  }

  return (
    /*eslint-disable-next-line jsx-a11y/no-static-element-interactions*/
    <div ref={ref}
         className={className}
         onFocus={handleComponentFocus}
         onBlur={handleComponentBlur}
         onMouseDown={handleMouseDown}
         { ...attrs }>
      <NxTextInput role="combobox"
                   ref={inputRef}
                   id={inputId}
                   isPristine
                   {...inputProps}
                   className={inputClassName}
                   value={searchText}
                   onChange={handleFilterChange}
                   disabled={disabled || undefined}
                   onKeyDown={handleKeyDown}
                   aria-autocomplete={autoComplete ? 'both' : 'list'}
                   aria-expanded={showDropdown}
                   aria-controls={dropdownId}
                   aria-activedescendant={focusableBtnIndex !== null ?
                     dropdownRef.current?.children[focusableBtnIndex].id : undefined }
                   aria-required={ariaRequired ?? undefined}
                   aria-describedby={ariaDescribedBy ?? undefined}/>
      <NxDropdownMenu id={dropdownId}
                      role={dropdownRole}
                      ref={dropdownRef}
                      className={dropdownClassName}
                      onClosing={() => {}}
                      aria-busy={!!loading}
                      aria-live="polite"
                      aria-hidden={!showDropdown}>
        <NxLoadWrapper { ...{ loading, error } } retryHandler={() => doSearch(searchText)}>
          {
            matches.length ? matches.map((match, i) =>
              <button id={`${dropdownBtnId}-${i}`}
                      role="option"
                      aria-selected={i === focusableBtnIndex }
                      className= {classnames('nx-dropdown-button',
                          { 'nx-combobox__option--visual-selected': i === focusableBtnIndex })}
                      tabIndex={-1}
                      disabled={disabled || undefined}
                      key={match.id}
                      onClick={() => handleOnClick(match)}>
                {match.displayName}
              </button>
            ) :
            <div className="nx-combobox__empty-message">{emptyMessage || 'No Results Found'}</div>
          }
        </NxLoadWrapper>
      </NxDropdownMenu>
    </div>
  );
}

const NxCombobox = Object.assign(forwardRef(NxComboboxRender), { propTypes });

export default NxCombobox;
