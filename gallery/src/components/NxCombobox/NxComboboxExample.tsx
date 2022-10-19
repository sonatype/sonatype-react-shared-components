/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { useDebounceCallback } from '@react-hook/debounce';
import { NxCombobox, DataItem, NX_STANDARD_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101))
);

// This function simulates a backend query that takes 3 seconds to return results. In a real implementation
// this would typically use window.fetch, axios, or a similar REST library rather than querying in-memory data,
// and typically this would be in another file outside of the react component
function search(query: string): Promise<DataItem<number, string>[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().indexOf(lowercaseQuery) === 0, items);

  return new Promise(resolve => {
    setTimeout(() => resolve(matchingItems), 3000);
  });
}

export default function NxComboboxExample() {
  const [matches, setMatches] = useState<DataItem<number, string>[]>([]),
      [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      latestExecutedQueryRef = useRef<string | null>(null);

  // use debounce so that the backend query does not happen until the user has stopped typing for half a second
  const executeQuery = useDebounceCallback(useCallback(function executeQuery(query: string) {
    search(query).then(matches => {
      // ensure that results from stale or out-of-order queries do not display
      if (latestExecutedQueryRef.current === query) {
        setMatches(matches);
        setLoading(false);
      }
    });
  }, [matches, query]), NX_STANDARD_DEBOUNCE_TIME);

  function onChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    latestExecutedQueryRef.current = query;

    if (query === '') {
      setMatches([]);
    }
    else {
      setLoading(true);
      executeQuery(query);
    }
  }

  return (
    <NxCombobox loading={loading}
                autoComplete={true}
                matches={matches}
                value={query}
                onChange={onChange}
                onSearch={onSearch}
                aria-label="combobox" />
  );
}
