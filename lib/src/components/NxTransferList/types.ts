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
  allowReordering?: boolean | null;
}

// export interface StatefulProps<T extends string | number = string, P extends Set<T> | T[] = Set<T>>
//   extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
//   allItems: DataItem<T>[];
//   selectedItems: P;
//   availableItemsLabel?: ReactNode;
//   selectedItemsLabel?: ReactNode;
//   availableItemsCountFormatter?: ((n: number) => string) | null;
//   selectedItemsCountFormatter?: ((n: number) => string) | null;
//   showMoveAll?: boolean | null;
//   onChange: (newSelected: P) => void;
//   filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
//   allowReordering?: boolean | null;
// }

// export interface Props<T extends string | number = string, P extends Set<T> | T[] = Set<T>>
//   extends StatefulProps<T, P> {
//   availableItemsFilter: string;
//   selectedItemsFilter: string;
//   onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
//   onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
// }

export interface StatefulPropsBase<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: DataItem<T>[];
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: ((n: number) => string) | null;
  selectedItemsCountFormatter?: ((n: number) => string) | null;
  showMoveAll?: boolean | null;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
  allowReordering?: boolean | null;
}

export interface StatefulPropsWithoutReordering<T extends string | number> extends StatefulPropsBase<T> {
  selectedItems: Set<T>;
  onChange: (newSelected: Set<T>) => void;
  // allowReordering?: false | null;
}

export interface StatefulPropsWithReordering<T extends string | number> extends StatefulPropsBase<T> {
  selectedItems: T[];
  onChange: (newSelected: T[]) => void;
  // allowReordering: true;
}

export type StatefulProps<T extends string | number> =
StatefulPropsWithReordering<T> | StatefulPropsWithoutReordering<T>;

export interface PropsBase {
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
}

export type Props<T extends string | number> =
(StatefulPropsWithoutReordering<T> & PropsBase) | (StatefulPropsWithReordering<T> & PropsBase);

export const propTypes: ValidationMap<Props<string | number>> = {
  allowReordering: PropTypes.bool,
  allItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]).isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectedItems: PropTypes.oneOfType([
    PropTypes.instanceOf<Set<string | number>>(Set).isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ]).isRequired,
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
