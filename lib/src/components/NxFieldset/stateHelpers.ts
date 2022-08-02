/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState } from 'react';
import { append, filter, head, map, toPairs, without } from 'ramda';

import { ValidationErrors } from '../../util/validationUtil';
import useToggle from '../../util/useToggle';

export type RadioValidator = (value: string | null) => ValidationErrors;
export type CheckboxValidator = (values: string[]) => ValidationErrors;
export type RadioSetter = (v: string | null) => void;
export type CheckboxState = [boolean, () => void];
export type CheckboxInitValues<K extends string | number> = Record<K, boolean>;
export type CheckboxStates<K extends string | number> = Record<K, CheckboxState>;

export interface RadioStateProps {
  value: string | null;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface CheckboxStateProps {
  values: string[];
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface CheckboxGroupHookReturnValue<K extends string | number> {
  states: CheckboxStates<K>;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

/**
 * Create a RadioStateProps representing the initial state of a group of radio buttons based on the
 * specified initial value, and validated according to the specified validator
 */
export function radioGroupInitialState(value?: string, validator?: RadioValidator): RadioStateProps {
  const normalizedValue = value ?? null;

  return {
    value: normalizedValue,
    isPristine: true,
    validationErrors: validator ? validator(normalizedValue) : null
  };
}

/**
 * Create a RadioStateProps representing a non-initial state of a group of radio buttons based on the
 * specified value, and validated according to the specified validator
 */
export function radioGroupUserInput(
  value: string | null,
  validator?: RadioValidator
): RadioStateProps {
  return {
    value,
    isPristine: false,
    validationErrors: validator ? validator(value) : null
  };
}

/**
 * A react hook to aid in managing the state of a radio group. Encapsulates tracking of pristine state and
 * validation errors
 */
export function useRadioGroupState(
  initialValue?: string,
  validator?: RadioValidator
): [RadioStateProps, RadioSetter] {
  const [state, setState] = useState(radioGroupInitialState(initialValue, validator)),
      setter = (v: string | null) => { setState(radioGroupUserInput(v, validator)); };

  return [state, setter];
}

/**
 * Create a CheckboxStateProps representing the initial state of a group of checkboxes based on the
 * specified initial values, and validated according to the specified validator
 */
export function checkboxGroupInitialState(
  values: string[] = [],
  validator?: CheckboxValidator
): CheckboxStateProps {
  return {
    values,
    isPristine: true,
    validationErrors: validator ? validator(values) : null
  };
}

/**
 * Create a CheckboxStateProps representing a non-initial state of a group of checkboxes based on the
 * specified value, and validated according to the specified validator
 */
export function checkboxGroupUserInput(
  { values }: CheckboxStateProps,
  toggledValue: string,
  validator?: CheckboxValidator
): CheckboxStateProps {
  const newValues = values.includes(toggledValue) ?
    without([toggledValue], values) :
    append(toggledValue, values);

  return {
    values: newValues,
    isPristine: false,
    validationErrors: validator ? validator(newValues) : null
  };
}

// Helper to make TypeScript happy with reducing useToggle's 3-tuple to a 2-tuple
function _useToggle(initialValue: boolean): CheckboxState {
  const [state, toggle] = useToggle(initialValue);
  return [state, toggle];
}

/**
 * A react hook to aid in managing the state of a checkbox group. Takes an object mapping state names (i.e. checkbox
 * names) to the initial values for those checkboxes, along with an optional validator function, and returns
 * an object containing React state values and setters (as if from useState) for each checkbox along with isPristine and
 * validationErrors
 */
export function useCheckboxGroupState<K extends string>(
  initialValues: CheckboxInitValues<K>,
  validator?: CheckboxValidator
): CheckboxGroupHookReturnValue<K> {
  type Pair = [K, CheckboxState];

  function wrapState([state, toggler]: CheckboxState): CheckboxState {
    return [state, () => { setIsPristine(false); toggler(); }];
  }

  const rawStates = map<CheckboxInitValues<K>, CheckboxStates<K>>(_useToggle, initialValues),
      [isPristine, setIsPristine] = useState(true),
      values = map<Pair, K>(head, filter<Pair, Pair[]>(([, [isSet]]) => isSet, toPairs(rawStates)));

  return {
    isPristine,
    validationErrors: validator ? validator(values) : null,
    states: map<CheckboxStates<K>, CheckboxStates<K>>(wrapState, rawStates)
  };
}
