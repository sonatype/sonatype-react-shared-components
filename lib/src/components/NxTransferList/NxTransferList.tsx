/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useMemo } from 'react';
import classnames from 'classnames';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { toLower, filter, includes, groupBy, partial, identity, prop, pipe } from 'ramda';

import { Props, propTypes, TransferListItemProps, DataItem, FilterFn } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxFieldset from '../NxFieldset/NxFieldset';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

export { Props, DataItem } from './types';

import './NxTransferList.scss';

function TransferListItem<T extends string | number = string>(props: TransferListItemProps<T>) {
  const { checked, id, displayName, onChange: onChangeProp } = props;

  function onChange(evt: FormEvent<HTMLInputElement>) {
    // NOTE: the `checked` property on the DOM node will have the new value, not the old
    onChangeProp(evt.currentTarget.checked, id);
  }

  return (
    <NxOverflowTooltip>
      <label className="nx-transfer-list__item">
        <NxFontAwesomeIcon icon={checked ? faTimesCircle : faPlusCircle} />
        <input className="nx-transfer-list__checkbox" type="checkbox" checked={checked} onChange={onChange} />
        <span>{displayName}</span>
      </label>
    </NxOverflowTooltip>
  );
}

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
      <NxFieldset className="nx-transfer-list__half" label={availableItemsLabel || 'Available Items'}>
        <div className="nx-transfer-list__control-box">
          <NxFilterInput className="nx-transfer-list__filter"
                         placeholder="Filter"
                         value={availableItemsFilter}
                         onChange={onAvailableItemsFilterChange} />
          { showMoveAll &&
            <button type="button" className="nx-transfer-list__move-all" onClick={onSelectAll}>
              <NxFontAwesomeIcon icon={faPlusCircle} />
              <span>Transfer All</span>
            </button>
          }
          <div className="nx-transfer-list__item-list">
            { visibleAvailableItems.map(
                i => <TransferListItem<T> key={i.id} checked={false} onChange={onChange} { ...i } />)
            }
          </div>
          <div className="nx-transfer-list__footer">
            {availableItemsCountFormatter(availableCount)}
          </div>
        </div>
      </NxFieldset>
      <NxFieldset className="nx-transfer-list__half" label={selectedItemsLabel || 'Transferred Items'}>
        <div className="nx-transfer-list__control-box">
          <NxFilterInput className="nx-transfer-list__filter"
                         placeholder="Filter"
                         value={selectedItemsFilter}
                         onChange={onSelectedItemsFilterChange} />
          { showMoveAll &&
            <button type="button" className="nx-transfer-list__move-all" onClick={onUnselectAll}>
              <NxFontAwesomeIcon icon={faTimesCircle} className="nx-transfer-list__selection-icon" />
              <span>Remove All</span>
            </button>
          }
          <div className="nx-transfer-list__item-list">
            { visibleSelectedItems.map(
                i => <TransferListItem key={i.id} checked={true} onChange={onChange} { ...i } />)
            }
          </div>
          <div className="nx-transfer-list__footer">
            {selectedItemsCountFormatter(selectedCount)}
          </div>
        </div>
      </NxFieldset>
    </div>
  );
}

NxTransferList.propTypes = propTypes;
