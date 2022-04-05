/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useMemo } from 'react';
import { filter, includes, map, partial, pipe, prop, toLower } from 'ramda';
import { faPlusCircle, faTimesCircle, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxButton from '../NxButton/NxButton';

import { Props, TransferListItemProps, propTypes } from './types';
import NxFieldset from '../NxFieldset/NxFieldset';

import './NxTransferListHalf.scss';
import NxTooltip from '../NxTooltip/NxTooltip';

export { Props };

function TransferListItem<T extends string | number = string>(props: TransferListItemProps<T>) {
  const {
    showReorderingButtons,
    checked,
    isFilteredItem = false,
    id,
    displayName,
    onChange: onChangeProp,
    onReorderItem,
    index,
    listLength
  } = props;

  function onChange(evt: FormEvent<HTMLInputElement>) {
    // NOTE: the `checked` property on the DOM node will have the new value, not the old
    onChangeProp(evt.currentTarget.checked, id);
  }

  const isTopItem = index === 0;
  const isBottomItem = index === (listLength - 1);

  const classes = classnames(
      'nx-transfer-list__item',
      {
        'nx-transfer-list__item--with-reordering': !!showReorderingButtons
      }
  );

  const moveUpButtonTitle = isTopItem || isFilteredItem ? 'Move Up (disabled)' : 'Move Up';
  const moveDownButtonTitle = isBottomItem || isFilteredItem ? 'Move Down (disabled)' : 'Move Down';

  return (
    <div className={classes}>
      <NxOverflowTooltip>
        <label className="nx-transfer-list__select">
          <NxFontAwesomeIcon icon={checked ? faTimesCircle : faPlusCircle} />
          <input className="nx-transfer-list__checkbox" type="checkbox" checked={checked} onChange={onChange} />
          <span>{displayName}</span>
        </label>
      </NxOverflowTooltip>
      { showReorderingButtons && (
        <NxTooltip title={isFilteredItem ? 'Reordering is disabled when filtered' : ''}>
          <div className="nx-btn-bar nx-transfer-list__button-bar">
            <NxButton type="button"
                      variant="icon-only"
                      title={moveUpButtonTitle}
                      disabled={isFilteredItem || isTopItem}
                      onClick={() => !isTopItem && onReorderItem && onReorderItem(index, -1)}>
              <NxFontAwesomeIcon icon={faArrowUp}/>
            </NxButton>
            <NxButton type="button"
                      variant="icon-only"
                      title={moveDownButtonTitle}
                      disabled={isFilteredItem || isBottomItem}
                      onClick={() => !isBottomItem && onReorderItem && onReorderItem(index, 1)}>
              <NxFontAwesomeIcon icon={faArrowDown}/>
            </NxButton>
          </div>
        </NxTooltip>
      ) }
    </div>
  );
}

/*
 * Used by NxTransferList and NxSearchTransferList, but also available on its own for more flexibility
 */
export default function NxTransferListHalf<T extends string | number = string>(props: Props<T>) {
  const {
        allowReordering,
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
              (i, index) => <TransferListItem<T> showReorderingButtons={allowReordering}
                                                 isFilteredItem={!!filterValue}
                                                 key={i.id}
                                                 checked={isSelected}
                                                 onChange={onItemChange}
                                                 onReorderItem={onReorderItem}
                                                 index={index}
                                                 listLength={visibleItems.length}
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

NxTransferListHalf.propTypes = propTypes;
