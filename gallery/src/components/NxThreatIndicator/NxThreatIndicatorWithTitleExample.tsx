/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatIndicatorWithTitleExample = () =>
  <>
    <NxThreatIndicator threatLevelCategory="critical" />
    <span>Example without title prop</span>
    <br/>
    <NxThreatIndicator threatLevelCategory="critical"
                       title="Extinction Level Threat" />
    <span>Example with custom title</span>
  </>;

export default NxThreatIndicatorWithTitleExample;
