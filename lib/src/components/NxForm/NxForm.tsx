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
import NxTooltip from '../NxTooltip/NxTooltip';
import NxSubmitMask from '../NxSubmitMask/NxSubmitMask';

import { Props, propTypes } from './types';

const NxForm = forwardRef<HTMLFormElement, Props>(
    function NxForm(props) {
      const {
            loading,
            doLoad,
            onSubmit: onSubmitProp,
            onCancel,
            loadError,
            submitError,
            validationError,
            submitBtnClasses: submitBtnClassesProp,
            submitBtnText,
            submitMaskState,
            submitMaskMessage,
            submitMaskSuccessMessage,
            children,
            additionalFooterBtns,
            ...formAttrs
          } = props,
          getChildren = children instanceof Function ? children : always(children),
          submitDisabled = !!validationError,
          submitBtnClasses = classnames(submitBtnClassesProp, {
            disabled: submitDisabled
          });

      function onSubmit(evt: FormEvent) {
        evt.preventDefault();

        if (!submitDisabled) {
          onSubmitProp();
        }
      }

      const renderForm = () => (
        <form className="nx-form" onSubmit={onSubmit} { ...formAttrs }>
          { getChildren() }
          <footer className="nx-footer">
            { submitError &&
              <NxLoadError titleMessage="An error occurred saving data."
                           error={submitError}
                           retryHandler={onSubmitProp} />
            }

            <div className="nx-btn-bar">
              { additionalFooterBtns }
              { onCancel && <NxButton type="button" onClick={onCancel}>Cancel</NxButton> }
              { !!submitError ||
                <NxTooltip title={validationError || ''}>
                  <NxButton variant="primary" className={submitBtnClasses || undefined}>
                    {submitBtnText || 'Submit'}
                  </NxButton>
                </NxTooltip>
              }
            </div>

          </footer>
          { submitMaskState != null &&
            <NxSubmitMask success={ submitMaskState }
                          message={submitMaskMessage}
                          successMessage={submitMaskSuccessMessage} />
          }
        </form>
      );

      return doLoad ? (
        <NxLoadWrapper loading={loading} error={loadError} retryHandler={doLoad}>
          {renderForm}
        </NxLoadWrapper>
      ) : renderForm();
    }
);

NxForm.propTypes = propTypes;

export default NxForm;
export { Props, propTypes };
