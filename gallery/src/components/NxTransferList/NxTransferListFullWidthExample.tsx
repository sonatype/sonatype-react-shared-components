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

export default function NxTransferListFullWidthExample() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set()),
      [availableItemsFilter, setAvailableItemsFilter] = useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = useState('');

  return <NxTransferList<number> className="nx-transfer-list--full-width"
                                 allItems={items}
                                 selectedItems={selectedItems}
                                 availableItemsFilter={availableItemsFilter}
                                 selectedItemsFilter={selectedItemsFilter}
                                 onAvailableItemsFilterChange={setAvailableItemsFilter}
                                 onSelectedItemsFilterChange={setSelectedItemsFilter}
                                 onChange={setSelectedItems} />;
}
