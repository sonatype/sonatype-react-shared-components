/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxSegmentedButton } from '@sonatype/react-shared-components';

export default function NxSegmentedButtonPrimaryExample() {
  const [isOpen, setIsOpen] = useState(false);

  function onToggleOpen() {
    setIsOpen(!isOpen);
  }

  function onMainClick() {
    alert('Clicked the main button!');
  }

  return (
    <NxSegmentedButton variant="primary"
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
  );
};
