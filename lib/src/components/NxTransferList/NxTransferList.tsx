/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { groupBy } from 'ramda';

import { StatefulProps, Props, propTypes } from './types';
import TransferListHalf from './TransferListHalf';
import DataItem from '../../util/DataItem';

import './NxTransferList.scss';

export { Props };

const defaultItemsCountFormatter = (kind: string) => (n: number) => `${n} item${n === 1 ? '' : 's'} ${kind}`,
    defaultAvailableItemsCountFormatter = defaultItemsCountFormatter('available'),
    defaultSelectedItemsCountFormatter = defaultItemsCountFormatter('transferred');

export default function NxTransferList<T extends string | number>(props: Props<T>) {
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

  const selectedItemsArray: T[] = selectedItems instanceof Set ? Array.from(selectedItems) : selectedItems;

  const availableItemsCountFormatter = availableItemsCountFormatterProp || defaultAvailableItemsCountFormatter,
      selectedItemsCountFormatter = selectedItemsCountFormatterProp || defaultSelectedItemsCountFormatter;

  const groupedItems = useMemo(() => {
        return allowReordering
          ? groupBy(item => selectedItemsArray.includes(item.id) ? 'selected' : 'available', allItems)
          : {
            available: allItems.filter(item => !selectedItemsArray.includes(item.id)),
            selected: selectedItemsArray
                .map(item => allItems.find(_item => _item.id === item))
                .filter(item => typeof item !== 'undefined') as DataItem<T>[]
          };
      },
      [allItems, selectedItems]
      ),
      available = groupedItems.available || [],
      selected = groupedItems.selected || [];

  const availableCount = allItems.length - selectedItemsArray.length,
      selectedCount = selectedItemsArray.length;

  function onChange(checked: boolean, id: T) {
    const newSelectedItemsArray = checked
      ? [...selectedItemsArray, id]
      : selectedItemsArray.filter(item => item !== id);

    const newSelectedItems = allowReordering ? newSelectedItemsArray : new Set(newSelectedItemsArray);

    onChangeProp(newSelectedItems);
  }

  function onSelectAll(idsToAdd: T[]) {
    const newSelectedItems = [...selectedItemsArray, ...idsToAdd];
    onChangeProp(allowReordering ? newSelectedItems : new Set(newSelectedItems));
  }

  function onUnselectAll(idsToRemove: T[]) {
    const newSelectedItems = selectedItemsArray.filter(item => !idsToRemove.includes(item));
    onChangeProp(allowReordering ? newSelectedItems : new Set(newSelectedItems));
  }

  function onReorderItem(id: T, direction: 1 | -1) {
    const itemIndex = selectedItemsArray.findIndex(item => item === id);

    if (typeof selectedItemsArray[itemIndex + direction] === 'undefined') {
      return;
    }

    const newSelectedItems = [...selectedItemsArray];
    newSelectedItems[itemIndex] = selectedItemsArray[itemIndex + direction];
    newSelectedItems[itemIndex + direction] = selectedItemsArray[itemIndex];

    onChangeProp(allowReordering ? newSelectedItems : new Set(newSelectedItems));
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

type OnChangeFunction = (a: Set<string | number> | (string | number)[]) => void;

export function NxStatefulTransferListA<T extends string | number, P extends Set<T> | T[]>(props: StatefulProps<T, P>) {
  const [availableItemsFilter, setAvailableItemsFilter] = React.useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = React.useState('');

  const { onChange, ...rest } = props;

  return <NxTransferList onAvailableItemsFilterChange={setAvailableItemsFilter}
                         onSelectedItemsFilterChange={setSelectedItemsFilter}
                         { ...{ availableItemsFilter, selectedItemsFilter } }
                         { ...rest }
                         onChange={onChange as OnChangeFunction} />;
}

const a: string & number = 24;

//eslint-disable-next-line
console.log(a);

