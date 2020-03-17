/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

function NxTreeViewDisabledExample() {

  return (
    <NxTreeView isOpen={true} disabled={true} triggerContent="Disabled">
      <NxTreeViewChild>Test1</NxTreeViewChild>
      <NxTreeViewChild>Test2</NxTreeViewChild>
      <NxTreeViewChild>Test3</NxTreeViewChild>
      <NxTreeViewChild>Test4</NxTreeViewChild>
    </NxTreeView>
  );
}

export default NxTreeViewDisabledExample;
