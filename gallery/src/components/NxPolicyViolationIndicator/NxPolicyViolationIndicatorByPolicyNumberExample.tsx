/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxPolicyViolationIndicator } from '@sonatype/react-shared-components';

const NxPolicyViolationIndicatorByPolicyNumberExample = () =>
  <>
    <NxPolicyViolationIndicator policyThreatLevel={0}/>
    <NxPolicyViolationIndicator policyThreatLevel={1}/>
    <NxPolicyViolationIndicator policyThreatLevel={2}/>
    <NxPolicyViolationIndicator policyThreatLevel={4}/>
    <NxPolicyViolationIndicator policyThreatLevel={8}/>
  </>;

export default NxPolicyViolationIndicatorByPolicyNumberExample;
