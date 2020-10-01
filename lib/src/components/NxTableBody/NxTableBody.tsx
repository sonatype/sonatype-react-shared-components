/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {Props, propTypes} from './types';
import NxTableRow from '../NxTableRow/NxTableRow';
import NxTableCell from '../NxTableCell/NxTableCell';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../NxLoadError/NxLoadError';
export {Props} from './types';

const NxTableBody = function NxTableBody(props: Props) {
  const {isLoading = false, emptyMessage, error, columns, children, retryHandler, ...attrs} = props;

  if (isLoading && !columns) {
    console.warn('columns is required when isLoading is set, this should have been determined automatically');
  }

  if (error && !columns) {
    console.warn('columns is required when error is set, this should have been determined automatically');
  }

  if (!React.Children.count(children) && !isLoading && !error) {
    if (!emptyMessage) {
      console.warn('emptyMessage is required when no rows are to be rendered');
    }
    else if (!columns) {
      console.warn(
          'columns is required when emptyMessage is to be used, this should have been determined automatically');
    }
  }

  const loadingSpinnerRow = (
    <NxTableRow>
      <NxTableCell metaInfo colSpan={columns || undefined}>
        <NxLoadingSpinner />
      </NxTableCell>
    </NxTableRow>
  );

  const errorRow = (
    <NxTableRow>
      <NxTableCell metaInfo colSpan={columns || undefined}>
        <NxLoadError { ...{ error, retryHandler } } />
      </NxTableCell>
    </NxTableRow>
  );

  const emptyMessageRow = (
    <NxTableRow>
      <NxTableCell metaInfo colSpan={columns || undefined}>{emptyMessage}</NxTableCell>
    </NxTableRow>
  );

  return (
    <tbody {...attrs}>
      {isLoading && loadingSpinnerRow}
      {!!error && !isLoading && errorRow}
      {!isLoading && !error && children}
      {!(isLoading || error || children) && emptyMessageRow}
    </tbody>
  );
};

NxTableBody.propTypes = propTypes;

export default NxTableBody;
