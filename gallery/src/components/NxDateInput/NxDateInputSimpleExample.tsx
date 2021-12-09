/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxDateInput,
  NxDateInputStateProps,
  nxDateInputStateHelpers
} from '@sonatype/react-shared-components';

const { initialState, userInput } = nxDateInputStateHelpers;

export default function NxDateInputSimpleExample() {
  // Note that NxDateInputStateProps is the TypeScript type for the state helper function return types.
  // The explicity type parameter isn't necessary here, it's only present to demonstrate that type.
  const [state, setState] = useState<NxDateInputStateProps>(initialState(''));

  function onChange(val: string) {
    setState(userInput(null, val));
  }

  return (
    <NxDateInput { ...state } onChange={onChange} />
  );
}
