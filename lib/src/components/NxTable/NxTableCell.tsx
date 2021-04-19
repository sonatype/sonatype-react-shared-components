/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';
import { faSort, faSortDown, faSortUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {ensureElement} from '../../util/reactUtil';
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
        sortDir,
        className,
        children,
        ...attrs
      } = props,
      isHeader = useContext(HeaderContext),
      rowTextContent = useContext(RowContext),
      isSortable = isSortableProp && isHeader && !chevron;

  const classes = classnames('nx-cell', className, {
    'nx-cell--header': isHeader,
    'nx-cell--meta-info': metaInfo,
    'nx-cell--num': isNumeric,
    'nx-cell--icon': hasIcon,
    'nx-cell--chevron': chevron,
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

  const Tag = isHeader ? 'th' : 'td';
  const cellContents = chevron ?
    (isHeader ? null : (
      <button className="nx-cell__chevron-btn" aria-label={rowTextContent}>
        <NxFontAwesomeIcon icon={faChevronRight}/>
      </button>
    )) :
    (isSortable ? (
      <>
        {ensureElement(children)}
        <span className="nx-cell__sort-icons fa-layers">{maskedSort}</span>
      </>
    ) : children);

  const cellSortingContents = (
      <NxTooltip title={ariaLabel}>
        <button type="button" className="nx-cell__sort-btn">{cellContents}</button>
      </NxTooltip>
  );

  return (
    <Tag className={classes} aria-sort={ariaSort} {...attrs}>
      { isSortable ? cellSortingContents : cellContents }
    </Tag>
  );
};

NxTableCell.propTypes = nxTableCellPropTypes;

export default NxTableCell;
