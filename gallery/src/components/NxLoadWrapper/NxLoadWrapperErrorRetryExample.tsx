/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxLoadWrapper } from '@sonatype/react-shared-components';

const error = 'Server Error',
    retryHandler = () => {};

const NxLoadWrapperErrorExample = () =>
  <NxLoadWrapper error={error} retryHandler={retryHandler}>
    <div>Children will not render</div>
  </NxLoadWrapper>;

export default NxLoadWrapperErrorExample;
