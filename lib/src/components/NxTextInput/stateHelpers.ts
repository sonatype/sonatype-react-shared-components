/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { StateProps, Validator } from './types';
import { curryN, trim } from 'ramda';

/**
 * @return an initialized state with the specified value and isPristine set to true.
 */
export function initialState(value: string, validator?: Validator): StateProps {
  const trimmedValue = trim(value);
  return {
    isPristine: true,
    value,
    trimmedValue: trimmedValue,
    validationErrors: validator ? validator(trimmedValue) : null
  };
}

/**
 * Meant to be used to handle user changes to the text input value.
 *
 * This function is curried, so that it can be partially applied over the validator.
 *
 * Note that the cast of this function is necessary because the current version of the ramda types wrongfully drops
 * the `null` from the Validator union type.
 *
 * @param validator an optional validator function that receives the new input value as a string and returns zero or
 * more validation error messages.
 * @param newValue the new value of the text box after the user's input.
 * @return a state object that is not pristine, with the specified value, and with validationErrorsas computed by the
 * validator function.
 */
export const userInput = curryN(2, function userInput(validator: Validator | undefined, newValue: string): StateProps {
  const trimmedValue = trim(newValue);

  return {
    isPristine: false,
    value: newValue,
    trimmedValue,
    validationErrors: validator && validator(trimmedValue)
  };

// This cast is necessary due to this bug in the ramda typings:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/50488
}) as ((v: Validator | undefined, n: string) => StateProps) & ((v: Validator) => (n: string) => StateProps);
