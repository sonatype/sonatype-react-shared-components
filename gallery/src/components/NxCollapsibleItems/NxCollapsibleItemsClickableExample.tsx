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
  NxCollapsibleItemsChild,
  useToggle
} from '@sonatype/react-shared-components';

function NxCollapsibleItemsClickableExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <NxCollapsibleItems onToggleCollapse={onToggleCollapse}
                        isOpen={toggleCheck}
                        triggerContent="Organization">
      <NxCollapsibleItemsChild>
        <NxButton>Test1</NxButton>
      </NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>
        <a href="#" className="selected">Test2</a>
      </NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>
        <a href="#">
          Test3 - an extra long example that should cause truncation
        </a>
      </NxCollapsibleItemsChild>
      <NxCollapsibleItemsChild>
        <a href="#">Test4</a>
      </NxCollapsibleItemsChild>
    </NxCollapsibleItems>
  );
}

export default NxCollapsibleItemsClickableExample;
