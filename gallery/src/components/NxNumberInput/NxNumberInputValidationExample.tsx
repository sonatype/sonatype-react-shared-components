/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxNumberInput, nxTextInputStateHelpers } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

const regex = /^\d+$/;

const nonEmptyValidator = (val: string) => val && val.length ? null : 'Must be non-empty',
    numberValidator = (val: string) => val && val.match(regex) ? null : 'You can only use numbers in this field',
    combinedValidator = (val: string) => nonEmptyValidator(val) || numberValidator(val);

export default function NxNumberInputValidationExample() {
  const [state, setState] = useState(initialState(''));

  function onChange(val: string) {
    setState(userInput(combinedValidator, val));
    // eslint-disable-next-line no-console
    console.log(val);
  }

  return (
    <NxNumberInput { ...state } onChange={onChange} validatable={true} />
  );
}
