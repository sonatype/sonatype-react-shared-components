/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';

import { ThreatLevelCategory, categoryByPolicyThreatLevel } from '../../util/threatLevels';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxPolicyViolationIndicator.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const NxPolicyViolationIndicator: FunctionComponent<Props> =
  function NxPolicyViolationIndicator({ threatLevelCategory, policyThreatLevel, children }): ReactElement<Props> {
    const category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] : 'unspecified',

        className = `nx-policy-violation-indicator nx-policy-violation-indicator--${category}`,
        label = `${category}`;

    return <div className={className}>
        <div className="nx-policy-violation-indicator__badge">
          <NxFontAwesomeIcon aria-hidden={false}
                             aria-label={label}
                             icon={faExclamationCircle}/>
        </div>
        <div className="nx-policy-violation-indicator__text">
          <span>{children || label}</span>
        </div>
      </div>;
  };

NxPolicyViolationIndicator.propTypes = propTypes;

export default NxPolicyViolationIndicator;
