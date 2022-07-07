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
    displayName: <><NxFontAwesomeIcon icon={faArrowsAltH} /><span>Loooooooooooooooooooooooooong Name</span></>
  },
  map<number, DataItem<number>>(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101)),
  {
    id: 200,
    displayName: <>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</>
  }
]);

export default function NxTransferListExample() {
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
