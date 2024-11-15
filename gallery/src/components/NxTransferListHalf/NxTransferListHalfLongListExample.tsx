/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { DataItem, NxFontAwesomeIcon, NxTransferListHalf } from '@sonatype/react-shared-components';
import { map, range, prepend, reject, propEq } from 'ramda';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const initialItems: DataItem<number>[] = prepend(
    {
      id: 0,
      displayName: <><NxFontAwesomeIcon icon={faArrowsAltH} /><span>Loooooooooooooooooooooooooong Name</span></>
    },
    map<number, DataItem<number>>(i => ({ id: i, displayName: `Item ${i}` }), range(1, 10001))
);

export default function NxTransferListHalfLongListExample() {
  const [items, setItems] = useState<DataItem<number>[]>(initialItems),
      [filter, setFilter] = useState('');

  function onItemChange(_: boolean, id: number) {
    setItems(reject(propEq(id, 'id'), items));
  }

  return <NxTransferListHalf label="Example Items"
                             filterValue={filter}
                             onFilterChange={setFilter}
                             showMoveAll={false}
                             onMoveAll={() => {}}
                             items={items}
                             onItemChange={onItemChange}
                             footerContent={`${items.length} items`} />;
}
