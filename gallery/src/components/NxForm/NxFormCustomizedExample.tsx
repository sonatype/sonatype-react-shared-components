/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxForm, NxFormGroup, NxTextInput, NxButton } from '@sonatype/react-shared-components';
import { SUCCESS_VISIBLE_TIME_MS } from '@sonatype/react-shared-components/components/NxSubmitMask/NxSubmitMask';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

export default function NxFormCustomizedExample() {
  const initialFieldState = { username: initialState(''), hostname: initialState('') },
      [usernameState, setUsernameState] = useState(initialFieldState.username),
      [hostnameState, setHostnameState] = useState(initialFieldState.hostname),
      [submitMaskState, setSubmitMaskState] = useState<boolean | null>(null);

  function onUsernameChange(val: string) {
    setUsernameState(userInput(null, val));
  }

  function onHostnameChange(val: string) {
    setHostnameState(userInput(null, val));
  }

  function resetForm() {
    setUsernameState(initialFieldState.username);
    setHostnameState(initialFieldState.hostname);
  }

  function onSubmit() {
    setSubmitMaskState(false);

    setTimeout(function() {
      setSubmitMaskState(true);

      setTimeout(function() {
        setSubmitMaskState(null);
      }, SUCCESS_VISIBLE_TIME_MS);
    }, 3000);
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
            submitBtnText="Send it"
            submitMaskMessage="Sending…"
            submitMaskSuccessMessage="Sent!"
            submitMaskFullscreen={false}
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
