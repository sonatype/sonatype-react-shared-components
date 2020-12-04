/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { ThreatLevelCategory, categoryByPolicyThreatLevel } from '../../util/threatLevels';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxPolicyViolationIndicator.scss';

const NxPolicyViolationIndicator = forwardRef<HTMLDivElement, Props>(
    function NxPolicyViolationIndicator(
      { threatLevelCategory, policyThreatLevel, className, children, ...attrs }, ref) {
      const category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] :
          'unspecified',

          classNames = classnames(`nx-policy-violation-indicator nx-policy-violation-indicator--${category}`,
              className),
          label = `threat level ${category}`;

      return (
      <div className={classNames} ref={ref} {...attrs}>
        <span className="nx-policy-violation-indicator__badge">
          <NxFontAwesomeIcon aria-hidden={false}
                             aria-label={label}
                             icon={faExclamationCircle}/>
        </span>
        <span className="nx-policy-violation-indicator__text">
          {children || category}
        </span>
      </div>
      );
    }
);

NxPolicyViolationIndicator.propTypes = propTypes;

export default NxPolicyViolationIndicator;
