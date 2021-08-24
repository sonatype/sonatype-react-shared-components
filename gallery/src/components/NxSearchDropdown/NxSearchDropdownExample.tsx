/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { debounce } from 'debounce';
import { NxSearchDropdown, NxSearchDropdownMatch, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

const items = prepend({ id: '0', displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i.toString(), displayName: `Item ${i}` }), range(1, 101)));

// This function simulates a backend query that takes 2.5 seconds to return results. In a real implementation
// this would typically use window.fetch, axios, or a similar REST library rather than querying in-memory data,
// and typically this would be in another file outside of the react component
function search(query: string): Promise<NxSearchDropdownMatch[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);

  return new Promise(resolve => {
    setTimeout(() => resolve(matchingItems), 2500);
  });
}

export default function NxSearchDropdownExample() {
  const [matches, setMatches] = useState<NxSearchDropdownMatch[]>([]),
      [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      latestExecutedQueryRef = useRef<string | null>(null);

  function onSelect({ displayName }: NxSearchDropdownMatch) {
    alert('Selected ' + displayName);
    setQuery('');
  }

  // use debounce so that the backend query does not happen until the user has stopped typing for half a second
  const executeQuery = debounce(function executeQuery(query: string) {
    latestExecutedQueryRef.current = query;

    search(query).then(matches => {
      // ensure that results from stale or out-of-order queries do not display
      if (latestExecutedQueryRef.current === query) {
        setMatches(matches);
        setLoading(false);
      }
    });
  }, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME);

  function onChange(query: string) {
    setQuery(query);
    setLoading(true);

    executeQuery(query);
  }

  return (
    <NxSearchDropdown loading={loading}
                      matches={matches}
                      searchText={query}
                      onSearchTextChange={onChange}
                      onSelect={onSelect} />
  );
}
