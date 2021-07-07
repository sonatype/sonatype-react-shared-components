/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FormEvent } from 'react';
import classnames from 'classnames';

import './NxFormSelect.scss';

import { Props, propTypes } from './types';
export { Props, propTypes };

const NxFormSelect = forwardRef<HTMLSelectElement, Props>(
    function NxFormSelect(props, forwardedRef) {
      const { isPristine, onChange, className: classNameProp, ...attrs } = props,
          className = classnames('nx-form-select', classNameProp, {
            pristine: isPristine,
          });

      function selectOnChange(e: FormEvent<HTMLSelectElement>) {
        if (onChange) {
          onChange(e.currentTarget.value, e);
        }
      }

      return (
        <select ref={forwardedRef} onChange={selectOnChange} { ...{ className, attrs } } />
      );
    }
);

NxFormSelect.propTypes = propTypes;

export default NxFormSelect;
