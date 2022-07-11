/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { NxDropdown, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';

function NxDropdownActionsExample() {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return (
    <NxDropdown label="Links!"
                className="extra-class"
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <a href="https://www.google.com/" className="nx-dropdown-link disabled">
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Go somewhere</span>
      </a>
      <a href="https://www.sonatype.com/" className="nx-dropdown-link">
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Go somewhere else</span>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web" className="nx-dropdown-link">
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
        <span>Go yet another place</span>
      </a>
    </NxDropdown>
  );
}

export default NxDropdownActionsExample;
