/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxPolicyViolationIndicator } from '@sonatype/react-shared-components';

const NxPageTitlePolicyViolationIndicatorExample = () =>
  <div className="nx-page-title">
    <h1 className="nx-h1">
      Page Title
    </h1>
    <div className="nx-page-title__tags">
      <NxPolicyViolationIndicator threatLevelCategory="moderate"/>
    </div>
  </div>;

export default NxPageTitlePolicyViolationIndicatorExample;
