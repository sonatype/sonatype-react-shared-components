/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import {Props, propTypes} from './types';
import NxTableRow from '../NxTableRow/NxTableRow';
import NxTableCell from '../NxTableCell/NxTableCell';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
export {Props} from './types';

const NxTableBody = function NxTableBody(props: Props) {
  const {isLoading = false, error, columns, children, ...attrs} = props;

  if (isLoading && !columns) {
    console.warn('columns is required when isLoading is set, this should have been determined automatically');
  }

  if (error && !columns) {
    console.warn('columns is required when error is set, this should have been determined automatically');
  }

  const loadingSpinnerRow = (
    <NxTableRow>
      <NxTableCell isEmpty colSpan={columns || undefined}>
        <NxLoadingSpinner />
      </NxTableCell>
    </NxTableRow>
  );

  const errorRow = (
    <NxTableRow>
      <NxTableCell isError colSpan={columns || undefined}>
        <NxFontAwesomeIcon icon={faExclamationTriangle} fixedWidth/>
        {error}
      </NxTableCell>
    </NxTableRow>
  );

  return (
    <tbody {...attrs}>
      {isLoading && loadingSpinnerRow}
      {!!error && !isLoading && errorRow}
      {!isLoading && !error && children}
    </tbody>
  );
};

NxTableBody.propTypes = propTypes;

export default NxTableBody;
