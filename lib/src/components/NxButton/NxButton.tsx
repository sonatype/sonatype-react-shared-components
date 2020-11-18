/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import {Props, propTypes} from './types';

const NxButton = forwardRef<HTMLButtonElement, Props>(
    function NxButton({variant, inline, className, children, ...attrs}, ref) {
      const classNames = classnames('nx-btn', className, {
        // secondary is the default, its styles are directly on `nx-btn`
        [`nx-btn--${variant}`]: variant && variant !== 'secondary',
        'nx-btn--inline': inline
      });

      return (
        <button aria-disabled={classNames.includes('disabled')}
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
