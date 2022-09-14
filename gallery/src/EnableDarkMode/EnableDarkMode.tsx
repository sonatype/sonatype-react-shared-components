/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxButton, NxModal } from '@sonatype/react-shared-components';

const EnableDarkMode = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Set Color Scheme</NxButton>
      { showModal &&
        <NxModal id="nx-modal-dark-mode-example"
                 role="alertdialog"
                 onCancel={modalCloseHandler}
                 aria-label="NxModal to set color scheme">
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modalCloseHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};

export default EnableDarkMode;
