/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTextInput, nxTextInputStateHelpers } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

// exactly the same as NxTextInputSimpleExample, except for type="password"
export default function NxTextInputPasswordExample() {
  const [state, setState] = useState(initialState(''));

  function onChange(val: string) {
    setState(userInput(null, val));
  }

  return (
    <NxTextInput type="password" placeholder="Enter password" onChange={onChange} { ...state }/>
  );
}
