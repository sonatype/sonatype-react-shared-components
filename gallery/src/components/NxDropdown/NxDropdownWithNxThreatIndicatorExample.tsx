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
          <NxThreatIndicator threatLevelCategory="moderate" />
          <span>Moderate</span>
        </>
      );

  return (
    <NxDropdown label={labelElement}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator />
        <span>Unspecified</span>
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator threatLevelCategory="none" />
        <span>None</span>
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator threatLevelCategory="low" />
        <span>Low</span>
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator threatLevelCategory="moderate" />
        <span>Moderate</span>
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator threatLevelCategory="severe" />
        <span>Severe</span>
      </NxDropdown.Button>
      <NxDropdown.Button onClick={onClick}>
        <NxThreatIndicator threatLevelCategory="critical" />
        <span>Critical</span>
      </NxDropdown.Button>
    </NxDropdown>
  );
}

export default NxDropdownWithNxThreatIndicatorExample;
