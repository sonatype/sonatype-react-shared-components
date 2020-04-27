/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxWarningAlert} from '@sonatype/react-shared-components';

export default function NxModalAlertExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal</button>
      { showModal &&
        <NxModal id="nx-modal-alert-example" onClose={modalCloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <span>Example NxModal with NxAlert</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <NxWarningAlert className="nx-alert--modifier">
              <span>
                The page may contain unsaved changes; continuing will discard them.
              </span>
            </NxWarningAlert>
          </div>
          <footer className="nx-modal-footer">
            <div className="nx-btn-bar">
              <button type="button" onClick={modalCloseHandler} className="nx-btn">Close</button>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};
