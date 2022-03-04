/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDateInput, NxFormGroup } from '@sonatype/react-shared-components';

export default function NxDateInputDisabledExample() {
  return (
    <>
      <NxFormGroup label="Disabled Input">
        <NxDateInput value="" isPristine={true} disabled/>
      </NxFormGroup>
      <NxFormGroup label="Disabled Valid Input">
        <NxDateInput value="" isPristine={false} validatable={true} validationErrors={null} disabled/>
      </NxFormGroup>
      <NxFormGroup label="Disabled Invalid Input">
        <NxDateInput value="" isPristine={false} validatable={true} validationErrors={'error'} disabled/>
      </NxFormGroup>
    </>
  );
}
