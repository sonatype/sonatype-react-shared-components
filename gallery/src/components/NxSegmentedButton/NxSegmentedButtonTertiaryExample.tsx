/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxSegmentedButton, NxButton, useToggle } from '@sonatype/react-shared-components';

export default function NxSegmentedButtonTertiaryExample() {
  const [isOpen, onToggleOpen] = useToggle(false);

  function onMainClick() {
    alert('Clicked the main button!');
  }

  return (
    <div className="nx-btn-bar">
      <NxSegmentedButton variant="tertiary"
                         isOpen={isOpen}
                         onToggleOpen={onToggleOpen}
                         onClick={onMainClick}
                         buttonContent="Click Here">
        <button className="nx-dropdown-button">
          Dropdown item 1
        </button>
        <button className="nx-dropdown-button">
          Dropdown item 2
        </button>
      </NxSegmentedButton>
      <NxButton>A normal button to demonstrate alignment</NxButton>
      <NxSegmentedButton disabled
                         variant="tertiary"
                         isOpen={false}
                         onToggleOpen={onToggleOpen}
                         onClick={onMainClick}
                         buttonContent="Disabled Primary Button">
        <button className="nx-dropdown-button">
          Dropdown item 1
        </button>
      </NxSegmentedButton>
    </div>
  );
};
