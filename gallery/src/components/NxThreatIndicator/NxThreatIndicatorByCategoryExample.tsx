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
    <NxThreatIndicator presentational />
    <span>Threat Level Unspecified</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="none" presentational />
    <span>Threat Level None</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="low" presentational />
    <span>Threat Level Low</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="moderate" presentational />
    <span>Threat Level Moderate</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="severe" presentational />
    <span>Threat Level Severe</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="critical" presentational />
    <span>Threat Level Critical</span>
  </>;

export default NxThreatIndicatorByNameExample;
