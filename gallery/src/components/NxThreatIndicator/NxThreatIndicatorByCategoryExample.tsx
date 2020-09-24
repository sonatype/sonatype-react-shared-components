/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatIndicatorByNameExample = () =>
  <>
    <NxThreatIndicator />
    <span>Threat Level Unspecified</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="none" />
    <span>Threat Level None</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="low" />
    <span>Threat Level Low</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="moderate" />
    <span>Threat Level Moderate</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="severe" />
    <span>Threat Level Severe</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="critical" />
    <span>Threat Level Critical</span>
  </>;

export default NxThreatIndicatorByNameExample;
