/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxCollapsibleItems,
  NxCollapsibleItemsChild,
  TooltipConfigProps,
  useToggle
} from '@sonatype/react-shared-components';

function NxCollapsibleItemsTooltipExample() {
  const [toggle1Check, onToggle1Collapse] = useToggle(false),
      [toggle2Check, onToggle2Collapse] = useToggle(false),
      complexTooltipConfig: TooltipConfigProps = {
        placement: 'left',
        title: <em>Complicated</em>
      };

  return (
    <>
      <NxCollapsibleItems onToggleCollapse={onToggle1Collapse}
                          isOpen={toggle1Check}
                          triggerTooltip="Tooltip!"
                          triggerContent="Tooltip configured by string">
        <NxCollapsibleItemsChild>Test1</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test2</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test3</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test4</NxCollapsibleItemsChild>
      </NxCollapsibleItems>
      <NxCollapsibleItems onToggleCollapse={onToggle2Collapse}
                          isOpen={toggle2Check}
                          triggerTooltip={complexTooltipConfig}
                          triggerContent="Complex tooltip configuration">
        <NxCollapsibleItemsChild>Test1</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test2</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test3</NxCollapsibleItemsChild>
        <NxCollapsibleItemsChild>Test4</NxCollapsibleItemsChild>
      </NxCollapsibleItems>
    </>
  );
}

export default NxCollapsibleItemsTooltipExample;
