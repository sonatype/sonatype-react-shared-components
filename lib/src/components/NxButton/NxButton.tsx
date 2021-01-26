/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { includes } from 'ramda';
import classnames from 'classnames';

import {Props, propTypes} from './types';

const NxButton = forwardRef<HTMLButtonElement, Props>(
    function NxButton({variant, className, children, ...attrs}, ref) {
      const classNames = classnames('nx-btn', className, {
        [`nx-btn--${variant}`]: variant || 'secondary'
      });
      return (
        <button aria-disabled={includes('disabled', classNames) ? true : undefined}
                ref={ref}
                className={classNames}
                {...attrs}>
          {children}
        </button>
      );

    }
);

NxButton.propTypes = propTypes;

export default NxButton;
export {Props, propTypes} from './types';
