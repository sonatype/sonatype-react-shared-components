/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes, ReactNode } from 'react';
import DataItem from '../../util/DataItem';

export interface Props<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string;
  loading?: boolean | null;
  loadError?: ReactNode;
  matches: DataItem<T, string>[];
  onSearch: (s: string) => void;
  onChange: (s: string) => void;
  disabled?: boolean | null;
  emptyMessage?: ReactNode;
  autoComplete?: boolean | null;
  validatable?: boolean | null;
  isPristine?: boolean | null;
  trimmedValue?: string | null;
  validationErrors?: string | string[] | null;
}

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  loadError: PropTypes.node,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  emptyMessage: PropTypes.node,
  autoComplete: PropTypes.bool,
  validatable: PropTypes.bool,
  isPristine: PropTypes.bool,
  trimmedValue: PropTypes.string,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string])
};
