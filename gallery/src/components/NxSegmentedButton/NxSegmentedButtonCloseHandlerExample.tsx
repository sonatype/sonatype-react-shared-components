/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { KeyboardEvent } from 'react';

import { NxSegmentedButton, useToggle } from '@sonatype/react-shared-components';

export default function NxSegmentedButtonPrimaryExample() {
  const [isOpen, onToggleOpen] = useToggle(false);

  function onMainClick() {
    alert('Clicked the main button!');
  }

  return (
    <div className="nx-btn-bar">
      <NxSegmentedButton variant="primary"
                         isOpen={isOpen}
                         onToggleOpen={onToggleOpen}
                         onClick={onMainClick}
                         buttonContent="Click Here"
                         onCloseClick={(evt: MouseEvent) => evt.preventDefault()}
                         onCloseKeyDown={(evt: KeyboardEvent) => evt.preventDefault()}>
        <button className="nx-dropdown-button">
          Dropdown item 1
        </button>
        <button className="nx-dropdown-button">
          Dropdown item 2
        </button>
      </NxSegmentedButton>
    </div>
  );
}
