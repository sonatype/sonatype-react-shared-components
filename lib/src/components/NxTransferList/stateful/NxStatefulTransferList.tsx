/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { StatefulProps } from '../types';
import NxTransferList from '../NxTransferList';

export { StatefulProps as Props };

export default function NxStatefulTransferList
<T extends string | number = string, P extends Set<T> | T[] = Set<T>>(props: StatefulProps<T, P>) {
  const [availableItemsFilter, setAvailableItemsFilter] = useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = useState('');

  const { onChange, ...rest } = props;
  return <NxTransferList<T, P> onAvailableItemsFilterChange={setAvailableItemsFilter}
                               onSelectedItemsFilterChange={setSelectedItemsFilter}
                               { ...{ availableItemsFilter, selectedItemsFilter } }
                               { ...rest }
                               onChange={onChange} />;
}
