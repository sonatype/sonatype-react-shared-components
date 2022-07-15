/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useEffect, FormEvent, useRef } from 'react';

import {
  NxCheckbox,
  NxRadio,
  NxFormGroup,
  NxTextInput,
  nxTextInputStateHelpers,
  NxFieldset,
  useToggle,
  NxFormSelect,
  nxFormSelectStateHelpers,
  NxForm,
  combineValidationErrors,
  hasValidationErrors,
  ValidationErrors,
  SUBMIT_MASK_SUCCESS_VISIBLE_TIME_MS
} from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxFormExample() {
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
      [isFieldsetPristine, setIsFieldsetPristine] = useState(true),
      [radioColor, setRadioColor] = useState<string | null>(null),
      [loading, setLoading] = useState(true),
      [loadError, setLoadError] = useState<string | null>(null),
      [submitCount, setSubmitCount] = useState(0),
      [submitError, setSubmitError] = useState<string | null>(null),
      [submitMaskState, setSubmitMaskState] = useState<boolean | null>(null),
      [showValidationErrors, setShowValidationErrors] = useState(false),
      previousValidationErrors = useRef<ValidationErrors | undefined>(null),
      checkboxValidationErrors = (redChecked || blueChecked || greenChecked) ?
        null : 'Please select at least one checkbox',
      requiredFieldValidationErrors = hasValidationErrors(usernameState.validationErrors) ?
        'Missing required fields' : null,
      validationErrors = combineValidationErrors(requiredFieldValidationErrors, checkboxValidationErrors);

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

  useEffect(function() {
    if (submitMaskState === null) {
      // reset pristine state after successful submission
      setShowValidationErrors(false);
    }
  }, [submitMaskState]);

  useEffect(function() {
    if (!hasValidationErrors(validationErrors) && hasValidationErrors(previousValidationErrors.current)) {
      setShowValidationErrors(false);
    }

    previousValidationErrors.current = validationErrors;
  }, [validationErrors]);

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
    setShowValidationErrors(true);

    if (!hasValidationErrors(validationErrors)) {
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
          }, SUBMIT_MASK_SUCCESS_VISIBLE_TIME_MS);
        }, 3000);
      }

      setSubmitCount(submitCount + 1);
    }
  }

  const setColor = (setter: () => void) => () => {
    setter();
    setIsFieldsetPristine(false);
  };

  return (
    <NxForm loading={loading}
            doLoad={doLoad}
            onSubmit={onSubmit}
            loadError={loadError}
            submitError={submitError}
            validationErrors={validationErrors}
            showValidationErrors={showValidationErrors}
            submitMaskState={submitMaskState}>
      <NxForm.RequiredFieldNotice />
      <NxFormGroup label="Username" isRequired>
        <NxTextInput { ...usernameState } onChange={onUsernameChange} validatable/>
      </NxFormGroup>
      <NxFormGroup label="Hostname">
        <NxTextInput { ...hostnameState } onChange={onHostnameChange} className="nx-text-input--long"/>
      </NxFormGroup>
      <NxFieldset label="Colors"
                  isRequired
                  isPristine={isFieldsetPristine}
                  validationErrors={checkboxValidationErrors}>
        <NxCheckbox onChange={setColor(toggleRed)} isChecked={redChecked}>Red</NxCheckbox>
        <NxCheckbox onChange={setColor(toggleBlue)} isChecked={blueChecked}>Blue</NxCheckbox>
        <NxCheckbox onChange={setColor(toggleGreen)} isChecked={greenChecked}>Green</NxCheckbox>
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
