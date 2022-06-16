/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { NxIconDropdown, useToggle, NxTextLink } from '@sonatype/react-shared-components';

function NxIconDropdownNavigationExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      deleteFn = () => { alert('delete'); },
      onClick = () => { alert('click'); };

  return (
    <NxIconDropdown isOpen={isOpen}
                    onToggleCollapse={onToggleCollapse}
                    icon={faEllipsisV}
                    title="Options">
      <NxTextLink onClick={onClick} href="#/pages/Dropdown" className="nx-dropdown-link">
        Text link 1
      </NxTextLink>
      <NxTextLink onClick={onClick} href="#/pages/Dropdown" className="nx-dropdown-link">
        Text link 2 - this link should trigger truncation
      </NxTextLink>
      <NxTextLink external
                  className="nx-dropdown-link"
                  href="http://www.sonatype.com">
        Website Link
      </NxTextLink>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 1 - this link should trigger truncation
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 2
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Button Link 3
      </button>
      <button className="disabled nx-dropdown-button">
        Button Link Disabled
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>Save</button>
      <button className="nx-dropdown-button" onClick={deleteFn}>Delete</button>
    </NxIconDropdown>
  );
}

export default NxIconDropdownNavigationExample;
