/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { Props, propTypes } from './types';

import './NxSmallTag.scss';
export { Props } from './types';

export default function NxSmallTag(props: Props) {
  const { children, className, color, ...attrs } = props,
      tagClasses = classnames('nx-small-tag', className, {
        'nx-small-tag--pink': !color,
        [`nx-small-tag--${color}`]: color
      });

  return (
    <label className={tagClasses} {...attrs}>
      <span className="nx-small-tag__text">{children}</span>
    </label>
  );
}

NxSmallTag.propTypes = propTypes;
