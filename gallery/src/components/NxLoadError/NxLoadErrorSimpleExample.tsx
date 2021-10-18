/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxLoadError, useToggle } from '@sonatype/react-shared-components';

const error = <>Server <em>Error</em></>;

function NxLoadErrorSimpleExample() {
  const [isOpen, dismiss] = useToggle(true);

  return isOpen ? <NxLoadError error={error} onClose={dismiss} /> : null;
}

export default NxLoadErrorSimpleExample;
