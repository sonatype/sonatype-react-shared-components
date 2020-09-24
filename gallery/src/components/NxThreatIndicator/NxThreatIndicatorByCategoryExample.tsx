/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatLevelsByNameExample = () =>
  <ul className="nx-list">
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator />
        <span>Threat Level Unspecified</span>
      </span>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator threatLevelCategory="none" />
        <span>Threat Level None</span>
      </span>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator threatLevelCategory="low" />
        <span>Threat Level Low</span>
      </span>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator threatLevelCategory="moderate" />
        <span>Threat Level Moderate</span>
      </span>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator threatLevelCategory="severe" />
        <span>Threat Level Severe</span>
      </span>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">
        <NxThreatIndicator threatLevelCategory="critical" />
        <span>Threat Level Critical</span>
      </span>
    </li>
  </ul>;

export default NxThreatLevelsByNameExample;
