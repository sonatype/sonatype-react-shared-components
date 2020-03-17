/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton } from '@sonatype/react-shared-components';

const NxButtonPrimaryExample = () =>
  <div className="nx-btn-bar">
    <NxButton variant="primary">Primary button</NxButton>
    <NxButton variant="primary" disabled>Primary disabled by class</NxButton>
  </div>;

export default NxButtonPrimaryExample;
