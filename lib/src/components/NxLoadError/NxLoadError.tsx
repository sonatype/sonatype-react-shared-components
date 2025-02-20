/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
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
 * @param retryHandler If this is defined, a Retry button will be rendered with type attribute set to "button"
 * which executes this function when clicked
 * @param submitOnRetry If this is defined, a Retry button will be rendered with type attribute set to "submit".
 * it will also execute retryHandler if it is specified.
 */
export default function NxLoadError(props: Props) {
  const { error, titleMessage, submitOnRetry, retryHandler, className, ...otherProps } = props;
  const alertClasses = classnames('nx-alert--load-error', className);

  return error != null && (
    <NxErrorAlert { ...otherProps } className={alertClasses}>
      <div className="nx-load-error__content">
        <span className="nx-load-error__message">
          { titleMessage || 'An error occurred loading data.' }
          {' '}
          { error }
        </span>
        { (retryHandler || submitOnRetry) &&
          <NxButton type={submitOnRetry ? 'submit' : 'button'}
                    variant="error"
                    onClick={retryHandler ?? undefined}
                    // This is to prevent focus from going to the <body> in Safari
                    // and closing the dropdown menu prematurely inside NxCombobox.
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.currentTarget.focus();
                    }}
                    className="nx-load-error__retry">
            <NxFontAwesomeIcon icon={faSync} />
            <span>Retry</span>
          </NxButton>
        }
      </div>
    </NxErrorAlert>
  ) || null;
}

NxLoadError.propTypes = propTypes;
