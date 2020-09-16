/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxButton} from '@sonatype/react-shared-components';
import {NxVulnerabilityDetails} from '@sonatype/react-shared-components';

const vulnerabilityDetailsJson = require('../../resources/vulnerabilities/vulnerabilityDetailsJson.json');

export default function NxModalExtraWideExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>
        Open modal with vulnerability details component
      </NxButton>
      {showModal &&
      <NxModal id="nx-modal-with-vuln" className="nx-modal--wide" onClose={modalCloseHandler}>
        <header className="nx-modal-header">
          <h3 className="nx-h3">Vulnerability Information</h3>
        </header>
        <div className="nx-modal-content">
          <NxVulnerabilityDetails vulnerabilityDetails={vulnerabilityDetailsJson}/>
        </div>
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
