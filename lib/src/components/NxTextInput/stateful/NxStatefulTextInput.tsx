/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';

import { initialState, userInput } from '../stateHelpers';
import NxTextInput from '../NxTextInput';

import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

/**
 * Standard text input with pristine state tracking and pluggable validation handling
 * @param type What type of text input to render.  Defaults to "text".
 *   Possible values: "textarea" | "text" | "password"
 * @param defaultValue The initial value rendered in the text input
 * @param validator A function that validates user-inputted changes to the text field value. Accepts the new value
     as a string and returns zero or more validation error messages
 * @param onChange A callback for when the user changes the value of the text box (e.g. by typing a letter)
 * @param onKeyPress A callback for when the user presses a key that not necessarily changes the value of the text box
 * See the doc page for this component for information about other supported attributes.
 */
const NxStatefulTextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    function NxStatefulTextInput(props, ref) {
      const { defaultValue, onChange, validator, ...attrs } = props,
          [state, setState] = useState(initialState(defaultValue || '', validator));

      function changeHandler(newValue: string) {
        setState(userInput(validator || null, newValue));

        if (onChange) {
          onChange(newValue);
        }
      }

      return <NxTextInput validatable={!!validator} ref={ref} { ...attrs } { ...state } onChange={changeHandler} />;
    }
);

NxStatefulTextInput.propTypes = propTypes;

export default NxStatefulTextInput;
