/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown } from '@sonatype/react-shared-components';

function NxDropdownNavigationExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Navigation"
                className="nx-dropdown--navigation"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link1
      </a>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link2
      </a>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link3
      </a>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link4
      </a>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link5
      </a>
      <a onClick={onClick} className="nx-dropdown-button">
        Nav Link6
      </a>
      <a className="disabled nx-dropdown-button">
        Nav Link7 Disabled
      </a>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
