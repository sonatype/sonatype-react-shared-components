/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useRef, useState } from 'react';
import { filter, map, prepend, range, tail } from 'ramda';
import { useDebounceCallback } from '@react-hook/debounce';
import { NxSearchDropdown, DataItem, NX_STANDARD_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

const items = prepend({ id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101)));

function search(query: string): Promise<DataItem<number>[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);

  return new Promise(resolve => {
    // simulate a backend response that takes 2 seconds
    setTimeout(() => resolve(matchingItems), 2000);
  });
}

export default function NxSearchDropdownExample() {
  const [matches, setMatches] = useState<DataItem<number>[]>(tail(items)),
      [loading, setLoading] = useState(false),
      [query, setQuery] = useState('Item'),
      latestExecutedQueryRef = useRef<string | null>(null);

  function onSelect({ displayName }: DataItem<number>) {
    alert('Selected ' + displayName);
  }

  // use debounce so that the backend query does not happen until the user has stopped typing for half a second
  const executeQuery = useDebounceCallback(useCallback(function executeQuery(query: string) {
    latestExecutedQueryRef.current = query;

    search(query).then(matches => {
      // ensure that results from stale or out-of-order queries do not display
      if (latestExecutedQueryRef.current === query) {
        setMatches(matches);
        setLoading(false);
      }
    });
  }, [matches, query]), NX_STANDARD_DEBOUNCE_TIME);

  function onSearchTextChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    setLoading(true);
    executeQuery(query);
  }

  return (
    <NxSearchDropdown disabled
                      loading={loading}
                      matches={matches}
                      searchText={query}
                      onSearchTextChange={onSearchTextChange}
                      onSearch={onSearch}
                      onSelect={onSelect} />
  );
}
