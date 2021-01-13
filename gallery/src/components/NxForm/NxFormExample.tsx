/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useEffect, FormEvent } from 'react';

import { NxCheckbox, NxForm, NxRadio, NxFormGroup, NxTextInput, nxTextInputStateHelpers, NxFieldset }
  from '@sonatype/react-shared-components';
import { SUCCESS_VISIBLE_TIME_MS } from '@sonatype/react-shared-components/components/NxSubmitMask/NxSubmitMask';
import { combineValidationErrors, hasValidationErrors } from '@sonatype/react-shared-components/util/validationUtil';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxFormExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectVal, setSelectVal] = useState('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [usernameState, setUsernameState] = useState(initialState('', validator)),
      [hostnameState, setHostnameState] = useState(initialState('')),
      [redChecked, setRedChecked] = useState(false),
      [blueChecked, setBlueChecked] = useState(false),
      [greenChecked, setGreenChecked] = useState(false),
      [radioColor, setRadioColor] = useState<string | null>(null),
      [loading, setLoading] = useState(true),
      [loadError, setLoadError] = useState<string | null>(null),
      [submitCount, setSubmitCount] = useState(0),
      [submitError, setSubmitError] = useState<string | null>(null),
      [submitMaskState, setSubmitMaskState] = useState<boolean | null>(null),
      toggleRed = () => setRedChecked(!redChecked),
      toggleBlue = () => setBlueChecked(!blueChecked),
      toggleGreen = () => setGreenChecked(!greenChecked),
      radioValidationErrors = (redChecked || blueChecked || greenChecked) ?
        null : 'Please select at least one checkbox',
      requiredFieldValidationErrors = hasValidationErrors(usernameState.validationErrors) ?
        'Missing required fields' : null,
      validationErrors = combineValidationErrors(requiredFieldValidationErrors, radioValidationErrors);

  function onUsernameChange(val: string) {
    setUsernameState(userInput(validator, val));
  }

  function onHostnameChange(val: string) {
    setHostnameState(userInput(validator, val));
  }

  useEffect(function() {
    // For the sake of example, simulate an async load which fails
    setTimeout(function() {
      setLoading(false);
      setLoadError('Error loading the form');
    }, 2500);
  }, []);

  function doLoad() {
    setLoading(true);
    setLoadError(null);

    // For the sake of example, simulate an async load which succeeds
    setTimeout(function() {
      setLoading(false);
      setLoadError(null);
    }, 500);
  }

  function onSubmit() {
    // For the sake of example, simulate that the submit fails the first time, and then upon retry
    // succeeds after 3 seconds
    if (submitCount < 1) {
      setSubmitError('The form could not be saved!');
    }
    else {
      setSubmitError(null);

      setSubmitMaskState(false);

      setTimeout(function() {
        setSubmitMaskState(true);

        setTimeout(function() {
          setSubmitMaskState(null);
        }, SUCCESS_VISIBLE_TIME_MS);
      }, 3000);
    }

    setSubmitCount(submitCount + 1);
  }

  return (
    <NxForm loading={loading}
            doLoad={doLoad}
            onSubmit={onSubmit}
            loadError={loadError}
            submitError={submitError}
            validationErrors={validationErrors}
            submitMaskState={submitMaskState}>
      <NxFormGroup label="Username" isRequired>
        <NxTextInput { ...usernameState } onChange={onUsernameChange} validatable/>
      </NxFormGroup>
      <NxFormGroup label="Hostname">
        <NxTextInput { ...hostnameState } onChange={onHostnameChange} className="nx-text-input--long"/>
      </NxFormGroup>
      <NxFieldset label="Colors">
        <NxCheckbox onChange={toggleRed} isChecked={redChecked}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={blueChecked}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={greenChecked}>Green</NxCheckbox>
      </NxFieldset>
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
      <NxFormGroup label="Select">
        <select className="nx-form-select" value={selectVal} onChange={onSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </select>
      </NxFormGroup>
    </NxForm>
  );
}
