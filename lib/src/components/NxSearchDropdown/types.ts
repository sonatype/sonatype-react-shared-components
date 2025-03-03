/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';
import { ReactNode, MouseEvent, ComponentPropsWithRef } from 'react';
import RequiredReactNode from '../../util/RequiredReactNode';

import DataItem from '../../util/DataItem';

export interface Props<T extends string | number = string> extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  searchText: string;
  onSearchTextChange: (s: string) => void;
  onSearch: (s: string) => void;
  loading?: boolean | null;
  error?: ReactNode;
  matches: DataItem<T>[];
  onSelect: (m: DataItem<T>, evt: MouseEvent<HTMLButtonElement>) => void;
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
    displayName: PropTypes.node.isRequired as PropTypes.Validator<RequiredReactNode>
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
