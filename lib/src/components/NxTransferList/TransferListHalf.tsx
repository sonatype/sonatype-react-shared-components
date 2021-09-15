/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useMemo } from 'react';
import { filter, includes, map, partial, pipe, prop, toLower } from 'ramda';
import { faPlusCircle, faTimesCircle, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import { TransferListHalfProps as Props, TransferListItemProps } from './types';
import NxFieldset from '../NxFieldset/NxFieldset';

import './TransferListHalf.scss';

function TransferListItem<T extends string | number = string>(props: TransferListItemProps<T>) {
  const {
    showReorderingButtons,
    checked,
    id,
    displayName,
    onChange: onChangeProp,
    onReorderItem,
    isTopItem,
    isBottomItem,
  } = props;

  function onChange(evt: FormEvent<HTMLInputElement>) {
    // NOTE: the `checked` property on the DOM node will have the new value, not the old
    onChangeProp(evt.currentTarget.checked, id);
  }

  return (
    <NxOverflowTooltip>
      <div className="nx-transfer-list__item">
        <label className="nx-transfer-list__select">
          <NxFontAwesomeIcon icon={checked ? faTimesCircle : faPlusCircle} />
          <input className="nx-transfer-list__checkbox" type="checkbox" checked={checked} onChange={onChange} />
          <span>{displayName}</span>
        </label>
        { showReorderingButtons && (
          <div className="nx-transferlist__button-group">
            <button type="button"
                    className="nx-transfer-list__move-up"
                    disabled={isTopItem}
                    onClick={() => onReorderItem && onReorderItem(id, -1)}>
              <NxFontAwesomeIcon icon={faArrowUp} />
            </button>
            <button type="button"
                    className="nx-transfer-list__move-down"
                    disabled={isBottomItem}
                    onClick={() => onReorderItem && onReorderItem(id, 1)}>
              <NxFontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        ) }
      </div>
    </NxOverflowTooltip>
  );
}

/*
 * RSC-internal component used by NxTransferList and NxSearchTransferList
 */
export default function TransferListHalf<T extends string | number = string>(props: Props<T>) {
  const {
        showReorderingButtons,
        label,
        filterValue,
        onFilterChange,
        showMoveAll,
        onMoveAll,
        isSelected,
        items,
        onItemChange,
        onReorderItem,
        footerContent,
        filterFn: filterFnProp
      } = props,
      defaultFilterFn = pipe(toLower, includes(toLower(filterValue))),
      filterFn = filterFnProp ? partial(filterFnProp, [filterValue]) : defaultFilterFn,
      visibleItems = useMemo(() => filterValue ? filter(pipe(prop('displayName'), filterFn), items) : items,
          [filterFn, items, filterValue]);

  function onMoveAllClick() {
    const idsToMove = map(prop('id'), visibleItems);

    onMoveAll(idsToMove);
  }

  return (
    <NxFieldset className="nx-transfer-list__half" label={label}>
      <div className="nx-transfer-list__control-box">
        <NxFilterInput className="nx-transfer-list__filter"
                       placeholder="Filter"
                       value={filterValue}
                       onChange={onFilterChange} />
        { showMoveAll &&
          <button type="button" className="nx-transfer-list__move-all" onClick={onMoveAllClick}>
            <NxFontAwesomeIcon icon={isSelected ? faTimesCircle : faPlusCircle} />
            <span>{isSelected ? 'Remove' : 'Transfer'} All</span>
          </button>
        }
        <div className="nx-transfer-list__item-list">
          { visibleItems.map(
              (i, index) => <TransferListItem<T> showReorderingButtons={showReorderingButtons}
                                                 key={i.id}
                                                 checked={isSelected}
                                                 onChange={onItemChange}
                                                 onReorderItem={onReorderItem}
                                                 isTopItem={index === 0}
                                                 isBottomItem={index === visibleItems.length - 1}
                                                 { ...i } />)
          }
        </div>
        <div className="nx-transfer-list__footer">
          {footerContent}
        </div>
      </div>
    </NxFieldset>
  );
}
