/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton, NxButtonBar } from '@sonatype/react-shared-components';

const NxButtonTertiaryExample = () =>
  <NxButtonBar>
    <NxButton variant="tertiary">Tertiary button</NxButton>
    <NxButton variant="tertiary" disabled>Tertiary disabled by attribute</NxButton>
  </NxButtonBar>;

export default NxButtonTertiaryExample;
