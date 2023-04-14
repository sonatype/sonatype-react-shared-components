/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxLoadingSpinner.scss';

const NxLoadingSpinner: FunctionComponent<Props> =
  function NxLoadingSpinner({ children, 'aria-label': ariaLabel }) {
    return (
      <div role="status" className="nx-loading-spinner" aria-label={ariaLabel}>
        <NxFontAwesomeIcon icon={faCircleNotch} className="fa-spin nx-loading-spinner__icon" />
        <span>{children || 'Loading…'}</span>
      </div>
    );
  };

NxLoadingSpinner.propTypes = propTypes;
export default NxLoadingSpinner;
