/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
// import { groupBy } from 'ramda';

import { Props, propTypes } from './types';
import TransferListHalf from './TransferListHalf';
import DataItem from '../../util/DataItem';

import './NxTransferList.scss';

export { Props };

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

  const groupedItems = useMemo(() => {
        // console.log('memo');
        // return groupBy(item => selectedItems.includes(item.id) ? 'selected' : 'available', allItems);
        return {
          available: allItems.filter(item => !selectedItems.includes(item.id)),
          selected: selectedItems
              .map(item => allItems.find(_item => _item.id === item))
              .filter(item => typeof item !== 'undefined') as DataItem<T>[]
        };
      },
      [allItems, selectedItems]
      ),
      available = groupedItems.available || [],
      selected = groupedItems.selected || [];

  const availableCount = allItems.length - selectedItems.length,
      selectedCount = selectedItems.length;

  function onChange(checked: boolean, id: T) {
    onChangeProp(
        checked
          ? [...selectedItems, id]
          : selectedItems.filter(item => item !== id));
  }

  function onSelectAll(idsToAdd: T[]) {
    onChangeProp([...selectedItems, ...idsToAdd]);
  }

  function onUnselectAll(idsToRemove: T[]) {
    onChangeProp(selectedItems.filter(item => !idsToRemove.includes(item)));
  }

  function onReorderItem(id: T, direction: 1 | -1) {
    const itemIndex = selectedItems.findIndex(item => item === id);

    if (typeof selectedItems[itemIndex + direction] === 'undefined') {
      return;
    }

    const newSelectedItems = [...selectedItems];
    newSelectedItems[itemIndex] = selectedItems[itemIndex + direction];
    newSelectedItems[itemIndex + direction] = selectedItems[itemIndex];

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
                           onReorderItem={onReorderItem}
                           footerContent={availableItemsCountFormatter(availableCount)}
                           filterFn={filterFn}
                           showReorderingButtons={false} />
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
                           showReorderingButtons={true} />
    </div>
  );
}

NxTransferList.propTypes = propTypes;
