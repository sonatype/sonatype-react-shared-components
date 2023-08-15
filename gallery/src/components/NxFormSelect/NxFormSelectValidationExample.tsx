/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFormSelect, nxFormSelectStateHelpers, NxFormGroup } from '@sonatype/react-shared-components';

function validator(c: string) {
  return c.length ? null : 'Selection Required';
}

const NxFormSelectValidationExample = () => {
  const [selectState, setSelectValue] = nxFormSelectStateHelpers.useNxFormSelectState<string>('', validator);

  function onChange(val: string) {
    setSelectValue(val);
  }

  return (
    <NxFormGroup label={`Selected Continent: ${selectState.value}`} isRequired>
      <NxFormSelect onChange={onChange} validatable { ...selectState }>
        <option value="">-- Select a Continent --</option>
        <option value="NA">North America</option>
        <option value="SA">South America</option>
        <option value="AF">Africa</option>
        <option value="EU">Europe</option>
        <option value="AS">Asia</option>
        <option value="AU">Australia</option>
        <option value="AN">Antarctica</option>
      </NxFormSelect>
    </NxFormGroup>
  );
};

export default NxFormSelectValidationExample;
