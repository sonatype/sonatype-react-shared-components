/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxButton} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalStackedExample() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const modal1CloseHandler = () => setShowModal(false);
  const modal2CloseHandler = () => setShowModal2(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open modal with stacked example</NxButton>
      {showModal &&
        <NxModal id="nx-modal-stacked-example" onClose={modal1CloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal with a stacked modal</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">
              This is some content inside a modal.
            </p>
            <p className="nx-p">
              This is some more content inside a modal.
            </p>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={() => setShowModal2(true)} variant="primary">Open second modal</NxButton>
              <NxButton onClick={modal1CloseHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
      {showModal2 &&
        <NxModal id="nx-modal-stacked-example2" onClose={modal2CloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal stacked example</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">This is the second modal.</p>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modal2CloseHandler} variant="primary">Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};
