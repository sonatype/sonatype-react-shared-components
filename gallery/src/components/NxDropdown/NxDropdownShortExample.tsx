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
    <NxDropdown className="nx-dropdown--short" label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 4 - this link should trigger truncation
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 5
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 6
      </button>
      {false}
      <button className="disabled nx-dropdown-button">
        Button Link 7 Disabled
      </button>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
