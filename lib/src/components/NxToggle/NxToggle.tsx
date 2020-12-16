/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './NxToggle.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxToggle = forwardRef<HTMLLabelElement, Props>(
    function NxToggle({ className, onChange, isChecked, disabled, toggleId, children, ...otherProps }, ref) {
      const labelClasses = classnames('nx-toggle', className, {
        'nx-toggle--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          { children && <span className="nx-toggle__content">{children}</span> }
          <input type="checkbox"
                 id={toggleId || undefined}
                 className="nx-toggle__input"
                 disabled={!!disabled}
                 checked={isChecked}
                 readOnly={!onChange}
                 onChange={onChange || undefined}/>
          <div className="nx-toggle__control"><div className="nx-toggle__indicator"></div></div>
        </label>
      );
    }
);

NxToggle.propTypes = propTypes;

export default NxToggle;
