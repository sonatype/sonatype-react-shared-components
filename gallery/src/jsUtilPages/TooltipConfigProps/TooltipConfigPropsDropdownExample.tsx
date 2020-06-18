/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown, TooltipConfigProps } from '@sonatype/react-shared-components';

export default function TooltipConfigPropsDropdownExample() {
  const [isOpen, setIsOpen] = useState(false);

  function onToggleCollapse() {
    setIsOpen(!isOpen);
  }

  // explicit type here is optional; added for demonstration purposes
  const tooltipProps: TooltipConfigProps = {
    className: 'my-class',
    placement: 'right',
    title: 'Tooltips Rule!'
  };

  return (
    <NxDropdown label="Example"
                isOpen={isOpen}
                toggleTooltip={tooltipProps}
                onToggleCollapse={onToggleCollapse}>
      <a className="nx-dropdown-button">Nav Link1</a>
    </NxDropdown>
  );
}
