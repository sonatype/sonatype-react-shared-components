/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFormGroup, NxFormSelect } from '@sonatype/react-shared-components';

const NxFormSelectDisabledExample = () =>
  <NxFormGroup label="Disabled Select">
    <NxFormSelect disabled>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </NxFormSelect>
  </NxFormGroup>;

export default NxFormSelectDisabledExample;
