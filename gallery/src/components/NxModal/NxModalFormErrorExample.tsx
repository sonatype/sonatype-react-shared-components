/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxTextInput, NxLoadError} from '@sonatype/react-shared-components';
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
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal with Form and Error Styling</button>
      {showModal &&
        <NxModal id="nx-modal-form-error-example" onClose={modalCloseHandler}>
          <form className="nx-form nx-form--simple">
            <header className="nx-modal-header">
              <h2 className="nx-h2">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>Example NxModal header with form content and error styling</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <div className="nx-form-group">
                <label className="nx-label">
                  Username
                  <NxTextInput { ...textFieldState } onChange={onChange} />
                </label>
              </div>
              <div className="nx-form-group">
                <label className="nx-label">
                  Password
                  <NxTextInput type="password" placeholder="Enter password" onChange={onChange} { ...textFieldState }/>
                </label>
              </div>
            </div>
            <footer className="nx-modal-footer">
              <NxLoadError { ...({ error, retryHandler }) } onClick={modalCloseHandler} />
              <div className="nx-btn-bar">
                <button type="button" onClick={modalCloseHandler} className="nx-btn">
                  Cancel
                </button>
              </div>
            </footer>
          </form>
        </NxModal>
      }
    </>
  );
};
