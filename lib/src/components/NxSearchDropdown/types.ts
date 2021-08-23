/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes, ReactNode } from 'react';

export interface Match {
  id: string;
  displayName: string;
}

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  searchText: string;
  onSearchTextChange: (s: string) => void;
  loading?: boolean | null;
  error?: ReactNode;
  matches: Match[];
  onSelect: (m: Match) => void;
  long?: boolean | null;
  disabled?: boolean | null;
  emptyMessage?: ReactNode;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  loading: PropTypes.bool,
  error: PropTypes.node,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  long: PropTypes.bool,
  disabled: PropTypes.bool,
  emptyMessage: PropTypes.node
};
