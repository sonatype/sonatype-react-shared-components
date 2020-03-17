/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal} from '@sonatype/react-shared-components';
import {NxVulnerabilityDetails} from '@sonatype/react-shared-components';

const vulnerabilityDetailsJson = require('../../resources/vulnerabilities/vulnerabilityDetailsJson.json');

export default function NxModalExtraWideExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">
        Open modal with vulnerability details component
      </button>
      {showModal &&
      <NxModal id="nx-modal-with-vuln" className="nx-modal--wide">
        <header className="nx-modal-header">
          <h3 className="nx-h3">Vulnerability Information</h3>
        </header>
        <div className="nx-modal-content">
          <NxVulnerabilityDetails vulnerabilityDetails={vulnerabilityDetailsJson}/>
        </div>
        <footer className="nx-modal-footer">
          <div className="nx-btn-bar">
            <button type="button" onClick={() => setShowModal(false)} className="nx-btn">Close</button>
          </div>
        </footer>
      </NxModal>
      }
    </>
  );
};
