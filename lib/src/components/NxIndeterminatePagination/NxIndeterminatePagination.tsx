/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
export { Props, propTypes };

export default function NxIndeterminatePagination(props: Props) {
  const {
    className,
    onPrevPageSelect,
    onNextPageSelect,
    isFirstPage,
    isLastPage,
    ...attrs
  } = props;

  const classes = classnames('nx-btn-bar', 'nx-btn-bar--pagination', 'nx-btn-bar--indeterminate-pagination', className);

  return (
    <nav aria-label="pagination" className={classes} { ...attrs }>
      <NxButton type="button"
                aria-label="previous page"
                onClick={onPrevPageSelect}
                variant="tertiary"
                style={{ visibility: isFirstPage ? 'hidden' : 'visible' }}>
        <NxFontAwesomeIcon icon={faCaretLeft} size="lg" />
      </NxButton>
      <NxButton type="button"
                aria-label="next page"
                onClick={onNextPageSelect}
                variant="tertiary"
                style={{ visibility: isLastPage ? 'hidden' : 'visible' }}>
        <NxFontAwesomeIcon icon={faCaretRight} size="lg" />
      </NxButton>
    </nav>
  );
}

NxIndeterminatePagination.propTypes = propTypes;
