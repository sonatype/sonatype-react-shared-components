/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent, KeyboardEvent, useRef, MutableRefObject, useContext } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import { faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

import './NxTextInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, PublicProps, propTypes, TextInputElement } from './types';
import { hasValidationErrors, getFirstValidationError } from '../../util/validationUtil';
import { useUniqueId } from '../../util/idUtil';
import { FormAriaContext } from '../NxForm/context';
export { Props, PublicProps, StateProps, Validator, propTypes, inputTypes } from './types';

/*
 * The full implementation of NxTextInput including options that are only for use internally within
 * other RSC compoents
 */
/* eslint-disable react/prop-types */
export const PrivateNxTextInput = forwardRef<HTMLDivElement, Props>(
    function PrivateNxTextInput(props, forwardedRef) {
      const {
        type,
        value,
        isPristine,
        validatable,
        validationErrors,
        onChange,
        className,
        onKeyPress,
        disabled,
        prefixContent,
        suffixContent,
        id,
        placeholder,
        inputAttributes,
        'aria-required': ariaRequired,
        'aria-describedby': ariaDescribedBy,
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
          { showValidationErrors: formShowValidationErrors } = useContext(FormAriaContext),
          showValidationErrors = formShowValidationErrors || !isPristine,
          isInvalid = validatable && showValidationErrors && hasValidationErrors(validationErrors),
          firstValidationError = validatable && getFirstValidationError(validationErrors),
          internalClassName = classnames('nx-text-input', className, {
            pristine: isPristine,
            invalid: isInvalid,
            valid: !isPristine && validatable && !isInvalid,
            disabled: disabled,
            'nx-text-input--textarea': isTextArea
          });

      const inputRef: MutableRefObject<TextInputElement | null> = useRef<TextInputElement>(null),
          invalidMessageId = useUniqueId('nx-text-input-invalid-message');

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
        <div ref={forwardedRef} className={internalClassName} { ...newProps }>
          {/* This click handler doesn't need to be accessible, it is only to mitigate a mouse-specific
            * presentational concern
            */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions*/}
          <div className="nx-text-input__box" onClick={setFocusToInput}>
            {prefixContent}
            {React.createElement(element, {
              ...inputAttributes,
              value,
              id,
              disabled,
              placeholder,
              ref: inputRef,
              type: typeAttr,
              onChange: inputOnChange,
              className: 'nx-text-input__input',
              onKeyPress: inputOnKeyPress,
              'aria-required': ariaRequired,
              'aria-describedby': ariaDescribedBy,
              'aria-invalid': isInvalid,
              'aria-errormessage': disabled ? undefined : invalidMessageId
            })}
            {suffixContent}
            <NxFontAwesomeIcon icon={faCheck} className="nx-icon nx-icon--valid"/>
            <NxFontAwesomeIcon icon={faExclamationCircle} className="nx-icon nx-icon--invalid"/>
          </div>
          { isInvalid && !disabled &&
            <div id={invalidMessageId} role="alert" className="nx-field-validation-message">
              {firstValidationError}
            </div>
          }
        </div>
      );
    }
);
/* eslint-enable react/prop-types */

/*
 * The public version of NxTextInput
 */
const NxTextInput = forwardRef<HTMLDivElement, PublicProps>(
    function NxTextInput(props, ref) {
      return <PrivateNxTextInput ref={ref} { ...props } />;
    }
);

NxTextInput.propTypes = propTypes;

export default NxTextInput;
