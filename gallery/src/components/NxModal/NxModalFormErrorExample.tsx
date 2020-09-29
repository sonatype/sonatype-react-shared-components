/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxTextInput, NxLoadError, NxButton} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

export default function NxModalFormErrorExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);
  const [textFieldState, setTextFieldState] = useState(initialState(''));
  const [error] = useState<string | null>('');
  function retryHandler() {
    // lets say the retried action succeeded this time
    setShowModal(false);
  }
  function onChange(val: string) {
    setTextFieldState(userInput(null, val));
  }

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal with Form and Error Styling</NxButton>
      {showModal &&
        <NxModal id="nx-modal-form-error-example" onClose={modalCloseHandler}>
          <form className="nx-form">
            <header className="nx-modal-header">
              <h2 className="nx-h2">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>Example NxModal header with form content and error styling</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <div className="nx-form-group">
                <label className="nx-label">
                  <span className="nx-label__text">Username</span>
                  <NxTextInput { ...textFieldState } onChange={onChange} />
                </label>
              </div>
              <div className="nx-form-group">
                <label className="nx-label">
                  <span className="nx-label__text">Password</span>
                  <NxTextInput type="password" placeholder="Enter password" onChange={onChange} { ...textFieldState }/>
                </label>
              </div>
            </div>
            <footer className="nx-footer">
              <NxLoadError { ...({ error, retryHandler }) } onClick={modalCloseHandler} />
              <div className="nx-btn-bar">
                <NxButton type="button" onClick={modalCloseHandler}>Cancel</NxButton>
              </div>
            </footer>
          </form>
        </NxModal>
      }
    </>
  );
};
