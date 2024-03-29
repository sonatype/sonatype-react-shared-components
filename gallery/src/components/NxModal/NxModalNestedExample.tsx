/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {NxModal, NxButton, useToggle} from '@sonatype/react-shared-components';

export default function NxModalInsideModalExample() {
  const [showModal, toggleModal] = useToggle(false);
  const [showNestedModal, toggleNestedModal] = useToggle(false);

  const [showButton, toggleButton] = useToggle(true);
  const [showButton2, toggleButton2] = useToggle(true);

  const buttonStyle = showButton ? {} : { display: 'none' };
  const buttonStyle2 = showButton2 ? {} : { display: 'none' };

  return (
    <>
      <NxButton onClick={() => toggleModal()}>Open Modal</NxButton>
      { showModal &&
        <NxModal variant="narrow"
                 onCancel={toggleModal}
                 aria-labelledby="modal-header">
          { showNestedModal &&
            <NxModal variant="narrow"
                     onCancel={toggleNestedModal}
                     aria-labelledby="nested-modal-header">
              <header className="nx-modal-header">
                <h2 className="nx-h2" id="nested-modal-header">Nested Modal</h2>
              </header>
              <div className="nx-modal-content">
                <p className="nx-p">This is a nested modal</p>
              </div>
              <footer className="nx-footer">
                <div className="nx-btn-bar">
                  <NxButton id="hide-button-2" onClick={toggleButton2} style={buttonStyle2}>Hide Button</NxButton>
                  <NxButton id="second-button" onClick={() => alert('Boo!')}>Boo!</NxButton>
                  <NxButton id="second-close-button" onClick={toggleNestedModal}>Close</NxButton>
                </div>
              </footer>
            </NxModal>
          }

          <header className="nx-modal-header">
            <h2 className="nx-h2" id="modal-header">Modal</h2>
          </header>
          <div className="nx-modal-content">
            <NxButton id="hide-button" onClick={toggleButton} style={buttonStyle}>Hide Button</NxButton>
            <NxButton id="open-nested-modal" variant="primary" onClick={toggleNestedModal}>Open Nested Modal</NxButton>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={toggleModal}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
}
