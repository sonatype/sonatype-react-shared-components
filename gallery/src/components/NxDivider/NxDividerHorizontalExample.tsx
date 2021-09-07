/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, FormEvent } from 'react';

import {
  NxCheckbox,
  NxForm,
  NxRadio,
  NxFormGroup,
  NxTextInput,
  nxTextInputStateHelpers,
  NxFieldset,
  useToggle,
  NxFormSelect,
  nxFormSelectStateHelpers,
  NxDivider
} from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxDividerHorizontalExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [usernameState, setUsernameState] = useState(initialState('', validator)),
      [hostnameState, setHostnameState] = useState(initialState('')),
      [redChecked, toggleRed] = useToggle(false),
      [blueChecked, toggleBlue] = useToggle(false),
      [greenChecked, toggleGreen] = useToggle(false),
      [radioColor, setRadioColor] = useState<string | null>(null),
      [submitCount, setSubmitCount] = useState(0);

  function onUsernameChange(val: string) {
    setUsernameState(userInput(validator, val));
  }

  function onHostnameChange(val: string) {
    setHostnameState(userInput(validator, val));
  }

  function onSubmit() {
    alert('Form submitted');
    setSubmitCount(submitCount + 1);
  }

  return (
    <NxForm onSubmit={onSubmit}>
      <NxFormGroup label="Username" isRequired>
        <NxTextInput { ...usernameState } onChange={onUsernameChange} validatable/>
      </NxFormGroup>
      <NxFormGroup label="Hostname">
        <NxTextInput { ...hostnameState } onChange={onHostnameChange} className="nx-text-input--long"/>
      </NxFormGroup>
      <NxDivider horizontal />
      <NxFieldset label="Colors" isRequired>
        <NxCheckbox onChange={toggleRed} isChecked={redChecked}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={blueChecked}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={greenChecked}>Green</NxCheckbox>
      </NxFieldset>
      <NxDivider horizontal />
      <NxFieldset label="Primary Color" sublabel="Pick a single color">
        <NxRadio name="color"
                 value="red"
                 onChange={setRadioColor}
                 isChecked={radioColor === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setRadioColor}
                 isChecked={radioColor === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setRadioColor} isChecked={radioColor === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setRadioColor} isChecked={radioColor === 'blue'}>
          Blue
        </NxRadio>
      </NxFieldset>
      <NxDivider horizontal />
      <NxFormGroup label="Select">
        <NxFormSelect { ...selectState } onChange={onSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </NxFormSelect>
      </NxFormGroup>
    </NxForm>
  );
}
