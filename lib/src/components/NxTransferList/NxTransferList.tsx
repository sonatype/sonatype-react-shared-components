/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { toLower, filter, includes, groupBy, partial, identity, prop, pipe } from 'ramda';

import DataItem from '../../util/DataItem';
import { Props, FilterFn } from './types';

export { Props } from './types';

import './NxTransferList.scss';
import TransferListHalf from './TransferListHalf';

const defaultItemsCountFormatter = (kind: string) => (n: number) => `${n} item${n === 1 ? '' : 's'} ${kind}`,
    defaultAvailableItemsCountFormatter = defaultItemsCountFormatter('available'),
    defaultSelectedItemsCountFormatter = defaultItemsCountFormatter('transferred');

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

      // given filter text, returns a function which checks whether a displayName matches the filter.
      // This returned function will either be the provided `filterFn` (partially applied over the current filter text),
      // or a case-insensitive substring match
      mkDisplayNameFilter = (filterText: string) =>
        filterFn ? partial(filterFn, [filterText]) : pipe(toLower, includes(toLower(filterText))),

      // Given filter text, return a function that filters a list of items
      mkListFilter = (filterText: string) => filter<DataItem<T>>(
          pipe(prop('displayName'), mkDisplayNameFilter(filterText))
      ),

      // The functions to filter each group of inputs
      availableItemsFilterFn: FilterFn<T> = availableItemsFilter ? mkListFilter(availableItemsFilter) : identity,
      selectedItemsFilterFn: FilterFn<T> = selectedItemsFilter ? mkListFilter(selectedItemsFilter) : identity,

      // Do the actual filtering, but memoize it since it could be expensive
      visibleAvailableItems = useMemo(
          () => availableItemsFilterFn(groupedItems.available || []),
          [allItems, selectedItems, availableItemsFilter, filterFn]
      ),
      visibleSelectedItems = useMemo(
          () => selectedItemsFilterFn(groupedItems.selected || []),
          [allItems, selectedItems, selectedItemsFilter, filterFn]
      );

  const availableCount = allItems.length - selectedItems.size,
      selectedCount = selectedItems.size;

  function onChange(checked: boolean, id: T) {
    const newSelectedItems = new Set(selectedItems);

    newSelectedItems[checked ? 'add' : 'delete'](id);

    onChangeProp(newSelectedItems);
  }

  function onSelectAll() {
    const newSelectedItems = new Set<T>(selectedItems);
    for (const item of visibleAvailableItems) {
      newSelectedItems.add(item.id);
    }

    onChangeProp(newSelectedItems);
  }

  function onUnselectAll() {
    const newSelectedItems = new Set<T>(selectedItems);
    for (const item of visibleSelectedItems) {
      newSelectedItems.delete(item.id);
    }

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
                           items={visibleAvailableItems}
                           onItemChange={onChange}
                           footerContent={availableItemsCountFormatter(availableCount)} />
      <TransferListHalf<T> label={selectedItemsLabel || 'Transferred Items'}
                           filterValue={selectedItemsFilter}
                           onFilterChange={onSelectedItemsFilterChange}
                           showMoveAll={showMoveAll || false}
                           onMoveAll={onUnselectAll}
                           isSelected={true}
                           items={visibleSelectedItems}
                           onItemChange={onChange}
                           footerContent={selectedItemsCountFormatter(selectedCount)} />
    </div>
  );
}
