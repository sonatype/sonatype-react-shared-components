/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { chain, groupBy, reject, without } from 'ramda';

import { Props, propTypes } from './types';
import NxTransferListHalf from '../NxTransferListHalf/NxTransferListHalf';
import DataItem from '../../util/DataItem';

import './NxTransferList.scss';

export { Props };

const defaultItemsCountFormatter = (kind: string) => (n: number) => `${n} item${n === 1 ? '' : 's'} ${kind}`,
    defaultAvailableItemsCountFormatter = defaultItemsCountFormatter('available'),
    defaultSelectedItemsCountFormatter = defaultItemsCountFormatter('transferred');

export default function NxTransferList<T extends string | number = string>(props: Props<T>) {
  const {
    allowReordering = false,
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

  if (allowReordering && !Array.isArray(selectedItems)) {
    throw new TypeError('selectedItems must be an array if allowReordering is true');
  }

  const selectedItemsArray = Array.from(selectedItems);
  const selectedItemsSet = selectedItems instanceof Set ? selectedItems as Set<T> : new Set(selectedItemsArray);

  const availableItemsCountFormatter = availableItemsCountFormatterProp || defaultAvailableItemsCountFormatter,
      selectedItemsCountFormatter = selectedItemsCountFormatterProp || defaultSelectedItemsCountFormatter;

  const groupedItems = useMemo(() => {
        const allItemsIdToItemLookUp = groupBy(item => item.id.toString(), allItems);
        return allowReordering
          ? {
            available: reject((item: DataItem<T>) => selectedItemsSet.has(item.id), allItems),
            selected: chain(item => allItemsIdToItemLookUp[item.toString()], selectedItemsArray)
          }
          : groupBy(item => selectedItemsSet.has(item.id) ? 'selected' : 'available', allItems);
      },
      [allItems, selectedItems, allowReordering]
      ),
      available = groupedItems.available || [],
      selected = groupedItems.selected || [];

  const availableCount = allItems.length - selectedItemsArray.length,
      selectedCount = selectedItemsArray.length;

  const handleOnChangeProp = (array: T[]) => {
    if (allowReordering) {
      (onChangeProp as (newSelected: T[]) => void)(array);
    }
    else {
      (onChangeProp as (newSelected: Set<T>) => void)(new Set(array));
    }
  };

  function onChange(checked: boolean, id: T) {
    const newSelectedItemsArray = checked
      ? [...selectedItemsArray, id]
      : without([id], selectedItemsArray);

    handleOnChangeProp(newSelectedItemsArray);
  }

  function onSelectAll(idsToAdd: T[]) {
    handleOnChangeProp([...selectedItemsArray, ...idsToAdd]);
  }

  function onUnselectAll(idsToRemove: T[]) {
    handleOnChangeProp(without(idsToRemove, selectedItemsArray));
  }

  function onReorderItem(index: number, direction: -1 | 1) {
    if (typeof selectedItemsArray[index + direction] === 'undefined') {
      return;
    }

    const newSelectedItems = [...selectedItemsArray];
    newSelectedItems[index] = selectedItemsArray[index + direction];
    newSelectedItems[index + direction] = selectedItemsArray[index];

    handleOnChangeProp(newSelectedItems);
  }

  return (
    <div className={classnames('nx-transfer-list', classNameProp)} { ...attrs }>
      <NxTransferListHalf<T> label={availableItemsLabel || 'Available Items'}
                             filterValue={availableItemsFilter}
                             onFilterChange={onAvailableItemsFilterChange}
                             showMoveAll={showMoveAll || false}
                             onMoveAll={onSelectAll}
                             isSelected={false}
                             items={available}
                             onItemChange={onChange}
                             onReorderItem={onReorderItem}
                             footerContent={availableItemsCountFormatter(availableCount)}
                             filterFn={filterFn}
                             allowReordering={false} />
      <NxTransferListHalf<T> label={selectedItemsLabel || 'Transferred Items'}
                             filterValue={selectedItemsFilter}
                             onFilterChange={onSelectedItemsFilterChange}
                             showMoveAll={showMoveAll || false}
                             onMoveAll={onUnselectAll}
                             isSelected={true}
                             items={selected}
                             onItemChange={onChange}
                             onReorderItem={onReorderItem}
                             footerContent={selectedItemsCountFormatter(selectedCount)}
                             filterFn={filterFn}
                             allowReordering={allowReordering} />
    </div>
  );
}

NxTransferList.propTypes = propTypes;
