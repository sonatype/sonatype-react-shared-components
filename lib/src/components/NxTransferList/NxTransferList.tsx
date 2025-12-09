/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import { chain, groupBy, indexOf, reject, uniq, without } from 'ramda';

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

  const selectedItemsArray = useMemo(
      () => selectedItems instanceof Array ? uniq(selectedItems) : Array.from(selectedItems),
      [selectedItems]
  );

  /*
   * Performance Hack: We need the memoized functions below (especially onChange and onReorderItem) to
   * remain stable as the selectedItems changes. This is because those functions get passed down into every
   * individual TransferListItem and we don't want them all to rerender every time a selection is made.
   * So to prevent those useCallbacks from having a dependency on selectedItemsArray, we additionally store the
   * selected items array in a ref which the handler functions can access without declaring it a dependency.
   * The ref must be kept in sync with selectedItemsArray manually.
   */
  const selectedItemsArrayRef = useRef(selectedItemsArray);
  useEffect(function() {
    selectedItemsArrayRef.current = selectedItemsArray;
  }, [selectedItemsArray]);

  const getSelectedItemsArray = () => selectedItemsArrayRef.current;

  const availableItemsCountFormatter = availableItemsCountFormatterProp || defaultAvailableItemsCountFormatter,
      selectedItemsCountFormatter = selectedItemsCountFormatterProp || defaultSelectedItemsCountFormatter;

  const { available = [], selected = [] } = useMemo(
      () => {
        const allItemsIdToItemLookUp = groupBy(item => item.id.toString(), allItems),
            selectedItemsSet = selectedItems instanceof Set ? selectedItems as Set<T> : new Set(selectedItems);

        return allowReordering
          ? {
            available: reject((item: DataItem<T>) => selectedItemsSet.has(item.id), allItems),
            selected: chain(item => allItemsIdToItemLookUp[item.toString()] ?? [], selectedItemsArray)
          }
          : groupBy(item => selectedItemsSet.has(item.id) ? 'selected' : 'available', allItems);
      },
      [allItems, selectedItems, allowReordering]
  );

  const selectedCount = selectedItemsArray.length,
      availableCount = allItems.length - selectedCount;

  const handleOnChangeProp = useCallback((array: T[]) => {
    if (allowReordering) {
      (onChangeProp as (newSelected: T[]) => void)(array);
    }
    else {
      (onChangeProp as (newSelected: Set<T>) => void)(new Set(array));
    }
  }, [allowReordering, onChangeProp]);

  const onChange = useCallback(function onChange(checked: boolean, id: T) {
    const selectedItemsArray = getSelectedItemsArray(),
        newSelectedItemsArray = checked
          ? [...selectedItemsArray, id]
          : without([id], selectedItemsArray);

    handleOnChangeProp(newSelectedItemsArray);
  }, [handleOnChangeProp]);

  const onSelectAll = useCallback(function onSelectAll(idsToAdd: T[]) {
    const selectedItemsArray = getSelectedItemsArray();

    handleOnChangeProp([...selectedItemsArray, ...idsToAdd]);
  }, [handleOnChangeProp]);

  const onUnselectAll = useCallback(function onUnselectAll(idsToRemove: T[]) {
    handleOnChangeProp(without(idsToRemove, getSelectedItemsArray()));
  }, [handleOnChangeProp]);

  const onReorderItem = useCallback(function onReorderItem(id: T, direction: -1 | 1) {
    const selectedItemsArray = getSelectedItemsArray(),
        index = indexOf(id, selectedItemsArray);

    if (typeof selectedItemsArray[index + direction] === 'undefined') {
      return;
    }

    const newSelectedItems = [...selectedItemsArray];
    newSelectedItems[index] = selectedItemsArray[index + direction];
    newSelectedItems[index + direction] = selectedItemsArray[index];

    handleOnChangeProp(newSelectedItems);
  }, [handleOnChangeProp]);

  return (
    <div role="group" className={classnames('nx-transfer-list', classNameProp)} { ...attrs }>
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
