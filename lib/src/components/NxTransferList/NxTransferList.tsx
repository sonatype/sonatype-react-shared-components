/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { groupBy } from 'ramda';

import { Props, propTypes } from './types';
import TransferListHalf from './TransferListHalf';
import DataItem from '../../util/DataItem';

import './NxTransferList.scss';

export { Props };

const defaultItemsCountFormatter = (kind: string) => (n: number) => `${n} item${n === 1 ? '' : 's'} ${kind}`,
    defaultAvailableItemsCountFormatter = defaultItemsCountFormatter('available'),
    defaultSelectedItemsCountFormatter = defaultItemsCountFormatter('transferred');

export default function NxTransferList <T extends string | number = string>(props: Props<T>) {
  const {
    allowReordering,
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

  const availableItemsCountFormatter = availableItemsCountFormatterProp || defaultAvailableItemsCountFormatter,
      selectedItemsCountFormatter = selectedItemsCountFormatterProp || defaultSelectedItemsCountFormatter;

  const groupedItems = useMemo(() =>
        allowReordering ? {
            available: allItems.filter(item => !selectedItemsArray.includes(item.id)),
            selected: selectedItemsArray
                .map(item => allItems.find(_item => _item.id === item))
                .filter(item => typeof item !== 'undefined') as DataItem<T>[]
         } : groupBy(item => selectedItemsArray.includes(item.id) ? 'selected' : 'available', allItems),
      [allItems, selectedItems]
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
      : selectedItemsArray.filter(item => item !== id);

    handleOnChangeProp(newSelectedItemsArray);
  }

  function onSelectAll(idsToAdd: T[]) {
    handleOnChangeProp([...selectedItemsArray, ...idsToAdd]);
  }

  function onUnselectAll(idsToRemove: T[]) {
    const newSelectedItems = selectedItemsArray.filter(item => !idsToRemove.includes(item));
    handleOnChangeProp(newSelectedItems);
  }

  function onReorderItem(id: T, direction: 1 | -1) {
    const itemIndex = selectedItemsArray.findIndex(item => item === id);

    if (typeof selectedItemsArray[itemIndex + direction] === 'undefined') {
      return;
    }

    const newSelectedItems = [...selectedItemsArray];
    newSelectedItems[itemIndex] = selectedItemsArray[itemIndex + direction];
    newSelectedItems[itemIndex + direction] = selectedItemsArray[itemIndex];

    handleOnChangeProp(newSelectedItems);
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
                           onReorderItem={onReorderItem}
                           footerContent={availableItemsCountFormatter(availableCount)}
                           filterFn={filterFn}
                           allowReordering={false} />
      <TransferListHalf<T> label={selectedItemsLabel || 'Transferred Items'}
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

NxTransferList.defaultValues = {
  allowReordering: false
};
