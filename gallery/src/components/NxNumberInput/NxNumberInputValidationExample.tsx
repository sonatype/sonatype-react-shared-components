/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxNumberInput, nxTextInputStateHelpers } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

function validator(val: string) {
  return val.length ? null : 'Must be non-empty';
}

export default function NxNumberInputValidationExample() {
  const [state, setState] = useState(initialState(''));

  function onChange(val: string) {
    setState(userInput(validator, val));
  }

  return (
    <NxNumberInput { ...state } onChange={onChange} validatable={true} />
  );
}
