/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import { useUniqueId } from '../../util/idUtil';

export { Props };

const NxFormGroup = forwardRef<HTMLDivElement, Props>(
    function NxFormGroup({ className, label, sublabel, children, isRequired, ...attrs }, ref) {
      const classNames = classnames('nx-form-group', className),
          labelClassnames = classnames('nx-label', { 'nx-label--optional': !isRequired }),

          childId = useUniqueId('nx-form-group-child', children.props.id),
          sublabelId = useUniqueId('nx-sub-label', sublabel ? undefined : ''),
          childDescribedBy = classnames(children.props['aria-describedby'], sublabelId),
          childRequired = children.props['aria-required'] ?? isRequired,

          childNeedsAugmentation = !children.props.id || sublabelId || (isRequired && !children.props['aria-required']),
          childEl = childNeedsAugmentation ?
            React.cloneElement(children, {
              id: childId,
              'aria-describedby': childDescribedBy,
              'aria-required': childRequired
            }) :
            children;

      return (
        <div ref={ref} className={classNames} {...attrs}>
          <label htmlFor={childId} className={labelClassnames}>
            <span className="nx-label__text">{label}</span>
          </label>
          { sublabel && <div id={sublabelId} className="nx-sub-label">{sublabel}</div> }
          {childEl}
        </div>
      );
    }
);

NxFormGroup.propTypes = propTypes;

export default NxFormGroup;
