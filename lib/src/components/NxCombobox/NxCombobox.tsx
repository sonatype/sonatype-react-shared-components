/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { always, dec, inc } from 'ramda';

import './NxCombobox.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadError from '../NxLoadError/NxLoadError';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import { useUniqueId } from '../../util/idUtil';
import DataItem from '../../util/DataItem';
export { Props } from './types';

function NxComboboxRender<T extends string | number = string>(
  props: Props<T>,
  ref: Ref<HTMLDivElement>
) {
  const {
        className: classNameProp,
        loading,
        loadError,
        matches,
        value,
        onChange,
        onSearch,
        disabled,
        emptyMessage,
        autoComplete,
        validatable,
        isPristine,
        validationErrors,
        id,
        'aria-required': ariaRequired,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
        ...attrs
      } = props,

      isEmpty = !matches.length,
      isAlert = loading || loadError || isEmpty,
      dropdownRef = useRef<HTMLDivElement>(null),
      inputRef = useRef<HTMLDivElement>(null),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [showDropdown, setShowDropdown] = useState(false),
      [inlineStyle, setInlineStyle] = useState(false),
      inputVal = autoComplete && focusableBtnIndex !== null && matches.length
        ? matches[focusableBtnIndex].displayName
        : value,

      inputId = useUniqueId('nx-combobox-input', id),
      alertDropdownId = useUniqueId('nx-combobox-alert-dropdown'),
      dropdownId = useUniqueId('nx-combobox-dropdown'),
      dropdownBtnIdPrefix = useUniqueId('nx-dropdown-button'),
      focusableBtnId = focusableBtnIndex !== null ?
        getDropdownBtnIdForIndex(focusableBtnIndex) : undefined,

      className = classnames('nx-combobox', classNameProp, {
        'nx-combobox--dropdown-showable': showDropdown
      }),
      alertClassName = classnames('nx-combobox__alert', {
        'nx-combobox__alert--error': !!loadError
      }),
      inputDescribedby = classnames(ariaDescribedBy, {
        [alertDropdownId]: isAlert && showDropdown
      });

  // There is a requirement that when there is an error querying the data, if the user navigates away from
  // the component and then comes back to it the search should be retried automatically
  function handleComponentFocus(evt: FocusEvent<HTMLDivElement>) {
    if (loadError) {
      // check if this is focus coming into the component from somewhere else on the page, not just moving between
      // children of this component and not from focus coming into the browser from some other window
      const comingFromOutsidePage = evt.relatedTarget === null,
          comingFromChildNode = evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget);

      if (!(comingFromOutsidePage || comingFromChildNode)) {
        doSearch(value);
      }
      else {
        setShowDropdown(true);
      }
    }
  }

  function handleComponentBlur(evt: FocusEvent<HTMLDivElement>) {

    // Check if useragent string contains Safari
    const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

    // Check if the new focused element is a child of the parent, if not, then close the dropdown menu
    // For the issue that clicking the button in Safari does not focus it, we decide to show the dropdown in Safari
    // when blur.
    if (!(evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget)) && !isSafari) {

      // The automatically selected suggestion becomes the value of the combobox
      // when the combobox loses focus.
      if (autoComplete && focusableBtnIndex !== null) {
        const elToFocusText = matches[focusableBtnIndex].displayName;
        onChange(elToFocusText.trim());
        onSearch(elToFocusText.trim());
      }
      setFocusableBtnIndex(null);
      setShowDropdown(false);
    }
  }

  function getDropdownBtnIdForIndex(idx: number) {
    return `${dropdownBtnIdPrefix}-${idx}`;
  }

  function handleOnChange(newVal: string) {
    setFocusableBtnIndex(null);
    onChange(newVal);

    if (newVal.trim() !== value.trim()) {
      doSearch(newVal);
    }
  }

  function doSearch(val: string) {
    onSearch(val.trim());
    if (!val) {
      setShowDropdown(false);
    }
    else {
      setShowDropdown(true);
    }
  }

  function focusTextInput() {
    inputRef.current?.querySelector('input')?.focus();
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;

        if (elToFocus) {
          setFocusableBtnIndex(newFocusableBtnIndex);
          elToFocus.scrollIntoView({ block: 'nearest' });
          setInlineStyle(false);
        }
      },
      focusNext = adjustBtnFocus(inc),
      focusPrev = adjustBtnFocus(dec),
      focusFirst = adjustBtnFocus(always(0)),
      focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleOnClick({displayName}: DataItem<T, string>) {
    onChange(displayName.trim());
    onSearch(displayName.trim());
    focusTextInput();
    setFocusableBtnIndex(null);
    setShowDropdown(false);
  }

  function handleKeyUp(evt: KeyboardEvent<HTMLElement>) {
    if (autoComplete && evt.key.length === 1 && evt.key.match(/[!-~]/)) {
      setInlineStyle(true);
    }
  }

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    const inputEle = evt.currentTarget as HTMLInputElement,
        elToFocusText = matches.length && focusableBtnIndex !== null ? matches[focusableBtnIndex].displayName : null;

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
        const endIndex = autoComplete && elToFocusText ? elToFocusText.length : value.length;
        inputEle.setSelectionRange(endIndex, endIndex);
        evt.preventDefault();
        break;
      case 'ArrowDown':
        if (!isEmpty) {
          setShowDropdown(true);
        }

        if (focusableBtnIndex === null || focusableBtnIndex === matches.length - 1) {
          focusFirst();
        }
        else {
          focusNext();
        }

        evt.preventDefault();
        break;
      case 'ArrowUp':
        if (!isEmpty) {
          setShowDropdown(true);
        }

        if (focusableBtnIndex) {
          focusPrev();
        }
        else {
          focusLast();
        }

        evt.preventDefault();
        break;
      case 'Backspace':
        if (inlineStyle && value !== elToFocusText) {
          evt.preventDefault();
          setFocusableBtnIndex(null);
        }
        setInlineStyle(false);
        break;
      case 'Escape':
        if (showDropdown) {
          setShowDropdown(false);
        }
        else {
          onChange('');
          setFocusableBtnIndex(null);
        }
        break;
      case ' ':
        setInlineStyle(false);
        setFocusableBtnIndex(null);
        break;
    }
  }

  useEffect(function() {
    if (!autoComplete) {
      setInlineStyle(false);
    }
  }, [autoComplete]);

  useEffect(function() {
    if (loading) {
      setFocusableBtnIndex(null);
    }
    // Highlight the portion of the selected suggestion that has not been typed by the user and display
    // a completion string inline after the input cursor in the input box.
    else if (matches.length && autoComplete && showDropdown && inlineStyle) {
      setFocusableBtnIndex(0);
      const firstOptVal = matches[0].displayName;
      inputRef.current?.querySelector('input')?.setSelectionRange(value.length, firstOptVal.length);
    }
  }, [matches, value, inlineStyle, focusableBtnIndex, loading]);

  return (
    /*eslint-disable-next-line jsx-a11y/no-static-element-interactions*/
    <div ref={ref}
         className={className}
         onFocus={handleComponentFocus}
         onBlur={handleComponentBlur}
         { ...attrs }>
      <NxTextInput role="combobox"
                   ref={inputRef}
                   id={inputId}
                   validationErrors={validationErrors}
                   validatable={validatable}
                   isPristine={!!isPristine}
                   className="nx-combobox__input"
                   value={inputVal}
                   onChange={handleOnChange}
                   disabled={disabled || undefined}
                   onKeyDown={handleKeyDown}
                   onKeyUp={handleKeyUp}
                   aria-autocomplete={autoComplete ? 'both' : 'list'}
                   aria-expanded={showDropdown && !isAlert}
                   aria-controls={dropdownId}
                   aria-activedescendant={focusableBtnId}
                   aria-required={ariaRequired}
                   aria-describedby={inputDescribedby}
                   aria-label={ariaLabel}/>
      { isAlert ?
        <div id={alertDropdownId}
             role="alert"
             aria-busy={!!loading}
             aria-live="polite"
             className={alertClassName}
             aria-hidden={!showDropdown}>
          {loadError ? <NxLoadError error={loadError} retryHandler={() => doSearch(value)} /> :
          loading ? <NxLoadingSpinner /> :
          isEmpty && <div className="nx-combobox__empty-message">{emptyMessage || 'No Results Found'}</div>}
        </div>
        :
        <NxDropdownMenu id={dropdownId}
                        role='listbox'
                        ref={dropdownRef}
                        className='nx-combobox__menu'
                        onClosing={() => {}}
                        aria-hidden={!showDropdown}
                        aria-label="listbox of combobox">
          {
            matches.length && matches.map((match, i) =>
              <button id={getDropdownBtnIdForIndex(i)}
                      role="option"
                      aria-selected={i === focusableBtnIndex }
                      className= {classnames('nx-dropdown-button',
                          { 'selected': i === focusableBtnIndex })}
                      tabIndex={-1}
                      key={match.id}
                      onClick={() => handleOnClick(match)}>
                {match.displayName}
              </button>
            )
          }
        </NxDropdownMenu>
        }
    </div>
  );
}

const NxCombobox = Object.assign(forwardRef(NxComboboxRender), { propTypes });

export default NxCombobox;
