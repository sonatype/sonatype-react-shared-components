/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxTreeViewChild, TooltipConfigProps, useToggle } from '@sonatype/react-shared-components';

function NxTreeViewTooltipExample() {
  // this example uses the `useState` hook for succinctness, but you could also manage the state manually
  // in a class component
  const [toggle1Check, onToggle1Collapse] = useToggle(false),
      [toggle2Check, onToggle2Collapse] = useToggle(false),
      complexTooltipConfig: TooltipConfigProps = {
        placement: 'left',
        title: <em>Complicated</em>
      };

  return (
    <>
      <NxTreeView onToggleCollapse={onToggle1Collapse}
                  isOpen={toggle1Check}
                  triggerTooltip="Tooltip!"
                  triggerContent="Tooltip configured by string">
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
        <NxTreeViewChild>Test3</NxTreeViewChild>
        <NxTreeViewChild>Test4</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggle2Collapse}
                  isOpen={toggle2Check}
                  triggerTooltip={complexTooltipConfig}
                  triggerContent="Complex tooltip configuration">
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
        <NxTreeViewChild>Test3</NxTreeViewChild>
        <NxTreeViewChild>Test4</NxTreeViewChild>
      </NxTreeView>
    </>
  );
}

export default NxTreeViewTooltipExample;
