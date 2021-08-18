/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faExternalLinkAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { NxDropdownIconOnly, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';

function NxDropdownIconOnlyActionsExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      deleteFn = () => { alert('delete'); },
      onClick = () => { alert('click'); };

  return (
    <NxDropdownIconOnly label="Links!"
                icon={faEllipsisV}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <a className="nx-dropdown-link disabled">
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Save</span>
      </a>
      <a className="nx-dropdown-link" onClick={deleteFn}>
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Delete</span>
      </a>
      <a className="nx-dropdown-link" onClick={onClick}>
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Some Action</span>
      </a>
    </NxDropdownIconOnly>
  );
}

export default NxDropdownIconOnlyActionsExample;
