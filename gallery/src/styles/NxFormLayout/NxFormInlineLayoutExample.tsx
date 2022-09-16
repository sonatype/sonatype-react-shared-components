/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import {
  NxFontAwesomeIcon,
  NxButton,
  NxButtonBar,
  NxFormGroup,
  NxFormRow,
  nxTextInputStateHelpers,
  NxForm,
  NxStatefulForm,
  NxTextInput,
  hasValidationErrors
} from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [usernameState, setUsernameState] = useState(nxTextInputStateHelpers.initialState('', validator)),
      [hostnameState, setHostnameState] = useState(nxTextInputStateHelpers.initialState('', validator)),
      formValidationErrors = hasValidationErrors(
          usernameState.validationErrors,
          hostnameState.validationErrors
      ) ? 'Required fields are missing' : null;

  function onUsernameChange(val: string) {
    setUsernameState(nxTextInputStateHelpers.userInput(validator, val));
  }

  function onHostnameChange(val: string) {
    setHostnameState(nxTextInputStateHelpers.userInput(validator, val));
  }

  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <NxStatefulForm onSubmit={onSubmit} validationErrors={formValidationErrors} aria-label="Inline Form Example">
      <NxForm.RequiredFieldNotice />
      <NxFormRow>
        <NxFormGroup label="Username" isRequired>
          <NxTextInput { ...usernameState } validatable onChange={onUsernameChange} />
        </NxFormGroup>
        <NxButtonBar>
          <NxButton variant="tertiary" type="button">Query</NxButton>
        </NxButtonBar>
      </NxFormRow>
      <NxFormRow>
        <NxFormGroup label="Hostname" sublabel="Add a hostname" isRequired>
          <NxTextInput { ...hostnameState } validatable onChange={onHostnameChange} />
        </NxFormGroup>
        <NxButtonBar>
          <NxButton type="button" title="Add" variant="icon-only"><NxFontAwesomeIcon icon={faPlus}/></NxButton>
          <NxButton type="button" title="Subtract" variant="icon-only"><NxFontAwesomeIcon icon={faMinus}/></NxButton>
        </NxButtonBar>
      </NxFormRow>
    </NxStatefulForm>
  );
}
