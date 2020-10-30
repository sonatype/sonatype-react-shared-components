/**
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { max, min, range, map, curryN } from 'ramda';

import { Props, propTypes } from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
export { Props, propTypes };

const PAGE_RANGE_SIZE = 5;

function validate(pageCount: number, currentPage: number | null | undefined) {
  if (pageCount < 0 || !Number.isInteger(pageCount)) {
    throw new TypeError(`pageCount must be a non-negative integer, was ${pageCount}`);
  }

  if (currentPage == null) {
    if (pageCount !== 0) {
      throw new TypeError(`currentPage must be defined when pageCount is not 0, was ${currentPage}`);
    }
  }
  else {
    if (pageCount === 0) {
      throw new TypeError(`currentPage must not be defined when pageCount is 0, was ${currentPage}`);
    }

    if (currentPage < 1 || currentPage > pageCount || !Number.isInteger(currentPage)) {
      throw new TypeError(`currentPage is out of bounds or not an integer: ${currentPage}`);
    }
  }
}

export default function NxPagination({ className, pageCount, currentPage, onChange }: Props) {
  validate(pageCount, currentPage);

  const classes = classnames('nx-btn-bar', 'nx-btn-bar--pagination', className);

  if (pageCount === 0 || currentPage == null) {
    return <div className={classes} />;
  }
  else {
    const onFirstPage = currentPage === 1,
        onLastPage = currentPage === pageCount,
        currentPageRangeStart = max(currentPage - ((currentPage - 1) % PAGE_RANGE_SIZE), 1),
        currentPageRangeEnd = min(currentPageRangeStart + (PAGE_RANGE_SIZE - 1), pageCount), // inclusive
        currentPageRange = range(currentPageRangeStart, currentPageRangeEnd + 1),
        numPagesBelowRange = currentPageRangeStart - 1,
        numPagesAboveRange = pageCount - currentPageRangeEnd,
        handleBtnClick = curryN(2, onChange),
        mkBtn = (num: number) => {
          const selected = num === currentPage,
              classes = classnames('nx-btn--pagination', { selected });

          return (
            <NxButton onClick={selected ? undefined : handleBtnClick(num)} key={num} className={classes}>
              {num}
            </NxButton>
          );
        };

    return (
      <div className={classes}>
        { !onFirstPage &&
          <NxButton onClick={handleBtnClick(currentPage - 1)} variant="tertiary">
            <NxFontAwesomeIcon icon={faCaretLeft} />
          </NxButton>
        }
        { !!numPagesBelowRange &&
          <NxButton className="nx-btn--pagination" onClick={handleBtnClick(1)}>1</NxButton>
        }
        { numPagesBelowRange > 1 &&
          <NxButton className="nx-btn--pagination" onClick={handleBtnClick(currentPageRangeStart - 1)}>
            …
          </NxButton>
        }
        { map(mkBtn, currentPageRange) }
        { numPagesAboveRange > 1 &&
          <NxButton className="nx-btn--pagination" onClick={handleBtnClick(currentPageRangeStart + PAGE_RANGE_SIZE)}>
            …
          </NxButton>
        }
        { !!numPagesAboveRange &&
          <NxButton className="nx-btn--pagination" onClick={handleBtnClick(pageCount)}>{pageCount}</NxButton>
        }
        { !onLastPage &&
          <NxButton onClick={handleBtnClick(currentPage + 1)} variant="tertiary">
            <NxFontAwesomeIcon icon={faCaretRight} />
          </NxButton>
        }
      </div>
    );
  }
}

NxPagination.propTypes = propTypes;
