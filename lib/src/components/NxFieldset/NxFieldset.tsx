/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
export { Props };

const NxFieldset = forwardRef<HTMLFieldSetElement, Props>(
    function NxFieldset({ className, label, sublabel, children, isRequired, ...attrs }, ref) {
      const classNames = classnames('nx-fieldset', className),
          legendClassnames = classnames('nx-legend', { 'nx-legend--optional': !isRequired });

      return (
        <fieldset className={classNames} ref={ref} { ...attrs }>
          <legend className={legendClassnames}>
            <span className="nx-legend__text">{label}</span>
          </legend>
          { sublabel && <div className="nx-sub-label">{sublabel}</div> }
          {children}
        </fieldset>
      );
    }
);

NxFieldset.propTypes = propTypes;

export default NxFieldset;
