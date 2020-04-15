/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

/* eslint-disable */
export default function NxModalStackedExample() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [modalStack] = useState([]);

  const closeHandler1 = () => {
    console.log('Close modal1');
    setShowModal(false);
  };

  const closeHandler2 = () => {
    console.log('Close modal2');
    setShowModal2(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open modal with stacked example</button>
      {showModal &&
        <NxModal id="nx-modal-stacked-example"
                 closeHandler={closeHandler1}
                 modalStack={modalStack}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal with a stacked modal</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p>
              This is some content inside a modal.
            </p>
            <p>
              This is some more content inside a modal.
            </p>
          </div>
          <footer className="nx-modal-footer">
            <div className="nx-btn-bar">
              <button onClick={() => setShowModal2(true)} className="nx-btn nx-btn--primary">
                Open second modal
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="nx-btn">Close</button>
            </div>
          </footer>
        </NxModal>
      }
      {showModal2 &&
        <NxModal id="nx-modal-stacked-example2"
                 closeHandler={closeHandler2}
                 modalStack={modalStack}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>NxModal stacked example</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p>This is the second modal.</p>
          </div>
          <footer className="nx-modal-footer">
            <div className="nx-btn-bar">
              <button type="button" onClick={() => setShowModal2(false)} className="nx-btn nx-btn--primary">
                Close
              </button>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};
