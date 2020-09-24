/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatIndicatorByPolicyNumberExample = () =>
  <>
    <NxThreatIndicator policyThreatLevel={0}/>
    <span>Threat Indicator Policy Level 0</span>
    <br/>
    <NxThreatIndicator policyThreatLevel={1}/>
    <span>Threat Indicator Policy Level 1</span>
    <br/>
    <NxThreatIndicator policyThreatLevel={2}/>
    <span>Threat Indicator Policy Level 2-3</span>
    <br/>
    <NxThreatIndicator policyThreatLevel={4}/>
    <span>Threat Indicator Policy Level 4-7</span>
    <br/>
    <NxThreatIndicator policyThreatLevel={8}/>
    <span>Threat Indicator Policy Level 8-10</span>
  </>;

export default NxThreatIndicatorByPolicyNumberExample;
