/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTreeView, NxButton, NxTreeViewChild } from '@sonatype/react-shared-components';

function NxTreeViewClickableExample() {
  const [toggleCheck, setToggleCheck] = useState(false),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent="Organization">
      <NxTreeViewChild>
        <NxButton>Test1</NxButton>
      </NxTreeViewChild>
      <NxTreeViewChild>
        <a href="#" className="selected">Test2</a>
      </NxTreeViewChild>
      <NxTreeViewChild>
        <a href="#">
          Test3 - an extra long example that should cause truncation
        </a>
      </NxTreeViewChild>
      <NxTreeViewChild>
        <a href="#">Test4</a>
      </NxTreeViewChild>
    </NxTreeView>
  );
}

export default NxTreeViewClickableExample;
