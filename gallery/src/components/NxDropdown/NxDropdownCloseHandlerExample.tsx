/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { KeyboardEvent } from 'react';

import { NxDropdown, useToggle } from '@sonatype/react-shared-components';

function NxDropdownCloseHandlerExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      onClick = () => { alert('click'); };

  return (
    <NxDropdown label="Navigation"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}
                onCloseClick={(evt: MouseEvent) => evt.preventDefault()}
                onCloseKeyDown={(evt: KeyboardEvent) => evt.preventDefault()}>
      <a onClick={onClick} href="#/pages/NxDropdown" className="nx-dropdown-button">
        Link
      </a>
      <button onClick={onClick} className="nx-dropdown-button">
        Button
      </button>
    </NxDropdown>
  );
}

export default NxDropdownCloseHandlerExample;
