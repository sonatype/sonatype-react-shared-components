/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NxAlertWarningExample = () =>
  <div className="nx-alert nx-alert--warning">
    <NxFontAwesomeIcon icon={faExclamationTriangle}/>
    <span><strong>Alert!</strong> I am an alert! Be alerted!</span>
  </div>;

export default NxAlertWarningExample;
