/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ComponentPropsWithRef, ReactNode } from 'react';
import DataItem from '../../util/DataItem';

/*
 * For backwards compatibility. Props originally had a type parameter that was passed to DataItem as its
 * first type parameter (e.g. a subtype of `string | number`). When itemTooltip was added however, we now
 * needed a type parameter for a subtype of the entire DataItem, a case which subsumes the old type parameter.
 * To avoid needlessly having two type parameters, which tended to cause typescript to require callers to explicity
 * specify the types when in the past they didn't need to, we use this conditional type to support both the new
 * way and the old way with a single type parameter.
 */

export type DataItemType<T extends string | number | DataItem<string | number, string>> =
  T extends string | number ? DataItem<T, string> : T;

type FilterInputType = boolean | 'search';

export interface Props<T extends string | number | DataItem<string | number, string> = string>
  extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  value: string;
  loading?: boolean | null;
  loadError?: ReactNode;
  matches: DataItemType<T>[];
  onSearch: (s: string) => void;
  onChange: (s: string, item?: DataItemType<T>) => void;
  itemTooltip?: ((item: DataItemType<T>) => ReactNode) | null;
  disabled?: boolean | null;
  emptyMessage?: ReactNode;
  autoComplete?: boolean | null;
  validatable?: boolean | null;
  isPristine?: boolean | null;
  validationErrors?: string | string[] | null;
  filterInput?: FilterInputType | null;
}

export const propTypes: PropTypes.ValidationMap<Props<DataItem<string | number, string>>> = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  loadError: PropTypes.node,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  itemTooltip: PropTypes.func,
  disabled: PropTypes.bool,
  emptyMessage: PropTypes.node,
  autoComplete: PropTypes.bool,
  validatable: PropTypes.bool,
  isPristine: PropTypes.bool,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string]),
  filterInput: PropTypes.oneOf([true, false, 'search'])
};
