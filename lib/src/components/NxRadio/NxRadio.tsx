/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import './NxRadio.scss';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxRadio = forwardRef<HTMLLabelElement, Props>(
    function NxRadio({ name, value, onChange, isChecked, disabled, children, radioId, ...otherProps }, ref) {
      const labelClasses = classnames('nx-radio', {
        'nx-radio--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          <input className="nx-radio__input"
                 id={radioId || undefined}
                 type="radio"
                 name={name}
                 disabled={!!disabled}
                 checked={isChecked}
                 onChange={() => onChange && onChange(value)}
                 readOnly={!onChange}/>
          <svg className="nx-radio__circle" viewBox="-8 -8 16 16" focusable={false}>
            <circle r="7" strokeWidth="1" fill="none" className="nx-radio__outer-circle"/>
            { isChecked && <circle r="5" stroke="none" className="nx-radio__inner-circle"/> }
          </svg>
          { children && <span className="nx-radio__content">{children}</span> }
        </label>
      );
    }
);

NxRadio.propTypes = propTypes;

export default NxRadio;
