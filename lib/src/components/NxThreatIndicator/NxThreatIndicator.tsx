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
import classnames from 'classnames';

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const NxThreatIndicator: FunctionComponent<Props> =
  function NxThreatIndicator(props): ReactElement<Props> {
    const { title, threatLevelCategory, policyThreatLevel, className: classNameProp, presentational } = props,
        category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] :
          'unspecified',

        className = classnames(classNameProp, `nx-threat-indicator nx-threat-indicator--${category} nx-icon--colorful`),
        label = `threat level ${category}`;

    const icon = (
      <NxFontAwesomeIcon aria-label={presentational ? undefined : label}
                         className={className}
                         icon={faCircle}
                         role={presentational ? 'presentation' : 'graphics-symbol img'} />
    );

    return presentational ? icon : (
      <NxTooltip title={title || capitalize(category)}>
        {icon}
      </NxTooltip>
    );
  };

NxThreatIndicator.propTypes = propTypes;

export default NxThreatIndicator;
