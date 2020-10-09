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

  function getCountries(list: { name: string; country: string }[]) {
    return list.map((state: any) => {
      return state['country'];
    });
  }

  const dropdownDefaultLabel = 'Select a country';
  const countries = getCountries(initialState);
  const [optionsDropdown, setOptionsDropdown] = useState<Set<string>>(new Set(countries));
  const [filterDropdownLabel, setFilterDropdownLabel] = useState(dropdownDefaultLabel);

  const onFilterChange = (filter: string) => {
    setFilter(filter);
    if (filter !== '') {
      let filteredRows = rows.filter((row: any) => toLower(row.name).includes(toLower(filter)));
      setRows(filteredRows);
      setOptionsDropdown(new Set(getCountries(filteredRows)));
    }
    else {
      setRows(initialState);
      setOptionsDropdown(new Set(getCountries(initialState)));
    }
  };

  const onDropdownLinkChange = (filterDropdown: string) => {
    if (filterDropdown !== '') {
      if ('All' !== filterDropdown) {
        const filteredRows = rows.filter((row: any) => toLower(row.country).includes(toLower(filterDropdown)));
        const dropDownOptions = ['All'].concat(getCountries(filteredRows));
        setRows(filteredRows);
        setOptionsDropdown(new Set(dropDownOptions));
        setFilterDropdownLabel(filterDropdown);
      }
      else {
        setRows(initialState);
        setOptionsDropdown(new Set(countries));
        setFilter('');
        setFilterDropdownLabel(dropdownDefaultLabel);
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
                         filterPlaceholder="Filter"
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
