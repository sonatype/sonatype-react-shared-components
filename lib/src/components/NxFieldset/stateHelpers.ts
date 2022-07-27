/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState } from 'react';
import { append, filter, head, map, toPairs, without } from 'ramda';

import { ValidationErrors } from '../../util/validationUtil';

type RadioValidator = (value: string | null) => ValidationErrors;
type CheckboxValidator = (values: string[]) => ValidationErrors;
type RadioSetter = (v: string | null) => void;
type CheckboxState = [boolean, () => void, ...unknown[]];
type CheckboxStates<K extends string | number> = Record<K, CheckboxState>;

interface RadioStateProps {
  value: string | null;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

interface CheckboxStateProps {
  values: string[];
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export function radioGroupInitialState(value?: string, validator?: RadioValidator): RadioStateProps {
  const normalizedValue = value ?? null;

  return {
    value: normalizedValue,
    isPristine: true,
    validationErrors: validator ? validator(normalizedValue) : null
  };
}

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

export function useRadioGroupState(
  initialValue?: string,
  validator?: RadioValidator
): [RadioStateProps, RadioSetter] {
  const [state, setState] = useState(radioGroupInitialState(initialValue, validator)),
      setter = (v: string | null) => { setState(radioGroupUserInput(v, validator)); };

  return [state, setter];
}

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

export function useCheckboxGroupState<K extends string>(
  rawStates: CheckboxStates<K>,
  validator?: CheckboxValidator
) {
  type Pair = [K, CheckboxState];

  function wrapState([state, toggler]: CheckboxState): CheckboxState {
    return [state, () => { setIsPristine(false); toggler(); }];
  }

  const [isPristine, setIsPristine] = useState(true),
      values = map<Pair, K>(head, filter<Pair, Pair[]>(([, [isSet]]) => isSet, toPairs(rawStates)));

  return {
    isPristine,
    validationErrors: validator ? validator(values) : null,
    states: map<CheckboxStates<K>, CheckboxStates<K>>(wrapState, rawStates)
  };
}
