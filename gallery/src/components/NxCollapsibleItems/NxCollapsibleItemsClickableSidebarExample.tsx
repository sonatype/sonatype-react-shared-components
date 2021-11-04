/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxButton,
  NxCollapsibleItems,
  useToggle
} from '@sonatype/react-shared-components';

function NxCollapsibleItemsClickableSidebarExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <div className="nx-page-sidebar">
      <NxCollapsibleItems onToggleCollapse={onToggleCollapse}
                          isOpen={toggleCheck}
                          triggerContent="Organization">
        <NxCollapsibleItems.Child>
          <NxButton>Test1</NxButton>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <a href="#" className="selected">Test2</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <a href="#">
            Test3 - an extra long example that should cause truncation
          </a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <a href="#">Test4</a>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
    </div>
  );
}

export default NxCollapsibleItemsClickableSidebarExample;
