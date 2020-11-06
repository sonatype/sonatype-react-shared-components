/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { TableHTMLAttributes, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type NxTableProps = TableHTMLAttributes<HTMLTableElement>;

export const nxTablePropTypes: PropTypes.ValidationMap<NxTableProps> = {
  children: PropTypes.node
};

export type NxTableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  isLoading?: boolean | null;
  error?: string | null;
  emptyMessage?: string | null;
  columns?: number | null;
  retryHandler?: (() => void) | null;
};

export const nxTableBodyPropTypes: PropTypes.ValidationMap<NxTableBodyProps> = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  columns: PropTypes.number,
  retryHandler: PropTypes.func,
  children: PropTypes.node
};

export type NxTableCellProps =
    (TdHTMLAttributes<HTMLTableCellElement> | ThHTMLAttributes<HTMLTableHeaderCellElement>) & {
      isHeader?: boolean | null;
      metaInfo?: boolean | null;
      isNumeric?: boolean | null;
      isSortable?: boolean | null;
      isFilterHeader?: boolean | null;
      hasIcon?: boolean | null;
      chevron?: boolean | null;
      sortDir?: 'asc' | 'desc' | null;
    };

export const nxTableCellPropTypes: PropTypes.ValidationMap<NxTableCellProps> = {
  isHeader: PropTypes.bool,
  metaInfo: PropTypes.bool,
  isNumeric: PropTypes.bool,
  isSortable: PropTypes.bool,
  isFilterHeader: PropTypes.bool,
  hasIcon: PropTypes.bool,
  chevron: PropTypes.bool,
  sortDir: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node
};

export type NxTableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const nxTableHeadePropTypes: PropTypes.ValidationMap<NxTableHeadProps> = {
  children: PropTypes.node
};

export type NxTableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  isHeader?: boolean | null;
  isFilterHeader?: boolean | null;
  isClickable?: boolean | null;
};

export const nxTableRowPropTypes: PropTypes.ValidationMap<NxTableRowProps> = {
  isHeader: PropTypes.bool,
  isFilterHeader: PropTypes.bool,
  isClickable: PropTypes.bool,
  children: PropTypes.node
};
