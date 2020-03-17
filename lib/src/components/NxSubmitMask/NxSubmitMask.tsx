/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

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
        <h3 className="nx-h3 nx-submit-mask__message">
          <NxLoadingSpinner>{spinnerMessage}</NxLoadingSpinner>
        </h3>
      </div>
    );
  };

NxSubmitMask.propTypes = propTypes;
export default NxSubmitMask;
