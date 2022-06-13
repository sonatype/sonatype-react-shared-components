/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import {
  NxCheckbox,
  NxFormGroup,
  NxFieldset,
  useToggle,
  NxFormSelect,
  nxFormSelectStateHelpers,
  nxTextInputStateHelpers,
  NxTextInput,
  hasValidationErrors,
  combineValidationErrors,
  NxStatefulForm,
  NxFormRow,
  NxRadio,
  NxStatefulTextInput
} from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [textInputState, setTextInputState] = useState(nxTextInputStateHelpers.initialState('', validator));

  function onTextInputChange(val: string) {
    setTextInputState(nxTextInputStateHelpers.userInput(validator, val));
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>(''),
      selectValidationErrors = selectState === null ? 'A selection is required' : null;

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false),
      colorCheckboxValidationErrors = !(isRed || isBlue || isGreen) ? 'A color is required' : null;

  const [color, setColor] = useState<string | null>(null),
      colorRadioValidationErrors = color === null ? 'A color is required' : null;

  const formValidationErrors =
      hasValidationErrors(combineValidationErrors(
          textInputState.validationErrors,
          selectValidationErrors,
          colorCheckboxValidationErrors,
          colorRadioValidationErrors
      )) ? 'Required fields are missing' : null;

  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <NxStatefulForm onSubmit={onSubmit} validationErrors={formValidationErrors} aria-label="Horizontal Layout Example">
      <NxFormRow>
        <NxFormGroup label="Username" isRequired>
          <NxTextInput { ...textInputState } validatable onChange={onTextInputChange} />
        </NxFormGroup>
        <NxFormGroup label="Hostname">
          <NxStatefulTextInput/>
        </NxFormGroup>
      </NxFormRow>
      <NxFormRow>
        <NxFormGroup label="Label">
          <NxStatefulTextInput/>
        </NxFormGroup>
        <NxFormGroup label="Label" isRequired>
          <NxFormSelect { ...selectState } onChange={onSelectChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </NxFormSelect>
        </NxFormGroup>
      </NxFormRow>
      <NxFieldset label="Colors" isRequired validationErrors={colorCheckboxValidationErrors}>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Primary Color" isRequired validationErrors={colorRadioValidationErrors}>
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'}>
          Blue
        </NxRadio>
      </NxFieldset>
    </NxStatefulForm>
  );
}
