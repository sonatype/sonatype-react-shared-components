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
      <NxDropdown.LinkButton href="#/">
        Text Link 1
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 2
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 3
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 4
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 5
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 6
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/"
                             onClick={evt => { evt.preventDefault(); }}
                             className="disabled"
                             aria-disabled="true">
        Text Link 7 Disabled
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 8
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 9
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 10
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 11
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 12
      </NxDropdown.LinkButton>
      <NxDropdown.LinkButton href="#/">
        Text Link 13
      </NxDropdown.LinkButton>
    </NxDropdown>
  );
}

export default NxDropdownNavigationExample;
