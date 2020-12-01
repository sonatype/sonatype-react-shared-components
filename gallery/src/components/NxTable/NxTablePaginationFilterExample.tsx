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
  NxFilterInput
} from '@sonatype/react-shared-components';
import { slice, toLower, pipe, prop, includes, filter, both } from 'ramda';

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

const NxTablePaginationFilterExample = () => {

  const [nameFilter, setNameFilter] = useState(''),
      [countryFilter, setCountryFilter] = useState(''),
      [page, setPage] = useState(0),
      matchesName = pipe<Row, string, boolean>(prop('name'), includes(toLower(nameFilter))),
      matchesCountry = pipe<Row, string, boolean>(prop('country'), includes(toLower(countryFilter))),
      filteredData = filter(both(matchesName, matchesCountry), tableData),
      rows = slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE, filteredData);

  return (
    <div className="nx-table-container gallery-pagination-filter-table-example">
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Name</NxTableCell>
            <NxTableCell>Country</NxTableCell>
          </NxTableRow>
          <NxTableRow isFilterHeader>
            <NxTableCell>
              <NxFilterInput placeholder="Type a name"
                             onChange={setNameFilter}
                             value={nameFilter}/>
            </NxTableCell>
            <NxTableCell>
              <NxFilterInput placeholder="Select a country"
                             onChange={setCountryFilter}
                             value={countryFilter}/>
            </NxTableCell>
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
      </NxTable>
      <div className="nx-table-container__footer">
        <NxPagination pageCount={Math.ceil(tableData.length / PAGE_SIZE)} currentPage={page} onChange={setPage} />
      </div>
    </div>
  );
};

export default NxTablePaginationFilterExample;
