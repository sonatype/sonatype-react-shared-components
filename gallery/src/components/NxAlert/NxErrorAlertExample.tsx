/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxErrorAlert } from '@sonatype/react-shared-components';

function NxErrorAlertExample() {
  const [isOpen, setIsOpen] = useState(true);

  function dismiss() {
    setIsOpen(false);
  }

  return isOpen ? (
    <NxErrorAlert onClose={dismiss}>This is an example <strong>error</strong> message.</NxErrorAlert>
  ) : null;
}

export default NxErrorAlertExample;
