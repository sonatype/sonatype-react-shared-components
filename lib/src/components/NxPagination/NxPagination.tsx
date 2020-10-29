/**
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { ButtonProps, Props, propTypes } from './types';

const PAGE_RANGE_SIZE = 5;

function NxPaginationButton({ selected, ...attrs }: ButtonProps) {
  const classes = classnames('nx-btn--pagination', { selected });

  return <NxButton className={classes} { ...attrs } />;
}

function validate(pageCount, currentPage) {
  if (pageCount < 0 || !Number.isInteger(pageCount)) {
    throw new TypeError(`pageCount must be a positive integer, was ${pageCount}`);
  }

  if (currentPage < 0 || currentPage > pageCount || !Number.isInteger(currentPage)) {
    throw new TypeError(`currentPage is out of bounds or not an integer: ${currentPage}`);
  }
}

export function NxPagination({ className, pageCount, currentPage }: Props) {
  const classes = classname('nx-btn-bar', 'nx-btn-bar--pagination', className);

  validate(pageCount, currentPage);

  const morePagesBelow = currentPage > PAGE_RANGE_SIZE,
      morePagesAbove = (pageCount - currentPage) > PAGE_RANGE_SIZE,
      currentPageRangeStart = max(trunc(currentPage / PAGE_RANGE_SIZE) * PAGE_RANGE_SIZE, 1),
      currentPageRangeEnd = min(currentPageRangeStart, pageCount),
      currentPageRange = range(currentPageRangeStart, currentPageRangeEnd);

  return (
    <div className={classes}>
      { morePagesBelow &&
        <>
          <NxButton variant="tertiary"><NxFontAwesomeIcon icon={faCaretLeft} /></NxButton>
          <NxPaginationButton>1</NxPaginationButton>
          <NxPaginationButton>…</NxPaginationButton>
        </>
      }
      { map(num => <NxPaginationButton key={num}>{num}</NxPaginationButton>, currentPageRange) }
      { morePagesAbove &&
        <>
          <NxPaginationButton>…</NxPaginationButton>
          <NxPaginationButton>{pageCount}</NxPaginationButton>
          <NxButton variant="tertiary"><NxFontAwesomeIcon icon={faCaretRight} /></NxButton>
        </>
      }
    </div>
  );
}

NxPagination.propTypes = propTypes;
