/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import NxTooltip from '../NxTooltip/NxTooltip';

import { ThreatLevelCategory, categoryByPolicyThreatLevel } from '../../util/threatLevels';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxThreatIndicator.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const NxThreatIndicator: FunctionComponent<Props> =
  function NxThreatIndicator({ title, threatLevelCategory, policyThreatLevel }): ReactElement<Props> {
    const category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] :
          'unspecified',

        className = `nx-threat-indicator nx-threat-indicator--${category}`,
        label = `threat level ${category}`;

    return (
      <NxTooltip title={title || capitalize(category)}>
        <NxFontAwesomeIcon aria-hidden={false}
                           aria-label={label}
                           className={className}
                           icon={faCircle} />
      </NxTooltip>
    );
  };

NxThreatIndicator.propTypes = propTypes;

export default NxThreatIndicator;
