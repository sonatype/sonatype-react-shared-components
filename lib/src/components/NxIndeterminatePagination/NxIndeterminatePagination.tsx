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

export default function NxIndeterminatePagination({ className, onPrevPageSelect, onNextPageSelect, ...attrs }: Props) {
  const classes = classnames('nx-btn-bar', 'nx-btn-bar--pagination', className);

  return (
    <nav tabIndex={0} aria-label="pagination" className={classes} { ...attrs }>
      <NxButton aria-label="previous page" onClick={onPrevPageSelect} variant="tertiary">
        <NxFontAwesomeIcon icon={faCaretLeft} />
      </NxButton>
      <NxButton aria-label="next page" onClick={onNextPageSelect} variant="tertiary">
        <NxFontAwesomeIcon icon={faCaretRight} />
      </NxButton>
    </nav>
  );
}

NxIndeterminatePagination.propTypes = propTypes;
