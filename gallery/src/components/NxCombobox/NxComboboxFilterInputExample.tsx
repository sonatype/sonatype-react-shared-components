/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxCombobox, DataItem } from '@sonatype/react-shared-components';

const states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming'];

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: states[i - 1] }), range(1, states.length + 1)));

function search(query: string):DataItem<number, string>[] {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().indexOf(lowercaseQuery) === 0, items);
  return matchingItems;
}

export default function NxComboboxFilterInputExample() {
  const [matches, setMatches] = useState<DataItem<number, string>[]>(items),
      [query, setQuery] = useState('');

  const onSearch = useCallback((query: string) => {
    setMatches(search(query));
  }, [query]);

  function onChange(query: string) {
    setQuery(query);
  }

  return (
    <NxCombobox filterInput={true}
                matches={matches}
                value={query}
                onChange={onChange}
                onSearch={onSearch}
                aria-label="filter" />
  );
}
