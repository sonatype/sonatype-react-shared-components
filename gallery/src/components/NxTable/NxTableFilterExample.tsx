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
  const [filter, setFilter] = useState('');

  const getCountries = (list: { name: string; country: string }[]) => {
    return list.map((state: any) => {
      return state['country'];
    }).sort();
  };

  const dropdownDefaultLabel = 'Select a country';
  const allLabel = 'All';
  const countries = getCountries(initialState);
  const [optionsDropdown, setOptionsDropdown] = useState<Set<string>>(new Set(countries));
  const [filterDropdownLabel, setFilterDropdownLabel] = useState(dropdownDefaultLabel);
  const [filterDropdown, setFilterDropdown] = useState('');

  const applyFilter = (rows: { name: string; country: string }[], name: string, country: string) => {
    let filteredRows = rows;
    if (name !== '') {
      filteredRows = filteredRows.filter((row: any) => toLower(row.name).includes(toLower(name)));
    }
    if (country !== '' && country !== allLabel) {
      filteredRows = filteredRows.filter((row: any) => toLower(row.country).includes(toLower(country)));
    }
    return filteredRows;
  };

  const handleOptionsDropdown = (country: string) => {
    if (country === '') {
      setOptionsDropdown(new Set(countries));
    }
    else {
      const dropDownOptions = [allLabel].concat(countries.filter(c => c !== country));
      setOptionsDropdown(new Set(dropDownOptions));
    }
  };

  const onFilterChange = (filter: string) => {
    setFilter(filter);
    let filteredRows = applyFilter(initialState, filter, filterDropdown);
    setRows(filteredRows);
    handleOptionsDropdown(filterDropdown);
  };

  const onDropdownLinkChange = (filterDropdown: string) => {
    if (filterDropdown !== '') {
      if (allLabel === filterDropdown) {
        setRows(applyFilter(initialState, filter, ''));
        setFilterDropdown('');
        setFilterDropdownLabel(dropdownDefaultLabel);
        handleOptionsDropdown('');
      }
      else {
        setFilterDropdownLabel(filterDropdown);
        setFilterDropdown(filterDropdown);
        setRows(applyFilter(initialState, filter, filterDropdown));
        handleOptionsDropdown(filterDropdown);
      }
    }
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
            <NxTableCell isFilter
                         filterPlaceholder='Filter'
                         filter={filter}
                         onFilterChange={onFilterChange}>
            </NxTableCell>
            <NxTableCell isFilterDropdown
                         filterDropdownLabel={filterDropdownLabel}
                         filterDropdownOptions={optionsDropdown}
                         onDropdownLinkChange={onDropdownLinkChange}
                         >
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
