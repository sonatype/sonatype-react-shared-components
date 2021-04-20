/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxTable, NxPagination } from '@sonatype/react-shared-components';
import { slice } from 'ramda';

interface Row { name: string; country: string }

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
    <div className="nx-table-container gallery-pagination-table-example">
      <NxTable id="pagination-table" aria-live="polite">
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Name</NxTable.Cell>
            <NxTable.Cell>Country</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          {rows.map((row: Row) =>
            <NxTable.Row key={row.name.concat(row.country)}>
              <NxTable.Cell>{row.name}</NxTable.Cell>
              <NxTable.Cell>{row.country}</NxTable.Cell>
            </NxTable.Row>
          )}
        </NxTable.Body>
      </NxTable>
      <div className="nx-table-container__footer">
        <NxPagination aria-controls="pagination-table"
                      pageCount={Math.ceil(tableData.length / PAGE_SIZE)}
                      currentPage={page}
                      onChange={setPage} />
      </div>
    </div>
  );
};

export default NxTablePaginationExample;
