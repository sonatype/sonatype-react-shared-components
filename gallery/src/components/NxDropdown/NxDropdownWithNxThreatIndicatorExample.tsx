/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDropdown, useToggle, NxThreatIndicator } from '@sonatype/react-shared-components';

function NxDropdownWithNxThreatIndicatorExample() {
  const [isOpen, onToggleCollapse] = useToggle(false),
      onClick = () => { alert('click'); },
      labelElement = (
        <>
          <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="moderate" />
          <span>Moderate</span>
        </>
      );

  return (
    <NxDropdown label={labelElement}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" />
        <span>Unspecified</span>
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="none" />
        <span>None</span>
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="low" />
        <span>Low</span>
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="moderate" />
        <span>Moderate</span>
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="severe" />
        <span>Severe</span>
      </button>
      <button className="nx-dropdown-button" onClick={onClick}>
        <NxThreatIndicator className="nx-dropdown__colored-icon" threatLevelCategory="critical" />
        <span>Critical</span>
      </button>
    </NxDropdown>
  );
}

export default NxDropdownWithNxThreatIndicatorExample;
