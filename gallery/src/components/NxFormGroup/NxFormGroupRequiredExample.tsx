/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxFormGroup, NxStatefulTextInput, NxForm, NxH4 } from '@sonatype/react-shared-components';

export default function NxFormGroupRequiredExample() {
  const requiredValidator = (val: string) => val ? null : 'Must be non-empty';

  return (
    <>
      <NxH4>
        <NxForm.RequiredFieldNotice />
      </NxH4>
      <NxFormGroup label="Username" isRequired>
        <NxStatefulTextInput validator={requiredValidator} />
      </NxFormGroup>
    </>
  );
}
