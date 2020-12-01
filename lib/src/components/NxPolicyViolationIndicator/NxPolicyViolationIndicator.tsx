/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, FunctionComponent } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { ThreatLevelCategory, categoryByPolicyThreatLevel } from '../../util/threatLevels';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxPolicyViolationIndicator.scss';
const NxPolicyViolationIndicator = forwardRef<FunctionComponent, Props> (
  function NxPolicyViolationIndicator({ threatLevelCategory, policyThreatLevel, children }) {
    const category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] : 
          'unspecified',

        className = `nx-policy-violation-indicator nx-policy-violation-indicator--${category}`,
        label = `threat level ${category}`;

    return (
      <div className={className}>
        <div className="nx-policy-violation-indicator__badge">
          <NxFontAwesomeIcon aria-hidden={false}
                             aria-label={label}
                             icon={faExclamationCircle}/>
        </div>
        <div className="nx-policy-violation-indicator__text">
          {children || category}
        </div>
      </div>
    );
  );

NxPolicyViolationIndicator.propTypes = propTypes

export default NxPolicyViolationIndicator;
