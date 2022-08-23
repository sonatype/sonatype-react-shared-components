/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';
import { HTMLAttributes, ReactNode } from 'react';
import { PublicProps as NxTextInputProps, propTypes as nxTextInputPropTypes } from '../NxTextInput/types';

import DataItem from '../../util/DataItem';

type InputProps = Omit<NxTextInputProps, 'type' | 'value' | 'isPristine' | 'readOnly'>;

export interface Props<T extends string | number = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  searchText: string;
  loading?: boolean | null;
  error?: ReactNode;
  matches: DataItem<T>[];
  onSelect: (m: DataItem<T>) => void;
  onSearch: (s: string) => void;
  onSearchTextChange: (s: string) => void;
  disabled?: boolean | null;
  emptyMessage?: ReactNode;
  autoComplete?: boolean | null;
  inputProps?: InputProps | null;
}

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  searchText: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.node,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    displayName: PropTypes.node.isRequired
  }).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  emptyMessage: PropTypes.node,
  autoComplete: PropTypes.bool,
  inputProps: PropTypes.shape(omit(['type', 'value', 'isPristine', 'readOnly'], nxTextInputPropTypes))
};
