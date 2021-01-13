/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

const NxFormGroupExample = () =>
  <div className="nx-form-group">
    <label htmlFor="nx-form-group-example-input" className="nx-label">
      <span className="nx-label__text">Username</span>
    </label>
    <NxStatefulTextInput id="nx-form-group-example-input" />
  </div>;

export default NxFormGroupExample;
