/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useMemo } from 'react';
import { filter, includes, map, partial, pipe, prop, toLower } from 'ramda';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import { TransferListHalfProps as Props, TransferListItemProps } from './types';
import NxFieldset from '../NxFieldset/NxFieldset';

import './TransferListHalf.scss';

function TransferListItem<T extends string | number>(props: TransferListItemProps<T>) {
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

/*
 * RSC-internal component used by NxTransferList and NxSearchTransferList
 */
export default function TransferListHalf<T extends string | number = string>(props: Props<T>) {
  const {
        label,
        filterValue,
        onFilterChange,
        showMoveAll,
        onMoveAll,
        isSelected,
        items,
        onItemChange,
        footerContent,
        filterFn: filterFnProp
      } = props,
      defaultFilterFn = pipe(toLower, includes(toLower(filterValue))),
      filterFn = filterFnProp ? partial(filterFnProp, [filterValue]) : defaultFilterFn,
      visibleItems = useMemo(() => filterValue ? filter(pipe(prop('displayName'), filterFn), items) : items,
          [filterFn, items, filterValue]);

  function onMoveAllClick() {
    const idsToMove = new Set(map(prop('id'), visibleItems));

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
              i => <TransferListItem key={i.id} checked={isSelected} onChange={onItemChange} { ...i } />)
          }
        </div>
        <div className="nx-transfer-list__footer">
          {footerContent}
        </div>
      </div>
    </NxFieldset>
  );
}
