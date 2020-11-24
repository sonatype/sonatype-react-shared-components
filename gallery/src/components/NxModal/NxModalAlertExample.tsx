/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxWarningAlert, NxButton} from '@sonatype/react-shared-components';

export default function NxModalAlertExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [showModal2, setShowModal2] = useState(false);
  const modalCloseHandler2 = () => setShowModal2(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Alert in content</NxButton>
      <NxButton onClick={() => setShowModal2(true)}>Alert in footer</NxButton>
      { showModal &&
        <NxModal id="nx-modal-alert-example" onClose={modalCloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">Example NxModal with NxAlert</h2>
          </header>
          <div className="nx-modal-content">
            <NxWarningAlert>
              The page may contain unsaved changes; continuing will discard them.
            </NxWarningAlert>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modalCloseHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
      { showModal2 &&
        <NxModal id="nx-modal-alert-example" onClose={modalCloseHandler2}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">Example NxModal with NxAlert</h2>
          </header>
          <div className="nx-modal-content">
            This is some content
          </div>
          <footer className="nx-footer">
            <NxWarningAlert>
              The page may contain unsaved changes; continuing will discard them.
            </NxWarningAlert>
            <div className="nx-btn-bar">
              <NxButton onClick={modalCloseHandler2}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};
