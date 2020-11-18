/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

const NxTableClickableExample = () => {
  const rows = [
    { name: 'Name 1' },
    { name: 'Name 2', selected: true },
    { name: 'Name 3' }
  ];

  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell scope="col">Name</NxTableCell>
          <NxTableCell scope="col">Header 2</NxTableCell>
          <NxTableCell chevron />
        </NxTableRow>
      </NxTableHead>
      <NxTableBody>
        {rows.map(({ name, selected = false }) =>
          <NxTableRow key={name} isClickable selected={selected} onClick={() => alert(`Clicked ${name}`)}>
            <NxTableCell>{name}</NxTableCell>
            <NxTableCell>Content</NxTableCell>
            <NxTableCell chevron/>
          </NxTableRow>
        )}
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableClickableExample;
