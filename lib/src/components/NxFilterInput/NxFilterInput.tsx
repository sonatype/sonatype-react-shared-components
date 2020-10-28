/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent } from 'react';
import classnames from 'classnames';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './NxFilterInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxFilterInput = forwardRef<HTMLDivElement, Props>(
    function NxFilterInput(props, ref) {
      const { value, placeholder, onChange, className, inputId, disabled, list, ...otherProps } = props,
          classes = classnames('nx-filter-input', 'nx-text-input', className, {
            'nx-filter-input--disabled': disabled
          });

      function inputOnChange(e: FormEvent<HTMLInputElement>) {
        if (onChange) {
          onChange(e.currentTarget.value);
        }
      }

      return (
        <div {...otherProps} className={classes} ref={ref}>
          <div className="nx-text-input__box">
            <NxFontAwesomeIcon icon={faFilter} className="nx-icon--filter-icons" />
            <input type="text"
                   autoComplete="off"
                   id={inputId || undefined}
                   value={value}
                   onChange={inputOnChange}
                   placeholder={placeholder || undefined}
                   className="nx-text-input__input nx-filter-text-input"
                   disabled={disabled || undefined}
                   list={list || undefined} />
          </div>
        </div>
      );
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
