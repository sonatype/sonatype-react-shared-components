/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { groupBy } from 'ramda';

import DataItem from '../../util/DataItem';
import { Props, FilterFn } from './types';

export { Props } from './types';

import './NxTransferList.scss';
import TransferListHalf from './TransferListHalf';

const defaultItemsCountFormatter = (kind: string) => (n: number) => `${n} item${n === 1 ? '' : 's'} ${kind}`,
    defaultAvailableItemsCountFormatter = defaultItemsCountFormatter('available'),
    defaultSelectedItemsCountFormatter = defaultItemsCountFormatter('transferred');

import './NxTransferList.scss';

export { Props };

export default function NxTransferList<T extends string | number>(props: Props<T>) {
  const {
    allItems,
    selectedItems,
    availableItemsLabel,
    selectedItemsLabel,
    showMoveAll,
    availableItemsFilter,
    selectedItemsFilter,
    availableItemsCountFormatter: availableItemsCountFormatterProp,
    selectedItemsCountFormatter: selectedItemsCountFormatterProp,
    onAvailableItemsFilterChange,
    onSelectedItemsFilterChange,
    className: classNameProp,
    onChange: onChangeProp,
    filterFn,
    ...attrs
  } = props;

  const availableItemsCountFormatter = availableItemsCountFormatterProp || defaultAvailableItemsCountFormatter,
      selectedItemsCountFormatter = selectedItemsCountFormatterProp || defaultSelectedItemsCountFormatter;

  const groupedItems = useMemo(() => groupBy(item => selectedItems.has(item.id) ? 'selected' : 'available', allItems),
          [allItems, selectedItems]),
      available = groupedItems.available || [],
      selected = groupedItems.selected || [];

  const availableCount = allItems.length - selectedItems.size,
      selectedCount = selectedItems.size;

  function onChange(checked: boolean, id: T) {
    const newSelectedItems = new Set(selectedItems);

    newSelectedItems[checked ? 'add' : 'delete'](id);

    onChangeProp(newSelectedItems);
  }

  function onSelectAll(idsToAdd: Set<T>) {
    const newSelectedItems = new Set<T>(selectedItems);

    idsToAdd.forEach(id => { newSelectedItems.add(id); });

    onChangeProp(newSelectedItems);
  }

  function onUnselectAll(idsToRemove: Set<T>) {
    const newSelectedItems = new Set<T>(selectedItems);

    idsToRemove.forEach(id => { newSelectedItems.delete(id); });

    onChangeProp(newSelectedItems);
  }

  return (
    <div className={classnames('nx-transfer-list', classNameProp)} { ...attrs }>
      <TransferListHalf<T> label={availableItemsLabel || 'Available Items'}
                           filterValue={availableItemsFilter}
                           onFilterChange={onAvailableItemsFilterChange}
                           showMoveAll={showMoveAll || false}
                           onMoveAll={onSelectAll}
                           isSelected={false}
                           items={available}
                           onItemChange={onChange}
                           footerContent={availableItemsCountFormatter(availableCount)}
                           filterFn={filterFn} />
      <TransferListHalf<T> label={selectedItemsLabel || 'Transferred Items'}
                           filterValue={selectedItemsFilter}
                           onFilterChange={onSelectedItemsFilterChange}
                           showMoveAll={showMoveAll || false}
                           onMoveAll={onUnselectAll}
                           isSelected={true}
                           items={selected}
                           onItemChange={onChange}
                           footerContent={selectedItemsCountFormatter(selectedCount)}
                           filterFn={filterFn} />
    </div>
  );
}
