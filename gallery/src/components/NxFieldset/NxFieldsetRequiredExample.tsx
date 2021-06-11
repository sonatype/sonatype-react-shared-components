/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxFieldset, NxRadio } from '@sonatype/react-shared-components';

export default function NxFieldsetRequiredExample() {
  const [val, setVal] = useState<string | null>(null);

  return (
    <NxFieldset label="Color" isRequired>
      <NxRadio value="red" isChecked={val === 'red'} name="color" onChange={setVal}>Red</NxRadio>
      <NxRadio value="green" isChecked={val === 'green'} name="color" onChange={setVal}>Green</NxRadio>
      <NxRadio value="blue" isChecked={val === 'blue'} name="color" onChange={setVal}>Blue</NxRadio>
      <NxRadio value="purple" isChecked={val === 'purple'} name="color" onChange={setVal}>Purple</NxRadio>
    </NxFieldset>
  );
}
