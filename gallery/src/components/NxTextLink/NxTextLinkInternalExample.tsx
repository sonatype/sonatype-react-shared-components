/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

export default () =>
  <>
    <NxP>
      <NxTextLink href="#/pages/nx-tile">nx-tile documentation page</NxTextLink>
    </NxP>
    <NxP>
      Learn more about{' '}
      <NxCode>
        <NxTextLink href="#/pages/nx-tile">NxTree</NxTextLink>
      </NxCode>
    </NxP>
  </>;
