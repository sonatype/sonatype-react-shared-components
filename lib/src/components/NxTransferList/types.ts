/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { FieldsetHTMLAttributes, ReactNode } from 'react';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';

export interface DataItem<T extends string | number> {
  id: T;
  displayText: string;
}

export interface TransferListItemProps<T extends string | number> extends DataItem<T> {
  checked: boolean;
  onChange: (checked: boolean, id: T) => void
}

export interface Props<T extends string | number>
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'children' | 'onChange'> {
  label?: ReactNode;
  allItems: DataItem<T>[];
  selectedItems: Set<T>;
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  showMoveAll?: boolean | null;
  availableItemsFilter: string;
  selectedItemsFilter: string;
  onAvailableItemsFilterChange?: NxFilterInputProps['onChange'];
  onSelectedItemsFilterChange?: NxFilterInputProps['onChange'];
  onChange: (newSelected: Set<T>) => void;
}
