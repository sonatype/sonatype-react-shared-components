/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxTable, NxPagination, NxFilterInput } from '@sonatype/react-shared-components';
import { slice, toLower, pipe, prop, includes, filter, both } from 'ramda';

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

const NxTablePaginationFilterExample = () => {

  const [nameFilter, setNameFilter] = useState(''),
      [countryFilter, setCountryFilter] = useState(''),
      [page, setPage] = useState(0),
      matchesName = pipe<Row, string, string, boolean>(prop('name'), toLower, includes(toLower(nameFilter))),
      matchesCountry = pipe<Row, string, string, boolean>(prop('country'), toLower, includes(toLower(countryFilter))),
      filteredData = filter(both(matchesName, matchesCountry), tableData),
      pageCount = Math.ceil(filteredData.length / PAGE_SIZE),
      currentPage = pageCount ? Math.min(page, pageCount - 1) : undefined,
      rows = currentPage != null && slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE, filteredData);

  return (
    <div className="nx-table-container gallery-pagination-filter-table-example">
      <NxTable id="pagination-filter-table" aria-live="polite">
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Name</NxTable.Cell>
            <NxTable.Cell>Country</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row isFilterHeader>
            <NxTable.Cell>
              <NxFilterInput placeholder="Type a name"
                             onChange={setNameFilter}
                             value={nameFilter}
                             aria-controls="pagination-filter-table"/>
            </NxTable.Cell>
            <NxTable.Cell>
              <NxFilterInput placeholder="Select a country"
                             onChange={setCountryFilter}
                             value={countryFilter}
                             aria-controls="pagination-filter-table"/>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body emptyMessage="No rows match the current filter">
          { rows && rows.map((row: Row) =>
            <NxTable.Row key={row.name.concat(row.country)}>
              <NxTable.Cell>{row.name}</NxTable.Cell>
              <NxTable.Cell>{row.country}</NxTable.Cell>
            </NxTable.Row>
          )}
        </NxTable.Body>
      </NxTable>
      <div className="nx-table-container__footer">
        <NxPagination aria-controls="pagination-filter-table" { ...{ pageCount, currentPage } } onChange={setPage} />
      </div>
    </div>
  );
};

export default NxTablePaginationFilterExample;
