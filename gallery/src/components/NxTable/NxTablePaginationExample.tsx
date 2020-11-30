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
  NxTableRow,
  NxPagination,
  NxTableMetaInfoFooter
} from '@sonatype/react-shared-components';
import { slice } from 'ramda';

interface Row { name: string; country: string };

const PAGE_SIZE = 5;

const tableData: Row[] = [
  {name: 'Anna', country: 'USA'},
  {name: 'Lean', country: 'France'},
  {name: 'Louis', country: 'France'},
  {name: 'Zach', country: 'Colombia'},
  {name: 'Jimmy', country: 'Germany'},
  {name: 'Karen', country: 'Australia'},
  {name: 'Paul', country: 'UK'},
  {name: 'Raul', country: 'Argentina'},
  {name: 'Maria', country: 'Spain'}
];

const NxTablePaginationExample = () => {

  const [page, setPage] = useState(0),
      rows = slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE, tableData);

  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell>Name</NxTableCell>
          <NxTableCell>Country</NxTableCell>
        </NxTableRow>
      </NxTableHead>
      <NxTableBody>
        {rows.map((row: Row) =>
          <NxTableRow key={row.name.concat(row.country)}>
            <NxTableCell>{row.name}</NxTableCell>
            <NxTableCell>{row.country}</NxTableCell>
          </NxTableRow>
        )}
      </NxTableBody>
      <NxTableMetaInfoFooter>
        <NxPagination pageCount={Math.ceil(tableData.length / PAGE_SIZE)} currentPage={page} onChange={setPage} />
      </NxTableMetaInfoFooter>
    </NxTable>
  );
};

export default NxTablePaginationExample;
