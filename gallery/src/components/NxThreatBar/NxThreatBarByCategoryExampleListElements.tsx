/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatLevelsByNameListElements = () =>
  <>
    <div className="nx-list">
      <h4 className="nx-list__title">
        List Title
      </h4>
      <ul>
        <li className="nx-list__item">
          <NxThreatBar />
          <span>Threat Level Unspecified</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar threatLevelCategory="none" />
          <span>Threat Level None</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar threatLevelCategory="low" />
          <span>Threat Level Low</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar threatLevelCategory="moderate" />
          <span>Threat Level Moderate</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar threatLevelCategory="severe" />
          <span>Threat Level Severe</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar threatLevelCategory="critical" />
          <span>Threat Level Critical</span>
        </li>
      </ul>
    </div>
  </>;

export default NxThreatLevelsByNameListElements;
