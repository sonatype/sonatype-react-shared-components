/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxButton, NxStatefulTextInput} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalFormExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal with Form</NxButton>
      {showModal &&
        <NxModal id="nx-modal-form-example" onClose={modalCloseHandler}>
          <form className="nx-form">
            <header className="nx-modal-header">
              <h2 className="nx-h2">
                <NxFontAwesomeIcon icon={faAngry} />
                <span>NxModal header with form content</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <div className="nx-form-group">
                <label className="nx-label">
                  <span className="nx-label__text">Username</span>
                  <NxStatefulTextInput aria-require={true} placeholder="Username"/>
                </label>
              </div>
              <div className="nx-form-group">
                <label className="nx-label">
                  <span className="nx-label__text">Password</span>
                  <NxStatefulTextInput type="password" aria-require={true} placeholder="Password"/>
                </label>
              </div>
            </div>
            <footer className="nx-footer">
              <div className="nx-btn-bar">
                <NxButton type="button" onClick={modalCloseHandler} variant="primary">Primary</NxButton>
                <NxButton type="button" onClick={modalCloseHandler}>Default</NxButton>
                <NxButton type="button" onClick={modalCloseHandler} variant="tertiary">Tertiary</NxButton>
              </div>
            </footer>
          </form>
        </NxModal>
      }
    </>
  );
}
