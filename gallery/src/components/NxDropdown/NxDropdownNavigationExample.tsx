/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown, NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

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
      <div className="nx-dropdown-button-container">
        <NxButton onClick={() => alert('icon click')} className="nx-dropdown-button--right" variant="icon-only">
          <NxFontAwesomeIcon icon={faEdit}/>
        </NxButton>
        <a onClick={onClick} className="nx-dropdown-button">
          <span className="nx-dropdown-button-content">Nav LinkNav LinkNav LinkNav LinkNav Link33333Nav Link3</span>
        </a>
      </div>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link4 - this link should trigger truncation
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link5
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        Nav Link6
      </button>
      <button className="disabled nx-dropdown-button">
        Nav Link7 Disabled
      </button>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
