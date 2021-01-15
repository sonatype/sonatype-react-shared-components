/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './NxTag.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxTag = forwardRef<HTMLDivElement, Props>(
  function NxTag({ children }, ref) {
      const tagClasses = classnames('nx-tag');

      return (
        <div className={tagClasses} ref={ref}>{children}</div>
      );
    }
);

NxTag.propTypes = propTypes;

export default NxTag;
