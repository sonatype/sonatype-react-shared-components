/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Close from '../../icons/Close';
import NxButton from '../NxButton/NxButton';

import './NxCloseButton.scss';

const NxCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    function NxCloseButton({ className, ...otherProps }, ref) {
      const btnClasses = classnames('nx-btn--close', className);

      return (
        <NxButton ref={ref}
                  type="button"
                  className={btnClasses}
                  variant="icon-only"
                  aria-label="Close"
                  { ...otherProps }>
          <Close/>
        </NxButton>
      );
    }
);

NxCloseButton.propTypes = {
  className: PropTypes.string
};

export default NxCloseButton;
