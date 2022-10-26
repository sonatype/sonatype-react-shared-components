
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { DataItem, NxFontAwesomeIcon, NxSearchTransferList, NxTransferListDataItem, NX_STANDARD_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';
import { useDebounceCallback } from '@react-hook/debounce';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const items: NxTransferListDataItem<number>[] = prepend(
    {
      id: 0,
      displayName: <><NxFontAwesomeIcon icon={faArrowsAltH} /><span>Loooooooooooooooooooooooooong Name</span></>,
      tooltip: {
        title: <>A really long item with <br/> a really long tooltip full of <strong>complex</strong> HTML.</>,
        className: 'gallery-tooltip-example',
        placement: 'left'
      }
    },
    map<number, NxTransferListDataItem<number>>(
        i => ({
          id: i,
          displayName: `Item ${i}`,
          tooltip: `Item ${i}, the item after Item ${i - 1}`
        }),
        range(1, 101)
    )
);

function getDisplayNameString({ displayName }: DataItem<number>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return typeof displayName === 'string' ? displayName : (displayName as any).props.children[1].props.children;
}

// This function simulates a backend query that takes 3 seconds to return results. In a real implementation
// this would typically use window.fetch, axios, or a similar REST library rather than querying in-memory data,
// and typically this would be in another file outside of the react component
function search(query: string): Promise<DataItem<number>[]> {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => getDisplayNameString(i).toLowerCase().includes(lowercaseQuery), items);

  return new Promise(resolve => {
    setTimeout(() => resolve(matchingItems), 3000);
  });
}

export default function NxSearchTransferListCustomTooltipExample() {
  const [searchText, setSearchText] = useState(''),
      [loading, setLoading] = useState(false),
      [searchMatches, setSearchMatches] = useState<DataItem<number>[]>([]),
      [addedItemsFilter, setAddedItemsFilter] = useState(''),
      [addedItems, setAddedItems] = useState<DataItem<number>[]>([]),
      latestExecutedQueryRef = useRef<string | null>(null),

      // use debounce so that the backend query does not happen until the user has stopped typing for half a second
      executeQuery = useDebounceCallback(function executeQuery(query: string) {
        latestExecutedQueryRef.current = query;

        search(query).then(matches => {
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
    setSearchText('');
  }

  return <NxSearchTransferList { ...{ searchText, loading, searchMatches, addedItemsFilter, addedItems } }
                               onSearchTextChange={setSearchText}
                               onSearch={doSearch}
                               onSearchMatchSelect={selectMatch}
                               onAddedItemsFilterChange={setAddedItemsFilter}
                               onRemove={setAddedItems} />;
}
