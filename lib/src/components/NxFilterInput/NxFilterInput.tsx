/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent } from 'react';
import classnames from 'classnames';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

import './NxFilterInput.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxFilterInput = forwardRef<HTMLDivElement, Props>(
    function NxFilterInput(props, ref) {
      const { value, placeholder, onChange, onClear, className, inputId, disabled, ...otherProps } = props,
          classes = classnames('nx-filter-input', className, {
            'nx-filter-input--disabled': disabled
          }),
          icon = value ? faTimes : faFilter;

      function inputOnChange(e: FormEvent<HTMLInputElement>) {
        if (onChange) {
          onChange(e.currentTarget.value);
        }
      }

      return (
        <div {...otherProps} className={classes} ref={ref}>
          <span className="nx-filter-input__add-on"
                onClick={value && onClear || undefined}>
            <NxFontAwesomeIcon icon={icon} />
          </span>
          <input type="text"
                 autoComplete="off"
                 id={inputId || undefined}
                 value={value}
                 onChange={inputOnChange}
                 placeholder={placeholder || undefined}
                 className="nx-filter-text-input"
                 disabled={disabled || undefined} />
        </div>
      );
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
