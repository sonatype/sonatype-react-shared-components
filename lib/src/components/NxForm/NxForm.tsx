/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent } from 'react';
import { always } from 'ramda';
import classnames from 'classnames';

import NxLoadWrapper from '../NxLoadWrapper/NxLoadWrapper';
import NxLoadError from '../NxLoadError/NxLoadError';
import NxButton from '../NxButton/NxButton';
import NxSubmitMask from '../NxSubmitMask/NxSubmitMask';

import { Props, propTypes } from './types';
import { FormAriaContext } from './context';
import { getFirstValidationError, hasValidationErrors } from '../../util/validationUtil';
import { NxErrorAlert } from '../NxAlert/NxAlert';
import { NxP } from '../SimpleComponents';

function RequiredFieldNotice() {
  return (
    <NxP className="nx-form__required-field-notice">
      <span className="nx-form__required-field-asterisk">*</span>
      {' '}Required fields are marked with an asterisk.
    </NxP>
  );
}

/* eslint-disable react/prop-types */
const _NxForm = forwardRef<HTMLFormElement, Props>(
    function NxForm(props, ref) {
      const {
            className,
            loading,
            doLoad,
            onSubmit: onSubmitProp,
            onCancel,
            loadError,
            submitError,
            submitErrorTitleMessage,
            validationErrors,
            submitBtnClasses: submitBtnClassesProp,
            submitBtnText,
            submitMaskState,
            submitMaskMessage,
            submitMaskSuccessMessage,
            children,
            additionalFooterBtns,
            showValidationErrors,
            ...formAttrs
          } = props,
          formHasValidationErrors = hasValidationErrors(validationErrors),
          formClasses = classnames('nx-form', className, {
            'nx-form--show-validation-errors': showValidationErrors,
            'nx-form--has-validation-errors': formHasValidationErrors,
            'nx-form--has-submit-error': !!submitError
          }),
          getChildren = children instanceof Function ? children : always(children),
          submitBtnClasses = classnames('nx-form__submit-btn', submitBtnClassesProp);

      if (showValidationErrors == null) {
        throw new Error('showValidationErrors is strictly required!');
      }

      function onSubmit(evt: FormEvent) {
        evt.preventDefault();

        onSubmitProp();
      }

      const renderForm = () => {
        return (
          <form ref={ref} className={formClasses} onSubmit={onSubmit} { ...formAttrs }>
            <FormAriaContext.Provider value={{ showValidationErrors }}>
              {getChildren()}
            </FormAriaContext.Provider>
            <footer className="nx-footer">
              <NxLoadError titleMessage={submitErrorTitleMessage || 'An error occurred saving data.'}
                           error={submitError}
                           retryHandler={onSubmitProp} />
              { formHasValidationErrors && !submitError &&
                <NxErrorAlert className="nx-form__validation-errors">
                  There were validation errors.{' '}
                  {getFirstValidationError(validationErrors)}
                </NxErrorAlert>
              }
              <div className="nx-btn-bar">
                { additionalFooterBtns }
                { onCancel &&
                  <NxButton type="button" onClick={onCancel} className="nx-form__cancel-btn">
                    Cancel
                  </NxButton>
                }
                <NxButton variant="primary" className={submitBtnClasses}>
                  {submitBtnText || 'Submit'}
                </NxButton>
              </div>

            </footer>
            { submitMaskState != null &&
              <NxSubmitMask success={submitMaskState}
                            message={submitMaskMessage}
                            successMessage={submitMaskSuccessMessage} />
            }
          </form>
        );
      };

      return doLoad ? (
        <NxLoadWrapper loading={loading} error={loadError} retryHandler={doLoad}>
          {renderForm}
        </NxLoadWrapper>
      ) : renderForm();
    }
);

const NxForm = Object.assign(_NxForm, { propTypes, RequiredFieldNotice });

export default NxForm;
export { Props, propTypes };
