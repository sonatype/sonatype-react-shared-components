/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FocusEvent, KeyboardEvent, MouseEvent, Ref, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { always, dec, inc } from 'ramda';

import './NxCombobox.scss';

import forwardRef from '../../util/genericForwardRef';
import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
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
        inputProps,
        id,
        'aria-required': ariaRequired,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
        ...attrs
      } = props,

      isEmpty = !matches.length,

      dropdownRef = useRef<HTMLDivElement>(null),
      inputRef = useRef<HTMLDivElement>(null),

      [focusableBtnIndex, setFocusableBtnIndex] = useState<number | null>(null),
      [prevSearchText, setPrevSearchText] = useState(''),
      [showDropdown, setShowDropdown] = useState(false),
      [inlineStyle, setInlineStyle] = useState(true),

      inputId = useUniqueId('nx-combobox-input', id),
      dropdownId = useUniqueId('nx-combobox-dropdown'),
      dropdownRole = loadError || loading || isEmpty ? 'alert' : 'listbox',
      dropdownBtnId = useUniqueId('nx-dropdown-button'),

      className = classnames('nx-combobox', classNameProp, {
        'nx-combobox--dropdown-showable': showDropdown
      }),
      dropdownClassName = classnames('nx-combobox__menu', {
        'nx-combobox__menu--error': !!loadError
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

  // In the blur event, we use the relatedTarget to check if the focused element is a child of the parent
  // to show/hide dropdown, however, clicking the button in Safari does not focus it, which means the
  // relatedTarget will be null, this is to stop the mouse down event being fired for the element that
  // is listening to the blur event, in this case, the show/hide dropdown is handled by the click event
  function handleMouseDown(evt: MouseEvent) { evt.preventDefault(); }

  function handleComponentBlur() {
    setFocusableBtnIndex(null);
    setShowDropdown(false);
  }

  function handleOnChange(newVal: string) {
    setFocusableBtnIndex(null);
    onChange(newVal);

    if (newVal && newVal.trim() !== value.trim() && newVal.toLowerCase() !== prevSearchText.toLowerCase()) {
      doSearch(newVal);
      setPrevSearchText('');
    }
    else if (!newVal) {
      setShowDropdown(false);
    }
  }

  // helper for focusing different buttons in the dropdown menu
  const adjustBtnFocus = (adjust: (i: number) => number) => () => {
        const newFocusableBtnIndex = adjust(focusableBtnIndex ?? 0),
            elToFocus = dropdownRef.current?.children[newFocusableBtnIndex] as HTMLElement | null,
            elToFocusText = matches[newFocusableBtnIndex].displayName as string | null;
        if (elToFocus) {

          setFocusableBtnIndex(newFocusableBtnIndex);
          elToFocus.scrollIntoView({ block: 'nearest' });

          if (autoComplete && elToFocusText) {
            onChange(elToFocusText);
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
        inputEle.setSelectionRange(value.length, value.length);
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
      case 'Backspace':
        if (autoComplete) {
          setInlineStyle(false);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setFocusableBtnIndex(null);
        if (!showDropdown) {
          handleOnChange('');
        }
        break;
    }
  }

  function doSearch(val: string) {
    focusTextInput();
    onSearch(val.trim());
    setShowDropdown(true);
    if (autoComplete && !value.includes(val)) {
      setInlineStyle(true);
    }
  }

  function focusTextInput() {
    inputRef.current?.querySelector('input')?.focus();
  }

  function setInlineOption() {
    if (typeof matches[0].displayName === 'string' &&
    matches[0].displayName.toLowerCase().indexOf(value.toLowerCase()) === 0) {
      setPrevSearchText(value);
      onChange(matches[0].displayName);
    }
  }

  // Nullify focusableBtnIndex whenever the number of matches changes
  useEffect(function() {
    if (matches.length && autoComplete && inlineStyle) {
      setInlineOption();
    }
    else {
      setFocusableBtnIndex(null);
    }
  }, [matches]);

  useEffect(function() {
    if (prevSearchText && autoComplete && showDropdown && inlineStyle) {
      inputRef.current?.querySelector('input')?.setSelectionRange(prevSearchText.length, value.length);
      focusFirst();
    }
  }, [prevSearchText]);

  function handleOnClick({displayName}: DataItem<T>) {
    if (typeof displayName === 'string') {
      onChange(displayName);
    }
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
                   className='nx-combobox__input'
                   value={value}
                   onChange={handleOnChange}
                   disabled={disabled || undefined}
                   onKeyDown={handleKeyDown}
                   aria-autocomplete={autoComplete ? 'both' : 'list'}
                   aria-expanded={showDropdown}
                   aria-controls={dropdownId}
                   aria-activedescendant={focusableBtnIndex !== null ?
                     dropdownRef.current?.children[focusableBtnIndex].id : undefined }
                   aria-required={ariaRequired ?? undefined}
                   aria-describedby={ariaDescribedBy ?? undefined}
                   aria-label={ariaLabel ?? undefined}/>
      <NxDropdownMenu id={dropdownId}
                      role={dropdownRole}
                      ref={dropdownRef}
                      className={dropdownClassName}
                      onClosing={() => {}}
                      aria-busy={!!loading}
                      aria-live="polite"
                      aria-hidden={!showDropdown}>
        <NxLoadWrapper { ...{ loading } } error={loadError} retryHandler={() => doSearch(value)}>
          {
            matches.length ? matches.map((match, i) =>
              <button id={`${dropdownBtnId}-${i}`}
                      role="option"
                      aria-selected={i === focusableBtnIndex }
                      className= {classnames('nx-dropdown-button',
                          { 'selected': i === focusableBtnIndex })}
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
