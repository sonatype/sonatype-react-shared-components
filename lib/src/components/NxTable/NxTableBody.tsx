/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useRef, useState, useEffect, useCallback } from 'react';
import useMutationObserver from '@rooks/use-mutation-observer';

import { NxTableBodyProps, nxTableBodyPropTypes } from './types';
import NxTableRow from './NxTableRow';
import NxTableCell from './NxTableCell';
import { ColumnCountContext } from './contexts';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../NxLoadError/NxLoadError';
export { NxTableBodyProps };

const mutationObserverConfig = { subtree: false, childList: true, attributes: false, characterData: false };

const NxTableBody = function NxTableBody(props: NxTableBodyProps) {
  const {isLoading = false, emptyMessage, error, children, retryHandler, ...attrs} = props,
      columns = useContext(ColumnCountContext),
      [isEmpty, setIsEmpty] = useState(false),
      bodyRef = useRef<HTMLTableSectionElement>(null),
      emptyRowRef = useRef<HTMLTableRowElement>(null),

      // use useCallback to memoize updateIsEmpty so that useMutationObserver isn't detaching
      // and re-attaching the MutationObserver on every single render
      updateIsEmpty = useCallback(function updateIsEmpty() {
        debugger;
        if (bodyRef.current) {
          const rows = bodyRef.current.children;

          setIsEmpty(!rows.length || (rows.length === 1 && rows.item(0) === emptyRowRef.current));
        }
      }, []);

  useEffect(updateIsEmpty, []);
  useMutationObserver(bodyRef, updateIsEmpty, mutationObserverConfig);

  if (isLoading && !columns) {
    console.warn('columns is required when isLoading is set, this should have been determined automatically');
  }

  if (error && !columns) {
    console.warn('columns is required when error is set, this should have been determined automatically');
  }

  if (isEmpty && !isLoading && !error) {
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
    <NxTableRow ref={emptyRowRef}>
      <NxTableCell metaInfo colSpan={columns || undefined}>{emptyMessage}</NxTableCell>
    </NxTableRow>
  );

  return (
    <tbody ref={bodyRef} {...attrs}>
      {isLoading && loadingSpinnerRow}
      {!!error && !isLoading && errorRow}
      {!isLoading && !error && children}
      {!(isLoading || error) && isEmpty && emptyMessageRow}
    </tbody>
  );
};

NxTableBody.propTypes = nxTableBodyPropTypes;

export default NxTableBody;
