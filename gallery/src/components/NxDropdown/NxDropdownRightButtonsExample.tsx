/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDropdown, NxButton, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function NxDropdownRightButtonsExample() {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return (
    <NxDropdown label="Navigation" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
      <a href="#/" className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Text Link</span>
      </a>
      <a href="#/" className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">
          Text Link - this link should trigger truncation
        </span>
      </a>
      <NxButton onClick={() => alert('icon click')}
                className="nx-dropdown-right-button"
                variant="icon-only"
                title="Delete Button Link2">
        <NxFontAwesomeIcon icon={faTrash}/>
      </NxButton>
      <a href="#/" className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Button Link2</span>
      </a>
      <NxButton onClick={() => alert('icon click')}
                className="nx-dropdown-right-button"
                variant="icon-only"
                title="Delete Text Link3">
        <NxFontAwesomeIcon icon={faTrash}/>
      </NxButton>
      <a href="#/" className="nx-dropdown-button">
        <span className="nx-dropdown-button-content">Text Link3 - this link should trigger truncation</span>
      </a>
    </NxDropdown>
  );
}

export default NxDropdownRightButtonsExample;
