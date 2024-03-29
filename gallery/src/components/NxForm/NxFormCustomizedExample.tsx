/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useEffect } from 'react';

import { NxFormGroup, NxTextInput, NxButton, nxTextInputStateHelpers, NxForm } from '@sonatype/react-shared-components';
import { SUBMIT_MASK_SUCCESS_VISIBLE_TIME_MS } from '@sonatype/react-shared-components';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxFormCustomizedExample() {
  const initialFieldState = { username: initialState(''), hostname: initialState('') },
      [usernameState, setUsernameState] = useState(initialFieldState.username),
      [hostnameState, setHostnameState] = useState(initialFieldState.hostname),
      [submitMaskState, setSubmitMaskState] = useState<boolean | null>(null),
      [submitCount, setSubmitCount] = useState(0),
      [submitError, setSubmitError] = useState<string | null>(null),
      [showValidationErrors, setShowValidationErrors] = useState(false);

  useEffect(function() {
    if (submitMaskState === null) {
      // reset pristine state after successful submission
      setShowValidationErrors(false);
    }
  }, [submitMaskState]);

  function onUsernameChange(val: string) {
    setUsernameState(userInput(null, val));
  }

  function onHostnameChange(val: string) {
    setHostnameState(userInput(null, val));
  }

  function resetForm() {
    setUsernameState(initialFieldState.username);
    setHostnameState(initialFieldState.hostname);
    setShowValidationErrors(false);
  }

  function onSubmit() {
    setShowValidationErrors(true);

    // For the sake of example, simulate that the submit fails the first time, and then upon retry
    // succeeds after 3 seconds
    if (submitCount < 1) {
      setSubmitError('Avian carrier died.');
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

  const additionalFooterBtns = (
    <>
      <NxButton variant="tertiary" type="button" onClick={() => alert('Clicked a button')}>Click Me</NxButton>
      <NxButton variant="tertiary" type="button" onClick={() => alert('Clicked another button')}>Click Me Too</NxButton>
    </>
  );

  return (
    <NxForm onSubmit={onSubmit}
            onCancel={resetForm}
            submitMaskState={submitMaskState}
            className="gallery-custom-form"
            submitBtnClasses="gallery-custom-form__submit"
            submitError={submitError}
            submitErrorTitleMessage="There was an error sending the message."
            submitBtnText="Send it"
            submitMaskMessage="Sending…"
            submitMaskSuccessMessage="Sent!"
            showValidationErrors={showValidationErrors}
            additionalFooterBtns={additionalFooterBtns}>
      <NxFormGroup label="Username">
        <NxTextInput { ...usernameState } onChange={onUsernameChange} />
      </NxFormGroup>
      <NxFormGroup label="Hostname">
        <NxTextInput { ...hostnameState } onChange={onHostnameChange} className="nx-text-input--long"/>
      </NxFormGroup>
    </NxForm>
  );
}
