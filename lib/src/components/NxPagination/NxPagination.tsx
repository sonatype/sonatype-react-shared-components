/**
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { max, min, range, map, curryN } from 'ramda';

import { ButtonProps, Props, propTypes } from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
export { Props, propTypes };

const PAGE_RANGE_SIZE = 5;

function NxPaginationButton({ selected, ...attrs }: ButtonProps) {
  const classes = classnames('nx-btn--pagination', { selected });

  return <NxButton className={classes} { ...attrs } />;
}

function validate(pageCount: number, currentPage: number) {
  if (pageCount < 0 || !Number.isInteger(pageCount)) {
    throw new TypeError(`pageCount must be a positive integer, was ${pageCount}`);
  }

  if (currentPage < 0 || currentPage > pageCount || !Number.isInteger(currentPage)) {
    throw new TypeError(`currentPage is out of bounds or not an integer: ${currentPage}`);
  }
}

export default function NxPagination({ className, pageCount, currentPage, onChange }: Props) {
  validate(pageCount, currentPage);

  const classes = classnames('nx-btn-bar', 'nx-btn-bar--pagination', className),
      onFirstPage = currentPage === 1,
      onLastPage = currentPage === pageCount,
      currentPageRangeStart = max(currentPage - (currentPage % PAGE_RANGE_SIZE), 1),
      currentPageRangeEnd = min(currentPageRangeStart + (PAGE_RANGE_SIZE - 1), pageCount), // inclusive
      currentPageRange = range(currentPageRangeStart, currentPageRangeEnd + 1),
      morePagesBelow = currentPageRangeStart > 1,
      morePagesAbove = pageCount > currentPageRangeEnd,
      handleBtnClick = curryN(2, onChange),
      mkBtn = (num: number) => {
        const selected = num === currentPage;

        return (
          <NxPaginationButton onClick={selected ? null : handleBtnClick(num)}
                              key={num}
                              selected={selected}>
            {num}
          </NxPaginationButton>
        );
      };

  return (
    <div className={classes}>
      { onFirstPage ||
        <NxButton onClick={handleBtnClick(currentPage - 1)} variant="tertiary">
          <NxFontAwesomeIcon icon={faCaretLeft} />
        </NxButton>
      }
      { morePagesBelow &&
        <>
          <NxPaginationButton onClick={handleBtnClick(1)}>1</NxPaginationButton>
          <NxPaginationButton onClick={handleBtnClick(currentPageRangeStart - PAGE_RANGE_SIZE)}>…</NxPaginationButton>
        </>
      }
      { map(mkBtn, currentPageRange) }
      { morePagesAbove &&
        <>
          <NxPaginationButton onClick={handleBtnClick(currentPageRangeStart + PAGE_RANGE_SIZE)}>…</NxPaginationButton>
          <NxPaginationButton onClick={handleBtnClick(pageCount)}>{pageCount}</NxPaginationButton>
        </>
      }
      { onLastPage ||
          <NxButton onClick={handleBtnClick(currentPage + 1)} variant="tertiary">
            <NxFontAwesomeIcon icon={faCaretRight} />
          </NxButton>
      }
    </div>
  );
}

NxPagination.propTypes = propTypes;
