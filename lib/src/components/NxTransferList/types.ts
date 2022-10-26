/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';
import { NxTransferListDataItem } from '../NxTransferListHalf/types';

export type FilterFn<T extends string | number = string> =
    (d: NxTransferListDataItem<T>[]) => NxTransferListDataItem<T>[];

export interface BaseStatefulProps<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: NxTransferListDataItem<T>[];
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: ((n: number) => string) | null;
  selectedItemsCountFormatter?: ((n: number) => string) | null;
  showMoveAll?: boolean | null;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

interface UnorderedStatefulProps<T extends string | number = string> extends BaseStatefulProps<T> {
  allowReordering?: false | null;
  selectedItems: Set<T>;
  onChange: (newSelected: Set<T>) => void;
}

interface OrderedStatefulProps<T extends string | number = string> extends BaseStatefulProps<T> {
  allowReordering: true;
  selectedItems: T[];
  onChange: (newSelected: T[]) => void;
}

export type StatefulProps<T extends string | number = string> = UnorderedStatefulProps<T> | OrderedStatefulProps<T>;

export type Props<T extends string | number = string> = StatefulProps<T> & {
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
};

// allowReordering, allItems, selectedItems
// are excluded in the propTypes due to clash with parametric Props;
export const propTypes = {
  availableItemsLabel: PropTypes.node,
  selectedItemsLabel: PropTypes.node,
  availableItemsCountFormatter: PropTypes.func,
  selectedItemsCountFormatter: PropTypes.func,
  showMoveAll: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  filterFn: PropTypes.func,
  availableItemsFilter: PropTypes.string.isRequired,
  selectedItemsFilter: PropTypes.string.isRequired,
  onAvailableItemsFilterChange: PropTypes.func,
  onSelectedItemsFilterChange: PropTypes.func
};
