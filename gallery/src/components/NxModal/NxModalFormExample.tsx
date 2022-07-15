/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxModal,
  NxFontAwesomeIcon,
  NxButton,
  NxTextInput,
  NxFormGroup,
  nxTextInputStateHelpers,
  NxFieldset,
  NxCheckbox,
  useToggle,
  NxStatefulForm,
  NxForm
} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalFormExample() {
  const [showModal, setShowModal] = useState(false),
      [loading, setLoading] = useState(true),
      [usernameState, setUsernameState] = useState(nxTextInputStateHelpers.initialState('')),
      [passwordState, setPasswordState] = useState(nxTextInputStateHelpers.initialState('')),
      [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false),
      modalCloseHandler = () => setShowModal(false),
      validationErrors = usernameState.trimmedValue === '' || passwordState.trimmedValue === '' ?
        'Missing required field' : null;

  function openModal() {
    setShowModal(true);

    setTimeout(function() {
      setLoading(false);
    }, 4000);
  }

  function onUsernameChange(val: string) {
    setUsernameState(nxTextInputStateHelpers.userInput(null, val));
  }

  function onPasswordChange(val: string) {
    setPasswordState(nxTextInputStateHelpers.userInput(null, val));
  }

  return (
    <>
      <NxButton onClick={openModal}>Open Modal with Form</NxButton>
      {showModal &&
        <NxModal id="nx-modal-form-example" onCancel={modalCloseHandler} aria-labelledby="modal-form-header">
          <NxStatefulForm onSubmit={modalCloseHandler}
                          onCancel={modalCloseHandler}
                          validationErrors={validationErrors}
                          additionalFooterBtns={
                            <NxButton type="button" onClick={modalCloseHandler} variant="tertiary">
                              Tertiary
                            </NxButton>
                          }
                          doLoad={() => {}}
                          loading={loading}>
            <header className="nx-modal-header">
              <h2 className="nx-h2" id="modal-form-header">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>NxModal header with form content</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <NxForm.RequiredFieldNotice />
              <NxFormGroup label="Username" isRequired>
                <NxTextInput aria-required={true}
                             placeholder="Username"
                             onChange={onUsernameChange}
                             { ...usernameState } />
              </NxFormGroup>
              <NxFormGroup label="Password" isRequired>
                <NxTextInput type="password"
                             aria-required={true}
                             placeholder="Password"
                             onChange={onPasswordChange}
                             { ...passwordState } />
              </NxFormGroup>
              <NxFieldset label="Colors" isRequired>
                <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
                <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
                <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
              </NxFieldset>
            </div>
          </NxStatefulForm>
        </NxModal>
      }
    </>
  );
}
