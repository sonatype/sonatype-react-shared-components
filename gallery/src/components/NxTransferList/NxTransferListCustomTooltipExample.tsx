/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { DataItem, NxFontAwesomeIcon, NxTransferList } from '@sonatype/react-shared-components';
import { map, range, flatten } from 'ramda';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

const items: DataItem<number>[] = flatten([
  {
    id: 0,
    displayName: <><NxFontAwesomeIcon icon={faArrowsAltH} /><span>Loooooooooooooooooooooooooong Name</span></>,
    tooltip: {
      title: <>A really long item with <br/> a really long tooltip full of <strong>complex</strong> HTML.</>,
      className: 'gallery-tooltip-example',
      placement: 'left'
    }
  },
  map<number, DataItem<number>>(
      i => ({
        id: i,
        displayName: `Item ${i}`,
        tooltip: `Item ${i}, the item after Item ${i - 1}`
      }),
      range(1, 101)
  ),
  {
    id: 200,
    displayName: <>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</>
    // NOTE: it is possible to mix items with tooltips and items without
  }
]);

export default function NxTransferListCustomTooltipExample() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set([12, 37, 98])),
      [availableItemsFilter, setAvailableItemsFilter] = useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = useState('');

  return <NxTransferList allItems={items}
                         selectedItems={selectedItems}
                         availableItemsFilter={availableItemsFilter}
                         selectedItemsFilter={selectedItemsFilter}
                         onAvailableItemsFilterChange={setAvailableItemsFilter}
                         onSelectedItemsFilterChange={setSelectedItemsFilter}
                         onChange={setSelectedItems} />;
}
