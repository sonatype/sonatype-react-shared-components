/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDropdown, useToggle } from '@sonatype/react-shared-components';

function NxDropdownNavigationExample() {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return (
    <NxDropdown label="Scrolling - this label also triggers truncation"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 1
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 2
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 3
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 4
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 5
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 6
      </a>
      <a href="#/"
         onClick={evt => { evt.preventDefault(); }}
         className="disabled nx-dropdown-button"
         aria-disabled="true"
         role="menuitem">
        Text Link 7 Disabled
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 8
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 9
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 10
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 11
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 12
      </a>
      <a href="#/" className="nx-dropdown-button" role="menuitem">
        Text Link 13
      </a>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
