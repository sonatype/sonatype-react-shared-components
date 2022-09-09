/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxCombobox, DataItem }
  from '@sonatype/react-shared-components';

const states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming'];

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: states[i - 1] }), range(1, states.length + 1)));

function isEqualShallow(obj1: DataItem<number, string>[], obj2: DataItem<number, string>[]) {
  return Object.keys(obj1).length === Object.keys(obj2).length &&
  (Object.keys(obj1) as (keyof typeof obj1)[]).every(key=> obj1[key] === obj2[key]);
}

export default function NxComboboxPredeterminedListExample() {
  const [matches, setMatches] = useState<DataItem<number, string>[]>(items),
      [query, setQuery] = useState('');

  const executeQuery = useCallback(function executeQuery(query: string) {
    const lowercaseQuery = query.toLowerCase(),
        matchingItems = filter(i => i.displayName.toLowerCase().indexOf(lowercaseQuery) === 0, items);
    if (!isEqualShallow(matches, matchingItems)) {
      setMatches(matchingItems);
    }
  }, [query]);

  function onChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    if (query === '') {
      setMatches(items);
    }
    else {
      executeQuery(query);
    }
  }

  return (
    <NxCombobox className="nx-combobox--long"
                matches={matches}
                value={query}
                autoComplete={true}
                onChange={onChange}
                onSearch={onSearch}
                aria-label="state" />
  );
}
