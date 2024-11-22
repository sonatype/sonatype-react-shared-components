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
import NxFilterInput from '../NxFilterInput/NxFilterInput';
export { Props } from './types';

const SELECTION_POLL_INTERVAL = 100;

function NxComboboxRender<T extends string | number | DataItem<string | number, string> = string>(
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
        filterInput,
        id,
        'aria-required': ariaRequired,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
        ...attrs
      } = props,
      previousValue = usePrevious(value),
      newAttrs = omit(['trimmedValue'], attrs),

      // A state variable tracking when a selection is made from the dropdown. This state helps close the dropdown
      // when a selection is made, and re-open when the input receives focus
      [hiddenBySelection, setHiddenBySelection] = useState(false),
      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [inputIsFocused, setInputIsFocused] = useState(false),
      inputVal = autoComplete && focusableBtnIndex !== null && matches.length
        ? matches[focusableBtnIndex].displayName
        : value,

      isEmpty = !matches.length,
      showEmptyMessage = isEmpty && value.length,
      isAlert = (loading || loadError || showEmptyMessage) && !hiddenBySelection && inputIsFocused,
      dropdownRef = useRef<HTMLDivElement>(null),
      inputRef = useRef<HTMLInputElement | null>(),
      alertRef = useRef<HTMLDivElement>(null),
      showDropdown = !disabled && !isEmpty && !hiddenBySelection && inputIsFocused,
      showAlert = !!(!disabled && isAlert && value),

      inputId = useUniqueId('nx-combobox-input', id),
      alertDropdownId = useUniqueId('nx-combobox-alert-dropdown'),
      dropdownId = useUniqueId('nx-combobox-dropdown'),
      dropdownBtnIdPrefix = useUniqueId('nx-dropdown-button'),
      focusableBtnId = focusableBtnIndex !== null ?
        getDropdownBtnIdForIndex(focusableBtnIndex) : undefined,

      className = classnames('nx-combobox', classNameProp),
      alertClassName = classnames('nx-combobox__alert', {
        'nx-combobox__alert--error': !!loadError
      }),
      inputDescribedby = classnames(ariaDescribedBy, {
        [alertDropdownId]: showAlert
      }),
      TextInput = filterInput ? NxFilterInput : NxTextInput,
      filterInputProps = filterInput === 'search' ? { searchIcon: true } : null,
      [pageIsFocused, setPageIsFocused] = useState(true);

  // There is a requirement that when there is an error querying the data, if the user navigates away from
  // the component and then comes back to it the search should be retried automatically
  function handleComponentFocus(evt: FocusEvent<HTMLDivElement>) {

    setInputIsFocused(true);
    if (loadError) {
      // check if this is focus coming into the component from somewhere else on the page, not just moving between
      // children of this component and not from focus coming into the browser from some other window
      const comingFromOutsidePage = pageIsFocused === false,
          comingFromChildNode = evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget);

      if (!(comingFromOutsidePage || comingFromChildNode)) {
        doSearch(value);
      }
    }
    setPageIsFocused(document.hasFocus());
    setHiddenBySelection(false);
  }

  function handleComponentBlur(evt: FocusEvent<HTMLDivElement>) {

    setPageIsFocused(document.hasFocus());
    if (!(evt.relatedTarget instanceof Node && evt.currentTarget.contains(evt.relatedTarget))) {
      setInputIsFocused(false);
      // The automatically selected suggestion becomes the value of the combobox
      // when the combobox loses focus.
      if (autoComplete && focusableBtnIndex !== null) {
        const elToFocusMatch = matches[focusableBtnIndex];
        handleSelection(elToFocusMatch.displayName, elToFocusMatch);
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
    setHiddenBySelection(false);
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

  // A function that listens for when a selection is made, therefore passing both the displayName and DataItem to the
  // onChange function, and closing the dropdown menu. This function should only be used when a selection is made,
  // either by direct selection or when autocomplete triggers a selection from the input losing focus.
  function handleSelection(displayName: string, dataItem: DataItemType<T>) {
    onChange(displayName, dataItem);
    setHiddenBySelection(true);
  }

  function handleDropdownBtnClick(item: DataItemType<T>) {
    const { displayName } = item;

    focusTextInput();
    handleSelection(displayName, item);
    onSearch(displayName);
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
        setFocusableBtnIndex(null);

        // NxFilterInput handles this itself
        if (!filterInput) {
          handleOnChange('');

          if (value !== '') {
            // only prevent default if the ESC actually made a difference here
            evt.preventDefault();
          }
        }
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
      <TextInput ref={(div: HTMLElement | null) => inputRef.current = div?.querySelector('input')}
                 validationErrors={validationErrors}
                 validatable={validatable}
                 isPristine={!!isPristine}
                 className="nx-combobox__input"
                 value={inputVal}
                 onChange={handleOnChange}
                 onClick={() => setHiddenBySelection(false)}
                 disabled={disabled || undefined}
                 id={inputId}
                 aria-required={ariaRequired}
                 aria-describedby={inputDescribedby}
                 inputAttributes={{
                   role: 'combobox',
                   onKeyDown: handleKeyDown,
                   'aria-autocomplete': autoComplete ? 'both' : 'list',
                   'aria-expanded': showDropdown,
                   'aria-controls': showDropdown ? dropdownId : undefined,
                   'aria-activedescendant': focusableBtnId,
                   'aria-label': ariaLabel,
                   // disable browser autocomplete
                   autoComplete: 'off'
                 }}
                 { ...filterInputProps } />
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
        : showDropdown &&
        <NxDropdownMenu id={dropdownId}
                        role="listbox"
                        ref={dropdownRef}
                        className="nx-combobox__menu"
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

const NxCombobox = Object.assign(forwardRef(NxComboboxRender), {
  // propTypes types can actually effect the overall type of NxCombobox in ways we don't want, the cast
  // to `any` prevents that
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  propTypes: propTypes as any
});

export default NxCombobox;
