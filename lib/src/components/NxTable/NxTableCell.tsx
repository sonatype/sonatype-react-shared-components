/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';
import { faSort, faSortDown, faSortUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {ensureStartEndElements} from '../../util/reactUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { NxTableCellProps, nxTableCellPropTypes } from './types';
import { HeaderContext, RowContext } from './contexts';
import NxTooltip from '../NxTooltip/NxTooltip';
import { textContent } from '../../util/childUtil';
export { NxTableCellProps };

const NxTableCell = function NxTableCell(props: NxTableCellProps) {
  const {
        metaInfo = false,
        isNumeric = false,
        isSortable: isSortableProp = false,
        hasIcon = false,
        chevron = false,
        rowBtnIcon: rowBtnIconProp,
        sortDir,
        className,
        children,
        ...attrs
      } = props,
      isHeader = useContext(HeaderContext),
      { label: rowLabel, isFilterHeader } = useContext(RowContext),
      rowBtnIcon = rowBtnIconProp || (chevron ? faChevronRight : null),
      isSortable = isSortableProp && isHeader && !chevron;

  const classes = classnames('nx-cell', className, {
    'nx-cell--header': isHeader,
    'nx-cell--meta-info': metaInfo,
    'nx-cell--num': isNumeric,
    'nx-cell--icon': hasIcon,
    'nx-cell--row-btn': rowBtnIcon,
    'nx-cell--sortable': isSortable
  });

  let maskedSort;
  let ariaSort: 'ascending' | 'descending' | 'none' | undefined;
  let ariaLabel;
  if (isSortable) {
    const text = textContent(children);
    if (sortDir === 'asc') {
      ariaSort = 'ascending';
      ariaLabel = `${text} ${ariaSort}`;
      maskedSort = (
        <>
          <NxFontAwesomeIcon icon={faSortDown} />
          <NxFontAwesomeIcon icon={faSortUp} />
        </>
      );
    }
    else if (sortDir === 'desc') {
      ariaSort = 'descending';
      ariaLabel = `${text} ${ariaSort}`;
      maskedSort = (
        <>
          <NxFontAwesomeIcon icon={faSortUp} />
          <NxFontAwesomeIcon icon={faSortDown} />
        </>
      );
    }
    else {
      ariaSort = 'none';
      ariaLabel = `${text} unsorted`;
      maskedSort = <NxFontAwesomeIcon icon={faSort} />;
    }
  }

  const Tag = isHeader && !isFilterHeader ? 'th' : 'td';

  const rowBtnCellContents = isHeader || !rowBtnIcon ? null : (
    <button type="button" className="nx-cell__row-btn" aria-label={rowLabel}>
      <NxFontAwesomeIcon icon={rowBtnIcon}/>
    </button>
  );

  const cellSortingContents = (
    <NxTooltip title={ariaLabel} placement={isNumeric ? 'top-middle' : 'top'}>
      <button aria-label={ariaLabel} type="button" className="nx-cell__sort-btn">
        {ensureStartEndElements(children)}
        <span className="nx-cell__sort-icons fa-layers">{maskedSort}</span>
      </button>
    </NxTooltip>
  );

  return (
    <Tag className={classes} aria-sort={ariaSort} {...attrs}>
      {
        isSortable ? cellSortingContents :
        rowBtnIcon ? rowBtnCellContents :
        children
      }
      {isHeader && rowBtnIcon && <span className="nx-cell__row-btn-header-text">Select Row</span>}
    </Tag>
  );
};

NxTableCell.propTypes = nxTableCellPropTypes;

export default NxTableCell;
