/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NxDropdownIconOnly, useToggle, NxTextLink } from '@sonatype/react-shared-components';

function NxDropdownIconOnlyActionsExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      deleteFn = () => { alert('delete'); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdownIconOnly icon={faCog}
                        isOpen={isOpen}
                        onToggleCollapse={onToggleCollapse}
                        toggleTooltip="Links options">
      <NxTextLink external className="nx-dropdown-link disabled">Save</NxTextLink>
      <NxTextLink external className="nx-dropdown-link" onClick={deleteFn}>Delete</NxTextLink>
      <NxTextLink external className="nx-dropdown-link" onClick={onClick}>Some Action</NxTextLink>
    </NxDropdownIconOnly>
  );
}

export default NxDropdownIconOnlyActionsExample;
