/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { DataItem, NxFilterDropdown, NxFormGroup, useToggle } from '@sonatype/react-shared-components';

const options: DataItem<string>[] = [
  { id: 'bike', displayName: 'Bicycle' },
  { id: 'motorcycle', displayName: 'Motorcycle' },
  { id: 'skate', displayName: 'Skateboard' },
  { id: 'longboard', displayName: 'Loooooooooooooooooooooooooooooooooongboard' },
  { id: 'moped', displayName: 'Moped' }
];

const NxFilterDropdownExample = () => {
  const [isOpen, onToggleCollapse] = useToggle(false),
      [filter, onFilterChange] = useState<Set<string>>(new Set());

  return (
    <NxFormGroup label="Filter Mode of Transportation">
      <NxFilterDropdown isOpen={isOpen}
                        onToggleCollapse={onToggleCollapse}
                        options={options}
                        selectedIds={filter}
                        onChange={onFilterChange} />
    </NxFormGroup>
  );
};

export default NxFilterDropdownExample;
