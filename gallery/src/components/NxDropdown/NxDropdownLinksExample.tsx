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
      <a href="https://www.google.com/" className="nx-dropdown-link">
        <span>Go somewhere</span>
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
      </a>
      <a href="https://www.sonatype.com/" className="nx-dropdown-link">
        <span>Go somewhere else</span>
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
      </a>
      <a href="https://www.google.com/" className="nx-dropdown-link disabled">
        <span>Can't go here though</span>
        <NxFontAwesomeIcon icon={faExternalLinkAlt}/>
      </a>
      <a href="#/" className="nx-dropdown-link">
        <span>Go to homepage</span>
      </a>
      <a href="#/" className="nx-dropdown-link disabled">
        <span>Can't go here either</span>
      </a>
    </NxDropdown>
  );
}

export default NxDropdownActionsExample;
