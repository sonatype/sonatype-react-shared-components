/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { Props, propTypes } from './types';

import './NxSmallTag.scss';
export { Props, NX_SMALL_TAG_COLORS } from './types';

const NxSmallTag = forwardRef<HTMLLabelElement, Props>(function NxSmallTag(props, ref) {
  const { children, className, color, ...attrs } = props,
      tagClasses = classnames('nx-small-tag', className, {
        'nx-small-tag--pink': !color,
        [`nx-small-tag--${color}`]: color
      });

  return (
    <label className={tagClasses} ref={ref} {...attrs}>
      <span className="nx-small-tag__text">{children}</span>
    </label>
  );
});

NxSmallTag.propTypes = propTypes;
export default NxSmallTag;
