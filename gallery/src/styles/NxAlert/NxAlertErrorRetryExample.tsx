/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faTimesCircle, faSync } from '@fortawesome/free-solid-svg-icons';

const NxAlertErrorRetryExample = () =>
  <div className="nx-alert nx-alert--error">
    <NxFontAwesomeIcon icon={faTimesCircle}/>
    <strong>Error!</strong> I am an error alert! There is an error! I also have a button.
    <div className="nx-btn-bar">
      <button className="nx-btn nx-btn--error">
        <NxFontAwesomeIcon icon={faSync}/>
        <span>Retry</span>
      </button>
    </div>
  </div>;

export default NxAlertErrorRetryExample;
