/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTreeView, NxButton } from '@sonatype/react-shared-components';

function NxTreeViewClickableSidebarExample() {
  const [toggleCheck, setToggleCheck] = useState(false),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);

  return (
    <div className="nx-page-sidebar">
      <NxTreeView onToggleCollapse={onToggleCollapse}
                  isOpen={toggleCheck}
                  triggerContent="Organization">
        <NxButton className="nx-tree-view__child">Test1</NxButton>
        <a href="#" className="nx-tree-view__child selected">Test2</a>
        <a href="#" className="nx-tree-view__child">
          Test3 - an extra long example that should cause truncation
        </a>
        <a href="#" className="nx-tree-view__child">Test4</a>
      </NxTreeView>
    </div>
  );
}

export default NxTreeViewClickableSidebarExample;
