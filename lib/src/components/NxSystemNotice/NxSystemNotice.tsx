/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import withClass from '../../util/withClass';

const _NxSystemNotice = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    function NxSystemNotice({ className, ...otherProps }, ref) {
      const classes = classnames('nx-system-notice', className);

      return (
        <div ref={ref} role="complementary" aria-label="system notice" className={classes} { ...otherProps } />
      );
    }
);

_NxSystemNotice.propTypes = {
  className: PropTypes.string
};

const NxSystemNotice = Object.assign(_NxSystemNotice, {
  Container: withClass('div', 'nx-system-notice-container')
});

export default NxSystemNotice;
