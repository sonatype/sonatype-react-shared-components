/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCollapsibleItems, useToggle } from '@sonatype/react-shared-components';

function NxCollapsibleItemsExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <NxCollapsibleItems id="example-nx-collapsible-items"
                        onToggleCollapse={onToggleCollapse}
                        isOpen={toggleCheck}
                        triggerContent="Organization - an extra long example that should cause truncation">
      <NxCollapsibleItems.Child>Test1</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test2</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test3 - an extra long example that should cause truncation</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test4</NxCollapsibleItems.Child>
    </NxCollapsibleItems>
  );
}

export default NxCollapsibleItemsExample;
