/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes, Validator } from 'react';
import PropTypes, { ValidationMap } from 'prop-types';

import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';

export type FilterFn<T extends string | number = string> = (d: DataItem<T>[]) => DataItem<T>[];

export interface DataItem<T extends string | number = string> {
  id: T;
  displayName: string;
}

export interface TransferListItemProps<T extends string | number = string> extends DataItem<T> {
  checked: boolean;
  onChange: (checked: boolean, id: string | number) => void
}

export const transferListItemPropTypes: ValidationMap<TransferListItemProps<string | number>> = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]).isRequired,
  displayName: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export interface StatefulProps<T extends string | number = string>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  allItems: DataItem<T>[];
  selectedItems: Set<T>;
  availableItemsLabel?: ReactNode;
  selectedItemsLabel?: ReactNode;
  availableItemsCountFormatter?: (n: number) => string,
  selectedItemsCountFormatter?: (n: number) => string,
  showMoveAll?: boolean | null;
  onChange: (newSelected: Set<string | number>) => void;
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
  })).isRequired as Validator<DataItem<string | number>[]>,
  selectedItems: PropTypes.instanceOf(Set).isRequired as Validator<Set<string | number>>,
  availableItemsLabel: PropTypes.node,
  selectedItemsLabel: PropTypes.node,
  availableItemsCountFormatter: PropTypes.func as Validator<(n: number) => string>,
  selectedItemsCountFormatter: PropTypes.func as Validator<(n: number) => string>,
  showMoveAll: PropTypes.bool,
  onChange: PropTypes.func as Validator<(newSelected: Set<string | number>) => void>,
  filterFn: PropTypes.func,
  availableItemsFilter: PropTypes.string.isRequired,
  selectedItemsFilter: PropTypes.string.isRequired,
  onAvailableItemsFilterChange: PropTypes.func,
  onSelectedItemsFilterChange: PropTypes.func
};
