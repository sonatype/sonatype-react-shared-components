/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFormGroup, nxFormSelectStateHelpers, NxFormSelect } from '@sonatype/react-shared-components';

const NxFormSelectOverflowExample = () => {
  const [selectState, setSelectValue] = nxFormSelectStateHelpers.useNxFormSelectState<number>(1);

  function onChange(val: string) {
    setSelectValue(parseInt(val));
  }

  return (
    <NxFormGroup label="Overflowing Form Select">
      <NxFormSelect {...selectState} onChange={onChange}>
        <option value="1">Looooooooooooooooooong Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
      </NxFormSelect>
    </NxFormGroup>
  );
};

export default NxFormSelectOverflowExample;
