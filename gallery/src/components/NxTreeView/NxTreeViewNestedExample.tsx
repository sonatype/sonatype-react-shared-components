/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxTreeViewChild, useToggle } from '@sonatype/react-shared-components';

function NxTreeViewExample() {
  const [outerToggle, onOuterToggleCollapse] = useToggle(false),
      [innerToggle, onInnerToggleCollapse] = useToggle(false);

  return (
    <NxTreeView onToggleCollapse={onOuterToggleCollapse} isOpen={outerToggle} triggerContent="Organization">
      <NxTreeViewChild>Test1</NxTreeViewChild>
      <NxTreeViewChild>
        <NxTreeView onToggleCollapse={onInnerToggleCollapse} isOpen={innerToggle} triggerContent="Test2">
          <NxTreeViewChild>Test2.a</NxTreeViewChild>
          <NxTreeViewChild>Test2.b - an extra long example that should cause truncation</NxTreeViewChild>
          <NxTreeViewChild>Test2.c</NxTreeViewChild>
        </NxTreeView>
      </NxTreeViewChild>
      <NxTreeViewChild>Test3 - an extra long example that should cause truncation</NxTreeViewChild>
      <NxTreeViewChild>Test4</NxTreeViewChild>
    </NxTreeView>
  );
}

export default NxTreeViewExample;
