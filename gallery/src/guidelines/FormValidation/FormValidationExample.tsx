/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';
import { none } from 'ramda';
import classnames from 'classnames';

import { NxButton, NxCheckbox, NxTextInput, NxTooltip, hasValidationErrors } from '@sonatype/react-shared-components';
import { StateProps, Validator } from '@sonatype/react-shared-components/components/NxTextInput/types';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

type StatePropsSetter = (state: StateProps) => void;

export default function FormValidationExample() {
  const [textInput1State, setTextInput1State] = useState(initialState('')),
      [textInput2State, setTextInput2State] = useState(initialState('')),
      [textInput3State, setTextInput3State] = useState(initialState('')),
      [checkboxValue, setCheckboxState] = useState(false);

  const stateHasValidationErrors = (state: StateProps) => hasValidationErrors(state.validationErrors),
      isValid = none(stateHasValidationErrors, [textInput1State, textInput2State, textInput3State]),
      hasAllRequiredData = !!(textInput1State.trimmedValue && textInput3State.trimmedValue),
      isSubmittable = isValid && hasAllRequiredData;

  const setTextInput = (setter: StatePropsSetter, validator?: Validator) => (value: string) => {
    setter(userInput(validator, value));
  };

  const nonEmptyValidator = (val: string) => val && val.length ? null : 'Must be non-empty';

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (isSubmittable) {
      // in real code this is where the form submission would be implemented
      alert('Form submitted');
    }
    else {
      evt.stopPropagation();
    }
  }

  const submitBtnClasses = classnames({ disabled: !isSubmittable }),
      submitBtn = <NxButton className={submitBtnClasses} variant="primary" type="submit">Submit</NxButton>,
      submitTooltip = isSubmittable ? null : (
        <NxTooltip title={hasAllRequiredData ? 'Validation errors are present' : 'Required fields are missing'}>
          {submitBtn}
        </NxTooltip>
      );

  return (
    <form className="nx-form" onSubmit={onSubmit}>
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Text input 1</span>
          <NxTextInput { ...textInput1State } onChange={setTextInput(setTextInput1State, nonEmptyValidator)}/>
        </label>
      </div>
      <div className="nx-form-group">
        <label className="nx-label nx-label--optional">
          <span className="nx-label__text">Text input 2</span>
          <NxTextInput { ...textInput2State } onChange={setTextInput(setTextInput2State)}/>
        </label>
      </div>
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Text input 3</span>
          <NxTextInput { ...textInput3State } onChange={setTextInput(setTextInput3State, nonEmptyValidator)}/>
        </label>
      </div>

      <fieldset className="nx-fieldset">
        <legend className="nx-label">Check this box?</legend>
        <NxCheckbox isChecked={checkboxValue} onChange={() => setCheckboxState(!checkboxValue)}>Check It</NxCheckbox>
      </fieldset>

      <div className="nx-btn-bar">
        {submitTooltip || submitBtn}
      </div>
    </form>
  );
}
