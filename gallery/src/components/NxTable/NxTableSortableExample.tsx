/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxTable } from '@sonatype/react-shared-components';

type SortDir = 'desc' | 'asc' | null;
type ColumnName = 'name' | 'age';

type SortConfig = null | {
  dir: SortDir,
  column: ColumnName
};

interface Datum {
  name: string;
  age: number
}

const data: Datum[] = [
  { name: 'John', age: 20 },
  { name: 'Bob', age: 32 },
  { name: 'Sarah', age: 38 },
  { name: 'Wye Oak', age: 460 }
];

const NxTableSortableExample = () => {
  const [rows, setRows] = useState(data);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  const comparators = {
    name: ({ name: nameA }: Datum, { name: nameB }: Datum) => nameA > nameB ? 1 : -1,
    age: ({ age: ageA }: Datum, { age: ageB }: Datum) => ageA > ageB ? 1 : -1
  };

  const sort = (column: ColumnName) => () => {
    // if not sorting on the clicked column then sort ascending
    if (sortConfig?.column !== column) {
      setSortConfig({ dir: 'asc', column });
      setRows(rows.slice().sort(comparators[column]));
    }
    // if already sorting ascending on the clicked column then switch to descending
    else if (sortConfig?.dir === 'asc') {
      setSortConfig({ dir: 'desc', column });
      setRows(rows.slice().sort((a, b) => -(comparators[column](a, b))));
    }
    // if already sorting descending on the clicked column then switch to not sorting at all
    else {
      setSortConfig(null);
      setRows(data);
    }
  };

  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell isSortable
                        sortDir={sortConfig?.column === 'name' ? sortConfig.dir : null}
                        onClick={sort('name')}>
            Name
          </NxTable.Cell>
          <NxTable.Cell isSortable
                        isNumeric
                        sortDir={sortConfig?.column === 'age' ? sortConfig.dir : null}
                        onClick={sort('age')}>
            Age
          </NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        {rows.map(({ name, age }) =>
          <NxTable.Row key={name}>
            <NxTable.Cell>{name}</NxTable.Cell>
            <NxTable.Cell isNumeric>{age}</NxTable.Cell>
          </NxTable.Row>
        )}
      </NxTable.Body>
    </NxTable>
  );
};

export default NxTableSortableExample;
