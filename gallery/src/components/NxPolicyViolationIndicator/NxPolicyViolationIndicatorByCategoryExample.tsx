/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxPolicyViolationIndicator } from '@sonatype/react-shared-components';

const NxPolicyViolationIndicatorByNameExample = () =>
  <>
    <NxPolicyViolationIndicator>Unspecified</NxPolicyViolationIndicator>
    <NxPolicyViolationIndicator threatLevelCategory="none">None</NxPolicyViolationIndicator>
    <NxPolicyViolationIndicator threatLevelCategory="low">Not much</NxPolicyViolationIndicator>
    <NxPolicyViolationIndicator threatLevelCategory="moderate">A little bit</NxPolicyViolationIndicator>
    <NxPolicyViolationIndicator threatLevelCategory="severe">A bunch</NxPolicyViolationIndicator>
    <NxPolicyViolationIndicator threatLevelCategory="critical">
      WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
    </NxPolicyViolationIndicator>
  </>;

export default NxPolicyViolationIndicatorByNameExample;
