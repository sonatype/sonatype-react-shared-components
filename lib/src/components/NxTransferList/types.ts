/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes } from 'react';
import PropTypes, { ValidationMap } from 'prop-types';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';
import DataItem from '../../util/DataItem';

export type FilterFn<T extends string | number = string> = (d: DataItem<T>[]) => DataItem<T>[];

type SelectionChangeHandler<T> = (checked: boolean, id: T) => void;

type ReorderSelectectedItemFunction<T> = (id: T, direction: 1 | -1) => void;

export interface TransferListItemProps<T extends string | number = string> extends DataItem<T> {
  checked: boolean;
  onChange: SelectionChangeHandler<T>;
  showReorderingButtons?: boolean | null;
  onReorderItem?: ReorderSelectectedItemFunction<T> | null;
  isTopItem: boolean;
  isBottomItem: boolean;
}

export interface TransferListHalfProps<T extends string | number = string> {
  label: Exclude<ReactNode, null | undefined>;
  filterValue: string;
  onFilterChange: NxFilterInputProps['onChange'];
  showMoveAll: boolean;
  onMoveAll: (toMove: T[]) => void;
  items: DataItem<T>[];
  isSelected: boolean;
  onItemChange: SelectionChangeHandler<T>;
  footerContent: ReactNode;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
  showReorderingButtons?: boolean | null;
  onReorderItem?: ReorderSelectectedItemFunction<T> | null;
}

export interface StatefulProps<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: DataItem<T>[];
  selectedItems: T[];
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: ((n: number) => string) | null,
  selectedItemsCountFormatter?: ((n: number) => string) | null,
  showMoveAll?: boolean | null;
  onChange: (newSelected: T[]) => void;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

export interface Props<T extends string | number = string> extends StatefulProps<T> {
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
}

export const propTypes: ValidationMap<Props<string | number>> = {
  allItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]).isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectedItems: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
      ]).isRequired).isRequired,
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
