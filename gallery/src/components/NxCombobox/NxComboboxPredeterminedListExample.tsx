/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
// import { useDebounceCallback } from '@react-hook/debounce';
import { NxCombobox, DataItem, NxFontAwesomeIcon, NxFormGroup }
  from '@sonatype/react-shared-components';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const array:string[] = ['Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut',
'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Kansas', 'Maryalnd', 'Michigan', 'Nevada',
'New York', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming'];

const items: DataItem<number>[] = prepend(
    {
      id: 0,
      displayName: <><NxFontAwesomeIcon icon={faArrowsAltH} /><span>Loooooooooooooooooooooooooong Name</span></>
    },
    map<number, DataItem<number>>(i => ({ id: i, displayName: array[i - 1] }), range(1, array.length + 1)));

function getDisplayNameString({ displayName }: DataItem<number>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return typeof displayName === 'string' ? displayName : (displayName as any).props.children[1].props.children;
}

function search(query: string):DataItem<number>[] {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => getDisplayNameString(i).toLowerCase().includes(lowercaseQuery), items);
  return matchingItems;
}

export default function NxComboboxPredeterminedListExample() {
  const [matches, setMatches] = useState<DataItem<number>[]>(items),
      [query, setQuery] = useState(''),
      latestExecutedQueryRef = useRef<string | null>(null);

  function onSelect(item: DataItem<number>) {
    setQuery(getDisplayNameString(item));
    setMatches([item]);
  }

  const executeQuery = useCallback(function executeQuery(query: string) {
    latestExecutedQueryRef.current = query;

    setMatches(search(query));
  }, [query]);

  function onSearchTextChange(query: string) {
    setQuery(query);
  }

  function onSearch(query: string) {
    query ? executeQuery(query) : setMatches([]);
  }

  return (
    <NxFormGroup label="Combobox" isRequired>
      <NxCombobox long
                  matches={matches}
                  searchText={query}
                  onSearchTextChange={onSearchTextChange}
                  onSearch={onSearch}
                  onSelect={onSelect} />
    </NxFormGroup>
  );
}
