/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { DataItem, NxTransferListHalf } from '@sonatype/react-shared-components';
import { reject, propEq } from 'ramda';

const initialItems: DataItem<number>[] = [
  // { id: 1, displayName: 'Item 1' }
];

export default function NxTransferListHalfExample() {
  const [items, setItems] = useState<DataItem<number>[]>(initialItems),
      [filter, setFilter] = useState('');

  function onItemChange(_: boolean, id: number) {
    setItems(reject(propEq(id, 'id'), items));
  }

  function addItem() {
    const newItem: DataItem<number> = { id: items.length + 1, displayName: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  }

  return <>
  <button onClick={addItem}>ADD</button>
  <NxTransferListHalf label="Example Items"
                             filterValue={filter}
                             onFilterChange={setFilter}
                             showMoveAll={false}
                             onMoveAll={() => {}}
                             items={items}
                             onItemChange={onItemChange}
                             footerContent={`${items.length} items`} />
  </>;
}
