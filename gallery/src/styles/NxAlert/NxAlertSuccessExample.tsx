/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxCloseButton } from '@sonatype/react-shared-components';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const NxAlertErrorExample = () =>
  <div className="nx-alert nx-alert--success">
    <NxFontAwesomeIcon icon={faCheckCircle}/>
    <span><strong>Success!</strong> This was a triumph! A great success!</span>
    <NxCloseButton />
  </div>;

export default NxAlertErrorExample;
