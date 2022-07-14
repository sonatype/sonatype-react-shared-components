/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxModal,
  NxFontAwesomeIcon,
  NxTextInput,
  NxButton,
  nxTextInputStateHelpers,
  NxFormGroup,
  NxStatefulForm,
  NxForm
} from '@sonatype/react-shared-components';
import { faAngry } from '@fortawesome/free-solid-svg-icons';

const { initialState, userInput } = nxTextInputStateHelpers;

export default function NxModalFormErrorExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);
  const [textFieldState, setTextFieldState] = useState(initialState(''));
  const [error] = useState<string | null>('Avian carrier lost');

  function onChange(val: string) {
    setTextFieldState(userInput(null, val));
  }

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal with Form and Error Styling</NxButton>
      {showModal &&
        <NxModal id="nx-modal-form-error-example"
                 onCancel={modalCloseHandler}
                 aria-labelledby="modal-form-error-header">
          <NxStatefulForm onSubmit={modalCloseHandler}
                          onCancel={modalCloseHandler}
                          submitError={error}>
            <header className="nx-modal-header">
              <h2 className="nx-h2" id="modal-form-error-header">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>Example NxModal header with form content and error styling</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <NxForm.RequiredFieldNotice />
              <NxFormGroup label="Username" isRequired>
                <NxTextInput { ...textFieldState } onChange={onChange} aria-required={true} />
              </NxFormGroup>
              <NxFormGroup label="Password" isRequired>
                <NxTextInput type="password"
                             aria-required={true}
                             placeholder="Enter password"
                             onChange={onChange}
                             { ...textFieldState }/>
              </NxFormGroup>
            </div>
          </NxStatefulForm>
        </NxModal>
      }
    </>
  );
}
