/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { min, range, map, curryN } from 'ramda';

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

    if (currentPage < 0 || currentPage >= pageCount || !Number.isInteger(currentPage)) {
      throw new TypeError(`currentPage is out of bounds or not an integer: ${currentPage}`);
    }
  }
}

/**
 * @return the index of the first page in the current page range
 */
function getCurrentPageRangeStart(pageCount: number, currentPage: number) {
  // special case: we are on the last page which also happens to be the first
  // page of a new group/range. In this case we want to actually show the previous range, along with the
  // always-visible final page button
  if (currentPage && currentPage + 1 === pageCount && pageCount % PAGE_RANGE_SIZE === 1) {
    return currentPage - PAGE_RANGE_SIZE;
  }
  else {
    return currentPage - (currentPage % PAGE_RANGE_SIZE);
  }
}

const getBtnClasses = (selected: boolean = false) => classnames('nx-btn--pagination', { selected });

export default function NxPagination({ className, pageCount, currentPage, onChange, ...attrs }: Props) {
  validate(pageCount, currentPage);

  const classes = classnames('nx-btn-bar', 'nx-btn-bar--pagination', className);

  if (pageCount === 0 || currentPage == null) {
    return <div className={classes} />;
  }
  else {
    // Button click handler is the onChange prop just curried so we can pass the number ahead of time
    const handleBtnClick = curryN(2, onChange),

        onFirstPage = currentPage === 0,
        onLastPage = currentPage === pageCount - 1,
        currentPageRangeStart = getCurrentPageRangeStart(pageCount, currentPage),
        currentPageRangeEnd = min(currentPageRangeStart + PAGE_RANGE_SIZE, pageCount),
        currentPageRange = range(currentPageRangeStart, currentPageRangeEnd),
        numPagesBelowRange = currentPageRangeStart,
        numPagesAboveRange = pageCount - currentPageRangeEnd,

        mkBtn = (num: number) => {
          const selected = num === currentPage,
              classes = getBtnClasses(selected);

          let ariaLabel;
          if (num === 0) {
            ariaLabel = 'goto first page';
          }
          else if (num === pageCount - 1) {
            ariaLabel = 'goto last page';
          }
          else {
            ariaLabel = `goto page ${num + 1}`;
          }

          return (
            <NxButton onClick={selected ? undefined : handleBtnClick(num)}
                      tabIndex={0}
                      key={num}
                      className={classes}
                      aria-current={selected && 'page'}
                      aria-disabled={selected}
                      aria-label={ariaLabel}>
              {num + 1}
            </NxButton>
          );
        };

    return (
      <nav aria-label={`pagination, page ${currentPage + 1} of ${pageCount}`} className={classes} { ...attrs }>
        { !onFirstPage &&
          // Left arrow - back one page
          <NxButton aria-label="goto previous page"
                    tabIndex={0}
                    onClick={handleBtnClick(currentPage - 1)}
                    variant="tertiary">
            <NxFontAwesomeIcon icon={faCaretLeft} />
          </NxButton>
        }

        { !!numPagesBelowRange &&
          // First page express
          <NxButton aria-label="goto first page"
                    tabIndex={0}
                    className={getBtnClasses()}
                    onClick={handleBtnClick(0)}>
            1
          </NxButton>
        }

        { numPagesBelowRange > 1 &&
          // Left '...' - back one page group
          <NxButton aria-label={`goto page ${currentPageRangeStart}`}
                    tabIndex={0}
                    className={getBtnClasses()}
                    onClick={handleBtnClick(currentPageRangeStart - 1)}>
            …
          </NxButton>
        }

        { // The local group of pages
          map(mkBtn, currentPageRange)
        }

        { numPagesAboveRange > 1 &&
          // Rigth '...' - forward one page group
          <NxButton aria-label={`goto page ${currentPageRangeEnd + 1}`}
                    tabIndex={0}
                    className={getBtnClasses()}
                    onClick={handleBtnClick(currentPageRangeEnd)}>
            …
          </NxButton>
        }

        { !!numPagesAboveRange &&
          // Last page express
          <NxButton className={getBtnClasses(onLastPage)}
                    tabIndex={0}
                    onClick={handleBtnClick(pageCount - 1)}
                    aria-label="goto last page">
            {pageCount}
          </NxButton>
        }

        { !onLastPage &&
          // Right arrow - forward one page
          <NxButton aria-label="goto next page"
                    tabIndex={0}
                    onClick={handleBtnClick(currentPage + 1)}
                    variant="tertiary">
            <NxFontAwesomeIcon icon={faCaretRight} />
          </NxButton>
        }
      </nav>
    );
  }
}

NxPagination.propTypes = propTypes;
