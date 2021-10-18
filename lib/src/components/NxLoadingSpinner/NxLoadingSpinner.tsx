/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import * as PropTypes from 'prop-types';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxLoadingSpinner.scss';

const NxLoadingSpinner: FunctionComponent =
  function NxLoadingSpinner({ children }) {
    return (
      <div className="nx-loading-spinner">
        <NxFontAwesomeIcon icon={faCircleNotch} className="fa-spin nx-loading-spinner__icon" />
        <span>{children || 'Loading…'}</span>
      </div>
    );
  };

NxLoadingSpinner.propTypes = {
  children: PropTypes.node
};

export default NxLoadingSpinner;
