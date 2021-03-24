/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTextInput, NxTextInputStateProps, nxTextInputStateHelpers } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxTextInputSimpleExample() {
  // Note that NxTextInputStateProps is the TypeScript type for the state helper function return types.
  // The explicity type parameter isn't necessary here, it's only present to demonstrate that type.
  const [state, setState] = useState<NxTextInputStateProps>(initialState(''));

  function onChange(val: string) {
    setState(userInput(null, val));
  }

  function onKeyPress(key: string) {
    console.log('Pressed key:', key); // eslint-disable-line
  }

  return (
    <NxTextInput { ...state } onChange={onChange} onKeyPress={onKeyPress} />
  );
}
