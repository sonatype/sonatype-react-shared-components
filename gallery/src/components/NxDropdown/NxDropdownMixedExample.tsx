/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { faSave, faTrash, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { NxDropdown, NxDropdownDivider, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

function NxDropdownMixedExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Manage"
                className="extra-class"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <div className="nx-list nx-list--clickable">
        <h4 className="nx-list__title">Filters</h4>
        <ul>
          <li className="nx-list__item" onClick={onClick}>Faux Filter 1</li>
          <li className="nx-list__item" onClick={onClick}>Cool Filter</li>
          <li className="nx-list__item" onClick={onClick}>Unused Filter</li>
        </ul>
      </div>
      <NxDropdownDivider />
      <button onClick={onClick} className="nx-dropdown-button" disabled>
        <NxFontAwesomeIcon icon={faSave}/>
        <span>Save</span>
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        <NxFontAwesomeIcon icon={faTrash}/>
        <span>Delete</span>
      </button>
      <button onClick={onClick} className="nx-dropdown-button">
        <NxFontAwesomeIcon icon={faAmbulance}/>
        <span>Some Action</span>
      </button>
    </NxDropdown>
  );
}

export default NxDropdownMixedExample;
