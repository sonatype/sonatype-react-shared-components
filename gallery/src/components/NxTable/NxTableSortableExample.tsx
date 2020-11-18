/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

const initialState = [
  {key: 'A', value: 'a'},
  {key: '1', value: 1},
  {key: 'B', value: 'b'},
  {key: '2', value: 2},
  {key: 'C', value: 'c'},
  {key: '3', value: 3},
  {key: 'D', value: 'd'},
  {key: '4', value: 4}
];

const NxTableSortableExample = () => {
  const [rows, setRows] = useState(initialState);
  const [sortDir, setSortDir] = useState<'desc' | 'asc' | null>(null);

  function sort() {
    if (sortDir === null) {
      setSortDir('asc');
      setRows(rows.slice().sort((a, b) => a.key > b.key ? 1 : -1));
    }
    else if (sortDir === 'asc') {
      setSortDir('desc');
      setRows(rows.slice().reverse());
    }
    else {
      setSortDir(null);
      setRows(initialState);
    }
  }

  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell scope="col" isSortable sortDir={sortDir} onClick={sort}>Key</NxTableCell>
          <NxTableCell scope="col">Value</NxTableCell>
        </NxTableRow>
      </NxTableHead>
      <NxTableBody>
        {rows.map(({key, value}) =>
          <NxTableRow key={key}>
            <NxTableCell>{key}</NxTableCell>
            <NxTableCell>{value}</NxTableCell>
          </NxTableRow>
        )}
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableSortableExample;
