/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import { useRandomId } from '../../util/idUtil';

export { Props };

const NxFormGroup = forwardRef<HTMLDivElement, Props>(
    function NxFormGroup({ className, label, sublabel, children, isRequired, ...attrs }, ref) {
      const classNames = classnames('nx-form-group', className),
          labelClassnames = classnames('nx-label', { 'nx-label--optional': !isRequired }),

          childId = useRandomId('nx-form-group-child', children.props.id),
          sublabelId = useRandomId('nx-sub-label', sublabel ? undefined : ''),
          childDescribedBy = classnames(children.props['aria-describedby'], sublabelId),

          childNeedsAugmentation = !children.props.id || sublabelId,
          childEl = childNeedsAugmentation ?
            React.cloneElement(children, { id: childId, 'aria-describedby': childDescribedBy }) :
            children;

      return (
        <div ref={ref} className={classNames} {...attrs}>
          <label htmlFor={childId} className={labelClassnames}>
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
