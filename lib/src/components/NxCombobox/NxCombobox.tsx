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
import useToggle from '../../util/useToggle';
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
        trimmedValue,
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
      alertRef = useRef<HTMLDivElement>(null),
      showDropdown = !disabled && !isEmpty,
      showAlert = !!(!disabled && isAlert && value),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [inputIsFocused, toggleInputIsFocused] = useToggle(false),
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
        'nx-combobox--dropdown-showable': showDropdown || showAlert
      }),
      alertClassName = classnames('nx-combobox__alert', {
        'nx-combobox__alert--error': !!loadError
      }),
      inputDescribedby = classnames(ariaDescribedBy, {
        [alertDropdownId]: showAlert
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
    }
  }

  function handleComponentBlur(evt: FocusEvent<HTMLDivElement>) {

    if (!(evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget))) {
      // The automatically selected suggestion becomes the value of the combobox
      // when the combobox loses focus.
      if (autoComplete && focusableBtnIndex !== null) {
        const elToFocusText = matches[focusableBtnIndex].displayName;
        onChange(elToFocusText);
        onSearch(elToFocusText.trim());
      }
      setFocusableBtnIndex(null);
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
    focusTextInput();
    onSearch(val.trim());
  }

  function focusTextInput() {
    inputRef.current?.querySelector('input')?.focus();
  }

  function handleDropdownBtnClick({displayName}: DataItem<T, string>) {
    onChange(displayName);
    onSearch(displayName.trim());
    focusTextInput();
    setFocusableBtnIndex(null);
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;

        if (elToFocus) {
          setFocusableBtnIndex(newFocusableBtnIndex);
          elToFocus.scrollIntoView({ block: 'nearest' });
        }
      },
      focusNext = adjustBtnFocus(inc),
      focusPrev = adjustBtnFocus(dec),
      focusFirst = adjustBtnFocus(always(0)),
      focusLast = adjustBtnFocus(always(matches.length - 1));

  function handleKeyDown(evt: KeyboardEvent<HTMLElement>) {
    const inputEle = evt.currentTarget as HTMLInputElement,
        elToFocusText = matches.length && focusableBtnIndex !== null ? matches[focusableBtnIndex].displayName : null,
        endIndex = autoComplete && elToFocusText ? elToFocusText.length : value.length;

    switch (evt.key) {
      case 'Enter':
        if (focusableBtnIndex !== null) {
          handleDropdownBtnClick(matches[focusableBtnIndex]);
          inputEle.setSelectionRange(endIndex, endIndex);
        }
        evt.preventDefault();
        break;
      case 'Home':
        inputEle.setSelectionRange(0, 0);
        evt.preventDefault();
        break;
      case 'End':
        inputEle.setSelectionRange(endIndex, endIndex);
        evt.preventDefault();
        break;
      case 'ArrowDown':
        if (focusableBtnIndex === null || focusableBtnIndex === matches.length - 1) {
          focusFirst();
        }
        else {
          focusNext();
        }
        evt.preventDefault();
        break;
      case 'ArrowUp':
        if (focusableBtnIndex) {
          focusPrev();
        }
        else {
          focusLast();
        }
        evt.preventDefault();
        break;
      case 'Escape':
        handleOnChange('');
        setFocusableBtnIndex(null);
        break;
      case 'Backspace':
        if (autoComplete && elToFocusText && value !== elToFocusText &&
            inputEle?.selectionStart === value.length &&
            inputEle?.selectionEnd === elToFocusText.length) {
          evt.preventDefault();
          setFocusableBtnIndex(null);
        }
        break;
    }
  }

  useEffect(function() {
    // Highlight the portion of the selected suggestion that has not been typed by the user and display
    // a completion string inline after the input cursor in the input box.
    if (!loading && matches.length && autoComplete) {
      const firstOptVal = matches[0].displayName;
      inputRef.current?.querySelector('input')?.setSelectionRange(value.length, firstOptVal.length);
    }
  }, [matches, value, autoComplete, loading, inputVal]);

  useEffect(function() {
    if (loading) {
      setFocusableBtnIndex(null);
    }
    else if (matches.length && autoComplete) {
      setFocusableBtnIndex(0);
    }
  }, [loading, matches, autoComplete]);

  return (
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
                   onFocus={toggleInputIsFocused}
                   onBlur={toggleInputIsFocused}
                   aria-autocomplete={autoComplete ? 'both' : 'list'}
                   aria-expanded={showDropdown && inputIsFocused}
                   aria-controls={showDropdown && inputIsFocused ? dropdownId : undefined}
                   aria-activedescendant={focusableBtnId}
                   aria-required={ariaRequired}
                   aria-describedby={inputDescribedby}
                   aria-label={ariaLabel}/>
      { isAlert ?
        <div id={alertDropdownId}
             role="alert"
             ref={alertRef}
             aria-busy={!!loading}
             aria-live="polite"
             className={alertClassName}>
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
                      onClick={() => handleDropdownBtnClick(match)}>
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
