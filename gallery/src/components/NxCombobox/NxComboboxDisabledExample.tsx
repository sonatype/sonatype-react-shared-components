/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxCombobox, DataItem, NxFormGroup }
  from '@sonatype/react-shared-components';

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101))
);

function search(query: string):DataItem<number>[] {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);
  return matchingItems;
}

export default function NxComboboxDisabledExample() {
  const [matches, setMatches] = useState<DataItem<number>[]>(items),
      [query, setQuery] = useState('foo');

  function onSelect(item: DataItem<number>) {
    if (typeof item.displayName === 'string') {
      setQuery(item.displayName);
    }
    setMatches([item]);
  }

  const executeQuery = useCallback(function executeQuery(query: string) {
    setMatches(search(query));
  }, [query]);

  function onSearchTextChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    query ? executeQuery(query) : setMatches([]);
  }

  return (
    <NxFormGroup label="Combobox">
      <NxCombobox disabled
                  short
                  matches={matches}
                  searchText={query}
                  onSearchTextChange={onSearchTextChange}
                  onSearch={onSearch}
                  onSelect={onSelect} />
    </NxFormGroup>
  );
}
