/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { DataItem, NxFilterDropdown, useToggle } from '@sonatype/react-shared-components';

const options: DataItem<string>[] = [
  { id: 'bike', displayName: 'Bicycle' },
  { id: 'motorcycle', displayName: 'Motorcycle' },
  { id: 'skate', displayName: 'Skateboard' },
  { id: 'longboard', displayName: 'Loooooooooooooooooooooooooooooooooongboard' },
  { id: 'moped', displayName: 'Moped' }
];

const NxFilterDropdownExample = () => {
  const [isOpen, onToggleCollapse] = useToggle(false);

  const [selection, onSelectionChange] = useState<Set<string>>(new Set());

  function onChange(newSet: Set<string>) {
    onSelectionChange(newSet);
  }

  return <NxFilterDropdown isOpen={isOpen}
                           onToggleCollapse={onToggleCollapse}
                           options={options}
                           selectedIds={selection}
                           onChange={onChange} />;
};

export default NxFilterDropdownExample;
