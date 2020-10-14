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
  NxFilterInput
} from '@sonatype/react-shared-components';
import { toLower } from 'ramda';

const initialState = [
  {name: 'Anna', country: 'USA'},
  {name: 'Lean', country: 'France'},
  {name: 'Louis', country: 'France'},
  {name: 'Zach', country: 'Colombia'},
  {name: 'Jimmy', country: 'Germany'}
];

const NxTableFilterExample = () => {

  const [rows, setRows] = useState(initialState);
  const [nameFilter, setNameFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  const dropdownDefaultLabel = 'All countries';
  const listId = 'countryList';
  const countries = new Set(initialState.map((state: any) => {
    return state['country'];
  }).sort());

  const applyFilter = (rows: { name: string; country: string }[], name: string, country: string) => {
    let filteredRows = rows;
    if (name !== '') {
      filteredRows = filteredRows.filter((row: any) => toLower(row.name).includes(toLower(name)));
    }
    if (country !== '' && country !== dropdownDefaultLabel) {
      filteredRows = filteredRows.filter((row: any) => toLower(row.country).includes(toLower(country)));
    }
    return filteredRows;
  };

  const onFilterNameChange = (filter: string) => {
    setNameFilter(filter);
    setRows(applyFilter(initialState, filter, countryFilter));
  };

  const onFilterCountryChange = (filter: string) => {
    setCountryFilter(filter);
    setRows(applyFilter(initialState, nameFilter, filter));
  };

  return (
    <div>
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Name</NxTableCell>
            <NxTableCell>Country</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell isFilter>
              <NxFilterInput disabled={false}
                             placeholder="Type a name"
                             onChange={onFilterNameChange}
                             value={nameFilter}/>
            </NxTableCell>
            <NxTableCell isFilter>
              <NxFilterInput disabled={false}
                             placeholder="Select a country"
                             list={listId}
                             onChange={onFilterCountryChange}
                             value={countryFilter}/>
              <datalist id={listId}>
                {
                  Array.from(countries).map((country: string) => (
                    <option key={country} value={country} />
                  ))
                }
              </datalist>
            </NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          {rows.map((row: any) =>
            <NxTableRow key={row.name.concat(row.country)}>
              <NxTableCell>{row.name}</NxTableCell>
              <NxTableCell>{row.country}</NxTableCell>
            </NxTableRow>
          )}
        </NxTableBody>
      </NxTable>
    </div>
  );
};

export default NxTableFilterExample;
