/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

function NxTreeViewExample() {
  // this example uses the `useState` hook for succinctness, but you could also manage the state manually
  // in a class component
  const [toggleCheck, setToggleCheck] = useState(false),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent="Organization">
      <NxTreeViewChild clickable>Test1</NxTreeViewChild>
      <NxTreeViewChild clickable selected>Test2</NxTreeViewChild>
      <NxTreeViewChild clickable>Test3 - an extra long example that should cause truncation</NxTreeViewChild>
      <NxTreeViewChild clickable>Test4</NxTreeViewChild>
    </NxTreeView>
  );
}

export default NxTreeViewExample;
