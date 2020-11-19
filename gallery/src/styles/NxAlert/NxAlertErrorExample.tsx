/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxCloseButton } from '@sonatype/react-shared-components';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const NxAlertErrorExample = () =>
  <div className="nx-alert nx-alert--error" role="alert" aria-atomic={true}>
    <NxFontAwesomeIcon icon={faExclamationCircle} aria-label="error" />
    <span><strong>Error!</strong> I am an error alert! There is an error!</span>
    <NxCloseButton />
  </div>;

export default NxAlertErrorExample;
