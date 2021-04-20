/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxTable } from '@sonatype/react-shared-components';

const initialState = ['A', '1', 'B', '2', 'C', '3', 'D', '4'];

const NxTableSortableExample = () => {
  const [rows, setRows] = useState(initialState);
  const [sortDir, setSortDir] = useState<'desc' | 'asc' | null>(null);

  function sort() {
    if (sortDir === null) {
      setSortDir('asc');
      setRows(rows.slice().sort((a, b) => a > b ? 1 : -1));
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
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell isSortable sortDir={sortDir} onClick={sort}>Name</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        {rows.map(row =>
          <NxTable.Row key={row}>
            <NxTable.Cell>{row}</NxTable.Cell>
          </NxTable.Row>
        )}
      </NxTable.Body>
    </NxTable>
  );
};

export default NxTableSortableExample;
