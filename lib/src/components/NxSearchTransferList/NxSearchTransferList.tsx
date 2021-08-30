/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import classnames from 'classnames';
import { equals, filter, includes, partial, pipe, prop, reject, toLower, without } from 'ramda';
import React from 'react';
import NxSearchDropdown from '../NxSearchDropdown/NxSearchDropdown';
import TransferListHalf from '../NxTransferList/TransferListHalf';

import { Props, propTypes } from './types';
export { Props };

const defaultAddedItemsCountFormatter = (n: number) => `${n} item${n === 1 ? '' : 's'} Added`;

export default function NxSearchTransferList<T extends string | number>(props: Props<T>) {
  const {
        className: classNameProp,
        searchText,
        onSearchTextChange,
        onSearch,
        loading,
        loadError,
        searchMatches,
        onSearchMatchSelect,
        addedItemsLabel,
        addedItemsFilter,
        onAddedItemsFilterChange,
        showRemoveAll,
        addedItems,
        onRemove,
        addedItemsCountFormatter: addedItemsCountFormatterProp,
        filterFn: filterFnProp,
        ...attrs
      } = props,
      addedCount = addedItems.length,
      defaultFilterFn = pipe(toLower, includes(toLower(addedItemsFilter))),
      filterFn = filterFnProp ? partial(filterFnProp, [addedItemsFilter]) : defaultFilterFn,
      visibleAddedItems = addedItemsFilter ? filter(pipe(prop('displayName'), filterFn), addedItems) : addedItems,
      addedItemsCountFormatter = addedItemsCountFormatterProp || defaultAddedItemsCountFormatter;

  function onRemoveAll() {
    const newAddedItems = without(visibleAddedItems, addedItems);
    onRemove(newAddedItems);
  }

  function onItemRemove(_: boolean, id: T) {
    onRemove(reject(pipe(prop('id'), equals(id)), addedItems));
  }

  return (
    <div className={classnames('nx-search-transfer-list', classNameProp)} { ...attrs }>
      <NxSearchDropdown searchText={searchText}
                        onSearchTextChange={onSearchTextChange}
                        onSearch={onSearch}
                        loading={loading}
                        error={loadError}
                        matches={searchMatches}
                        onSelect={onSearchMatchSelect} />
      <TransferListHalf<T> label={addedItemsLabel || 'Items Added'}
                           filterValue={addedItemsFilter}
                           onFilterChange={onAddedItemsFilterChange}
                           showMoveAll={showRemoveAll || false}
                           onMoveAll={onRemoveAll}
                           isSelected={true}
                           items={visibleAddedItems}
                           onItemChange={onItemRemove}
                           footerContent={addedItemsCountFormatter(addedCount)} />
    </div>
  );
}

NxSearchTransferList.propTypes = propTypes;
