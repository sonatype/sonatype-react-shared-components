/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDropdown, useToggle } from '@sonatype/react-shared-components';

function NxDropdownNavigationExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
      <NxDropdown.LinkButton onClick={onClick} href="#/pages/Dropdown">
        Text link 1
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton onClick={onClick} href="#/pages/Dropdown">
        Text link 2
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton onClick={onClick} href="#/pages/Dropdown">
        Text link 3 - this link should trigger truncation
      </NxDropdown.LinkButton>
      <NxDropdown.Button onClick={onClick}>
        Button Link 4 - this link should trigger truncation
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        Button Link 5
      </NxDropdown.Button>
      <NxDropdown.Divider />
      <NxDropdown.Button onClick={onClick}>
        Button Link 6
      </NxDropdown.Button>
      <NxDropdown.Button className="disabled">
        Button Link 7 Disabled
      </NxDropdown.Button>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
