/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';

import './NxToggle.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxToggle = forwardRef<HTMLLabelElement, Props>(
    function NxToggle(props, ref) {
      const {
        className,
        onChange,
        isChecked,
        disabled,
        inputId,
        children,
        inputAttributes = {},
        ...otherProps
      } = props;

      const labelClasses = classnames('nx-toggle', className, {
        'nx-toggle--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      const {
        className: checkboxClassName,
        ...unfilteredInputAttributes
      } = inputAttributes;

      const otherInputAttributes = omit(
          ['disabled', 'checked', 'readonly', 'onChange'],
          unfilteredInputAttributes
      );

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          <input type="checkbox"
                 id={otherInputAttributes.id || inputId || undefined}
                 className={classnames('nx-toggle__input', checkboxClassName)}
                 disabled={!!disabled}
                 checked={isChecked}
                 readOnly={!onChange}
                 onChange={onChange || undefined}
                 role="switch"
                 aria-checked={isChecked}
                 { ...otherInputAttributes } />
          <div className="nx-toggle__control"><div className="nx-toggle__indicator"/></div>
          { children && <span className="nx-toggle__content">{children}</span> }
        </label>
      );
    }
);

NxToggle.propTypes = propTypes;

export default NxToggle;
