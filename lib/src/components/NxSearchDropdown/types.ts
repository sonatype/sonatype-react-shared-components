/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';
import { HTMLAttributes, ReactNode } from 'react';

export interface Match<T extends string | number = string> {
  id: T;
  displayName: string;
}

export interface Props<T extends string | number = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  searchText: string;
  onSearchTextChange: (s: string) => void;
  onSearch: (s: string) => void;
  loading?: boolean | null;
  error?: ReactNode;
  matches: Match<T>[];
  onSelect: (m: Match) => void;
  long?: boolean | null;
  disabled?: boolean | null;
  emptyMessage?: ReactNode;
}

export interface StatefulProps<T extends string | number = string>
  extends Omit<Props<T>, 'searchText' | 'onSearchTextChange'> {
  defaultSearchText?: string | null;
}

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  loading: PropTypes.bool,
  error: PropTypes.node,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  long: PropTypes.bool,
  disabled: PropTypes.bool,
  emptyMessage: PropTypes.node
};

export const statefulPropTypes: PropTypes.ValidationMap<StatefulProps<string | number>> = {
  ...omit(['searchText', 'onSearchTextChange'], propTypes),
  defaultSearchText: PropTypes.string
};
