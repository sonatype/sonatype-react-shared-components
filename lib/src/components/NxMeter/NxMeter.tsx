/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import { Props, propTypes } from './types';

import './NxMeter.scss';
import classnames from 'classnames';
import NxTooltip from '../NxTooltip/NxTooltip';

export { Props };

const NxMeter = forwardRef<HTMLMeterElement, Props>(function NxMeter(props, ref) {
  const { className: classNameProp, max: maxProp, children, ...otherAttributes } = props,
      className = classnames('nx-meter', classNameProp),
      max: number = maxProp ?? 100;

  return (
    <NxTooltip title={children}>
      <meter ref={ref} className={className} max={max} { ...otherAttributes }>
        <span className="nx-meter__content">{children}</span>
      </meter>
    </NxTooltip>
  );
}
);

NxMeter.propTypes = propTypes;

export default NxMeter;
