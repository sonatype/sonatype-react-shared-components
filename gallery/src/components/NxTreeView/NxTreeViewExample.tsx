/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxTreeViewChild, useToggle } from '@sonatype/react-shared-components';

function NxTreeViewExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <NxTreeView id="example-nx-tree-view"
                onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent="Organization - an extra long example that should cause truncation">
      <NxTreeViewChild>Test1</NxTreeViewChild>
      <NxTreeViewChild>Test2</NxTreeViewChild>
      <NxTreeViewChild>Test3 - an extra long example that should cause truncation</NxTreeViewChild>
      <NxTreeViewChild>Test4</NxTreeViewChild>
    </NxTreeView>
  );
}

export default NxTreeViewExample;
