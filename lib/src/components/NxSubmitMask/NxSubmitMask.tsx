/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';

import './NxSubmitMask.scss';

export const SUCCESS_VISIBLE_TIME_MS = 800;

const NxSubmitMask: FunctionComponent<Props> =
  function NxSubmitMask({ fullscreen, message, successMessage, success }) {
    const classes = classnames('nx-submit-mask', {
          'nx-submit-mask--fullscreen': !!fullscreen,
          'nx-submit-mask--success': !!success
        }),

        // the default Loading... message is provided by NxLoadingSpinner
        spinnerMessage = success ? (successMessage || 'Success!') : message;

    return (
      <div className={classes}>
        <div className="nx-submit-mask__message">
          { success ?
            <>
              <NxFontAwesomeIcon icon={faCheckCircle} className="nx-loading-spinner__icon" />
              <span>{spinnerMessage || 'Loading…'}</span> 
            </> :
            <NxLoadingSpinner>{spinnerMessage}</NxLoadingSpinner>
          }
        </div>
      </div>
    );
  };

NxSubmitMask.propTypes = propTypes;
export default NxSubmitMask;
