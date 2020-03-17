/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalFormErrorExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal with Form and Error Styling</button>
      {showModal &&
        <NxModal id="nx-modal-form-error-example">
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
                  <input type="text"
                         className="nx-text-input"
                         placeholder="Username"/>
                </label>
              </div>
              <div className="nx-form-group">
                <label className="nx-label">
                  Password
                  <input type="password"
                         className="nx-text-input"
                         placeholder="Password"/>
                </label>
              </div>
            </div>
            <footer className="nx-modal-footer nx-error">
              <div id="login-error" className="nx-alert nx-alert--error">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>You really messed something up!</span>
              </div>
              <div className="nx-btn-bar">
                <button type="button" onClick={() => setShowModal(false)} className="nx-btn nx-btn--primary">
                  Primary
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="nx-btn">Default</button>
                <button type="button" onClick={() => setShowModal(false)} className="nx-btn nx-btn--tertiary">
                  Tertiary
                </button>
              </div>
            </footer>
          </form>
        </NxModal>
      }
    </>
  );
};
