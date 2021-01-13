/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

const NxFormGroupComplexExample = () =>
  <div className="nx-form-group">
    <label htmlFor="nx-form-group-example-input" className="nx-label nx-label--optional">
      <span className="nx-label__text">Username</span>
    </label>
    <div id="nx-form-group-complex-example-sub-label" className="nx-sub-label">The name of the user</div>
    <NxStatefulTextInput id="nx-form-group-complex-example-input"
                         aria-describedby="nx-form-group-complex-example-sub-label" />
  </div>;

export default NxFormGroupComplexExample;
