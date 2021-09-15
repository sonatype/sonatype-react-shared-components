/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxStatefulTransferList } from '@sonatype/react-shared-components';
import { map, range } from 'ramda';

const items = map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));

export default function NxStatefulTransferListExample() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  return <NxStatefulTransferList allItems={items} selectedItems={selectedItems} onChange={setSelectedItems} />;
}
