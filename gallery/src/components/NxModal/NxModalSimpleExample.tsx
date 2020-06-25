/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalSimpleExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal</button>
      { showModal &&
        <NxModal id="nx-modal-simple-example" onClose={modalCloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>Example NxModal header</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">This is some content inside a modal.</p>
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
