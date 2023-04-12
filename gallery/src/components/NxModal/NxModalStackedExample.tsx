/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {NxModal, NxButton, useToggle} from '@sonatype/react-shared-components';

export default function NxModalStackedExample() {
  const [showModal, toggleModal] = useToggle(false);
  const [showModal2, toggleModal2] = useToggle(false);

  return (
    <>
      <NxButton onClick={toggleModal}>Open First Modal</NxButton>

      {showModal &&
        <NxModal onCancel={toggleModal} aria-labelledby="first-modal-header">
          <header className="nx-modal-header">
            <h2 className="nx-h2" id="first-modal-header">First Modal</h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">
              This is some content inside a modal.
            </p>
            <NxButton onClick={toggleModal2} variant="primary">Open Second Modal</NxButton>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={toggleModal}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
      {showModal2 &&
        <NxModal onCancel={toggleModal2} aria-labelledby="second-modal-header">
          <header className="nx-modal-header">
            <h2 className="nx-h2" id="second-modal-header">Second Modal</h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">This is some content inside a modal.</p>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={() => alert('Boo!')} variant="secondary">Boo!</NxButton>
              <NxButton onClick={toggleModal2} variant="primary">Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
}
