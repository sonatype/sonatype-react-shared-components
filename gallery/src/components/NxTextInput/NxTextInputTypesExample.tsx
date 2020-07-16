/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

export default function NxTextInputSimpleExample() {
  return (
    <div className="nx-form-group">
      <label className="nx-label">
        <NxStatefulTextInput type="number" validator={validator}/>
      </label>
      <label className="nx-label">
        <NxStatefulTextInput type="date" validator={validator}/>
      </label>
      <label className="nx-label">
        <NxStatefulTextInput type="email" validator={validator}/>
      </label>
      <label className="nx-label">
        <NxStatefulTextInput type="range" validator={validator} />
      </label>
    </div>
  );
};
