/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './NxTag.scss';
import Close from '../../icons/Close';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxTag = forwardRef<HTMLDivElement, Props>(
    function NxTag(props, ref) {
      const { children, ...attrs } = props,
          tagClasses = classnames('nx-tag');

      return (
        <div className={tagClasses} ref={ref} {...attrs}>
          <div className="nx-tag__text">
            {children}
          </div>
        </div>
      );
    }
);

NxTag.propTypes = propTypes;
export default NxTag;

export const NxActionTag = forwardRef<HTMLDivElement, Props>(
    function NxActionTag(props, ref) {
      const { children, ...attrs } = props,
          tagClasses = classnames('nx-tag');

      return (
        <div className={tagClasses} ref={ref} {...attrs}>
          <div className="nx-tag__text">
            {children}
          </div>
          <div className="nx-tag__actions">
            <Close />
          </div>
        </div>
      );
    }
);

NxTag.propTypes = propTypes;
