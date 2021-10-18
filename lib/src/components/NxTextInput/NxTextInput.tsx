/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent, KeyboardEvent, useRef, MutableRefObject, useMemo } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import { faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

import './NxTextInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes, TextInputElement } from './types';
import { hasValidationErrors, getFirstValidationError } from '../../util/validationUtil';
import { getUniqueId } from '../../util/idUtil';
export { Props, PublicProps, StateProps, propTypes, inputTypes } from './types';

/**
 * Standard text input with validation styling
 * @param type What type of text input to render.  Defaults to "text".
 *   Possible values: "textarea" | "text" | "password"
 * @param value The value rendered in the text input
 * @param isPristine Should be set to true when the user has not yet adjusted the value of the input
 * @param validationErrors Zero or more validation error messages.  If empty or not defined, the field is
 *   considered to be valid
 * @param onChange A callback for when the user changes the value of the text box (e.g. by typing a letter)
 * @param onKeyPress A callback for when the user presses a key that doesn't necessarily change the input value
 *    (e.g. by hitting enter)
 */
const NxTextInput = forwardRef<HTMLDivElement, Props>(
    function NxTextInput(props, forwardedRef) {
      const {
        type,
        isPristine,
        validatable,
        validationErrors,
        onChange,
        className,
        onKeyPress,
        disabled,
        prefixContent,
        ...attrs
      } = props;

      /**
       * `trimmedValue` is a hidden property in `props`
       * We need to remove it so react doesn't complain when we pass the object
       * with the props to the `createElement` method below.
       * `title` is removed to prevent errors when `NxTextInput`, which itself uses` NxTooltip`, is wrapped
       * in another `NxTooltip`
       */
      const newProps = omit(['trimmedValue', 'title'], attrs);
      const isTextArea = type === 'textarea',
          element = isTextArea ? 'textarea' : 'input',
          typeAttr = isTextArea ? undefined : (type || 'text'),
          isInvalid = validatable && hasValidationErrors(validationErrors),
          firstValidationError = validatable && getFirstValidationError(validationErrors),
          internalClassName = classnames('nx-text-input', className, {
            pristine: isPristine,
            invalid: !isPristine && validatable && isInvalid,
            valid: !isPristine && validatable && !isInvalid,
            disabled: disabled,
            'nx-text-input--textarea': isTextArea
          });

      const inputRef: MutableRefObject<TextInputElement | null> = useRef<TextInputElement>(null),
          invalidMessageId = useMemo(() => getUniqueId('nx-text-input-invalid-message'), []);

      // when the box padding is clicked, set the focus to the <input> as that's what the user thought
      // they were clicking
      function setFocusToInput() {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }

      function inputOnChange(e: FormEvent<TextInputElement>) {
        if (onChange) {
          onChange(e.currentTarget.value, e);
        }
      }

      function inputOnKeyPress(e: KeyboardEvent<TextInputElement>) {
        if (onKeyPress) {
          onKeyPress(e.key);
        }
      }

      return (
        <div ref={forwardedRef} className={internalClassName}>
          <div className="nx-text-input__box" onClick={setFocusToInput}>
            {prefixContent}
            {React.createElement(element, {
              ...newProps,
              disabled,
              ref: inputRef,
              type: typeAttr,
              onChange: inputOnChange,
              className: 'nx-text-input__input',
              onKeyPress: inputOnKeyPress,
              'aria-invalid': isInvalid,
              'aria-errormessage': invalidMessageId
            })}
            <NxFontAwesomeIcon icon={faCheck} className="nx-icon nx-icon--valid"/>
            <NxFontAwesomeIcon icon={faExclamationCircle} className="nx-icon nx-icon--invalid"/>
          </div>
          <div id={invalidMessageId} role="alert" className="nx-text-input__invalid-message">
            {!isPristine && firstValidationError}
          </div>
        </div>
      );
    }
);

NxTextInput.propTypes = propTypes;

export default NxTextInput;
