/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCollapsibleItems, NxCollapsibleItemsChild, useToggle } from '@sonatype/react-shared-components';

function NxCollapsibleItemsExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <NxCollapsibleItems id="example-nx-tree-view"
                        onToggleCollapse={onToggleCollapse}
                        isOpen={toggleCheck}
                        triggerContent="Organization - an extra long example that should cause truncation">
      <NxCollapsibleItemsChild>Test1</NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>Test2</NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>Test3 - an extra long example that should cause truncation</NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>Test4</NxCollapsibleItemsChild>
    </NxCollapsibleItems>
  );
}

export default NxCollapsibleItemsExample;
