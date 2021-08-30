/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes } from 'react';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';
import DataItem from '../../util/DataItem';

export type FilterFn<T extends string | number = string> = (d: DataItem<T>[]) => DataItem<T>[];

type SelectionChangeHandler<T> = (checked: boolean, id: T) => void;

export interface TransferListItemProps<T extends string | number = string> extends DataItem<T> {
  checked: boolean;
  onChange: SelectionChangeHandler<T>;
}

export interface TransferListHalfProps<T extends string | number = string> {
  label: Exclude<ReactNode, null | undefined>;
  filterValue: string;
  onFilterChange: NxFilterInputProps['onChange'];
  showMoveAll: boolean;
  onMoveAll: (toMove: Set<T>) => void;
  items: DataItem<T>[];
  isSelected: boolean;
  onItemChange: SelectionChangeHandler<T>;
  footerContent: ReactNode;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

export interface StatefulProps<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: DataItem<T>[];
  selectedItems: Set<T>;
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: (n: number) => string,
  selectedItemsCountFormatter?: (n: number) => string,
  showMoveAll?: boolean | null;
  onChange: (newSelected: Set<T>) => void;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

export interface Props<T extends string | number = string> extends StatefulProps<T> {
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange: NxFilterInputProps['onChange'];
}
