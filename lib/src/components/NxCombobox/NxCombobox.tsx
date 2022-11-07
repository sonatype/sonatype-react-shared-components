/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, Ref, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { always, dec, head, inc, tail, omit } from 'ramda';
import usePrevious from '../../util/usePrevious';

import './NxCombobox.scss';

import forwardRef from '../../util/genericForwardRef';
import { DataItemType, Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadError from '../NxLoadError/NxLoadError';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import { useUniqueId } from '../../util/idUtil';
import DataItem from '../../util/DataItem';
import NxTooltip from '../NxTooltip/NxTooltip';
export { Props } from './types';

const SELECTION_POLL_INTERVAL = 100;

function NxComboboxRender<T extends string | number | DataItem<string | number, string>>(
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
        itemTooltip,
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
      previousValue = usePrevious(value),
      newAttrs = omit(['trimmedValue'], attrs),

      isEmpty = !matches.length,
      showEmptyMessage = isEmpty && value.length,
      isAlert = loading || loadError || showEmptyMessage,
      dropdownRef = useRef<HTMLDivElement>(null),
      inputRef = useRef<HTMLInputElement | null>(),
      alertRef = useRef<HTMLDivElement>(null),
      showDropdown = !disabled && !isEmpty,
      showAlert = !!(!disabled && isAlert && value),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [inputIsFocused, setInputIsFocused] = useState(false),
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
    setInputIsFocused(true);

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
    setInputIsFocused(false);

    if (!(evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget))) {
      // The automatically selected suggestion becomes the value of the combobox
      // when the combobox loses focus.
      if (autoComplete && focusableBtnIndex !== null) {
        const elToFocusMatch = matches[focusableBtnIndex];
        onChange(elToFocusMatch.displayName, elToFocusMatch);
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

    if (newVal.toLowerCase() !== value.toLowerCase()) {
      doSearch(newVal);
    }
  }

  function doSearch(val: string) {
    focusTextInput();
    onSearch(val);
  }

  function focusTextInput() {
    inputRef.current?.focus();
  }

  function handleDropdownBtnClick(item: DataItemType<T>) {
    const { displayName } = item;

    onChange(displayName, item);
    onSearch(displayName);
    focusTextInput();
    setFocusableBtnIndex(null);
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null;

        if (elToFocus) {
          const match = matches[newFocusableBtnIndex];

          setFocusableBtnIndex(newFocusableBtnIndex);
          onChange(match.displayName, match);
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
    }
  }

  function isInputFocused() {
    const input = inputRef.current;
    return input && document.activeElement === input;
  }

  // When autocomplete occurs we want to update the value to match the case (e.g. uppercase/lowercase) of the
  // corresponding part of the autocompleted option
  function updateValueCase() {
    if (focusableBtnIndex != null) {
      const newValue = matches[focusableBtnIndex].displayName.slice(0, value.length);
      if (newValue !== value) {
        onChange(newValue);
      }
    }
  }

  // We don't want to activate autocomplete when the user is backspacing or otherwise only deleting parts
  // of the value, so we must check when a new value is the same as the old one except with parts missing
  function isValueSameWithOmissions() {
    if (previousValue == null) {
      return false;
    }

    let remainingPrev = previousValue, remainingNew = value;
    for (; remainingPrev.length && remainingNew.length; remainingPrev = tail(remainingPrev)) {
      if (head(remainingNew) === head(remainingPrev)) {
        remainingNew = tail(remainingNew);
      }
    }

    return remainingNew.length === 0;
  }

  /*
   * Check that the user has not manually adjusted/cleared the text selection. If they have, update the
   * value to match the full text
   */
  function checkSelection() {
    const input = inputRef.current;

    if (input && (input.selectionStart !== value.length || input.selectionEnd !== inputVal.length)) {
      onChange(inputVal);
    }
  }

  useEffect(function() {
    // Highlight the portion of the selected suggestion that has not been typed by the user and display
    // a completion string inline after the input cursor in the input box.
    if (!loading && matches.length && autoComplete && focusableBtnIndex != null && isInputFocused()) {
      const input = inputRef.current,
          firstOptVal = matches[focusableBtnIndex].displayName,

          // we only want to update the selection if nothing is currently selected and the caret is at
          // the end
          selectionIsAtEnd = input?.selectionStart === inputVal.length && input?.selectionEnd === inputVal.length;

      if (selectionIsAtEnd) {
        input?.setSelectionRange(value.length, firstOptVal.length);
        updateValueCase();
      }
    }
  }, [matches, value, autoComplete, loading, inputVal, focusableBtnIndex]);

  useEffect(function() {
    if (loading) {
      setFocusableBtnIndex(null);
    }
    else if (matches.length && autoComplete && !isValueSameWithOmissions() && isInputFocused()) {

      // Note: this needs to use the function setter syntax so that this useEffect is not dependent on
      // focusableBtnIndex - we don't want this logic executing every time focusableBtnIndex changes
      setFocusableBtnIndex(focusableBtnIndex => focusableBtnIndex ?? 0);
    }
  }, [value, loading, matches, autoComplete]);

  useEffect(function() {
    let interval: number | null = null;

    if (value && autoComplete && focusableBtnIndex === 0 && value !== inputVal) {
      // Note: in upcoming specs and future browser versions there should be a selectionchange event that we can
      // listen to rather than polling
      interval = window.setInterval(checkSelection, SELECTION_POLL_INTERVAL);
    }

    return () => {
      if (interval !== null) {
        window.clearInterval(interval);
      }
    };
  }, [value, autoComplete, focusableBtnIndex, inputVal]);

  return (
    <div ref={ref}
         className={className}
         onFocus={handleComponentFocus}
         onBlur={handleComponentBlur}
         { ...newAttrs }>
      <NxTextInput role="combobox"
                   ref={div => inputRef.current = div?.querySelector('input')}
                   id={inputId}
                   validationErrors={validationErrors}
                   validatable={validatable}
                   isPristine={!!isPristine}
                   className="nx-combobox__input"
                   value={inputVal}
                   onChange={handleOnChange}
                   disabled={disabled || undefined}
                   onKeyDown={handleKeyDown}
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
          {loadError ? <NxLoadError role="none" error={loadError} retryHandler={() => doSearch(value)} /> :
          loading ? <NxLoadingSpinner /> :
          showEmptyMessage && <div className="nx-combobox__empty-message">{emptyMessage || 'No Results Found'}</div>}
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
              <NxTooltip key={match.id} title={itemTooltip?.(match) ?? ''}>
                <button type="button"
                        id={getDropdownBtnIdForIndex(i)}
                        role="option"
                        aria-selected={i === focusableBtnIndex }
                        className= {classnames('nx-dropdown-button',
                            { 'selected': i === focusableBtnIndex })}
                        tabIndex={-1}
                        onClick={() => handleDropdownBtnClick(match)}
                        // In Safari, focus seems to be intended to strictly be a keyboard nav thing,
                        // and when you click a button, focus does NOT go to that button, it goes to the <body>.
                        // This messes up our idea of only showing the menu when something within the component has
                        // focus, because this means that the component loses focus in the middle of the click,
                        // causing the menu to hide while the user is in the middle of clicking,
                        // causing the click not to register at all.
                        // Using preventDefault on onMouseDown seem to have prevent the focus from going to the <body>.
                        onMouseDown={(event) => {
                          event.preventDefault();
                          event.currentTarget.focus();
                        }}>
                  {match.displayName}
                </button>
              </NxTooltip>
            )
          }
        </NxDropdownMenu>
        }
    </div>
  );
}

const NxCombobox = Object.assign(forwardRef(NxComboboxRender), { propTypes });

export default NxCombobox;
