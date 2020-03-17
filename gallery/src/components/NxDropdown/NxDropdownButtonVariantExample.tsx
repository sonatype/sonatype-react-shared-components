/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { faFrog } from '@fortawesome/free-solid-svg-icons';
import { NxDropdown, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

function NxDropdownButtonVariantExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="A Secondary Button"
                variant="secondary"
                className="extra-class"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <button onClick={onClick} className="nx-dropdown-button">
        <NxFontAwesomeIcon icon={faFrog}/>
        <span>Some Action</span>
      </button>
    </NxDropdown>
  );
}

export default NxDropdownButtonVariantExample;
