/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { DataItem, NxTransferListHalf } from '@sonatype/react-shared-components';
import { map, range, prepend, reject, propEq } from 'ramda';

const initialItems: DataItem<number>[] = prepend({ id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101)));

function regexpFilter(filterStr: string, itemDisplayName: string) {
  let regex;
  try {
    regex = new RegExp(filterStr);
  }
  catch (e) {
    // string is not a valid regex, don't filter anything.
    return true;
  }

  return regex.test(itemDisplayName);
}

export default function NxTransferListHalfOrderingExample() {
  const [items, setItems] = useState<DataItem<number>[]>(initialItems),
      [filter, setFilter] = useState('');

  function onItemChange(_: boolean, id: number) {
    setItems(reject(propEq(id, 'id'), items));
  }

  function onReorderItem(id: number, direction: -1 | 1) {
    const index = items.findIndex(({ id: itemId }) => itemId === id),
        newItems = [...items],
        destIndex = index + direction,
        itemAtIndex = newItems[index],
        itemAtDest = newItems[destIndex];

    newItems[index] = itemAtDest;
    newItems[destIndex] = itemAtIndex;

    setItems(newItems);
  }

  return <NxTransferListHalf label="Example Items"
                             filterValue={filter}
                             onFilterChange={setFilter}
                             showMoveAll={true}
                             onMoveAll={() => setItems([])}
                             items={items}
                             isSelected={false}
                             onItemChange={onItemChange}
                             footerContent={`${items.length} items`}
                             filterFn={regexpFilter}
                             allowReordering={true}
                             onReorderItem={onReorderItem} />;
}
