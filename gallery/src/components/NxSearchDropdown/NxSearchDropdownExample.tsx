/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxSearchDropdown, NxSearchDropdownMatch } from '@sonatype/react-shared-components';

const items = prepend({ id: '0', displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i.toString(), displayName: `Item ${i}` }), range(1, 101)));

function search(query: string): Promise<NxSearchDropdownMatch[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);

  return new Promise(resolve => {
    // simulate a backend response that takes 2 seconds
    setTimeout(() => resolve(matchingItems), 2000);
  });
}

export default function NxSearchDropdownExample() {
  const [matches, setMatches] = useState<NxSearchDropdownMatch[]>([]),
      [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      pendingQueryRef = useRef<Record<string, never>>();

  function onSelect({ displayName }: NxSearchDropdownMatch) {
    alert('Selected ' + displayName);
  }

  function onChange(query: string) {
    setQuery(query);
    setLoading(true);

    // only used for reference equality
    const debounceId = {};

    pendingQueryRef.current = debounceId;
    setTimeout(() => {
      if (pendingQueryRef.current === debounceId) {
        search(query).then(matches => {
          if (pendingQueryRef.current === debounceId) {
            setMatches(matches);
            setLoading(false);
          }
        });
      }
    }, 500);
  }

  return (
    <NxSearchDropdown loading={loading} matches={matches} value={query} onChange={onChange} onSelect={onSelect} />
  );
}
