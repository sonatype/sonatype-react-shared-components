/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ChangeEvent } from 'react';

import { NxFormGroup } from '@sonatype/react-shared-components';

export default function NxFormGroupSublabelExample() {
  const [val, setVal] = useState('');

  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    setVal(e.target.value);
  }

  return (
    <NxFormGroup label="Country" sublabel="Pick your favorite from the list">
      <select className="nx-form-select" value={val} onChange={onChange}>
        <option value="">Pick a Country</option>
        <option value="USA">USA</option>
        <option value="GER">Canada</option>
        <option value="CAN">Germany</option>
        <option value="COL">Colombia</option>
      </select>
    </NxFormGroup>
  );
}
