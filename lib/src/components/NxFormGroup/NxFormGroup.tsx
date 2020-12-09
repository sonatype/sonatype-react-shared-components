/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import { getRandomId } from '../../util/idUtil';

export { Props };

const NxFormGroup = forwardRef<HTMLDivElement, Props>(
    function NxFormGroup({ className, label, sublabel, children, isRequired, ...attrs }, ref) {
      const classNames = classnames('nx-form-group', className, {
            'nx-label--optional': !isRequired
          }),
          childId = children.props.id || getRandomId('nx-form-group-child'),
          sublabelId = sublabel ? getRandomId('nx-sub-label') : undefined,
          childNeedsIds = !children.props.id || sublabelId,
          childEl = childNeedsIds ?
            React.cloneElement(children, { id: childId, 'aria-describedby': sublabelId }) :
            children;

      return (
        <div ref={ref} className={classNames} {...attrs}>
          <label htmlFor={childId} className="nx-label">
            <span className="nx-label__text">{label}</span>
          </label>
          { sublabel && <span id={sublabelId} className="nx-sub-label">{sublabel}</span> }
          {childEl}
        </div>
      );
    }
);

NxFormGroup.propTypes = propTypes;

export default NxFormGroup;
