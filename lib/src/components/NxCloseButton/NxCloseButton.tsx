/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentProps } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Close from '../../icons/Close';
import { includesDisabledClass } from '../../util/classUtil';

import './NxCloseButton.scss';

export default function NxCloseButton({ className, ...otherProps }: ComponentProps<'button'>) {
  const btnClasses = classnames('nx-btn nx-btn--icon-only nx-btn--close', className);

  // NOTE: not using NxButton because we don't want the tooltip that icon-only NxButtons require
  return (
    <button aria-disabled={includesDisabledClass(className)}
            type="button"
            className={btnClasses}
            aria-label="Close"
            { ...otherProps }>
      <Close/>
    </button>
  );
}

NxCloseButton.propTypes = {
  className: PropTypes.string
};
