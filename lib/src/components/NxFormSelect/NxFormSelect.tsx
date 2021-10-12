/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { Props } from './types';
import { omit } from 'ramda';
export { Props };

const NxFormSelect = forwardRef<HTMLSelectElement, Props>(
    function NxFormSelect(props, forwardedRef) {
      const { className: classNameProp, ...otherProps } = props,
          className = classnames('nx-form-select', classNameProp);
      const attrs = omit(['isPristine'], otherProps);
      return (
        <select ref={forwardedRef} { ...{ className, ...attrs } } />
      );
    }
);

export default NxFormSelect;
