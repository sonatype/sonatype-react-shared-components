/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import { NxSearchDropdown, DataItem, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

export default function NxSearchDropdownLongErrorExample() {
  const [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      [error, setError] = useState<string | null>(null);

  function onSelect({ displayName }: DataItem) {
    alert('Selected ' + displayName);
  }

  // use debounce so that the backend query does not happen until the user has stopped typing for half a second
  const executeQuery = useDebounceCallback(useCallback(function executeQuery(query: string) {
    setError(`Error executing query ${query}`);
    setLoading(false);
  }, [error]), NX_SEARCH_DROPDOWN_DEBOUNCE_TIME);

  function onSearchTextChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    setError(null);

    if (query !== '') {
      setLoading(true);
      executeQuery(query);
    }
  }

  return (
    <NxSearchDropdown long
                      loading={loading}
                      error={error}
                      matches={[]}
                      searchText={query}
                      onSearchTextChange={onSearchTextChange}
                      onSearch={onSearch}
                      onSelect={onSelect} />
  );
}
