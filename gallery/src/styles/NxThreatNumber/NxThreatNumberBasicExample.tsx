/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatNumberBasicExample = () =>
  <>
    <NxThreatIndicator threatLevelCategory="severe" />
    <span className="nx-threat-number">7</span>
  </>;

export default NxThreatNumberBasicExample;
