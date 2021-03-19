/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faFrog, faCarCrash } from '@fortawesome/free-solid-svg-icons';
import { NxDropdown, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';

function NxDropdownCustomLabelExample() {
  const [isOpen, onToggleCollapse, , onClose] = useToggle(false),
      onClick = () => { alert('click'); },
      labelElement = <><NxFontAwesomeIcon icon={faCarCrash}/><span>Beep Beep!</span></>;

  return (
    <NxDropdown label={labelElement}
                className="extra-class"
                isOpen={isOpen}
                onClose={onClose}
                onToggleCollapse={onToggleCollapse}>
      <button onClick={onClick} className="nx-dropdown-button">
        <NxFontAwesomeIcon icon={faFrog}/>
        <span>Some Action</span>
      </button>
    </NxDropdown>
  );
}

export default NxDropdownCustomLabelExample;
