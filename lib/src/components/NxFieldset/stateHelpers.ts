/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState } from 'react';
import { append, filter, head, map, toPairs, without } from 'ramda';

import useToggle from '../../util/useToggle';
import {
  RadioValidator,
  CheckboxValidator,
  TransferListValidator,
  RadioSetter,
  CheckboxState,
  CheckboxInitValues,
  CheckboxStates,
  RadioStateProps,
  CheckboxStateProps,
  TransferListStateProps,
  CheckboxGroupHookReturnValue,
  TransferListHookReturnValue
} from './types';

export {
  RadioValidator,
  CheckboxValidator,
  TransferListValidator,
  RadioSetter,
  CheckboxState,
  CheckboxInitValues,
  CheckboxStates,
  RadioStateProps,
  CheckboxStateProps,
  TransferListStateProps,
  CheckboxGroupHookReturnValue,
  TransferListHookReturnValue
};

/**
 * Create a RadioStateProps representing the initial state of a group of radio buttons based on the
 * specified initial value, and validated according to the specified validator
 */
export function radioGroupInitialState<T extends string = string>(
  value?: T,
  validator?: RadioValidator
): RadioStateProps<T> {
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
export function radioGroupUserInput<T extends string = string>(
  value: T | null,
  validator?: RadioValidator
): RadioStateProps<T> {
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
export function useRadioGroupState<T extends string = string>(
  initialValue?: T,
  validator?: RadioValidator
): [RadioStateProps<T>, RadioSetter<T>] {
  const [state, setState] = useState(radioGroupInitialState(initialValue, validator)),
      setter = (v: T | null) => { setState(radioGroupUserInput(v, validator)); };

  return [state, setter];
}

/**
 * Create a CheckboxStateProps representing the initial state of a group of checkboxes based on the
 * specified initial values, and validated according to the specified validator
 */
export function checkboxGroupInitialState<T extends string = string>(
  values: T[] = [],
  validator?: CheckboxValidator
): CheckboxStateProps<T> {
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
export function checkboxGroupUserInput<T extends string = string>(
  { values }: CheckboxStateProps<T>,
  toggledValue: T,
  validator?: CheckboxValidator
): CheckboxStateProps<T> {
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

  const rawStates = map(_useToggle, initialValues),
      [isPristine, setIsPristine] = useState(true),
      values = map<Pair, K>(head, filter<Pair, Pair[]>(([, [isSet]]) => isSet, toPairs(rawStates)));

  return {
    isPristine,
    validationErrors: validator ? validator(values) : null,
    states: map(wrapState, rawStates)
  };
}

/**
 * Create a TransferListStateProps representing the initial state, selectedItem value,
 * and validated according to the specified validator
 */
export function transferListInitialState<K>(
  selectedItems: K,
  validator?: TransferListValidator<K>
): TransferListStateProps<K> {
  return {
    selectedItems,
    isPristine: true,
    validationErrors: validator ? validator(selectedItems) : null
  };
}

/**
 * Create a TransferListStateProps representing a non-initial selectedItems value
 * and validated according to the specified validator
 */
export function transferListUserInput<K>(
  newSelectedItems: K,
  validator?: TransferListValidator<K>
): TransferListStateProps<K> {
  return {
    selectedItems: newSelectedItems,
    isPristine: false,
    validationErrors: validator ? validator(newSelectedItems) : null
  };
}

export function useTransferListState<K>(
  initialValue: K,
  validator?: TransferListValidator<K>
): TransferListHookReturnValue<K> {
  const [isPristine, setIsPristine] = useState(true);
  const [selectedItems, _setSelectedItems] = useState(initialValue);

  const setSelectedItems = (value: K) => {
    setIsPristine(false);
    _setSelectedItems(value);
  };

  return {
    isPristine,
    validationErrors: validator ? validator(selectedItems) : null,
    state: [selectedItems, setSelectedItems]
  };
}
