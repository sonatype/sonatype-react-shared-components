/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxSuccessAlert } from '@sonatype/react-shared-components';

function NxSuccessExample() {
  const [isOpen, setIsOpen] = useState(true);

  function dismiss() {
    setIsOpen(false);
  }

  return isOpen ? (
    <NxSuccessAlert onClose={dismiss}>This is a success message.</NxSuccessAlert>
  ) : null;
}

export default NxSuccessExample;
