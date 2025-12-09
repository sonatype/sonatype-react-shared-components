/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, ComponentPropsWithRef } from 'react';
import PropTypes from 'prop-types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NxTableProps extends ComponentPropsWithRef<'table'> {
  caption?: string | null,
};

export const nxTablePropTypes: PropTypes.ValidationMap<NxTableProps> = {
  children: PropTypes.node
};

export type NxTableBodyProps = ComponentPropsWithRef<'tbody'> & {
  isLoading?: boolean | null;
  error?: string | null;
  emptyMessage?: ReactNode | null;
  retryHandler?: (() => void) | null;
};

export const nxTableBodyPropTypes: PropTypes.ValidationMap<NxTableBodyProps> = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  emptyMessage: PropTypes.node,
  retryHandler: PropTypes.func,
  children: PropTypes.node
};

export type NxTableCellProps = (ComponentPropsWithRef<'th'> | ComponentPropsWithRef<'td'>) & {
  metaInfo?: boolean | null;
  isNumeric?: boolean | null;
  isSortable?: boolean | null;
  isFilterHeader?: boolean | null;
  hasIcon?: boolean | null;
  chevron?: boolean | null;

  // NOTE: ideally this would be the wider IconProp type but that type is so complex that attempting to do much
  // of anything with it trips a limit in the TS compiler and fails. In practice we only really use IconDefinitions
  // anyway.
  rowBtnIcon?: IconDefinition | null;
  sortDir?: 'asc' | 'desc' | null;
};

export const nxTableCellPropTypes: PropTypes.ValidationMap<NxTableCellProps> = {
  metaInfo: PropTypes.bool,
  isNumeric: PropTypes.bool,
  isSortable: PropTypes.bool,
  isFilterHeader: PropTypes.bool,
  hasIcon: PropTypes.bool,
  chevron: PropTypes.bool,
  sortDir: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node
};

export type NxTableHeadProps = ComponentPropsWithRef<'thead'>;

export const nxTableHeadPropTypes: PropTypes.ValidationMap<NxTableHeadProps> = {
  children: PropTypes.node
};

export type NxTableRowProps = ComponentPropsWithRef<'tr'> & {
  isFilterHeader?: boolean | null;
  isClickable?: boolean | null;
  selected?: boolean | null;
  clickAccessibleLabel?: string | null;
};

export const nxTableRowPropTypes: PropTypes.ValidationMap<NxTableRowProps> = {
  isFilterHeader: PropTypes.bool,
  isClickable: PropTypes.bool,
  selected: PropTypes.bool,
  clickAccessibleLabel: PropTypes.string,
  children: PropTypes.node
};
