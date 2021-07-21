/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useMemo } from 'react';
import classnames from 'classnames';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Props, TransferListItemProps } from './types';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { into, compose, toLower, filter, includes, groupBy, map } from 'ramda';

export { Props, DataItem } from './types';

function TransferListItem<T extends string | number>(props: TransferListItemProps<T>) {
  const { checked, id, displayText, onChange: onChangeProp } = props;

  function onChange(evt: FormEvent<HTMLInputElement>) {
    onChangeProp(!evt.currentTarget.checked, id);
  }

  return (
    <label className="nx-transfer-list__item">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <NxFontAwesomeIcon icon={checked ? faTimesCircle : faPlusCircle} className="nx-transfer-list__selection-icon" />
      <span className="nx-transfer-list__item-text">{displayText}</span>
    </label>
  );
}

export default function NxTransferList<T extends string | number>(props: Props<T>) {
  const {
    label,
    allItems,
    selectedItems,
    availableItemsLabel,
    selectedItemsLabel,
    showMoveAll,
    availableItemsFilter,
    selectedItemsFilter,
    onAvailableItemsFilterChange,
    onSelectedItemsFilterChange,
    className: classNameProp,
    onChange: onChangeProp,
    ...attrs
  } = props;

  const groupedItems = useMemo(() => groupBy(item => selectedItems.has(item.id) ? 'selected' : 'available', allItems),
          [allItems, selectedItems]),
      availableItemsFilterLowercase = availableItemsFilter.toLowerCase(),
      selectedItemsFilterLowercase = selectedItemsFilter.toLowerCase(),
      availableItemsTransducer =
          compose<string[], string[], string[]>(map(toLower), filter(includes(availableItemsFilterLowercase))),
      selectedItemsTransducer =
          compose<string[], string[], string[]>(map(toLower), filter(includes(selectedItemsFilterLowercase))),
      visibleAvailableItems = into([], availableItemsTransducer, groupedItems.available),
      visibleSelectedItems = into([], selectedItemsTransducer, groupedItems.selected);

  const availableCount = allItems.length - selectedItems.size,
      selectedCount = selectedItems.size;

  function onChange(checked: boolean, id: T) {
    const newSelectedItems = new Set(selectedItems);

    newSelectedItems[checked ? 'add' : 'delete'](id);

    onChangeProp(newSelectedItems);
  }

  function onSelectAll() {
    const allIds = new Set<T>();
    for (const item of allItems) {
      allIds.add(item.id);
    }

    onChangeProp(allIds);
  }

  function onUnselectAll() {
    onChangeProp(new Set<T>());
  }

  return (
    <fieldset className={classnames('nx-transfer-list', classNameProp)} { ...attrs }>
      { label &&
        <legend className="nx-legend">
          <span className="nx-legend__text">{label}</span>
        </legend>
      }
      <div className="nx-transfer-list__half">
        <h6 className="nx-transfer-list__half-header">{availableItemsLabel}</h6>
        <div className="nx-transfer-list__control-box">
          <NxFilterInput value={availableItemsFilter} onChange={onAvailableItemsFilterChange} />
          { showMoveAll &&
            <button type="button" className="nx-transfer-list_move-all" onClick={onSelectAll}>
              <NxFontAwesomeIcon icon={faPlusCircle} className="nx-transfer-list__selection-icon" />
              Transfer All
            </button>
          }
          <div className="nx-transfer-list__item-list">
            { visibleAvailableItems.map(
                i => <TransferListItem key={i.id} checked={false} onChange={onChange} { ...i } />)
            }
          </div>
          <div className="nx-transfer-list__footer">
            {availableCount} items available
          </div>
        </div>
      </div>
      <div className="nx-transfer-list__half">
        <h6 className="nx-transfer-list__half-header">{selectedItemsLabel}</h6>
        <div className="nx-transfer-list__control-box">
          <NxFilterInput value={selectedItemsFilter} onChange={onSelectedItemsFilterChange} />
          { showMoveAll &&
            <button type="button" className="nx-transfer-list_move-all" onClick={onUnselectAll}>
              <NxFontAwesomeIcon icon={faTimesCircle} className="nx-transfer-list__selection-icon" />
              Remove All
            </button>
          }
          <div className="nx-transfer-list__item-list">
            { visibleSelectedItems.map(
                i => <TransferListItem key={i.id} checked={true} onChange={onChange} { ...i } />)
            }
          </div>
          <div className="nx-transfer-list__footer">
            {selectedCount} items transferred
          </div>
        </div>
      </div>
    </fieldset>
  );
}
