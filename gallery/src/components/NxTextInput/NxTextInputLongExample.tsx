/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTextInput } from '@sonatype/react-shared-components';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

export default function NxTextInputSimpleExample() {
  const [state1, setState1] = useState(initialState('')),
      [state2, setState2] = useState(initialState(''));

  function onChange1(val: string) {
    setState1(userInput(null, val));
  }

  function onChange2(val: string) {
    setState2(userInput(null, val));
  }

  return (
    <>
      <div>
        <NxTextInput className="nx-text-input--long" { ...state1 } onChange={onChange1} />
      </div>
      <div>
        <NxTextInput className="nx-text-input--long" type="textarea" { ...state2 } onChange={onChange2} />
      </div>
    </>
  );
};
