/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxTransferList } from '@sonatype/react-shared-components';
import { map, range } from 'ramda';

const items = map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));

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

const availableItemsCountFormatter = (n: number) => `${n} items you don't want`,
    selectedItemsCountFormatter = (n: number) => `${n} items you do want`;

export default function NxTransferListExample() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set()),
      [availableItemsFilter, setAvailableItemsFilter] = useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = useState('');

  return <NxTransferList allItems={items}
                         selectedItems={selectedItems}
                         availableItemsLabel="Unwanted"
                         selectedItemsLabel="Wanted"
                         availableItemsFilter={availableItemsFilter}
                         selectedItemsFilter={selectedItemsFilter}
                         availableItemsCountFormatter={availableItemsCountFormatter}
                         selectedItemsCountFormatter={selectedItemsCountFormatter}
                         onAvailableItemsFilterChange={setAvailableItemsFilter}
                         onSelectedItemsFilterChange={setSelectedItemsFilter}
                         onChange={setSelectedItems}
                         filterFn={regexpFilter}
                         showMoveAll />;
}
