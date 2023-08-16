/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, memo, useMemo } from 'react';
import { filter, includes, map, partial, pipe, prop, toLower } from 'ramda';
import { faPlusCircle, faTimesCircle, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import NxFilterInput from '../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxButton from '../NxButton/NxButton';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxFieldset from '../NxFieldset/NxFieldset';
import { textContent } from '../../util/childUtil';

import { Props, TransferListItemProps, NxTransferListDataItem, propTypes } from './types';

import './NxTransferListHalf.scss';
import { wrapTooltipProps } from '../../util/tooltipUtils';
import { useUniqueId } from '../../util/idUtil';

export { Props, NxTransferListDataItem };

function _TransferListItem<T extends string | number = string>(props: TransferListItemProps<T>) {
  const {
    showReorderingButtons,
    checked,
    isFilteredItem = false,
    id,
    displayName,
    onChange: onChangeProp,
    onReorderItem,
    isTopItem,
    isBottomItem,
    tooltip
  } = props;

  function onChange(evt: FormEvent<HTMLInputElement>) {
    // NOTE: the `checked` property on the DOM node will have the new value, not the old
    onChangeProp?.(evt.currentTarget.checked, id);
  }

  const classes = classnames('nx-transfer-list__item', {
    'nx-transfer-list__item--with-reordering': !!showReorderingButtons,
    'nx-transfer-list__item--movable': !!onChangeProp
  });

  const moveUpDisabled = isFilteredItem || isTopItem;
  const moveDownDisabled = isFilteredItem || isBottomItem;
  const moveUpButtonTitle = moveUpDisabled ? 'Move Up (disabled)' : 'Move Up';
  const moveDownButtonTitle = moveDownDisabled ? 'Move Down (disabled)' : 'Move Down';

  const tooltipProps = tooltip && wrapTooltipProps(tooltip),
      Tooltip = tooltipProps ? NxTooltip : NxOverflowTooltip;

  const displayNameId = useUniqueId('nx-transfer-list-item-name');

  return (
    <div role="group" aria-labelledby={displayNameId} className={classes}>
      <Tooltip { ...tooltipProps }>
        <label className="nx-transfer-list__select">
          { !!onChangeProp &&
            <>
              <NxFontAwesomeIcon icon={checked ? faTimesCircle : faPlusCircle} />
              <input className="nx-transfer-list__checkbox" type="checkbox" checked={checked} onChange={onChange} />
            </>
          }
          <span id={displayNameId} className="nx-transfer-list__display-name">{displayName}</span>
        </label>
      </Tooltip>
      { showReorderingButtons && (
        <NxTooltip title={isFilteredItem ? 'Reordering is disabled when filtered' : ''}>
          <div className="nx-btn-bar nx-transfer-list__button-bar">
            <NxTooltip title={isFilteredItem ? '' : moveUpButtonTitle} placement="left">
              <NxButton type="button"
                        variant="icon-only"
                        className={moveUpDisabled ? 'disabled' : ''}
                        onClick={() => !moveUpDisabled && onReorderItem && onReorderItem(id, -1)}>
                <NxFontAwesomeIcon icon={faArrowUp}/>
              </NxButton>
            </NxTooltip>
            <NxTooltip title={isFilteredItem ? '' : moveDownButtonTitle} placement="right">
              <NxButton type="button"
                        variant="icon-only"
                        className={moveDownDisabled ? 'disabled' : ''}
                        onClick={() => !moveDownDisabled && onReorderItem && onReorderItem(id, 1)}>
                <NxFontAwesomeIcon icon={faArrowDown}/>
              </NxButton>
            </NxTooltip>
          </div>
        </NxTooltip>
      ) }
    </div>
  );
}

const TransferListItem = memo(_TransferListItem) as typeof _TransferListItem;

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
        isSelected: isSelectedProp,
        items,
        onItemChange,
        onReorderItem,
        footerContent,
        filterFn: filterFnProp
      } = props,
      isSelected = isSelectedProp ?? true,
      defaultFilterFn = pipe(toLower, includes(toLower(filterValue))),
      filterFn = filterFnProp ? partial(filterFnProp, [filterValue]) : defaultFilterFn,
      visibleItems = useMemo(
          () => filterValue ?
            filter(pipe(prop('displayName'), textContent, filterFn), items) :
            items,
          [filterFn, items, filterValue]
      );

  function onMoveAllClick() {
    const idsToMove = map(prop('id'), visibleItems);

    onMoveAll?.(idsToMove);
  }

  return (
    <NxFieldset className="nx-transfer-list__half" label={label}>
      <div className="nx-transfer-list__control-box">
        <NxFilterInput className="nx-transfer-list__filter"
                       placeholder="Filter"
                       inputAttributes={{ 'aria-label': 'Filter' }}
                       value={filterValue}
                       onChange={onFilterChange} />
        { showMoveAll &&
          <button type="button" className="nx-transfer-list__move-all" onClick={onMoveAllClick}>
            <NxFontAwesomeIcon icon={isSelected ? faTimesCircle : faPlusCircle} />
            <span>{isSelected ? 'Remove' : 'Transfer'} All</span>
          </button>
        }
        {/* Add the tabIndex here to meet the a11y requirement that scrollable region must have keyboard access */}
        <div className="nx-transfer-list__item-list" tabIndex={onItemChange || allowReordering ? undefined : 0}>
          { visibleItems.map(
              (i, index) => <TransferListItem<T> showReorderingButtons={allowReordering}
                                                 isFilteredItem={!!filterValue}
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

NxTransferListHalf.propTypes = propTypes;
