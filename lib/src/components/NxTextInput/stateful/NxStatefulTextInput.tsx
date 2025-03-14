/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, useState } from 'react';

import { initialState, userInput } from '../stateHelpers';
import { PrivateNxTextInput } from '../NxTextInput';

import { Props, PublicProps, propTypes } from './types';
export { Props, PublicProps, propTypes } from './types';

export function PrivateNxStatefulTextInput(props: Props) {
  const { defaultValue, onChange, validator, ...attrs } = props,
      [state, setState] = useState(initialState(defaultValue || '', validator));

  function changeHandler(newValue: string) {
    setState(userInput(validator || null, newValue));

    if (onChange) {
      onChange(newValue);
    }
  }

  return <PrivateNxTextInput validatable={!!validator}
                             { ...attrs }
                             { ...state }
                             onChange={changeHandler} />;
}

const NxStatefulTextInput: FunctionComponent<PublicProps> = PrivateNxStatefulTextInput;
export default NxStatefulTextInput;

NxStatefulTextInput.propTypes = propTypes;
