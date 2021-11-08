/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDateInput, nxDateInputStateHelpers } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxDateInputStateHelpers;

// Validates if year is after 2020
function validator(val: string) {
  return parseInt(val.split('-')[0]) > 2020 ? null : 'Year must be after 2020';
}

export default function NxDateInputValidationExample() {
  const [state, setState] = useState(initialState(''));

  function onChange(val: string) {
    setState(userInput(validator, val));
  }

  return (
    <NxDateInput { ...state } onChange={onChange} validatable={true} />
  );
}
