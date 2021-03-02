/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

// exactly the same as NxStatefulTextInputSimpleExample, except for type="textarea"
export default function NxStatefulTextInputTextAreaExample() {
  return (
    <NxStatefulTextInput type="textarea" placeholder="placeholder text" />
  );
}
