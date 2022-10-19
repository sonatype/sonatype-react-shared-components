/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { DataItem, NxStatefulSearchTransferList, NX_STANDARD_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';
import { useDebounceCallback } from '@react-hook/debounce';

const items = prepend({ id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101)));

function search(query: string): Promise<DataItem<number>[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);

  return new Promise(resolve => {
    setTimeout(() => resolve(matchingItems), 1000);
  });
}

export default function NxStatefulSearchTransferListExample() {
  const [loading, setLoading] = useState(false),
      [searchMatches, setSearchMatches] = useState<DataItem<number>[]>([]),
      [addedItems, setAddedItems] = useState<DataItem<number>[]>([]),
      latestExecutedQueryRef = useRef<string | null>(null),

      // use debounce so that the backend query does not happen until the user has stopped typing for half a second
      executeQuery = useDebounceCallback(function executeQuery(query: string) {
        latestExecutedQueryRef.current = query;

        search(query) .then(matches => {
          // ensure that results from stale or out-of-order queries do not display
          if (latestExecutedQueryRef.current === query) {
            setSearchMatches(matches);
            setLoading(false);
          }
        });
      }, NX_STANDARD_DEBOUNCE_TIME);

  function doSearch(query: string) {
    setLoading(true);
    executeQuery(query);
  }

  function selectMatch(match: DataItem<number>) {
    setAddedItems([...addedItems, match]);
  }

  return <NxStatefulSearchTransferList { ...{ loading, searchMatches, addedItems } }
                                       onSearch={doSearch}
                                       onSearchMatchSelect={selectMatch}
                                       onRemove={setAddedItems} />;
}
