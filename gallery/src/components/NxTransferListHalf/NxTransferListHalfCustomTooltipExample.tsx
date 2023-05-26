/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { DataItem, NxFontAwesomeIcon, NxTransferListDataItem, NxTransferListHalf }
  from '@sonatype/react-shared-components';
import { map, range, prepend, reject, propEq } from 'ramda';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const initialItems: NxTransferListDataItem<number>[] = prepend(
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

export default function NxTransferListHalfCustomTooltipExample() {
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
