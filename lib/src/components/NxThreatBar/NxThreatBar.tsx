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

import './NxThreatBar.scss';

const NxThreatBar: FunctionComponent<Props> =
  function NxThreatBar({ threatLevelCategory, policyThreatLevel }): ReactElement<Props> {
    const category: ThreatLevelCategory =
          threatLevelCategory ? threatLevelCategory :
          policyThreatLevel != null ? categoryByPolicyThreatLevel[policyThreatLevel] :
          'unspecified',

        className = `nx-threat-bar nx-threat-bar--${category}`;

    return (
      <div className={className}></div>
    );
  };

NxThreatBar.propTypes = propTypes;

export default NxThreatBar;
