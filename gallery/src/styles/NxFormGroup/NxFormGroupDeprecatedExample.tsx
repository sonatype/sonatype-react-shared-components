/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

const NxFormGroupDeprecatedExample = () =>
  <div className="nx-form-group">
    <label className="nx-label nx-label--optional">
      <span className="nx-label__text">Username</span>
      <div className="nx-sub-label">The name of the user</div>
      <NxStatefulTextInput />
    </label>
  </div>;

export default NxFormGroupDeprecatedExample;
