/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { NxErrorAlert } from '../NxAlert/NxAlert';
import NxButton from '../NxButton/NxButton';
import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

import './NxLoadError.scss';

/**
 * A component that conditionally renders standardized DOM for error messages, optionally with a retry button.
 * If there is no error, this component renders nothing.
 * @param error if defined/non-null, is a string error message
 * @param titleMessage An optional string to display before the actual error output.  If not defined, defaults
 * to "An error occurred loading data."
 * @param retryHandler If this is defined, a Retry button will be rendered which executes this function when clicked
 */
const NxLoadError = forwardRef<HTMLDivElement, Props>(
    function NxLoadError(props, ref) {
      const { error, titleMessage, retryHandler, className, onFocusedRetryButtonUnmount, ...otherProps } = props,
          alertClasses = classnames('nx-alert--load-error', className),
          retryBtnRef = useRef<HTMLButtonElement>(null);

      function checkRetryFocus() {
        if (onFocusedRetryButtonUnmount && retryBtnRef.current?.contains(document.activeElement)) {
          onFocusedRetryButtonUnmount();
        }
      }

      // When the Retry button disappears, this is the only place that it's possible to catch whether it was
      // focused. Typically when that is the case the calling code will want the ability to move the focus to
      // some other specific spot rather than letting it reset to the <body>
      useLayoutEffect(function() {
        if (!(error && retryHandler)) {
          checkRetryFocus();
        }
      }, [error, retryHandler]);

      // also check when the entire component unmounts
      useLayoutEffect(() => checkRetryFocus, []);

      return error != null && (
        <NxErrorAlert { ...otherProps } className={alertClasses} ref={ref}>
          <span className="nx-load-error__message">
            { titleMessage || 'An error occurred loading data.' }
            {' '}
            { error }
          </span>
          { retryHandler &&
            <NxButton ref={retryBtnRef}
                      type="button"
                      variant="error"
                      onClick={retryHandler}
                      className="nx-load-error__retry">
              <NxFontAwesomeIcon icon={faSync} />
              <span>Retry</span>
            </NxButton>
          }
        </NxErrorAlert>
      ) || null;
    }
);

NxLoadError.propTypes = propTypes;

export default NxLoadError;
