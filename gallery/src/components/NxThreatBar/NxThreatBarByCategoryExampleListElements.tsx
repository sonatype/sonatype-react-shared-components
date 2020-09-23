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
    <h3 className="nx-h3">
      List Title
    </h3>
    <ul className="nx-list nx-list--threat-bars">
      <li className="nx-list__item">
        <NxThreatBar />
        <span className="nx-list__text">Threat Level Unspecified</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar threatLevelCategory="none" />
        <span className="nx-list__text">Threat Level None</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar threatLevelCategory="low" />
        <span className="nx-list__text">Threat Level Low</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar threatLevelCategory="moderate" />
        <span className="nx-list__text">Threat Level Moderate</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar threatLevelCategory="severe" />
        <span className="nx-list__text">Threat Level Severe</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar threatLevelCategory="critical" />
        <span className="nx-list__text">Threat Level Critical</span>
      </li>
    </ul>
  </>;

export default NxThreatLevelsByNameListElements;
