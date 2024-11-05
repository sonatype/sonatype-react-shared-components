/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFormSelect, nxFormSelectStateHelpers, NxFormGroup } from '@sonatype/react-shared-components';

const NxFormSelectExample = () => {
  const [selectState, setSelectValue] = nxFormSelectStateHelpers.useNxFormSelectState<number>(1);
  const [selectState2, setSelectValue2] = nxFormSelectStateHelpers.useNxFormSelectState<number>(1);

  function onChange(val: string) {
    setSelectValue(parseInt(val));
  }

  function onChange2(val: string) {
    setSelectValue2(parseInt(val));
  }

  return (
    <div className="form-select-width-variants">
      <NxFormGroup label={`Selected Option: ${selectState.value}`}>
        <NxFormSelect onChange={onChange} { ...selectState } className="nx-form-select--short">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>

      <NxFormGroup label={`Selected Option: ${selectState2.value}`}>
        <NxFormSelect onChange={onChange2} { ...selectState2 } className="nx-form-select--long">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>
    </div>
  );
};

export default NxFormSelectExample;
