/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { DataItem, NxSearchTransferList, NX_STANDARD_DEBOUNCE_TIME } from '@sonatype/react-shared-components';
import { useDebounceCallback } from '@react-hook/debounce';

const items = prepend({ id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101)));

let firstQuery = true;

function search(query: string): Promise<DataItem<number>[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);

  return new Promise((resolve, reject) => {
    if (firstQuery) {
      setTimeout(() => resolve(matchingItems), 1000);
      firstQuery = false;
    }
    else {
      reject('This store cannot be queried more than once');
    }
  });
}

function regexpFilter(filterStr: string, itemDisplayName: string) {
  let regex;
  try {
    regex = new RegExp(filterStr);
  }
  catch {
    // string is not a valid regex, don't filter anything.
    return true;
  }

  return regex.test(itemDisplayName);
}

const addedItemsCountFormatter = (n: number) => `${n} items you've added`;

export default function NxSearchTransferListExample() {
  const [searchText, setSearchText] = useState(''),
      [loading, setLoading] = useState(false),
      [error, setError] = useState<string | null>(null),
      [searchMatches, setSearchMatches] = useState<DataItem<number>[]>([]),
      [addedItemsFilter, setAddedItemsFilter] = useState(''),
      [addedItems, setAddedItems] = useState<DataItem<number>[]>([]),
      latestExecutedQueryRef = useRef<string | null>(null),

      // use debounce so that the backend query does not happen until the user has stopped typing for half a second
      executeQuery = useDebounceCallback(function executeQuery(query: string) {
        latestExecutedQueryRef.current = query;

        search(query)
            .then(matches => {
              // ensure that results from stale or out-of-order queries do not display
              if (latestExecutedQueryRef.current === query) {
                setSearchMatches(matches);
                setLoading(false);
              }
            })
            .catch(err => {
              setError(err);
            });
      }, NX_STANDARD_DEBOUNCE_TIME);

  function doSearch(query: string) {
    setLoading(true);
    setError(null);
    executeQuery(query);
  }

  function selectMatch(match: DataItem<number>) {
    setAddedItems([...addedItems, match]);
    setSearchText('');
  }

  return <NxSearchTransferList { ...{ searchText, loading, searchMatches, addedItemsFilter, addedItems } }
                               loadError={error}
                               addedItemsLabel="Added Stuff"
                               showRemoveAll={true}
                               onSearchTextChange={setSearchText}
                               onSearch={doSearch}
                               onSearchMatchSelect={selectMatch}
                               onAddedItemsFilterChange={setAddedItemsFilter}
                               onRemove={setAddedItems}
                               addedItemsCountFormatter={addedItemsCountFormatter}
                               filterFn={regexpFilter} />;
}
