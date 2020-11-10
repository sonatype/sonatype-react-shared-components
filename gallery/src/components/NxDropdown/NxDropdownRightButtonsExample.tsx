/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown, NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function NxDropdownRightButtonsExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
      <a href="#" onClick={onClick} className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Nav Link1</span>
      </a>
      <NxButton onClick={() => alert('icon click')} className="nx-dropdown-right-button" variant="icon-only">
        <NxFontAwesomeIcon icon={faTrash}/>
      </NxButton>
      <a href="#" onClick={onClick} className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Nav Link2</span>
      </a>
      <NxButton onClick={() => alert('icon click')} className="nx-dropdown-right-button" variant="icon-only">
        <NxFontAwesomeIcon icon={faTrash}/>
      </NxButton>
      <a href="#" onClick={onClick} className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Nav Link3 - this link should trigger truncation</span>
      </a>
    </NxDropdown>
  );
}

export default NxDropdownRightButtonsExample;
